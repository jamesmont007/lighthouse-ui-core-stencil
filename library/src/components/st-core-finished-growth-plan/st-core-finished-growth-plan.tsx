import {
  Component,
  Host,
  h,
  Event,
  EventEmitter,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import moment from 'moment';

import { GrowthPlanEnum, GrowthPlanStatus } from '../../helpers/constants';
import { DetailEvent, SortEvent } from '../../models';
import { GoalModel, PlanModel } from '../../models/goal.model';
import { Fragment } from '../../utils/fragment';

@Component({
  tag: 'st-core-finished-growth-plan',
  styleUrl: 'st-core-finished-growth-plan.scss',
  shadow: true,
})
export class StCoreFinishedGrowthPlan {
  @Prop() finishedPlan: PlanModel;

  @Event() showGoalInfo: EventEmitter<string>;
  @Event() showActionInfo: EventEmitter<string>;
  @Event() sort: EventEmitter<SortEvent>;
  @Event() filters: EventEmitter<{
    goal: string;
    state: string;
    startDate: string;
    endDate: string;
  }>;

  @State() innerFinishedPlan: PlanModel;
  @State() goals: GoalModel[];
  @State() planFilter = {
    goal: '',
    state: '',
    startDate: '',
    endDate: ''
  };

  @Watch('finishedPlan')
  updateFinishedPlan(newValue){
    this.innerFinishedPlan = newValue;
    this.updateGoals();
  }

  inputGoalNameRef: HTMLInputElement;
  selectStateRef: HTMLSelectElement;
  datePicketStartRef: HTMLStCoreDatePickerElement;
  datePicketEndRef: HTMLStCoreDatePickerElement;

  options = {
    [GrowthPlanStatus.DONE]: GrowthPlanStatus.DONE,
    [GrowthPlanStatus.SUSPENDED_DECLINED]: GrowthPlanStatus.SUSPENDED_DECLINED,
    [GrowthPlanStatus.REJECTED]: GrowthPlanStatus.REJECTED,
  };

  componentWillLoad() {
    this.innerFinishedPlan = this.finishedPlan;
    this.updateGoals();
  }

  updateGoals(): void {
    this.goals = this.innerFinishedPlan.goals.map((goal) => ({
      ...goal,
      isVisible: true,
    }));
  }

  formatDate(date: string): string {
    return moment.parseZone(date).format('YYYY-MM-DD');
  }

  showActionsHandler(id: string): void {
    this.goals = this.goals.map((goal) => ({
      ...goal,
      isVisible: goal.id === id ? !goal.isVisible : goal.isVisible,
    }));
  }

  handleGoalName(e: Event): void {
    this.planFilter = { ...this.planFilter, goal: (e.target as HTMLInputElement).value };
    this.filters.emit(this.planFilter);
  }

  handleSelectState(e: Event): void {
    const stateDic = {
      [GrowthPlanStatus.DONE]: GrowthPlanEnum.DONE,
      [GrowthPlanStatus.SUSPENDED_DECLINED]: GrowthPlanEnum.SUSPENDED_DECLINED,
      [GrowthPlanStatus.REJECTED]: GrowthPlanEnum.REJECTED
    };
    this.planFilter = { ...this.planFilter, state: stateDic[(e.target as HTMLInputElement).value] };
    this.filters.emit(this.planFilter);
  }

  handleStartDate(e: DetailEvent): void {
    this.planFilter = { ...this.planFilter, startDate: e.detail };
    this.filters.emit(this.planFilter);
  }

  handleEndDate(e: DetailEvent): void {
    this.planFilter = { ...this.planFilter, endDate: e.detail };
    this.filters.emit(this.planFilter);
  }

  handleActionInfo(actionId: string): void {
    this.showActionInfo.emit(actionId);
  }

  handleGoalInfo(goalId: string): void {
    this.showGoalInfo.emit(goalId);
  }

  async cleanFilters(): Promise<void> {
    this.planFilter = {
      goal: '',
      state: '',
      startDate: '',
      endDate: ''
    };
    this.inputGoalNameRef.value = '';
    this.selectStateRef.value = '';
    await this.datePicketStartRef.cleanInput();
    await this.datePicketEndRef.cleanInput();
    this.filters.emit(this.planFilter);
  }

  render() {
    return (
      <Host>
        <section class={'finished-plan'}>
          <div class={'finished-plan-header'}>
            <h1 class={'finished-plan-header__title'}>
              {this.innerFinishedPlan?.name}
            </h1>
            <p>Here's your goals and actions for this plan</p>
            <div class={'finished-plan-header-body'}>
              <div
                class={
                  'finished-plan-header-body-projection finished-plan-header-body--pd'
                }
              >
                <div class={'finished-plan-header-body-projection-info'}>
                  <span
                    class={'finished-plan-header-body-projection-info__title'}
                  >
                    Projection
                  </span>
                </div>
                <p>{this.innerFinishedPlan?.projection}</p>
              </div>
            </div>
          </div>
          <table class={'table finished-plan-table'}>
            <thead>
              <tr>
                <th class={'w-30'} scope='col'>
                  <st-core-sort
                    column={'Goal'}
                    sortable='goal'
                    onSort={() => this.sort}
                  />
                </th>
                <th class={'w-15'} scope='col'>
                  <st-core-sort
                    column={'Status'}
                    sortable='status'
                    onSort={() => this.sort}
                  />
                </th>
                <th class={'w-20'} scope='col'>
                  <st-core-sort
                    column={'Since'}
                    sortable='startDate'
                    onSort={() => this.sort}
                  />
                </th>
                <th class={'w-20'} scope='col'>
                  <st-core-sort
                    column={'Until'}
                    sortable='dueDate'
                    onSort={() => this.sort}
                  />
                </th>
                <th class={'w-15'} scope='col'></th>
              </tr>
              <tr>
                <th>
                  <input
                    type='text'
                    class={`form-control`}
                    onInput={(e) => this.handleGoalName(e)}
                    ref={(el) => this.inputGoalNameRef = el}
                  />
                </th>
                <th>
                  <select
                    class={`form-control`}
                    ref={(el) => (this.selectStateRef = el)}
                    onChange={(e) => this.handleSelectState(e)}
                  >
                    <option selected disabled hidden value=''></option>
                    {Object.values(this.options).map((type, i) => (
                      <option key={i} value={Object.keys(this.options)[i]}>
                        {type}
                      </option>
                    ))}
                  </select>
                </th>
                <th>
                  <st-core-date-picker
                    ref={(el) => (this.datePicketStartRef = el)}
                    onChangeDate={(e: DetailEvent) =>
                      this.handleStartDate(e)
                    }
                  />
                </th>
                <th>
                  <st-core-date-picker
                    ref={(el) => (this.datePicketEndRef = el)}
                    onChangeDate={(e: DetailEvent) =>
                      this.handleEndDate(e)
                    }
                  />
                </th>
                <th>
                  <button
                    onClick={() => this.cleanFilters()}
                    class={`btn btn-secondary`}
                    type='button'
                  >
                    <i class={`icon icon-clear`}></i>
                    <span>Clear filter</span>
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={5}>
                  <table class={'table'}>
                    <thead>
                      <tr>
                        <th class={'w-30'}>Goals</th>
                        <th class={'w-15'}>Status</th>
                        <th class={'w-20'}>Start date</th>
                        <th>End date</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.goals.map((goal) => (
                        <Fragment>
                          <tr key={goal.id} class={'finished-plan-table__tr'}>
                            <td>
                              <span>{goal.description}</span>
                            </td>
                            <td>
                              <span>
                                {GrowthPlanStatus[GrowthPlanEnum[goal.state]]}
                              </span>
                            </td>
                            <td>
                              <span>{this.formatDate(goal.startDate)}</span>
                            </td>
                            <td>
                              <span>{this.formatDate(goal.dueDate)}</span>
                            </td>
                            <td>
                              <div
                                class={
                                  'd-flex align-items-center justify-content-end'
                                }
                              >
                                <span
                                  onClick={() => this.handleGoalInfo(goal.id)}
                                  class={'link-info'}
                                >
                                  +Info
                                </span>
                                <span
                                  class='btn btn-show-details'
                                  onClick={(_) =>
                                    this.showActionsHandler(goal.id)
                                  }
                                >
                                  {goal.isVisible ? (
                                    <i class='icon icon-arrow-up ml-2' />
                                  ) : (
                                    <i class='icon icon-arrow-down ml-2' />
                                  )}
                                </span>
                              </div>
                            </td>
                          </tr>
                          {goal.isVisible && (
                            <tr>
                              <td colSpan={5}>
                                <table class={'table'}>
                                  <tbody>
                                    {goal.actions.map((action) => (
                                      <tr key={action.id}>
                                        <td class={'w-30'}>
                                          {action.description}
                                        </td>
                                        <td class={'w-15'}>
                                          {
                                            GrowthPlanStatus[
                                              GrowthPlanEnum[action.state]
                                            ]
                                          }
                                        </td>
                                        <td class={'w-20'}>
                                          {this.formatDate(action.startDate)}
                                        </td>
                                        <td class={'pl-4'}>
                                          {this.formatDate(action.dueDate)}
                                        </td>
                                        <td>
                                          <span
                                            class={
                                              'float-right pr-3 red-text link-info'
                                            }
                                            onClick={() =>
                                              this.handleActionInfo(action.id)
                                            }
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
                          )}
                        </Fragment>
                      ))}
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </Host>
    );
  }
}
