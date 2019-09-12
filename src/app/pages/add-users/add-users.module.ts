import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUsersComponent } from './add-users.component';
import { AddUserRoutingModule } from './add-user-routing.module';

@NgModule({
  declarations: [AddUsersComponent],
  imports: [
    CommonModule,
    AddUserRoutingModule
  ]
})
export class AddUsersModule { }
