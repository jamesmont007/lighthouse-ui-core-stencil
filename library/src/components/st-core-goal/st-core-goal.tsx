import {
  Component,
  Host,
  h,
  Prop,
  EventEmitter,
  Event,
  State,
  Watch,
} from '@stencil/core';
import moment from 'moment';

import {
  GrowthPlanEnum,
  GrowthPlanStatus,
  growthPlanValidations,
} from '../../helpers/constants';
import { DetailEvent, OptionsModel } from '../../models';
import {
  ActionGoalSuggestedModel,
  ActionModel,
  DueDateModel,
  ErrorsModel,
  GoalModel,
  StateModel,
} from '../../models/goal.model';
import { Fragment } from '../../utils/fragment';

@Component({
  tag: 'st-core-goal',
  styleUrl: 'st-core-goal.scss',
  shadow: true,
})
export class StCoreGoal {
  @Prop() goal: GoalModel;
  @Prop() statusOptions: OptionsModel[];
  @Prop() mentorMode: boolean;
  @Event() goalState: EventEmitter<StateModel>;
  @Event() goalDate: EventEmitter<DueDateModel>;
  @Event() goalInfo: EventEmitter<string>;
  @Event() addAction: EventEmitter<GoalModel>;
  @Event() actionRejected: EventEmitter<ActionGoalSuggestedModel>;
  @Event() actionAccepted: EventEmitter<ActionGoalSuggestedModel>;
  @Event() goalRejected: EventEmitter<string>;
  @Event() goalAccepted: EventEmitter<string>;

  @Event() actionState: EventEmitter<StateModel>;
  @Event() actionDate: EventEmitter<DueDateModel>;
  @Event() actionInfo: EventEmitter<string>;
  @Event() goalErrors: EventEmitter<ErrorsModel>;

  @State() innerGoal: GoalModel;
  @State() selectedState: number;
  @State() selectedDueDate: string;
  @State() DUE_DATE: string;

  @Watch('goal')
  updateGoal(newValue) {
    this.innerGoal = { ...newValue, isVisible: true };
    this.selectedState = this.innerGoal.state;
    this.selectedDueDate = this.innerGoal.dueDate;
    this.DUE_DATE = this.formatDate(this.innerGoal.dueDate);
  }

  private readonly TODAY = this.formatDate(new Date());

  componentWillLoad() {
    this.innerGoal = { ...this.goal, isVisible: true };
    this.DUE_DATE = this.formatDate(this.innerGoal.dueDate);
    this.innerGoal.actions = this.goal.actions.sort((a, b) =>
      moment(a.dueDate).diff(b.dueDate)
    );
    this.selectedState = this.innerGoal.state;
    this.selectedDueDate = this.innerGoal.dueDate;
  }

  formatDate(date) {
    return moment.parseZone(date).format('YYYY-MM-DD');
  }

  handleGoalState(e: Event, id: string) {
    this.selectedState = Number((e.target as HTMLStCoreSelectorElement).value);
    this.goalState.emit({ id, state: (e.target as HTMLStCoreSelectorElement).value });
  }

  handleGoalDateChange(e: DetailEvent, id: string) {
    this.selectedDueDate = e.detail;
    this.goalDate.emit({ id, dueDate: e.detail });
    this.DUE_DATE = this.formatDate(e.detail);
  }

  handleAddActionToGoal() {
    this.addAction.emit(this.goal);
  }

  handleGoalInfo() {
    this.goalInfo.emit(this.goal.id);
  }

  handleActionStateChange(e: Event, action: ActionModel) {
    const id = action.id;
    this.actionState.emit({ id, state: (e.target as HTMLStCoreSelectorElement).value });
  }

  handleActionDateChange(e: DetailEvent, action: ActionModel) {
    if (
      moment(action.dueDate).diff(moment(this.innerGoal.dueDate), 'days') >= 1
    ) {
      return this.goalErrors.emit({
        title: growthPlanValidations.TITLE_PLAN,
        message: growthPlanValidations.GOAL_HIGHER_DATE,
        type: 'warning',
      });
    }
    const id = action.id;
    return this.actionDate.emit({ id, dueDate: e.detail });
  }

  handleActionInfo(actionId: string) {
    this.actionInfo.emit(actionId);
  }

  changeVisible() {
    this.innerGoal = {
      ...this.innerGoal,
      isVisible: !this.innerGoal.isVisible,
    };
  }

  showAddButton(): boolean {
    let validation = false;
    if(this.mentorMode) {
      validation = this.innerGoal.state !== GrowthPlanEnum.DONE &&
      this.innerGoal.state !== GrowthPlanEnum.REJECTED;
    } else {
      validation = this.innerGoal.state !== GrowthPlanEnum.DONE &&
      this.innerGoal.state !== GrowthPlanEnum.REJECTED &&
      this.innerGoal.state !== GrowthPlanEnum.SUGGESTED;
    }
    return validation;
  }

  render() {
    const goalIsInactive = this.selectedState === GrowthPlanEnum.SUGGESTED ||
      this.selectedState === GrowthPlanEnum.REJECTED ||
      this.selectedState === GrowthPlanEnum.DONE ||
      this.mentorMode;
    return (
      <Host class={goalIsInactive ? 'not-draggable' : 'draggable'}>
        <table class={'table'}>
          <thead class={'table-head'}>
            <tr class={'table-head-row'}>
              <th class={'table--w-25 table-head-row__goal'}>
              <div class={goalIsInactive ? '' : 'drag-icon'}></div>
                <span class={'table-head-row__goal-title gray-text'}>
                  {this.innerGoal.description}
                </span>
              </th>
              <th class={'table--w-15'}>
                {this.innerGoal.suggestedByName}
              </th>
              <th class={'table--w-15'}>
                {this.innerGoal.state === GrowthPlanEnum.SUGGESTED ||
                this.innerGoal.state === GrowthPlanEnum.REJECTED ? (
                  <div class={'table-head-row-icons'}>
                    {this.innerGoal.state === GrowthPlanEnum.SUGGESTED ? (
                      <span>{GrowthPlanStatus.SUGGESTED}</span>
                    ) : (
                      <span>{GrowthPlanStatus.REJECTED}</span>
                    )}
                    {!this.mentorMode && this.innerGoal.state === GrowthPlanEnum.SUGGESTED && (
                      <Fragment>
                        <img
                          onClick={() =>
                            this.goalRejected.emit(this.innerGoal.id)
                          }
                          src='assets/icons/icon-reject.svg'
                          alt='reject'
                        />
                        <img
                          onClick={() =>
                            this.goalAccepted.emit(this.innerGoal.id)
                          }
                          src='assets/icons/icon-green-check.svg'
                          alt='check'
                        />
                      </Fragment>
                    )}
                  </div>
                ) : !this.mentorMode &&
                  this.innerGoal.state !== GrowthPlanEnum.DONE ? (
                  <st-core-selector
                    classSelect='table-head__select'
                    name='goalSelector'
                    options={this.statusOptions}
                    selected={this.selectedState}
                    onChange={(e: Event) =>
                      this.handleGoalState(e, this.innerGoal.id)
                    }
                  />
                ) : (
                  <span class={'black-text ml-2'}>
                    {GrowthPlanStatus[GrowthPlanEnum[this.innerGoal.state]]}
                  </span>
                )}
              </th>
              <th class={'table--w-10'}>
                <span class={'black-text'}>
                  {this.formatDate(this.innerGoal.startDate)}
                </span>
              </th>
              <th class={'table--w-15'}>
                {!this.mentorMode &&
                this.innerGoal.state !== GrowthPlanEnum.DONE &&
                this.innerGoal.state !== GrowthPlanEnum.SUGGESTED &&
                this.innerGoal.state !== GrowthPlanEnum.REJECTED ? (
                  <st-core-date-picker
                    value={this.formatDate(this.selectedDueDate)}
                    min={this.TODAY}
                    onChangeDate={(e: DetailEvent) =>
                      this.handleGoalDateChange(e, this.innerGoal.id)
                    }
                  />
                ) : (
                  <span class={'black-text ml-2'}>
                    {this.formatDate(this.innerGoal.dueDate)}
                  </span>
                )}
              </th>
              <th class={'table--w-10 text-center'}>
                {this.showAddButton() &&
                   (
                    <span
                      onClick={() => this.handleAddActionToGoal()}
                      class={'red-text'}
                    >
                      {this.mentorMode ? '+ suggest Action' : '+ add Action'}
                    </span>
                  )}
              </th>
              <th class={'table--w-10'}>
                <div class={'table-head-row-info'}>
                  <span
                    onClick={() => this.handleGoalInfo()}
                    class={'red-text'}
                  >
                    +Info
                  </span>
                  <span onClick={() => this.changeVisible()}>
                    {this.innerGoal.isVisible ? (
                      <i class='icon icon-arrow-up ml-2' />
                    ) : (
                      <i class='icon icon-arrow-down ml-2' />
                    )}
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          {this.innerGoal.isVisible && (
            <tbody>
              <tr>
                <td colSpan={7}>
                  <table class={'table'}>
                    <tbody>
                      {this.innerGoal.actions.map((action, i) => (
                        <tr
                          key={i}
                          class={`${
                            (action.state === GrowthPlanEnum.DONE ||
                              action.state === GrowthPlanEnum.REJECTED ||
                              this.innerGoal.state === GrowthPlanEnum.DONE)
                              &&
                            'bg-gray'
                          }`}
                        >
                          <td class={'table--w-25 gray-text'}>
                            {action.description}
                          </td>
                          <td class={'table--w-15'}>
                            {action.suggestedByName}
                          </td>
                          <td class={'table--w-15'}>
                            {action.state === GrowthPlanEnum.SUGGESTED ||
                            action.state === GrowthPlanEnum.REJECTED ? (
                              action.state === GrowthPlanEnum.SUGGESTED ? (
                                <div class={'table-head-row-icons'}>
                                  <span>{GrowthPlanStatus.SUGGESTED}</span>
                                  {
                                    !this.mentorMode &&
                                    <Fragment>
                                      <img
                                        onClick={() =>
                                          this.actionRejected.emit({
                                            goalId: this.innerGoal.id,
                                            actionId: action.id,
                                          })
                                        }
                                        src='assets/icons/icon-reject.svg'
                                        alt='reject'
                                      />
                                      <img
                                        onClick={() =>
                                          this.actionAccepted.emit({
                                            goalId: this.innerGoal.id,
                                            actionId: action.id,
                                          })
                                        }
                                        src='assets/icons/icon-green-check.svg'
                                        alt='accept'
                                      />
                                    </Fragment>
                                  }
                                </div>
                              ) : (
                                <span>{GrowthPlanStatus.REJECTED}</span>
                              )
                            ) : !this.mentorMode &&
                              action.state !== GrowthPlanEnum.DONE &&
                              this.innerGoal.state !== GrowthPlanEnum.DONE ? (
                              <st-core-selector
                                classSelect='table-head__select'
                                name='actionSelector'
                                options={this.statusOptions}
                                selected={action.state}
                                onChange={(e: Event) =>
                                  this.handleActionStateChange(e, action)
                                }
                              />
                            ) : (
                              <span class={'black-text ml-2'}>
                                {GrowthPlanStatus[GrowthPlanEnum[action.state]]}
                              </span>
                            )}
                          </td>
                          <td class={'table--w-10 black-text'}>
                            {this.formatDate(action.startDate)}
                          </td>
                          <td class={'table--w-15'}>
                            {!this.mentorMode && (action.state !== GrowthPlanEnum.DONE &&
                            action.state !== GrowthPlanEnum.REJECTED &&
                            action.state !== GrowthPlanEnum.SUGGESTED &&
                            this.innerGoal.state !== GrowthPlanEnum.DONE) ? (
                              <div class="tooltip">
                                <span class="tooltipText">
                                  If the date you select is greater than the goal due date, then both dates will be updated automatically
                                </span>
                                <st-core-date-picker
                                  value={this.formatDate(action.dueDate)}
                                  min={this.TODAY}
                                  onChangeDate={(e: CustomEvent) =>
                                    this.handleActionDateChange(e, action)
                                  }
                                />
                              </div>
                            ) : (
                              <span class={'black-text ml-2'}>
                                {this.formatDate(action.dueDate)}
                              </span>
                            )}
                          </td>
                          <td class={'table--w-10'}></td>
                          <td class={'table--w-10'}>
                            <span
                              onClick={() => this.handleActionInfo(action.id)}
                              class={'float-right red-text'}
                            >
                              +Info
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </Host>
    );
  }
}
