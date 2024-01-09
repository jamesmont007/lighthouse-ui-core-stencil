import { Component, OnInit } from '@angular/core';

import {
  nameMock,
  optionsMock,
  placeholderMock
} from '../../data/core-selector';
import { OptionsModel } from '../../models/options.model';

@Component({
  selector: 'app-core-selector',
  templateUrl: './core-selector.component.html',
  styleUrls: ['./core-selector.component.scss']
})
export class CoreSelectorComponent implements OnInit {
  name = nameMock;
  options: OptionsModel[] = optionsMock;
  placeholder = placeholderMock;
  value = null;

  selectElementHandlerResult: string;

  constructor() { }

  ngOnInit() {
  }

  selectElementHandler(detail) {
    this.selectElementHandlerResult = detail;
  }

}
