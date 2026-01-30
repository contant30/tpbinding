import { Routes } from '@angular/router';
import { Home } from './site/home/home';
import { Films } from './site/films/films';
import { About } from './site/about/about';
import { Errors } from './site/errors/errors';
import { Searchform } from './site/films/searchform/searchform';
import { ProductAdd } from './site/product/product-add/product-add';
import { ProductEdit } from './site/product/product-edit/product-edit';
import { ProductGetComponent } from './site/product/product-get/product-get';

export const routes: Routes = [
  { path: '', component: Home },
  { 
    path: 'films',
    component: Films,
    children: [{ path: 'search', component: Searchform }] 
  },
  { path: 'about', component: About },
  
  { path: 'product/create', component: ProductAdd },
  { path: 'product/edit/:id', component: ProductEdit },
  { path: 'products', component: ProductGetComponent },
  { path: 'product/delete/:id', component: ProductGetComponent },

  { path: '404', component: Errors },
  { path: '**', redirectTo: '/404' }
];