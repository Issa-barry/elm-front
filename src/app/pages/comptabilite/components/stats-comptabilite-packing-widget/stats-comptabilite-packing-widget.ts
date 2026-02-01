import { Component } from '@angular/core';

@Component({
  selector: 'app-stats-comptabilite-packing-widget',
  standalone: true,
  imports: [],
  templateUrl: './stats-comptabilite-packing-widget.html',
  styleUrl: './stats-comptabilite-packing-widget.scss',
  host: {
        '[style.display]': '"contents"'
    }
})
export class StatsComptabilitePackingWidget {

}
