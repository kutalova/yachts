import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-yacht-modal-window',
  templateUrl: './add-yacht-modal-window.component.html',
  styleUrls: ['./add-yacht-modal-window.component.scss', '../../styles/_forms.scss']
})
export class AddYachtModalWindowComponent implements OnInit {

  constructor(private fb: FormBuilder) {
  }

  form: FormGroup = this.fb.group(
    {
      type: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(255)]],
      room: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(255)]],
      places: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(255)]],
      year_of_release: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(255)]],
      yacht_length: [null],
      price_per_day: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(255)]],
      price_per_hour: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(255)]],
      gear: [null],
      info: [null],
    });

  ngOnInit(): void {
  }

}