import { Component, OnDestroy, OnInit } from '@angular/core';
 import { Subscription } from 'rxjs';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import { DatePickerModule } from 'primeng/datepicker';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { MemberService } from '@/pages/service/member.service';
import { DialogConfig, Member, Task } from '@/types/task';
import { Ripple } from 'primeng/ripple';
import { MessageService } from 'primeng/api';
import { TaskService } from '@/apps/tasklist/service/task.service';

@Component({
  selector: 'app-produits-form-dialog',
 standalone: true,
    imports: [ToastModule, DialogModule, FormsModule, EditorModule, DatePickerModule, ButtonModule, AutoCompleteModule, FluidModule, InputTextModule, Ripple],
    providers: [MessageService],
  templateUrl: './produits-form-dialog.html',
  styleUrl: './produits-form-dialog.scss',
})
export class ProduitsFormDialog implements OnInit, OnDestroy {
    task!: Task;

    members: Member[] = [];

    filteredMembers: Member[] = [];

    dialogConfig: DialogConfig = { header: '', visible: false };

    subscription: Subscription;

    dialogSubscription: Subscription;

    constructor(
        private memberService: MemberService,
        private messageService: MessageService,
        private taskService: TaskService
    ) {
        this.subscription = this.taskService.selectedTask$.subscribe((data) => (this.task = data));
        this.dialogSubscription = this.taskService.dialogSource$.subscribe((data) => {
            this.dialogConfig = data;

            if (this.dialogConfig.newTask) {
                this.resetTask();
            }
        });
    }

    ngOnInit(): void {
        this.memberService.getMembers().then((members) => (this.members = members));
        this.resetTask();
    }

    filterMembers(event: any) {
        let filtered: Member[] = [];
        let query = event.query;

        for (let i = 0; i < this.members.length; i++) {
            let member = this.members[i];
            if (member.name?.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(member);
            }
        }

        this.filteredMembers = filtered;
    }

    save() {
        this.task.id = Math.floor(Math.random() * 1000);
        this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: `Task "${this.task.name}" created successfully.`
        });
        this.taskService.addTask(this.task);
        this.taskService.closeDialog();
    }

    cancelTask() {
        this.resetTask();
        this.taskService.closeDialog();
    }

    resetTask() {
        this.task = {
            id: this.task && this.task.id ? this.task.id : Math.floor(Math.random() * 1000),
            status: 'Waiting'
        };
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
