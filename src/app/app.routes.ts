import { Routes } from '@angular/router';
import { Home } from './site/home/home';
import { Films } from './site/films/films';
import { About } from './site/about/about';
import { ProductGet } from './site/product/product-get/product-get';
// Mise en place des routes 
export const routes: Routes = [

    { path: '', component: Home },
    { path: 'films', component: Films },
    { path: 'about', component: About },
    { path: '**', redirectTo: '/404' },
    { path: 'product', component: ProductGet },
];
