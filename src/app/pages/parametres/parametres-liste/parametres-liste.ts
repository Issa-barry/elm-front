
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { FileUploadModule } from 'primeng/fileupload';
import { IconFieldModule } from 'primeng/iconfield';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { StyleClassModule } from 'primeng/styleclass';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-parametres-liste',
    standalone: true,
    imports: [CommonModule, FormsModule, BadgeModule, ButtonModule, DividerModule, IconFieldModule, InputIconModule, InputTextModule, TextareaModule, 
               InputGroupModule, InputGroupAddonModule, FileUploadModule, StyleClassModule],
  templateUrl: './parametres-liste.html',
  styleUrl: './parametres-liste.scss',
})
export class ParametresListe {
    navs: any[] = [
        {
            label: 'Dashboard',
            icon: 'pi pi-th-large',
            to: ''
        },
        {
            label: 'Bookmarks',
            icon: 'pi pi-bookmark',
            to: ''
        },
        {
            label: 'Team',
            icon: 'pi pi-users',
            to: ''
        },
        {
            label: 'Messages',
            icon: 'pi pi-comments',
            badge: '2',
            to: ''
        }
    ];

    items: any[] = [
        {
            label: 'Profile',
            icon: 'pi pi-user'
        },
        {
            label: 'Account',
            icon: 'pi pi-cog'
        },
        {
            label: 'Appearance',
            icon: 'pi pi-palette'
        },
        {
            label: 'Accessibility',
            icon: 'pi pi-sun'
        },
        {
            label: 'Notifications',
            icon: 'pi pi-bell'
        }
    ];

    selectedNav: string = 'Dashboard';
}