import { Routes } from '@angular/router';
import { AccountHomeComponent } from '../../pages/account-home/account-home.component';

export const accountRoutes: Routes = [
  { path: 'home/:id', component: AccountHomeComponent },
];
