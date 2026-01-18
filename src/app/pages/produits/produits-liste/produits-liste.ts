import { Component, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { ButtonModule } from 'primeng/button';
import { Task } from '@/types/task';
import { RippleModule } from 'primeng/ripple';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from '@/apps/tasklist/task-list';
import { CreateTaskComponent } from '@/apps/tasklist/create-task';
import { TaskService } from '@/apps/tasklist/service/task.service';
import { ProduitsForm } from '../produits-form/produits-form';
import { Router } from '@angular/router';
import { ProduitsFormDialog } from '../produits-form-dialog/produits-form-dialog';


@Component({
  selector: 'app-produits-liste',
  standalone:true,
    imports: [CommonModule, ButtonModule, TaskListComponent, CreateTaskComponent, RippleModule, ProduitsForm, ProduitsFormDialog],
    providers: [TaskService],
  templateUrl: './produits-liste.html',
  styleUrl: './produits-liste.scss',
})
export class ProduitsListe implements OnDestroy {
    subscription: Subscription;

    todo: Task[] = [];

    completed: Task[] = [];

    constructor(private taskService: TaskService, private router: Router) {
        this.subscription = this.taskService.taskSource$.subscribe((data) => this.categorize(data));
    }

    categorize(tasks: Task[]) {
        this.todo = tasks.filter((t) => t.completed !== true);
        this.completed = tasks.filter((t) => t.completed);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    showDialog() {
        this.taskService.showDialog('Nouveau Produit', true);
    }

    goToNewProduits() {
        this.router.navigate(['/produits/produits-new']);
    }
}
