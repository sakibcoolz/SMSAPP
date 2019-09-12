import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUsersComponent } from './add-users.component';
import { AuthGuard } from 'src/app/shared/auth/auth-guard.service';

const routes: Routes = [
    {
        path: '', component: AddUsersComponent, canActivate: [AuthGuard]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class AddUserRoutingModule { }