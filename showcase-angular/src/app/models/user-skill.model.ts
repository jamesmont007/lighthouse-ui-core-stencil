export interface UserSkillModel {
  jauthId?: string;
  skillId: string;
  displayName: string;
  skillTypeName: string;
  skillTypeId?: string;
  evaluator: string;
  level: number;
  assessmentDate: string;
  selfAssessmentLevel: number;
  selfAssessmentDate: string;
  observations: string;
}
