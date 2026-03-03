import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { CheckboxModule } from 'primeng/checkbox';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-login3',
   standalone: true,
    imports: [CommonModule, FormsModule, ButtonModule, CarouselModule, CheckboxModule, DividerModule, InputTextModule],
  templateUrl: './login3.html',
  styleUrl: './login3.scss',
})
export class Login3 {
    checked2: boolean = true;

    features = [
        {
            title: 'Integrated Analytics Hub',
            image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/tab-3.jpg',
            darkImage: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/tab-3-dark.jpg',
            text: 'Unlock powerful insights across your platforms, using real-time data from Google, Discord, GitHub, Facebook, Twitter, and more to supercharge your SaaS performance.'
        },
        {
            title: 'Data Security',
            image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/tab-2.jpg',
            darkImage: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/tab-2-dark.jpg',
            text: 'Protect your valuable data with enterprise-grade security features, ensuring your information remains safe and compliant with industry standards.'
        },
        {
            title: 'Cloud Backups',
            image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/tab-1.jpg',
            darkImage: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/tab-1-dark.jpg',
            text: 'Never lose important data with automatic cloud backups that securely store your information and make it accessible whenever you need it.'
        }
    ];
}