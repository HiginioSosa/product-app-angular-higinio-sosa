import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./components/product-list/product-list'),
  },
  {
    path: 'products/new',
    loadComponent: () =>
      import('./components/product-form/product-form')
  },
  {
    path: 'products/:id/edit',
    loadComponent: () =>
      import('./components/product-form/product-form')
  },
  {
    path: '**',
    redirectTo: '/products'
  }
];
