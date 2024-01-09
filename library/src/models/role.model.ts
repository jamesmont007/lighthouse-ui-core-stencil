import { SkillModel } from './skill.model';
import { SkillsetModel } from './skillset.model';

export interface RoleModel {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  skillsets: SkillsetModel[];
  skills: SkillModel[];
}
