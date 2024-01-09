import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
})
export class FormInputComponent implements OnInit {
  testForm: FormGroup;

  errorMsg = { required: 'Field Required', notOption3: 'No option 3 pls' };

  constructor() {}

  ngOnInit() {
    this.testForm = new FormGroup({
      value1: new FormControl('', [Validators.required]),
      value2: new FormControl('', [Validators.required, this.evalNotOption3]),
    });
  }

  formControlErrors = (control: string) =>
    this.testForm.get(control).touched && this.testForm.get(control).errors

  evalNotOption3 = (control: AbstractControl) => control.value === '3' && { notOption3: true };

  parseObjToJson(obj) {
    return JSON.stringify(obj, null, 2);
  }
}
