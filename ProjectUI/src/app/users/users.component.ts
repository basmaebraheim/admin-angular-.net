import { Component, OnInit } from '@angular/core';
import { UserModel } from '../dal/models/user';
import { UsersService } from '../dal/services/users.service';
import { Observable } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import { DeleteModal } from './delete-modal/delete-modal.component';
import { DetailsModal } from './details-modal/details-modal.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Observable<UserModel[]>;
  constructor(private _usersService: UsersService,public dialog: MatDialog) { }

  ngOnInit() {
    this.getUsersList();

  }
  getUsersList() {
    this._usersService.getAll().subscribe(
      res => {
        this.users = res;
        console.log(this.users)

      },
      err => console.log(err)

    )
  }
  openDeleteDialog(user:UserModel): void {
    const dialogRef = this.dialog.open(DeleteModal, {
      // width: '200em',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result)
      {
        this.deleteUser(result)
      }
      console.log('The dialog was closed');
    });
  }
  openDetailsDialog(user:UserModel): void {
    const dialogRef = this.dialog.open(DetailsModal, {
      // width: '200em',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result)
      {
        this.deleteUser(result)
      }
      console.log('The dialog was closed');
    });
  }
  deleteUser(userId)
  {
    this._usersService.delete(userId).subscribe(
      res => {
         console.log(res)
         this.getUsersList();

      },
      err => console.log(err)

    )

  }

}
