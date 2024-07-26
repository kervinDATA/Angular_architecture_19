import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./components/feature/admin.routes').then(m => m.adminRoutes),
  },
  {
    path: 'account',
    loadChildren: () => import('./components/feature/account.routes').then(m => m.accountRoutes),
  },
  // Autres routes ici
];

// Assurez-vous d'exporter les routes sous le nom correct
export const appRoutes = routes;



