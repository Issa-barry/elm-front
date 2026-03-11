import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SkeletonModule } from 'primeng/skeleton';

export type StatCardVariant = 'primary' | 'default';
export type StatValueFormat = 'number' | 'text';

@Component({
    standalone: true,
    selector: 'app-stat-card-widget',
    imports: [CommonModule, SkeletonModule],
    host: {
        '[style.display]': '"contents"'
    },
    template: `
        <div [class]="columnClass">
            @if (variant === 'primary') {
                <div class="card h-full relative overflow-hidden">
                    <svg
                        viewBox="0 0 900 600"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        class="absolute left-0 top-0 h-full w-full"
                        preserveAspectRatio="none"
                    >
                        <rect x="0" y="0" width="900" height="600" fill="var(--p-primary-600)"></rect>
                        <path
                            d="M0 400L30 386.5C60 373 120 346 180 334.8C240 323.7 300 328.3 360 345.2C420 362 480 391 540 392C600 393 660 366 720 355.2C780 344.3 840 349.7 870 352.3L900 355L900 601L870 601C840 601 780 601 720 601C660 601 600 601 540 601C480 601 420 601 360 601C300 601 240 601 180 601C120 601 60 601 30 601L0 601Z"
                            fill="var(--p-primary-500)"
                            strokeLinecap="round"
                            strokeLinejoin="miter"
                        ></path>
                    </svg>
                    <div class="z-20 relative text-white">
                        <div class="text-xl font-semibold mb-6">{{ title }}</div>
                        @if (loading) {
                            <p-skeleton width="12rem" height="2.1rem" borderRadius="6px"></p-skeleton>
                        } @else {
                            <div class="text-2xl mb-3 mt-4 font-bold">
                                @if (format === 'number' && typeof value === 'number') {
                                    {{ value | number: '1.0-0' }}
                                } @else {
                                    {{ value ?? 0 }}
                                }
                                @if (suffix) {
                                    <span class="ml-1">{{ suffix }}</span>
                                }
                            </div>
                        }
                        <div class="text-sm opacity-90">{{ subtitle }}</div>
                    </div>
                </div>
            } @else {
                <div class="card h-full flex flex-col items-center justify-center text-center">
                    <span class="text-surface-900 dark:text-surface-0 text-lg font-medium mb-6">{{ title }}</span>
                    @if (loading) {
                        <p-skeleton width="16rem" height="2.1rem" borderRadius="6px"></p-skeleton>
                    } @else {
                        <span class="text-2xl text-primary font-bold">
                            @if (format === 'number' && typeof value === 'number') {
                                {{ value | number: '1.0-0' }}
                            } @else {
                                {{ value ?? 0 }}
                            }
                            @if (suffix) {
                                <span class="ml-1">{{ suffix }}</span>
                            }
                        </span>
                    }
                    <span class="text-sm text-surface-500 dark:text-surface-300 mt-3">{{ subtitle }}</span>
                </div>
            }
        </div>
    `
})
export class StatCardWidget {
    @Input() title = '';
    @Input() value: number | string | null = 0;
    @Input() subtitle = '';
    @Input() loading = false;
    @Input() suffix = 'GNF';
    @Input() format: StatValueFormat = 'number';
    @Input() variant: StatCardVariant = 'default';
    @Input() columnClass = 'col-span-12 md:col-span-6 xl:col-span-4';
}
