import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard.service';

//Route for content layout with sidebar, navbar and footer
export const CONTENT_ROUTES: Routes = [
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginModule'
  }
];
