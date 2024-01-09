export interface SkillModel {
  details?: any;
  skillId: string;
  displayName: string;

  skillTypeDisplayName?: string;

  activeSkill?: boolean;
  description?: string;
  skillTypeId?: string;
  skillTypeName?: string;
  requiresValidation?: boolean | string;

  radarLevel?: string;
  radarDescription?: string;

  trendingSkill?: boolean;

  descriptionLevel1?: string;
  descriptionLevel2?: string;
  descriptionLevel3?: string;
  descriptionLevel4?: string;
  descriptionLevel5?: string;
}
