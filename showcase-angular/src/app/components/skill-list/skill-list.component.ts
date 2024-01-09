import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';

import { SkillModel } from '../../models/skill.model';
import { UserSkillModel } from '../../models/user-skill.model';
import { userSkills } from '../../data/skill-list';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit {
  userSkills: UserSkillModel[] = userSkills;
  isAdmin = false;
  currentSkill: number = null;

  selectedSkillHandlerResult: SkillModel;
  selectedSkillHandlerIndexResult: number;
  createSkillHandlerResult: string;

  constructor() { }

  ngOnInit() {
  }

  getLevelToShow() {
    return [
      '',
      'Muy bajo',
      'Bajo',
      'Medio',
      'Alto',
      'Muy alto'
    ];
  }

  selectedSkillHandler({selectedSkill, index}: {selectedSkill: SkillModel, index: number}) {
    this.selectedSkillHandlerResult = selectedSkill;
    this.selectedSkillHandlerIndexResult = index;
  }

  createSkillHandler() {
    this.createSkillHandlerResult = 'createSkill called!';
  }

}
