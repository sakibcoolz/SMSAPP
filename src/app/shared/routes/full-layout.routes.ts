import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard.service';

//Route for content layout with sidebar, navbar and footer
export const Full_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: './pages/deshboard/deshboard.module#DeshboardModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'add-user',
    loadChildren: './pages/add-users/add-users.module#AddUsersModule',
    canActivate: [AuthGuard]
  },
];
