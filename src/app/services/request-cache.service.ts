import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, finalize, shareReplay, tap } from 'rxjs/operators';

export interface RequestCacheOptions {
    ttlMs?: number;
    forceRefresh?: boolean;
}

interface CacheEntry<T> {
    hasValue: boolean;
    value: T | undefined;
    expiresAt: number;
    inFlight$?: Observable<T>;
}

@Injectable({ providedIn: 'root' })
export class RequestCacheService {
    private readonly store = new Map<string, CacheEntry<unknown>>();
    private readonly defaultTtlMs = 30_000;

    query<T>(
        key: string,
        fetcher: () => Observable<T>,
        options: RequestCacheOptions = {}
    ): Observable<T> {
        const ttlMs = options.ttlMs ?? this.defaultTtlMs;
        const forceRefresh = !!options.forceRefresh;
        const now = Date.now();
        const existing = this.store.get(key) as CacheEntry<T> | undefined;

        if (!forceRefresh && existing?.hasValue && existing.expiresAt > now) {
            return of(existing.value as T);
        }

        if (existing?.inFlight$) {
            return existing.inFlight$;
        }

        let request$!: Observable<T>;
        request$ = fetcher().pipe(
            tap((value) => {
                this.store.set(key, {
                    hasValue: true,
                    value,
                    expiresAt: Date.now() + ttlMs,
                } as CacheEntry<unknown>);
            }),
            catchError((error) => {
                const current = this.store.get(key) as CacheEntry<T> | undefined;
                if (current?.hasValue && current.expiresAt > Date.now()) {
                    current.inFlight$ = undefined;
                    this.store.set(key, current as CacheEntry<unknown>);
                } else {
                    this.store.delete(key);
                }
                return throwError(() => error);
            }),
            finalize(() => {
                const current = this.store.get(key) as CacheEntry<T> | undefined;
                if (!current?.inFlight$) {
                    return;
                }
                current.inFlight$ = undefined;
                this.store.set(key, current as CacheEntry<unknown>);
            }),
            shareReplay({ bufferSize: 1, refCount: false }),
        );

        this.store.set(key, {
            hasValue: existing?.hasValue ?? false,
            value: existing?.value,
            expiresAt: existing?.expiresAt ?? 0,
            inFlight$: request$,
        } as CacheEntry<unknown>);

        return request$;
    }

    invalidate(key: string): void {
        this.store.delete(key);
    }

    invalidateByPrefix(prefix: string): void {
        for (const key of this.store.keys()) {
            if (key.startsWith(prefix)) {
                this.store.delete(key);
            }
        }
    }

    clear(): void {
        this.store.clear();
    }
}

