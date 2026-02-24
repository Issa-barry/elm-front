import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { StyleClassModule } from 'primeng/styleclass';

interface Order {
    id: number;
    orderNumber: string;
    product: string;
    variant: string;
    image: string;
    date: string;
    status: string;
    statusLabel: string;
    statusIcon: string;
    statusColor: string;
    total: string;
}

interface FilterOption {
    label: string;
    value: string;
}

interface Customer {
    name: string;
    address: string;
    city: string;
    country: string;
    zipCode: string;
    phone: string;
}

interface Payment {
    cardNumber: string;
    subtotal: string;
    shipping: string;
    tax: string;
}

@Component({
  selector: 'app-vehicule-liste2',
   templateUrl: './vehicule-liste2.html',
  styleUrl: './vehicule-liste2.scss',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, IconFieldModule, InputIconModule, InputTextModule, SelectModule, StyleClassModule],
})
export class VehiculeListe2 {
  searchQuery = signal<string>('');
  selectedFilter = signal<string>('all');

  filterOptions: FilterOption[] = [
      { label: 'All Orders', value: 'all' },
      { label: 'Pending', value: 'pending' },
      { label: 'In Delivery', value: 'delivery' },
      { label: 'Delivered', value: 'delivered' }
  ];

  orders: Order[] = [
      {
          id: 1,
          orderNumber: '#72831',
          product: 'Modern Brass Pendant Light',
          variant: 'Matte Gold Finish',
          image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/object/public/block.images/blocks/ecommerce/orderhistory/row-expansion-1.jpg',
          date: '15 Feb, 2025',
          status: 'pending',
          statusLabel: 'Pending',
          statusIcon: 'pi-clock',
          statusColor: 'surface',
          total: '$109.08'
      },
      {
          id: 2,
          orderNumber: '#71293',
          product: 'Scandinavian Dining Chair',
          variant: 'Natural Oak',
          image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/object/public/block.images/blocks/ecommerce/orderhistory/row-expansion-2.jpg',
          date: '8 Feb, 2025',
          status: 'delivery',
          statusLabel: 'In Delivery',
          statusIcon: 'pi-truck',
          statusColor: 'orange',
          total: '$159.08'
      },
      {
          id: 3,
          orderNumber: '#69847',
          product: 'Mid-Century Storage Cabinet',
          variant: 'Walnut Wood',
          image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/object/public/block.images/blocks/ecommerce/orderhistory/row-expansion-3.jpg',
          date: '25 Jan, 2025',
          status: 'delivered',
          statusLabel: 'Delivered',
          statusIcon: 'pi-check',
          statusColor: 'green',
          total: '$449.00'
      }
  ];

  orderCustomers: Record<number, Customer> = {
      1: {
          name: 'Sarah Johnson',
          address: '123 Pine Street, Seattle, WA, 98101',
          city: 'Seattle',
          country: 'United States',
          zipCode: '98101',
          phone: '+1 (206) 555-0173'
      },
      2: {
          name: 'Michael Chen',
          address: '456 Oak Avenue, Portland, OR, 97201',
          city: 'Portland',
          country: 'United States',
          zipCode: '97201',
          phone: '+1 (503) 555-0142'
      },
      3: {
          name: 'Emma Rodriguez',
          address: '789 Maple Drive, Austin, TX, 78701',
          city: 'Austin',
          country: 'United States',
          zipCode: '78701',
          phone: '+1 (512) 555-0198'
      }
  };

  orderPayments: Record<number, Payment> = {
      1: {
          cardNumber: '**** 4892',
          subtotal: '$89.00',
          shipping: '$12.00',
          tax: '$8.08'
      },
      2: {
          cardNumber: '**** 7321',
          subtotal: '$139.00',
          shipping: '$15.00',
          tax: '$5.08'
      },
      3: {
          cardNumber: '**** 9854',
          subtotal: '$399.00',
          shipping: '$20.00',
          tax: '$30.00'
      }
  };

  filteredOrders = computed(() => {
      let filtered = this.orders;

      if (this.selectedFilter() !== 'all') {
          filtered = filtered.filter((order) => order.status === this.selectedFilter());
      }

      if (this.searchQuery().trim()) {
          const query = this.searchQuery().toLowerCase().trim();
          filtered = filtered.filter((order) => order.orderNumber.toLowerCase().includes(query) || order.product.toLowerCase().includes(query) || order.variant.toLowerCase().includes(query));
      }

      return filtered;
  });

  toggleChevron(orderId: number): void {
      const chevronClass = `.chevron-icon-${orderId}`;
      const chevronElement = document.querySelector(chevronClass);
      if (chevronElement) {
          chevronElement.classList.toggle('rotate-180');
      }
  }

  getOrderCustomer(orderId: number): Customer {
      return this.orderCustomers[orderId] || this.orderCustomers[1];
  }

  getOrderPayment(orderId: number): Payment {
      return this.orderPayments[orderId] || this.orderPayments[1];
  }
}