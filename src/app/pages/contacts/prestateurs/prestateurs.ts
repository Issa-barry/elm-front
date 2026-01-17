import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { Table, TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { CustomerService } from '@/pages/service/customer.service';
import { Router } from '@angular/router';
import { Customer } from '@/types/customer';
import { ButtonModule } from 'primeng/button';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';

@Component({
  selector: 'app-prestateurs',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    ProgressBarModule,
    ButtonModule,
    IconField,
    InputIcon
  ],
  providers: [CustomerService],
  templateUrl: './prestateurs.html',
  styleUrl: './prestateurs.scss',
})
export class Prestateurs {
  customers: Customer[] = [];
  selectedCustomer: Customer | null = null;

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.customerService.getCustomersLarge().then((customers) => {
      this.customers = customers;
    });
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  navigateToCreateUser() {
    this.router.navigate(['contacts/prestateurs/new']);
  }

  onRowSelect(event: any) {
    // Redirection vers la page d'édition avec l'ID du customer
    this.router.navigate(['contacts/prestateurs', event.data.id, 'edit']);
  }
}