import { SkillModel } from './skill.model';

export interface FormModel {
  id: string;
  name: string;
  description?: string;
  disciplineId: string;
  enabled: boolean;
  roleId?: string;
  skills: SkillModel[];
  categories: CategoryModel[];
  isImpactMatrix?: boolean;
}

export interface CategoryModel {
  id: string;
  name: string;
  description?: string;
  enabled: boolean;
  position: number;
  skills?: SkillModel[];
  visible?: boolean;
}
