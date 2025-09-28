import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Form } from './form/form';
import { Manage } from './manage/manage';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'form', component: Form },
  { path: 'manage', component: Manage },
];
