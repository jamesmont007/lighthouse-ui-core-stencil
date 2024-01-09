import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { USERNAME, SKILLS } from '../../data/select-skill';

@Component({
  selector: 'app-select-skill',
  templateUrl: './select-skill.component.html',
  styleUrls: ['./select-skill.component.scss']
})
export class SelectSkillComponent implements OnInit {
  userName: string = USERNAME;
  searchSkillArray: any = SKILLS;

  selectSkillHandlerResult: string;

  constructor() { }

  ngOnInit() {
  }

  selectSkillHandler(detail) {
    this.selectSkillHandlerResult = detail;
  }

}
