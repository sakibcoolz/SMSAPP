import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeshboardComponent } from './deshboard.component';

const routes: Routes = [
    {
        path:'', component: DeshboardComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class DashboardRoutingModule { }