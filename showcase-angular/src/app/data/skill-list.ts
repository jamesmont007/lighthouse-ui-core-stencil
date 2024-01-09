import { UserSkillModel } from '../models/user-skill.model';

export const userSkills: UserSkillModel[] = [
  {
    skillId: '1',
    displayName: 'C1',
    skillTypeName: 'Type 1',
    level: 5,
    assessmentDate: '2018-04-10T00:00:00Z',
    selfAssessmentLevel: 5,
    selfAssessmentDate: null,
    observations: 'This is an observation',
    evaluator: 'User 1',
  },
  {
    skillId: '2',
    displayName: 'C2',
    skillTypeName: 'Type 2',
    level: 3,
    assessmentDate: '2018-04-10T00:00:00Z',
    selfAssessmentLevel: 0,
    selfAssessmentDate: null,
    observations: 'Here there is an observation',
    evaluator: 'User 2',
  }
];
