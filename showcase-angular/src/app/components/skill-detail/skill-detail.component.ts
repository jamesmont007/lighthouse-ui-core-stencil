import { Component, OnInit } from '@angular/core';

import { skill } from '../../data/skill-detail';
import { SkillDetailModel } from 'src/app/models/skill-detail.model';

@Component({
  selector: 'app-skill-detail',
  templateUrl: './skill-detail.component.html',
  styleUrls: ['./skill-detail.component.scss']
})
export class SkillDetailComponent implements OnInit {
  skill: SkillDetailModel = skill;

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
      'Muy alto',
    ];
  }

}
