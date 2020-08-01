import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersService } from '../dal/services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

import { DeleteModal } from './delete-modal/delete-modal.component';
import { DetailsModal } from './details-modal/details-modal.component';


@NgModule({
  declarations: [UsersComponent,DeleteModal, DetailsModal],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
  ],
  providers:[UsersService]
})
export class UsersModule { }
