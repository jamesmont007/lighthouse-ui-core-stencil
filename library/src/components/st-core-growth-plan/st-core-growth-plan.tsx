import {
  Component,
  Host,
  h,
  Prop,
  State,
  Event,
  EventEmitter,
  Watch,
  Method,
} from '@stencil/core';

import {
  GrowthPlanEnum,
  growthPlanValidations,
  GROWTH_PLAN_STATUS,
} from '../../helpers/constants';
import {
  ActionGoalSuggestedModel,
  DueDateModel,
  ErrorsModel,
  GoalModel,
  PlanModel,
  StateModel,
  SubCategoriActionModel,
} from '../../models/goal.model';

@Component({
  tag: 'st-core-growth-plan',
  styleUrl: 'st-core-growth-plan.scss',
  shadow: true,
})
export class StCoreGrowthPlan {
  @Prop() plan: PlanModel;
  @Prop() currentPlanBoard: any;
  @Prop() mentors: string[];
  @Prop() mentorMode = false;
  @Prop() listMode = true;

  @Event() updateProjection: EventEmitter<string>;
  @Event() updateMentors: EventEmitter<boolean>;
  @Event() addGoal: EventEmitter<boolean>;
  @Event() showBoardAddAction: EventEmitter<boolean>;
  @Event() seeHistory: EventEmitter<boolean>;
  @Event() errors: EventEmitter<ErrorsModel>;

  @Event() updateGoalState: EventEmitter<StateModel>;
  @Event() updateGoalDate: EventEmitter<DueDateModel>;
  @Event() showGoalInfo: EventEmitter<string>;
  @Event() filterPlanByName: EventEmitter<string>;
  @Event() showAddAction: EventEmitter<GoalModel>;
  @Event() showBoardEditAction: EventEmitter<SubCategoriActionModel>;

  @Event() updateActionState: EventEmitter<StateModel>;
  @Event() updateActionDate: EventEmitter<DueDateModel>;
  @Event() showActionInfo: EventEmitter<string>;
  @Event() actionSuggestedRejected: EventEmitter<ActionGoalSuggestedModel>;
  @Event() actionSuggestedAccepted: EventEmitter<ActionGoalSuggestedModel>;
  @Event() goalSuggestedRejected: EventEmitter<string>;
  @Event() goalSuggestedAccepted: EventEmitter<string>;

  @Event() switchMode: EventEmitter<boolean>;
  @Event() finishPlan: EventEmitter<PlanModel>;

  @State() editProjectionMode = false;
  @State() innerPlan: PlanModel;
  @State() innerCurrentPlanBoard: any;
  @State() innerMentors: string[];
  @State() projectionHasLength: boolean;
  @State() filterWord = '';
  @State() innerListMode: boolean;

  @Watch('plan')
  updatePlan(newValue: PlanModel) {
    if (this.filterWord) {
      this.innerPlan = this.filterPlan(this.plan, this.filterWord);
    } else {
      this.innerPlan = newValue;
    }
    this.reRenderGoals();
  }

  @Watch('currentPlanBoard')
  updateCurrentPlanBoard(newValue: any) {
    this.innerCurrentPlanBoard = newValue;
  }

  @Watch('mentors')
  updateMentor(newValue: string[]) {
    this.innerMentors = newValue;
  }

  @Watch('listMode')
  updateListMode(newValue) {
    this.innerListMode = newValue;
  }

  @Method()
  async clearFilter() {
    this.filterInputRef.value = '';
    this.filterWord = '';
  }

  handleEditProjection() {
    this.editProjectionMode = !this.editProjectionMode;
  }

  projectionTextareaRef: HTMLTextAreaElement;
  filterInputRef: HTMLInputElement;
  goalsToRender: {
    state: number;
    goals: GoalModel[];
  }[];
  planStatus = GROWTH_PLAN_STATUS;

  componentWillLoad() {
    this.innerPlan = this.plan;
    if (this.currentPlanBoard) {
      this.innerCurrentPlanBoard = this.currentPlanBoard;
    }
    this.innerMentors = this.mentors;
    this.projectionHasLength = !!this.innerPlan.projection.length;
    this.innerListMode = this.listMode;
    this.reRenderGoals();
  }

  reRenderGoals(): void {
    const sortArr = [0, 1, 3, 2, 4];
    this.goalsToRender = this.innerPlan.goals
      .reduce((acc, curr) => {
        const state =
          curr.state === GrowthPlanEnum.SUGGESTED ||
            curr.state === GrowthPlanEnum.REJECTED
            ? GrowthPlanEnum.SUGGESTED
            : curr.state;
        const i = acc.findIndex((element) => element.state === state);
        if (i > -1) {
          acc[i].goals = [...acc[i].goals, curr];
        } else {
          acc = [
            ...acc,
            {
              state,
              goals: [curr],
            },
          ];
        }
        return acc;
      }, [])
      .sort((a, b) => sortArr.indexOf(a.state) - sortArr.indexOf(b.state));
  }

  filterPlan(plan: PlanModel, partialSearch: string) {
    const filteredPlan = {
      ...plan,
      goals: plan.goals
        .map((goal) => {
          const filteredActions = goal.actions.filter((action) =>
            this.containsWord(action.description, partialSearch)
          );
          if (
            this.containsWord(goal.description, partialSearch) &&
            filteredActions.length > 0
          ) {
            return {
              ...goal,
              actions: filteredActions,
            };
          }
          if (this.containsWord(goal.description, partialSearch)) {
            return {
              ...goal,
              actions: goal.actions,
            };
          }
          if (filteredActions.length > 0) {
            return {
              ...goal,
              actions: filteredActions,
            };
          }
          return null;
        })
        .filter((filteredGoal) => filteredGoal !== null),
    };
    return filteredPlan;
  }

  containsWord(text: string, searchTerm: string): boolean {
    const searchWords = searchTerm
      .toLowerCase()
      .split(' ')
      .filter((word) => word !== '');
    const words = text
      .toLowerCase()
      .split(' ')
      .filter((word) => word !== '');

    return searchWords.every((searchWord) =>
      words.some((word) => word.includes(searchWord))
    );
  }

  handleUpdateProjection() {
    if (this.editProjectionMode) {
      const projection = this.projectionTextareaRef.value;
      if (!projection.length) {
        return this.errors.emit({
          title: growthPlanValidations.PROJECTION_EMPTY_TITLE,
          message: growthPlanValidations.PROJECTION_EMPTY_MESSAGE,
          type: 'warning',
        });
      }
      this.updateProjection.emit(this.projectionTextareaRef.value);
    }
    this.editProjectionMode = !this.editProjectionMode;
  }

  handleUpdateMentors() {
    this.updateMentors.emit(true);
  }

  handleFilter(e: Event) {
    this.filterWord = (e.target as HTMLInputElement).value;
    this.innerPlan = this.filterPlan(this.plan, this.filterWord);
    this.filterPlanByName.emit(this.filterWord);
    this.reRenderGoals();
  }

  handleClearFilter() {
    this.filterInputRef.value = '';
    this.filterWord = '';
    this.filterPlanByName.emit(this.filterWord);
    this.innerPlan = this.plan;
    this.reRenderGoals();
  }

  handleAddGoal() {
    this.addGoal.emit(true);
  }

  handleAddAction() {
    this.showBoardAddAction.emit(true);
  }

  handleFinishPlan() {
    this.finishPlan.emit(this.innerPlan);
  }

  handleProjectionLength(event: Event) {
    this.projectionHasLength = !!(event.target as HTMLInputElement).value;
  }

  handleSeeHistory() {
    this.seeHistory.emit(true);
  }

  render() {
    return (
      <Host>
        <section class={'plan'}>
          <div class={'plan-header'}>
            <div class="plan-header__top">
              <h1 class={'plan-header__title'}>{this.innerPlan.name}</h1>
              {!this.mentorMode ? '' :
                <button
                  onClick={() => this.handleSeeHistory()}
                  class={'btn btn-secondary'}>
                  See history
                </button>
              }
            </div>
            <div class={'plan-header-body'}>
              <div class={'plan-header-body-projection plan-header-body--pd'}>
                <div class={'plan-header-body-projection-info'}>
                  <span class={'plan-header-body-projection-info__title'}>
                    Projection
                  </span>
                  {!this.mentorMode && (
                    <span
                      class={'plan-header-body-projection-info__edit'}
                      onClick={() => this.handleUpdateProjection()}
                    >
                      <i class='icon icon-pen' />
                      <span class={'ml-1'}>
                        {this.editProjectionMode
                          ? 'Finish editing'
                          : 'Edit projection'}
                      </span>
                    </span>
                  )}
                </div>
                {this.mentorMode ? (
                  <span>{this.innerPlan.projection}</span>
                ) : (
                  <textarea
                    class={`form-control plan-header-body-projection__area ${(this.editProjectionMode && 'bg-white',
                      !this.projectionHasLength &&
                      'plan-header-body-projection__area-error')
                      }`}
                    value={this.innerPlan.projection}
                    disabled={!this.editProjectionMode}
                    onInput={(e) => this.handleProjectionLength(e)}
                    ref={(el) => (this.projectionTextareaRef = el)}
                  ></textarea>
                )}
                {!this.projectionHasLength && (
                  <span class={'plan-header-body-projection__area-error-msg'}>
                    The projection field cannot be empty
                  </span>
                )}
              </div>
              {
                !this.mentorMode &&
                <div class={'plan-header-body-mentors plan-header-body--pd'}>
                  <div class={'plan-header-body-mentors-info'}>
                    <span class={'plan-header-body-mentors-info__title'}>
                      Mentors
                    </span>
                    <span
                      onClick={() => this.handleUpdateMentors()}
                      class={'plan-header-body-mentors-info__edit'}
                    >
                      <i class='icon icon-pen' />
                      <span class={'ml-1'}>Edit mentors</span>
                    </span>
                  </div>
                  <p>
                    {this.innerMentors?.join(', ') ||
                      'You do not have mentors yet'}
                  </p>
                </div>
              }
            </div>
          </div>
          <div class={'plan-table'}>
            <div class={'plan-table-header'}>
              <div class={'plan-table-header-filter'}>
                <div class={'plan-table-header-filter__input'}>
                  <span>{this.listMode ? 'Goal or action' : 'Action or goal'}</span>
                  <input
                    ref={(el) => (this.filterInputRef = el)}
                    onInput={(e) => this.handleFilter(e)}
                    class={'form-control'}
                    type='text'
                  />
                </div>
                <button
                  onClick={() => this.handleClearFilter()}
                  class={'btn btn-secondary'}
                >
                  <i class={`icon icon-clear`}></i>
                  <span>Clear filter</span>
                </button>
                {this.mentorMode ? '' :
                  <div class='plan-table-header__icons'>
                    <div
                      class={'plan-table-header__icons-board'}
                      onClick={() => {
                        this.handleClearFilter();
                        this.switchMode.emit(false);
                      }}
                    >
                      <img
                        src={`../../../../../assets/icons/${this.listMode ? 'modeboardblack.svg' : 'modeboardred.svg'}`}
                        alt='board'
                      />
                      <span class={'ml-2'}>Board</span>
                    </div>
                    <div
                      class={'plan-table-header__icons-list'}
                      onClick={() => {
                        this.handleClearFilter();
                        this.switchMode.emit(true);
                      }}
                    >
                      <img
                        src={`../../../../../assets/icons/${this.listMode ? 'modelistred.svg' : 'modelistblack.svg'}`}
                        alt='list'
                      />
                      <span class={'ml-2'}>List</span>
                    </div>
                  </div>
                }
              </div>
              {this.listMode ?
                <button
                  onClick={() => this.handleAddGoal()}
                  class={this.mentorMode ? 'btn btn-secondary' : 'btn btn-primary'}
                >
                  {this.mentorMode ? 'Suggest goal' : 'Add goal'}
                </button> :
                <button
                  onClick={() => this.handleAddAction()}
                  class={'btn btn-primary'}
                >
                  Add action
                </button>
              }
            </div>
            {
              this.innerListMode ?
                <st-core-plan-list
                  goalsToRender={this.goalsToRender}
                  mentorMode={this.mentorMode}
                  onUpdateGoalStateList={(e) => this.updateGoalState.emit(e.detail)}
                  onCardMoved={(e) => this.updateGoalState.emit(e.detail)}
                  onUpdateGoalDateList={(e) => this.updateGoalDate.emit(e.detail)}
                  onShowGoalInfoList={(e) => this.showGoalInfo.emit(e.detail)}
                  onShowAddActionList={(e) => this.showAddAction.emit(e.detail)}
                  onUpdateActionStateList={(e) => this.updateActionState.emit(e.detail)}
                  onUpdateActionDateList={(e) => this.updateActionDate.emit(e.detail)}
                  onShowActionInfoList={(e) => this.showActionInfo.emit(e.detail)}
                  onErrorsList={(e) => this.errors.emit(e.detail)}
                  onActionSuggestedRejectedList={(e) => this.actionSuggestedRejected.emit(e.detail)}
                  onActionSuggestedAcceptedList={(e) => this.actionSuggestedAccepted.emit(e.detail)}
                  onGoalSuggestedRejectedList={(e) => this.goalSuggestedRejected.emit(e.detail)}
                  onGoalSuggestedAcceptedList={(e) => this.goalSuggestedAccepted.emit(e.detail)}
                /> :
                <st-core-board
                  actionsToRender={this.innerCurrentPlanBoard}
                  onCardMoved={(e) => this.updateActionState.emit(e.detail)}
                  mentorMode={this.mentorMode}
                  onUpdateGoalStateList={(e) => this.updateGoalState.emit(e.detail)}
                  onUpdateGoalDateList={(e) => this.updateGoalDate.emit(e.detail)}
                  onShowGoalInfoList={(e) => this.showGoalInfo.emit(e.detail)}
                  onShowAddActionList={(e) => this.showAddAction.emit(e.detail)}
                  onEditToDoAction={(e) => this.showBoardEditAction.emit(e.detail)}
                  onEditDoingAction={(e) => this.showBoardEditAction.emit(e.detail)}
                  onEditSuspendedDeclinedAction={(e) => this.showBoardEditAction.emit(e.detail)}
                  onEditDoneAction={(e) => this.showBoardEditAction.emit(e.detail)}
                  onUpdateActionStateList={(e) => this.updateActionState.emit(e.detail)}
                  onUpdateActionDateList={(e) => this.updateActionDate.emit(e.detail)}
                  onShowActionInfoBoard={(e) => this.showActionInfo.emit(e.detail)}
                  onErrorsList={(e) => this.errors.emit(e.detail)}
                  onActionSuggestedAcceptedBoard={(e) => this.actionSuggestedAccepted.emit(e.detail)}
                  onActionSuggestedRejectedBoard={(e) => this.actionSuggestedRejected.emit(e.detail)}
                  onGoalSuggestedRejectedBoard={(e) => this.goalSuggestedRejected.emit(e.detail)}
                  onGoalSuggestedAcceptedBoard={(e) => this.goalSuggestedAccepted.emit(e.detail)}
                />
            }
          </div>
          {
            !this.mentorMode &&
            <div class={'plan-btn-finish'}>
              <button
                onClick={() => this.handleFinishPlan()}
                class={'btn btn-secondary'}
              >
                Finish plan
              </button>
            </div>
          }
        </section>
      </Host>
    );
  }
}
