import { Component } from '@angular/core';
import { ProduitsForm } from '../produits-form/produits-form';

@Component({
  selector: 'app-produits-new',
  standalone:true,
  imports: [ProduitsForm],
  templateUrl: './produits-new.html',
  styleUrl: './produits-new.scss',
})
export class ProduitsNew {

}
