import { Routes } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page';
import { HomeComponent } from './home/home';
import { AddProductComponent } from './add-product/add-product';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product', component: ProductPageComponent },
  { path: 'product/add-product', component: AddProductComponent }
];
