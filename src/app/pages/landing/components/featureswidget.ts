import { Component } from '@angular/core';

@Component({
    selector: 'features-widget',
    standalone: true,
    imports: [],
    template: `
        <div class="bg-surface-0 dark:bg-surface-950 p-12 lg:p-20">
            <div
                class="rounded-2xl border border-surface-200 dark:border-surface-700 flex flex-col lg:flex-row overflow-hidden relative"
                style="background: url('https://fqjltiegiezfetthbags.supabase.co/storage/v1/object/public/block.images/blocks/ecommerce/storefront/storefront-page-1-13.png') 50% / cover no-repeat"
            >
                <div class="absolute inset-0 bg-surface-0/80 dark:bg-surface-950/70"></div>
                <div class="flex-1 px-6 lg:px-12 py-12 lg:py-16 flex flex-col gap-16 relative">
                    <div class="flex flex-col gap-4">
                        <div>
                            <span class="text-surface-900 dark:text-surface-0 text-[2.5rem] font-medium leading-tight">50% Off<br /></span>
                            <span class="text-surface-900 dark:text-surface-0 text-[3rem] font-bold leading-tight">Mid-Season Sale</span>
                        </div>
                        <div class="text-surface-700 dark:text-surface-300 text-2xl leading-normal max-w-xl">Discover unbeatable deals on carefully curated pieces - save up to 50% while stocks last.</div>
                    </div>
                    <button pButton severity="contrast" class="self-start">
                        <span pButtonLabel>Claim Discount</span>
                    </button>
                </div>
                <div class="hidden lg:block flex-1 relative">
                    <img
                        class="w-full h-full object-cover"
                        src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/object/public/block.images/blocks/ecommerce/storefront/storefront-page-1-14.png"
                        alt="Fashion promotion featuring a woman in stylish pink fuzzy jacket"
                    />
                </div>
            </div>
        </div>
    `,
})
export class FeaturesWidget {}
