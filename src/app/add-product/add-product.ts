import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-add-product',
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProductComponent {}
