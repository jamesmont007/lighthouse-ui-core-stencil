import { UserSkillModel } from './User-skill.model';

export interface UserModel {
  id?: string;
  fullName?: string;
  email?: string;
  enabled?: string;

  // Old fields
  jauthId: string;
  img?: string;
  ldapId?: string;
  name: string;
  selected?: boolean;
  userSkills?: UserSkillModel[];
}
