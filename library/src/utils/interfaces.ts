export interface Skill {
  activeSkill: string;
  description: string;
  displayName: string;
  requiresValidation: string;
  skillId: string;
}
export interface Form {
  formId: string;
  name: string;
}
export interface Discipline {
  id: string;
  name: string;
}
export interface AssesFormat {
  form: Form;
  discipline: Discipline;
}
export interface NavbarEvaluationFormatted {
  label: string;
  id: string;
}

export interface SkillItem {
  skillId: string;
  displayName: string;
}
