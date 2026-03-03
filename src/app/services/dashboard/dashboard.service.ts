import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

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

@Injectable({ providedIn: 'root' })
export class DashboardService {
    private readonly http = inject(HttpClient);
    private readonly baseUrl = `${environment.apiUrl}/dashboard`;

    getStats(period: string = 'this_month', days?: number): Observable<DashboardStats> {
        let params = new HttpParams().set('period', period);
        if (period === 'last_x_days' && days != null) {
            params = params.set('days', days.toString());
        }
        return this.http
            .get<ApiResponse>(`${this.baseUrl}/stats`, { params })
            .pipe(map((res) => res.data));
    }
}
