import { Routes } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page';
import { HomeComponent } from './home/home';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product', component: ProductPageComponent }
];
