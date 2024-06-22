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
import { OnlineTestsComponent } from './pages/online-tests/online-tests.component';
import { SelectedTestComponent } from './pages/selected-test/selected-test.component';
import { TestDetailsComponent } from './pages/test-details/test-details.component';
import { SuccessEmailComponent } from './pages/success-email/success-email.component';
import { PsychologicalHelpComponent } from './pages/psychological-help/psychological-help.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent,
  },
  {
    path: 'psychological-help',
    component: PsychologicalHelpComponent,
  },
  {
    path: 'online-tests',
    component: OnlineTestsComponent,
    canActivate: [authUserGuard],
  },
  {
    path: 'test/success-email',
    component: SuccessEmailComponent,
    canActivate: [authUserGuard],
  },
  {
    path: 'test/:id',
    component: SelectedTestComponent,
    canActivate: [authUserGuard],
  },
  {
    path: 'test-details/:id',
    component: TestDetailsComponent,
    canActivate: [authUserGuard],
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
    path: 'user-profile',
    component: UserProfileComponent,
    canActivate: [authGuard],
  },
  {
    path: 'change-email',
    component: ChangeEmailComponent,
    canActivate: [authAdminGuard],
  },
  {
    path: 'support',
    component: SupportComponent,
    canActivate: [authGuard],
  },
  {
    path: 'about-shop',
    component: AboutShopComponent,
    canActivate: [authUserGuard],
  },
  { path: '**', redirectTo: 'not-found' },
  { path: 'not-found', component: NotFoundComponent },
];
