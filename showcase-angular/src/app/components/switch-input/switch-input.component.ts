import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-input',
  templateUrl: './switch-input.component.html',
  styleUrls: ['./switch-input.component.scss']
})
export class SwitchInputComponent implements OnInit {
  dataAutomation = 'dataAutomationExample';
  isDisabled = false;
  value = false;

  handleSwitchHappenResult: string;

  constructor() { }

  ngOnInit() {
  }

  handleSwitchHappen(detail) {
    this.handleSwitchHappenResult = detail;
  }

}
