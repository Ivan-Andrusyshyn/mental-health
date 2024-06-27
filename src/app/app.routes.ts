import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { authUserGuard } from './authUserGuard.guard';
import { authAdminGuard } from './auth-admin.guard';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./pages/products/products.component').then(
        (m) => m.ProductsComponent
      ),
  },
  {
    path: 'product/:id',
    loadComponent: () =>
      import('./pages/product-detail/product-detail.component').then(
        (m) => m.ProductDetailComponent
      ),
  },
  {
    path: 'my-diary',
    loadComponent: () =>
      import('./pages/my-diary/my-diary.component').then(
        (m) => m.MyDiaryComponent
      ),
    canActivate: [authGuard],
    children: [
      {
        path: 'diary-note/:id',
        loadComponent: () =>
          import('./pages/my-diary/diary-note/diary-note.component').then(
            (m) => m.DiaryNoteComponent
          ),
      },
    ],
  },
  {
    path: 'my-diary/add-note',
    loadComponent: () =>
      import('./pages/diary-add-note/diary-add-note.component').then(
        (m) => m.DiaryAddNoteComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'psychological-help',
    loadComponent: () =>
      import('./pages/psychological-help/psychological-help.component').then(
        (m) => m.PsychologicalHelpComponent
      ),
  },
  {
    path: 'online-tests',
    canActivate: [authUserGuard],
    loadComponent: () =>
      import('./pages/online-tests/online-tests.component').then(
        (m) => m.OnlineTestsComponent
      ),
  },
  {
    path: 'test/success-email',
    canActivate: [authUserGuard],
    loadComponent: () =>
      import('./pages/success-email/success-email.component').then(
        (m) => m.SuccessEmailComponent
      ),
  },
  {
    path: 'test/:id',
    canActivate: [authUserGuard],
    loadComponent: () =>
      import('./pages/selected-test/selected-test.component').then(
        (m) => m.SelectedTestComponent
      ),
  },
  {
    path: 'test-details/:id',
    canActivate: [authUserGuard],
    loadComponent: () =>
      import('./pages/test-details/test-details.component').then(
        (m) => m.TestDetailsComponent
      ),
  },
  {
    path: 'my-products',
    canActivate: [authUserGuard],
    loadComponent: () =>
      import('./pages/my-products/my-products.component').then(
        (m) => m.MyProductsComponent
      ),
  },
  {
    path: 'products/edit/:id',
    canActivate: [authAdminGuard],
    loadComponent: () =>
      import('./pages/product-edit/product-edit.component').then(
        (m) => m.ProductEditComponent
      ),
  },
  {
    path: 'add-new-product',
    canActivate: [authAdminGuard],
    loadComponent: () =>
      import('./pages/add-new-product/add-new-product.component').then(
        (m) => m.AddNewProductComponent
      ),
  },
  {
    path: 'user-profile',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/user-profile/user-profile.component').then(
        (m) => m.UserProfileComponent
      ),
  },
  {
    path: 'change-email',
    canActivate: [authAdminGuard],
    loadComponent: () =>
      import('./pages/change-email/change-email.component').then(
        (m) => m.ChangeEmailComponent
      ),
  },
  {
    path: 'support',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/support/support.component').then(
        (m) => m.SupportComponent
      ),
  },
  {
    path: 'about-shop',
    canActivate: [authUserGuard],
    loadComponent: () =>
      import('./pages/about-shop/about-shop.component').then(
        (m) => m.AboutShopComponent
      ),
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];
