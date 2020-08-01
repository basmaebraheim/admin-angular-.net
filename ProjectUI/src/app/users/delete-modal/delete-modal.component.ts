import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserModel } from 'src/app/dal/models/user';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModal implements OnInit {

  
  constructor(
    public dialogRef: MatDialogRef<DeleteModal>,
    @Inject(MAT_DIALOG_DATA) public data: UserModel) {}
  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
