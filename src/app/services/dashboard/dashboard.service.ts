import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UsineContextService } from '@/services/usine/usine-context.service';
import { RequestCacheService, type RequestCacheOptions } from '@/services/request-cache.service';
import { DashboardPeriod } from '@/services/dashboard/dashboard-period.service';

export interface StatCard {
    value: number;
    delta_pct: number | null;
    trend: 'up' | 'down' | 'flat';
    sparkline: number[];
}

export interface VehiculeParType {
    type: string;
    label: string;
    count: number;
}

export type VentesParTypePeriod = DashboardPeriod;
export type VenteFactureStatus = 'impayee' | 'partiel' | 'payee' | 'annulee';
export type VentesEncaissementsPeriod = DashboardPeriod;
export type VentesEvolutionPeriod =
    | 'today'
    | 'yesterday'
    | 'this_week'
    | 'last_week'
    | 'this_month'
    | 'last_month'
    | 'this_year'
    | 'last_year'
    | 's1'
    | 's2'
    | 'q1'
    | 'q2'
    | 'q3'
    | 'q4';
export type VentesEvolutionStatutPeriod = VentesEvolutionPeriod | 'last_x_days';

export type VenteParType = {
    type_vehicule: string;
    label: string;
    statut_facture: VenteFactureStatus;
    ca_total: number;
    nb_commandes: number;
};

export type VenteParTypeResume = {
    type_vehicule: string;
    label: string;
    ca_total: number;
    nb_commandes: number;
};

export type StatutRow = {
    statut_facture: VenteFactureStatus;
    ca_total: number;
    nb_commandes: number;
};

export interface DashboardVentesParTypeData {
    period: { key: VentesParTypePeriod; from: string; to: string };
    lignes?: VenteParType[];
    par_type?: VenteParTypeResume[];
    par_statut?: StatutRow[];
}

export type EncaissementStat = {
    period: { key: string; from: string; to: string };
    total_factures: number;
    factures_payees: number;
    reste_a_encaisser: number;
    nb_factures_total: number;
    nb_factures_payees: number;
    nb_factures_impayees: number;
    nb_factures_annulees: number;
};

export type VentesEvolutionDataset = {
    type_vehicule: string;
    label: string;
    data: number[];
};

export interface DashboardVentesEvolutionData {
    period: { from: string; to: string; granularity: string };
    labels: string[];
    datasets: VentesEvolutionDataset[];
}

export interface DashboardVentesEvolutionStatutData {
    period: { key: string; from: string; to: string; granularity: string };
    labels: string[];
    datasets: Array<{ statut: string; label: string; data: number[] }>;
}

export interface DashboardStats {
    period: { key: string; from: string; to: string };
    prestataires: StatCard;
    packings: StatCard;
    utilisateurs: StatCard;
    vehicules: StatCard;
    rouleaux_stock: StatCard;
    vehicules_par_type: VehiculeParType[];
}

interface ApiResponse {
    success: boolean;
    message: string;
    data: DashboardStats;
}

interface VentesParTypeApiResponse {
    data: DashboardVentesParTypeData;
}

interface EncaissementApiResponse {
    data: EncaissementStat;
}

interface VentesEvolutionApiResponse {
    data: DashboardVentesEvolutionData;
}

interface VentesEvolutionStatutApiResponse {
    data: DashboardVentesEvolutionStatutData;
}

type DashboardCacheOptions = RequestCacheOptions;

@Injectable({ providedIn: 'root' })
export class DashboardService {
    private readonly http = inject(HttpClient);
    private readonly usineContext = inject(UsineContextService);
    private readonly requestCache = inject(RequestCacheService);
    private readonly baseUrl = `${environment.apiUrl}/dashboard`;
    private readonly defaultTtlMs = 45_000;

    getStats(period: string = 'this_month', days?: number, cacheOptions: DashboardCacheOptions = {}): Observable<DashboardStats> {
        let params = new HttpParams().set('period', period);
        if (period === 'last_x_days' && days != null) {
            params = params.set('days', days.toString());
        }

        const cacheKey = this.buildCacheKey('stats', {
            period,
            days,
            site: this.currentSiteCacheKey(),
        });

        return this.requestCache.query(
            cacheKey,
            () => this.http
                .get<ApiResponse>(`${this.baseUrl}/stats`, { params })
                .pipe(map((res) => res.data)),
            this.normalizeCacheOptions(cacheOptions)
        );
    }

    getVentesParTypeVehicule(
        period: VentesParTypePeriod = 'this_month',
        days?: number,
        cacheOptions: DashboardCacheOptions = {}
    ): Observable<DashboardVentesParTypeData> {
        let params = new HttpParams().set('period', period);
        if (period === 'last_x_days' && days != null) {
            params = params.set('days', days.toString());
        }
        const headers = this.getSiteHeaders();
        const cacheKey = this.buildCacheKey('ventes-par-type', {
            period,
            days: period === 'last_x_days' ? days : undefined,
            site: this.currentSiteCacheKey(),
        });

        return this.requestCache.query(
            cacheKey,
            () => this.http
                .get<VentesParTypeApiResponse>(`${this.baseUrl}/ventes/par-type-vehicule`, { params, headers })
                .pipe(map((res) => res.data)),
            this.normalizeCacheOptions(cacheOptions)
        );
    }

    getVentesEncaissements(
        period: VentesEncaissementsPeriod = 'this_month',
        days?: number,
        cacheOptions: DashboardCacheOptions = {}
    ): Observable<EncaissementStat> {
        let params = new HttpParams().set('period', period);
        if (period === 'last_x_days' && days != null) {
            params = params.set('days', days.toString());
        }
        const headers = this.getSiteHeaders();
        const cacheKey = this.buildCacheKey('ventes-encaissements', {
            period,
            days: period === 'last_x_days' ? days : undefined,
            site: this.currentSiteCacheKey(),
        });

        return this.requestCache.query(
            cacheKey,
            () => this.http
                .get<EncaissementApiResponse>(`${this.baseUrl}/ventes/encaissements`, { params, headers })
                .pipe(map((res) => res.data)),
            this.normalizeCacheOptions(cacheOptions)
        );
    }

    getVentesEvolutionParType(
        period: VentesEvolutionPeriod = 'this_year',
        cacheOptions: DashboardCacheOptions = {}
    ): Observable<DashboardVentesEvolutionData> {
        const params = new HttpParams().set('period', period);
        const headers = this.getSiteHeaders();
        const cacheKey = this.buildCacheKey('ventes-evolution-par-type', {
            period,
            site: this.currentSiteCacheKey(),
        });

        return this.requestCache.query(
            cacheKey,
            () => this.http
                .get<VentesEvolutionApiResponse>(`${this.baseUrl}/ventes/evolution-par-type`, { params, headers })
                .pipe(map((res) => res.data)),
            this.normalizeCacheOptions(cacheOptions)
        );
    }

    getVentesEvolutionParStatut(
        period: VentesEvolutionStatutPeriod = 'this_year',
        days?: number | null,
        cacheOptions: DashboardCacheOptions = {}
    ): Observable<DashboardVentesEvolutionStatutData> {
        let params = new HttpParams().set('period', period);
        if (period === 'last_x_days' && days) {
            params = params.set('days', String(days));
        }

        const headers = this.getSiteHeaders();
        const cacheKey = this.buildCacheKey('ventes-evolution-par-statut', {
            period,
            days,
            site: this.currentSiteCacheKey(),
        });

        return this.requestCache.query(
            cacheKey,
            () => this.http
                .get<VentesEvolutionStatutApiResponse>(`${this.baseUrl}/ventes/evolution-par-statut`, { params, headers })
                .pipe(map((res) => res.data)),
            this.normalizeCacheOptions(cacheOptions)
        );
    }

    invalidateCache(): void {
        this.requestCache.invalidateByPrefix('dashboard:');
    }

    private getSiteHeaders(): HttpHeaders | undefined {
        const siteHeaderValue = this.usineContext.headerUsineId();
        return siteHeaderValue !== null
            ? new HttpHeaders({ 'X-Site-Id': String(siteHeaderValue) })
            : undefined;
    }

    private normalizeCacheOptions(options: DashboardCacheOptions): RequestCacheOptions {
        return {
            ttlMs: options.ttlMs ?? this.defaultTtlMs,
            forceRefresh: !!options.forceRefresh,
        };
    }

    private currentSiteCacheKey(): string {
        const siteHeaderValue = this.usineContext.headerUsineId();
        return siteHeaderValue === null ? 'none' : String(siteHeaderValue);
    }

    private buildCacheKey(endpoint: string, params: Record<string, string | number | null | undefined>): string {
        const serialized = Object.entries(params)
            .filter(([, value]) => value !== null && value !== undefined && String(value).trim().length > 0)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([key, value]) => `${key}=${String(value)}`)
            .join('&');

        return `dashboard:${endpoint}:${serialized || 'default'}`;
    }
}
