import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserModel } from 'src/app/dal/models/user';
import { NgbDateStruct, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.css']
})
export class DetailsModal implements OnInit {
  birthdate: NgbDateStruct;
  isDisabledDate ;
  model: UserModel;

  constructor(
    public dialogRef: MatDialogRef<DetailsModal>,
    @Inject(MAT_DIALOG_DATA) public data: UserModel) {
      console.log (this.data)

      this.model = {
        ...this.data
    }

    if (this.model.birthdate) {
      let birthdate = (this.model.birthdate + '').slice(0, 10).split('-');
      this.model.birthdate = new Date(parseInt(birthdate[0]), parseInt(birthdate[1]) - 1, parseInt(birthdate[2]));

      this.birthdate = {
        day: parseInt(birthdate[2]),
        month: parseInt(birthdate[1]),
        year: parseInt(birthdate[0])
      };
    }

  }
  ngOnInit(): void {
    this.isDisabledDate = (date: NgbDate, current: {month: number}) => date.year < 1900 || date.year > 2010;

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  changeDate(event) {
    console.log (this.data)

    this.birthdate = event;
    this.model.birthdate = new Date(event.year, event.month - 1, event.day);
    this.model.birthdate =  new Date( this.model.birthdate .getTime() + Math.abs(this.model.birthdate.getTimezoneOffset()*60000) );
    this.model.age = moment().diff(this.model.birthdate, 'years');
 
  }

}
