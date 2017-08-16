import { Routes } from '@angular/router';

import { BookExistsGuard } from './guards/book-exists';
import { FindBookPageComponent } from './containers/find-book-page';
import { ViewBookPageComponent } from './containers/view-book-page';
import { CollectionPageComponent } from './containers/collection-page';
import { NotFoundPageComponent } from './containers/not-found-page';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: CollectionPageComponent,
  },
  {
    path: 'book/find',
    component: FindBookPageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'book/:id',
    canActivate: [BookExistsGuard],
    component: ViewBookPageComponent,
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];
