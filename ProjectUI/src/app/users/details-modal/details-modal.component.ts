import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserModel } from 'src/app/dal/models/user';

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.css']
})
export class DetailsModal implements OnInit {

  
  constructor(
    public dialogRef: MatDialogRef<DetailsModal>,
    @Inject(MAT_DIALOG_DATA) public data: UserModel) {}
  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
