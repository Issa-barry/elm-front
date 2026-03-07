import { Component } from '@angular/core';
import { HeaderWidget2 } from './widgets/headerwidget2';
import { ProductService } from '@/pages/service/product.service';
import { typeclientWidget } from './widgets/typeclientwidget';

@Component({
  selector: 'app-finance',
  standalone:true,
  imports: [HeaderWidget2, typeclientWidget],
  templateUrl: './finance.html',
  styleUrl: './finance.scss',
  providers: [ProductService],
})
export class Finance {

}
