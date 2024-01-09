import { EvaluationTypeEnum } from '../helpers/constants';

export interface UserSkillModel {
  skillId?: string;
  displayName?: string;
  date?: string;
  level?: number;
  tags?: string[];
  isVisible?: boolean;
  historic?: EvaluationHistoricModel[];
  observation?: string;
  evaluationType?: EvaluationTypeModel[];
  type?: EvaluationTypeEnum;
  discipline?: DisciplineSkillModel;
  observations?: string;
  identifiedBy?: string;
  favoriteSkill?: boolean;
}

export interface EvaluationTypeModel {
  type: EvaluationTypeEnum;
  evaluator?: string;
  level: number;
  date: string;
}

export interface EvaluationHistoricModel {
  evaluator: string;
  kind: string;
  date: string;
  level: number;
  comment: string;
  showComment?: boolean;
  details: DetailsEvaluationHistoricModel[];
}

export interface DetailsEvaluationHistoricModel {
  detail: string;
  answer: number;
}

export interface DisciplineSkillModel {
  id: string;
  name: string;
}
