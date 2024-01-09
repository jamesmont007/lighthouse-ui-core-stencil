import { Component, OnInit } from '@angular/core';

import { FormModel } from '../../models/form.model';
import { forms } from '../../data/select-template';

@Component({
  selector: 'app-select-template',
  templateUrl: './select-template.component.html',
  styleUrls: ['./select-template.component.scss']
})
export class SelectTemplateComponent implements OnInit {
  templateForms: FormModel[] = forms;
  isSearch = false;

  sendFormHandlerResult: FormModel;

  constructor() { }

  ngOnInit() {
  }

  sendFormHandler(form: FormModel) {
    this.sendFormHandlerResult = form;
  }

}
