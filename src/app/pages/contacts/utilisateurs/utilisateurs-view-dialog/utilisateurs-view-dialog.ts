import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { DividerModule } from 'primeng/divider';

import { User, CIVILITE_LABELS, PIECE_TYPE_LABELS, getUserTypeLabel } from '@/models/user.model';
import { UserService } from '@/services/users/users.service';
import { PhoneFormatPipe } from '@/pipes/phone-format.pipe';

@Component({
  selector: 'app-utilisateurs-view-dialog',
  standalone: true,
  imports: [CommonModule, DialogModule, ButtonModule, TagModule, DividerModule, PhoneFormatPipe],
  templateUrl: './utilisateurs-view-dialog.html',
  styleUrl: './utilisateurs-view-dialog.scss',
})
export class UtilisateursViewDialog implements OnChanges {
  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  @Input() userId: number | null = null;
  @Input() canUpdate = false;
  @Output() editRequested = new EventEmitter<number>();

  user: User | null = null;
  loading = false;

  readonly CIVILITE_LABELS = CIVILITE_LABELS;
  readonly PIECE_TYPE_LABELS = PIECE_TYPE_LABELS;

  constructor(private userService: UserService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['visible']?.currentValue === true && this.userId) {
      this.user = null;
      this.loadUser();
    }
  }

  loadUser() {
    this.loading = true;
    this.userService.getUser(this.userId!).subscribe({
      next: (res) => {
        if (res.success) this.user = res.data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  getTypeLabel(type: string): string {
    return getUserTypeLabel(type as any);
  }

  getInitials(nomComplet: string): string {
    if (!nomComplet) return '??';
    const parts = nomComplet.trim().split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return nomComplet.substring(0, 2).toUpperCase();
  }

  onEdit() {
    if (this.userId) {
      this.editRequested.emit(this.userId);
      this.visibleChange.emit(false);
    }
  }

  close() {
    this.visibleChange.emit(false);
  }
}
