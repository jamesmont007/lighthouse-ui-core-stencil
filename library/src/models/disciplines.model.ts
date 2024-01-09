import { RoleModel } from './role.model';

export interface DisciplineModel{
  name: string;
  roles: RoleModel[];
}
