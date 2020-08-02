import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserModel } from 'src/app/dal/models/user';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.css']
})
export class DetailsModal implements OnInit {
  birthdate: NgbDateStruct;

  constructor(
    public dialogRef: MatDialogRef<DetailsModal>,
    @Inject(MAT_DIALOG_DATA) public data: UserModel) {
    if (this.data.birthdate) {
      let birthdate = (this.data.birthdate + '').slice(0, 10).split('-');
      this.data.birthdate = new Date(parseInt(birthdate[0]), parseInt(birthdate[1]) - 1, parseInt(birthdate[2]));

      this.birthdate = {
        day: parseInt(birthdate[2]),
        month: parseInt(birthdate[1]),
        year: parseInt(birthdate[0])
      };
    }

  }
  ngOnInit(): void {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  changeDate(event) {
    this.birthdate = event;
    this.data.birthdate = new Date(event.year, event.month - 1, event.day);
    console.log(event)
    console.log(this.data.birthdate)
  }

}
