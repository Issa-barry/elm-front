import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { StyleClassModule } from 'primeng/styleclass';

interface Product {
    id: string;
    name: string;
    description: string;
    quantity: number;
    price: number;
}

@Component({
  selector: 'app-comptabilite-packing-paiement',
  templateUrl: './comptabilite-packing-paiement.html',
  styleUrl: './comptabilite-packing-paiement.scss',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, StyleClassModule, InputNumberModule],
})
export class ComptabilitePackingPaiement {
    products = signal<Product[]>([
        {
            id: '0',
            name: '20260201-0001',
            description: 'Light Grey',
            quantity: 1,
            price: 39.0
        },
       
        
    ]);

    subtotal = computed(() => this.products().reduce((sum, product) => sum + product.quantity * product.price, 0));

    removeProduct(index: number, event: Event) {
        event.stopPropagation();
        const currentProducts = this.products();
        currentProducts.splice(index, 1);
        this.products.set([...currentProducts]);
    }
}