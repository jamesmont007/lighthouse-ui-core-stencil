import { Component, OnInit } from '@angular/core';
import { EVAL_LIST, EVAL_SINGLE } from 'src/app/data/skill-evaluation';

@Component({
  selector: 'app-skill-evaluation',
  templateUrl: './skill-evaluation.component.html',
})
export class SkillEvaluationComponent implements OnInit {
  data: any[];
  newSkill: any = null;
  completeData: any[]; // = [...EVALUATION, EVALUATION_SINGLE];
  constructor() {}

  ngOnInit() {
    this.data = EVAL_LIST;
    this.completeData = [
      { skillId: 'idSkill6', displayName: 'Valoracion super extraña 6' },
    ];
  }

  handleSubmit(result) {
    console.log(JSON.stringify(result, null, 2));
  }

  handleNewSkill(skillId) {
    this.newSkill = EVAL_SINGLE;
  }
}
