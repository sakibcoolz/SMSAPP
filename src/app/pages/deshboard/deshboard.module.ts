import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeshboardComponent } from './deshboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';


@NgModule({
  declarations: [DeshboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    
  ]
})
export class DeshboardModule { }
