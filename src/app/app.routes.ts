import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { AboutShopComponent } from './pages/about-shop/about-shop.component';
import { authUserGuard } from './authUserGuard.guard';
import { authAdminGuard } from './auth-admin.guard';
import { AddNewProductComponent } from './pages/add-new-product/add-new-product.component';
import { MyProductsComponent } from './pages/my-products/my-products.component';
import { ChangeEmailComponent } from './pages/change-email/change-email.component';
import { SupportComponent } from './pages/support/support.component';
import { ProductsResolver } from './products.resolver';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent,
  },
  {
    path: 'my-products',
    component: MyProductsComponent,
    canActivate: [authUserGuard],
  },
  {
    path: 'products/edit/:id',
    component: ProductEditComponent,
    canActivate: [authAdminGuard],
  },
  {
    path: 'add-new-product',
    component: AddNewProductComponent,
    canActivate: [authAdminGuard],
  },
  {
    path: 'change-email',
    component: ChangeEmailComponent,
    canActivate: [authAdminGuard],
  },
  {
    path: 'support',
    component: SupportComponent,
    canActivate: [authAdminGuard],
  },
  {
    path: 'about-shop',
    component: AboutShopComponent,
    canActivate: [authUserGuard],
  },
  { path: '**', redirectTo: 'not-found' },
  { path: 'not-found', component: NotFoundComponent },
];
