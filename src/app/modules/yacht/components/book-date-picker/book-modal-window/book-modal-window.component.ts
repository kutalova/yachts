import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal, NgbCalendar, NgbDate, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-book-modal-window',
  templateUrl: './book-modal-window.component.html',
  styleUrls: ['./book-modal-window.component.scss', '../../../../shared/styles/_forms.scss',  '../../../../shared/styles/_modal.scss']
})
export class BookModalWindowComponent implements OnInit {

  hoveredDate: NgbDate | null = null;
  fromDate: NgbDate;
  toDate: NgbDate | null = null;

  constructor(
    private fb: FormBuilder,
    calendar: NgbCalendar,
    public activeModal: NgbActiveModal
  ) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  form: FormGroup = this.fb.group( {
    name: [ null, [ Validators.required, Validators.minLength( 5 ), Validators.maxLength( 255 ) ] ],
    phone: [ null, [ Validators.required, Validators.minLength( 5 ), Validators.maxLength( 255 ) ] ],
    email: [ null, [ Validators.required, Validators.minLength( 5 ), Validators.maxLength( 255 ) ] ],
    guests: [ null, [ Validators.required, Validators.minLength( 5 ), Validators.maxLength( 255 ) ] ],
    date: [ null ],
    password: [ null, [ Validators.required, Validators.minLength( 2 ),
      Validators.maxLength( 50 ) ] ]
  } );

  ngOnInit(): void {
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }
}
