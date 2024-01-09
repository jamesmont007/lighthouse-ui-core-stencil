export interface PlanModel {
  id?: string;
  name?: string;
  projection?: string;
  mentors?: string[];
  goals: GoalModel[];
}

export interface GoalModel {
  id?: string;
  description?: string;
  state?: number;
  startDate?: string;
  dueDate?: string;
  skills?: string[];
  isVisible?: boolean;
  comments?: CommentModel[];
  actions?: ActionModel[];
  suggestedByName?: string;
}

export interface CommentModel {
  id?: string;
  author?: string;
  comment?: string;
  date?: string;
}

export interface ActionModel {
  goal?: GoalModel;
  id?: string;
  disabled?: boolean;
  isVisible?: boolean;
  description?: string;
  projection?: string;
  name?: string;
  state?: number;
  startDate?: string;
  dueDate?: string;
  suggestedByName?: string;
  inToDoActions?: SubCategoriActionModel[];
  inDoingActions?: SubCategoriActionModel[];
  inSuspendedOrDeclineActions?: SubCategoriActionModel[];
  inDoneActions?: SubCategoriActionModel[];
  inSuggestedOrRejectedActions?: SubCategoriActionModel[];
}

export interface SubCategoriActionModel {
  id?: string;
  description?: string;
  state?: number;
  goal?: GoalModel;
  startDate?: string;
  dueDate?: string;
  comments?: CommentModel[];
  disabled?: boolean;
  suggestedByName?: string;
}

export interface BoardActionModel extends SubCategoriActionModel {
  isVisible?: boolean;
}

export interface DueDateModel {
  id: string;
  dueDate: string;
}

export interface StateModel {
  id: string;
  state: string | number;
}

export interface ErrorsModel {
  title: string;
  message: string;
  type: string;
}

export interface ActionGoalSuggestedModel {
  goalId: string;
  actionId: string;
}
