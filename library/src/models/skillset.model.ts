import { SkillModel } from './skill.model';

export interface SkillsetModel {
    id: string;
    name: string;
    description: string;
    enabled: boolean;
    avgLevel: number;
    skills?: SkillModel[];
  }
