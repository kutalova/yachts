import {Component, ViewChild} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-book-date-picker',
  templateUrl: './book-date-picker.component.html',
  styleUrls: ['./book-date-picker.component.scss']
})
export class BookDatePickerComponent {

  model: NgbDateStruct;
}
