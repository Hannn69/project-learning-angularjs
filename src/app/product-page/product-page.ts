import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface Product {
  sku: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  unit: string;
  quantity: number;
  createdBy: string;
}

@Component({
  standalone: true,
  selector: 'app-product-page',
  imports: [RouterLink],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductPageComponent {
  products = signal<Product[]>([
    {
      sku: 'PT001',
      name: 'Lenovo IdeaPad 3',
      category: 'Computers',
      brand: 'Lenovo',
      price: 600,
      unit: 'Pc',
      quantity: 100,
      createdBy: 'James Kirwin',
    },
    {
      sku: 'PT002',
      name: 'Beats Pro',
      category: 'Electronics',
      brand: 'Beats',
      price: 160,
      unit: 'Pc',
      quantity: 140,
      createdBy: 'Francis Chang',
    },
    {
      sku: 'PT003',
      name: 'Nike Jordan',
      category: 'Shoe',
      brand: 'Nike',
      price: 110,
      unit: 'Pc',
      quantity: 300,
      createdBy: 'Antonio Engle',
    },
    {
      sku: 'PT004',
      name: 'Apple Series 5 Watch',
      category: 'Electronics',
      brand: 'Apple',
      price: 120,
      unit: 'Pc',
      quantity: 450,
      createdBy: 'Leo Kelly',
    },
    {
      sku: 'PT005',
      name: 'Amazon Echo Dot',
      category: 'Electronics',
      brand: 'Amazon',
      price: 80,
      unit: 'Pc',
      quantity: 320,
      createdBy: 'Annette Walker',
    },
    {
      sku: 'PT006',
      name: 'Sanford Chair Sofa',
      category: 'Furnitures',
      brand: 'Modern Wave',
      price: 320,
      unit: 'Pc',
      quantity: 650,
      createdBy: 'John Weaver',
    },
  ]);

  totalProducts = computed(() => this.products().length);
  totalQuantity = computed(() =>
    this.products().reduce((acc, product) => acc + product.quantity, 0)
  );
  totalCategories = computed(() => new Set(this.products().map(p => p.category)).size);
  totalBrands = computed(() => new Set(this.products().map(p => p.brand)).size);
}

