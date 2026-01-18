import { Component } from '@angular/core';
import { PackingFrom } from '../packing-from/packing-from';

@Component({
  selector: 'app-packing-liste',
  standalone:true,
  imports: [PackingFrom],
  templateUrl: './packing-liste.html',
  styleUrl: './packing-liste.scss',
})
export class PackingListe {

}
