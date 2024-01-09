import { Component, Event, EventEmitter, Host, Prop, State, Watch, h } from '@stencil/core';
import moment from 'moment';

import { GrowthPlanEnum, GrowthPlanStatus } from '../../helpers/constants';
import {
  ActionGoalSuggestedModel,
  BoardActionModel,
  SubCategoriActionModel
} from '../../models/goal.model';

@Component({
  tag: 'st-core-action-card',
  styleUrl: 'st-core-action-card.scss',
  shadow: true,
})
export class StCoreActionCard {
  @Prop() action: SubCategoriActionModel = {};
  @Event() editAction: EventEmitter<SubCategoriActionModel>;
  @Event() actionRejected: EventEmitter<ActionGoalSuggestedModel>;
  @Event() actionAccepted: EventEmitter<ActionGoalSuggestedModel>;
  @Event() actionInfo: EventEmitter<string>;

  @State() innerAction: BoardActionModel;
  @State() selectedState: number;
  @State() selectedDueDate: string;
  @State() DUE_DATE: string;

  @Watch('action')
  updateAction(newValue) {
    this.innerAction = { ...newValue, isVisible: true };
    this.selectedState = this.innerAction.state;
    this.selectedDueDate = this.innerAction.dueDate;
    this.DUE_DATE = this.formatDate(this.innerAction.dueDate);
  }

  componentWillLoad() {
    this.innerAction = { ...this.action, isVisible: true };
    this.DUE_DATE = this.formatDate(this.innerAction.dueDate);
    this.selectedState = this.innerAction.state;
    this.selectedDueDate = this.innerAction.dueDate;
  }

  formatDate(date) {
    return moment.parseZone(date).format('YYYY-MM-DD');
  }

  handleActionInfo() {
    this.actionInfo.emit(this.action.id);
  }

  changeVisible() {
    this.innerAction = {
      ...this.innerAction,
      isVisible: !this.innerAction.isVisible,
    };
  }

  render() {
    const actionIsInactive = this.selectedState === GrowthPlanEnum.SUGGESTED ||
      this.selectedState === GrowthPlanEnum.REJECTED ||
      this.selectedState === GrowthPlanEnum.DONE ||
      this.innerAction.disabled; // Cuando el goal de la accion esta en done, esta propiedad llega como true

    let dueDateColor = 'action-card-duedate';
    const dateInAMonth = new Date();
    const dueDate = new Date(this.action.dueDate);
    const today = new Date();
    dateInAMonth.setMonth(today.getMonth() + 1);
    if (dueDate < today) {
      dueDateColor = `${dueDateColor}-expired`;
    }
    if (dueDate >= today && dueDate <= dateInAMonth) {
      dueDateColor = `${dueDateColor}-warning`;
    }
    return (
      <Host class={actionIsInactive ? 'not-draggable' : 'draggable'}>
        <div
          class={`action-card ${this.selectedState === GrowthPlanEnum.DONE ||
            this.selectedState === GrowthPlanEnum.REJECTED || this.innerAction.disabled
            ? 'action-card--gray'
            : 'action-card--white'
            }
          `}
        >
          <div class='action-card-header'>
            <div class='action-card-header-icon'>
              {actionIsInactive ?
                <span onClick={
                  () => {
                    this.actionInfo.emit(this.innerAction.id);
                  }
                }>
                  +info
                </span> :
                <span onClick={
                  () => {
                    this.editAction.emit(this.innerAction);
                  }
                }>
                  <img src='assets/icons/edit.svg' alt='edit' />
                  Edit
                </span>
              }
            </div>
            <p class='action-card-header-title'>{this.innerAction.description}</p>
          </div>
          <div class='action-card-info'>
            <p>{this.innerAction.goal?.description ?? 'Unnamed goal'}</p>
            <p>{this.innerAction.suggestedByName}</p>
            <div class='action-card-info__footer'>
              {
                this.innerAction.state === GrowthPlanEnum.REJECTED ?
                  (<span class='action-card-info-rejected'>
                    {GrowthPlanStatus.REJECTED}
                  </span>)
                  :
                  (<span class={dueDateColor}>
                    {this.innerAction.dueDate ? `Due date: ${this.formatDate(this.innerAction.dueDate)}` : GrowthPlanStatus.REJECTED}
                  </span>)
              }
              {
                this.innerAction.state === GrowthPlanEnum.SUGGESTED && (
                  <div class="action-card-info__footer-icons">
                    <img
                      onClick={
                        () => {
                          this.actionRejected.emit({
                            actionId: this.innerAction.id,
                            goalId: this.innerAction.goal.id
                          });
                        }
                      }
                      src='assets/icons/icon-reject.svg'
                      alt='reject'
                    />
                    <img
                      onClick={
                        () => {
                          this.actionAccepted.emit({
                            actionId: this.innerAction.id,
                            goalId: this.innerAction.goal.id
                          });
                        }
                      }
                      src='assets/icons/icon-green-check.svg'
                      alt='accept'
                    />
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
