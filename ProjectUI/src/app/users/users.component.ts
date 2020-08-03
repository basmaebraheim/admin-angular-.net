import { Component, OnInit } from '@angular/core';
import { UserModel } from '../dal/models/user';
import { UsersService } from '../dal/services/users.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DeleteModal } from './delete-modal/delete-modal.component';
import { DetailsModal } from './details-modal/details-modal.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Observable<UserModel[]>;
  model: UserModel;
  loadingUsersList= false;
  constructor(private _usersService: UsersService, public dialog: MatDialog, private datePipe: DatePipe) { }

  ngOnInit() {
    this.getUsersList();
    this.model = {
      id: 0,
      fullName: null,
      age: null,
      birthdate: null,
      gender: null,
    }

  }
  getUsersList() {
    this.loadingUsersList = true;
    this._usersService.getAll().subscribe(
      res => {
        this.loadingUsersList = false;

        this.users = res;
        console.log(this.users)

      },
      err => {
        console.log(err);
        this.loadingUsersList = false;
      }

    )
  }
  openDeleteDialog(user: UserModel): void {
    const dialogRef = this.dialog.open(DeleteModal, {
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteUser(result)
      }
      console.log('The dialog was closed');
    });
  }

  deleteUser(userId) {
    this._usersService.delete(userId).subscribe(
      res => {
        console.log(res)
        this.getUsersList();

      },
      err => console.log(err)

    )

  }
  openDetailsDialog(user: UserModel): void {
    const dialogRef = this.dialog.open(DetailsModal, {
      width: '30em',
      // height: '35em',
      data: user ? user : this.model
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(user)
      if (result && result.id != 0) {
        this.updateUser(result)
      }
      if (result && result.id == 0) {
        this.addUser(result)
      }
    });


  }
  updateUser(user) {
    console.log(user)
    this._usersService.update(user).subscribe(
      res => {
        console.log(res)
        this.getUsersList();

      },
      err => {
        console.log(err);
      }

    )

  }
  addUser(user) {
    console.log(user)
    this._usersService.add(user).subscribe(
      res => {
        console.log(res)
        this.getUsersList();

      },
      err => {
        console.log(err)
      }

    )

  }
}
