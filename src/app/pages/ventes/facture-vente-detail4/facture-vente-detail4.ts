import { CommonModule } from '@angular/common';
import { Component, computed, ElementRef, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { StyleClassModule } from 'primeng/styleclass';

interface NavItem {
    label: string;
    hasSubmenu: boolean;
}

interface MobileCategory {
    label: string;
    items: string[];
}

interface Product {
    id: string;
    name: string;
    description: string;
    quantity: number;
    price: number;
}

interface QuantityOption {
    label: string;
    value: number;
}

@Component({
  selector: 'app-facture-vente-detail4',
  standalone: true,
    imports: [CommonModule, FormsModule, ButtonModule, StyleClassModule, SelectModule],
  templateUrl: './facture-vente-detail4.html',
  styleUrl: './facture-vente-detail4.scss',
})
export class FactureVenteDetail4 {
    @ViewChild('navigationRef') navigationRef!: ElementRef;

    navItems = signal<NavItem[]>([
        { label: 'Women', hasSubmenu: true },
        { label: 'Men', hasSubmenu: true },
        { label: 'Sale', hasSubmenu: true }
    ]);

    activeDropdown = signal<string | null>(null);

    mobileCategories = signal<MobileCategory[]>([
        {
            label: 'Clothing',
            items: ['Shirts & Tops', 'Sweatshirts', 'Leggings', 'Underwear', 'Activewear', 'Dresses']
        },
        {
            label: 'Shoes',
            items: ['Sneakers', 'Boots', 'Sandals', 'Dress Shoes', 'Athletic Shoes', 'Slippers']
        },
        {
            label: 'Accessories',
            items: ['Bags & Backpacks', 'Hats & Caps', 'Belts', 'Wallets', 'Sunglasses', 'Scarves']
        }
    ]);

    products = signal<Product[]>([
        {
            id: '0',
            name: 'Pack de 30',
            description: ' ',
            quantity: 1,
            price: 169.0
        },
        // {
        //     id: '1',
        //     name: 'Crystal Bow Stiletto Heels',
        //     description: 'EU 37 • Champagne Beige',
        //     quantity: 1,
        //     price: 144.0
        // }
    ]);

    quantityOptions: QuantityOption[] = [
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '3', value: 3 },
        { label: '4', value: 4 }
    ];

    estimatedTax = signal(28.95);

    socialIcons = signal(['pinterest', 'instagram']);

    subtotal = computed(() => this.products().reduce((sum, product) => sum + product.quantity * product.price, 0));

    totalPrice = computed(() => this.subtotal() + this.estimatedTax());

    setActiveDropdown(item: string | null) {
        this.activeDropdown.set(item);
    }

    removeProduct(index: number) {
        const currentProducts = this.products();
        currentProducts.splice(index, 1);
        this.products.set([...currentProducts]);
    }
}