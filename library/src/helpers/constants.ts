// tslint:disable: linebreak-style
export const NAME_MIN_LENGTH = 5;
export const NAV_WIDTH = 240;

export const DEFAULT_OPT = 'Was not assessed';
export const NO_INFO = 'No information';
export const ENGLISH_NAME = 'english';

export const BLANK_IMAGE = "data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E";

export const ERROR = {
  EVALUATOR: 'Invalid evaluator name (minimum 5 characters)',
  DATE: 'Invalid date',
  INCOMPLETE: 'The \'___\' skill has been assessed but has no observations',
  REQUIRED: 'There are mandatory skills that have not yet been filled out. Please check',
  EMPTY: 'No skill has been assessed',
  NO_DISCIPLINE: 'No discipline has been selected. Please check'
};

export enum DisplayEvaluationTypeEnum {
  EXPERT = 'Expert',
  PEER = 'Peers',
  SELF = 'Self Assessment'
}

export enum EvaluationTypeEnum {
  EXPERT,
  PEER,
  SELF,
}

export const LEVEL_DESCRIPTION = {
  0: 'No Knowledge',
  1: 'Very Low',
  2: 'Low',
  3: 'Medium',
  4: 'High',
  5: 'Very high'
};

export const SKILLS = [
  {
    label: 'Expert',
    value: 5,
  },
  {
    label: 'Advanced',
    value: 4,
  },
  {
    label: 'Intermediate',
    value: 3,
  },
  {
    label: 'Novice',
    value: 2,
  },
  {
    label: 'Fundamental',
    value: 1,
  },
];

export const GROWTH_PLAN_STATUS = {
  0: 'To do',
  1: 'Doing',
  2: 'Done',
  3: 'Suspended or Declined',
  4: 'Suggested/Rejected',
};

export enum GrowthPlanEnum {
  TO_DO,
  DOING,
  DONE,
  SUSPENDED_DECLINED,
  SUGGESTED,
  REJECTED
}

export enum GrowthPlanStatus {
  TO_DO = 'To do',
  DOING = 'Doing',
  DONE = 'Done',
  SUSPENDED_DECLINED = 'Suspended/Declined',
  SUGGESTED = 'Suggested',
  REJECTED = 'Rejected'
}

export enum growthPlanValidations {
  TITLE_PLAN = 'Validate your info plan',
  PROJECTION_EMPTY_TITLE = 'Validate your projection',
  PROJECTION_EMPTY_MESSAGE = 'The projection field cannot be empty',
  CHANGE_FROM_DONE_TITLE = 'Cannot change ___',
  CHANGE_FROM_DONE_MESSAGE = 'The ___ cannot be changed as the --- is already mark as done',
  GOAL_HIGHER_DATE = 'The estimated date of your action cannot be greater than the due date of your goal',
  FINISH_GOALS = 'For finish plan all goals and actions must be done or suspended',
  FINISH_SUGGESTED = 'For finish plan all suggested goals and actions must be accepted or rejected'
}
