export interface SkillModel {
  skillId: string;
  displayName: string;
  description?: string;
  descriptionLevelOne?: string;
  descriptionLevelTwo?: string;
  descriptionLevelThree?: string;
  descriptionLevelFour?: string;
  descriptionLevelFive?: string;
  skillsetId?: string;
  categoryId?: string;
  enabled?: boolean;
  position?: number;
  mandatory?: boolean;
  levelRequired?: number;
  details?: SkillDetailsModel[];
  selectedLevel?: number;
  comments?: string;
  tags?: string[];
  showInfo?: boolean;

  // Used by the frontend
  englishLabel?: string;
}

export interface SkillDetailsModel {
  id: string;
  description: string;
  position: number;
  enabled: boolean;
}

export interface SkillSet {
  id: string;
  name: string;
  level: number;
  targetLevel: number;
  categories?: string[];
  userStatus?: number[];
  skillsLevels: SkillsLevels[];
}
export interface SkillsLevels{
  skillId: string;
  level: number;
  name?: string;
}

export interface SelfAssessmentModel {
  skill: SkillModel;
  newLevel: number;
  moreDetails: boolean;
}
