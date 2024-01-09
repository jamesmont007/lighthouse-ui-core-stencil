import { DetailModel } from './detail.model';

export interface SkillDetailModel {
  skillId: string;
  displayName: string;
  assessmentDate: string;
  comments: string;
  evaluator: string;
  details: DetailModel[];
  level: number;
}
