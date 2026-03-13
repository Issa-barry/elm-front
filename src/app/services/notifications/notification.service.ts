import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiNotification } from '@/models/notification.model';
import { RequestCacheService } from '@/services/request-cache.service';

/** Wrapper générique des réponses API Laravel */
interface ApiWrapper<T> {
  success: boolean;
  message?: string;
  data: T;
}

interface NotificationsResponse {
  notifications: ApiNotification[];
  unread_count: number;
}

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private readonly apiUrl = `${environment.apiUrl}/notifications`;
  private readonly notificationsTtlMs = 5_000;

  constructor(
    private http: HttpClient,
    private requestCache: RequestCacheService
  ) {}

  /** GET /api/v1/notifications?unread_only=true */
  getNotifications(unreadOnly = true, forceRefresh = false): Observable<NotificationsResponse> {
    const params = new HttpParams().set('unread_only', unreadOnly);
    const cacheKey = this.buildNotificationsCacheKey(unreadOnly);

    return this.requestCache
      .query(
        cacheKey,
        () =>
          this.http
            .get<ApiWrapper<NotificationsResponse>>(this.apiUrl, { params })
            .pipe(map(r => r.data)),
        { ttlMs: this.notificationsTtlMs, forceRefresh }
      )
      .pipe(catchError(err => throwError(() => err)));
  }

  /** POST /api/v1/notifications/{id}/read */
  markAsRead(id: string): Observable<{ unread_count: number }> {
    return this.http
      .post<ApiWrapper<{ unread_count: number }>>(`${this.apiUrl}/${id}/read`, {})
      .pipe(
        map(r => r.data),
        map((data) => {
          this.invalidateNotificationsCache();
          return data;
        }),
        catchError(err => throwError(() => err))
      );
  }

  /** POST /api/v1/notifications/read-all */
  markAllAsRead(): Observable<{ unread_count: number }> {
    return this.http
      .post<ApiWrapper<{ unread_count: number }>>(`${this.apiUrl}/read-all`, {})
      .pipe(
        map(r => r.data),
        map((data) => {
          this.invalidateNotificationsCache();
          return data;
        }),
        catchError(err => throwError(() => err))
      );
  }

  invalidateNotificationsCache(): void {
    this.requestCache.invalidateByPrefix('notifications:');
  }

  private buildNotificationsCacheKey(unreadOnly: boolean): string {
    return `notifications:unread_only=${unreadOnly ? '1' : '0'}`;
  }
}
