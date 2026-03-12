import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import JsBarcode from 'jsbarcode';

/**
 * Directive Code128 via jsbarcode.
 *
 * Usage:
 *   <svg appBarcode [barcodeValue]="product.code_interne"></svg>
 */
@Directive({
  selector: 'svg[appBarcode]',
  standalone: true,
})
export class BarcodeDirective implements OnChanges {
  @Input('barcodeValue') value = '';
  @Input() barcodeWidth = 2;
  @Input() barcodeHeight = 60;
  @Input() barcodeDisplayValue = true;
  @Input() barcodeFontSize = 13;

  constructor(private readonly el: ElementRef<SVGElement>) {}

  ngOnChanges(): void {
    const code = this.value?.trim();
    if (!code) return;
    this.render(code);
  }

  private render(code: string): void {
    try {
      JsBarcode(this.el.nativeElement, code, {
        format: 'CODE128',
        width: this.barcodeWidth,
        height: this.barcodeHeight,
        displayValue: this.barcodeDisplayValue,
        fontSize: this.barcodeFontSize,
        margin: 8,
        lineColor: '#000000',
        background: 'transparent',
      });
    } catch {
      // Invalid code for CODE128: keep silent and leave SVG empty.
    }
  }
}
