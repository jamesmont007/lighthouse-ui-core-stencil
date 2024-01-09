import { Component, Host, h, Element, Prop, Event, EventEmitter } from '@stencil/core';
import Sortable from 'sortablejs';

import { GROWTH_PLAN_STATUS } from '../../helpers/constants';
import { OptionsModel } from '../../models';
import { ActionGoalSuggestedModel, DueDateModel, ErrorsModel, GoalModel, StateModel } from '../../models/goal.model';
import { Fragment } from '../../utils/fragment';

@Component({
  tag: 'st-core-plan-list',
  styleUrl: 'st-core-plan-list.scss',
  shadow: true,
})
export class StCorePlanList {
  @Prop() goalsToRender: { state: number; goals: GoalModel[] }[];
  @Prop() mentorMode = false;

  @Event() updateGoalStateList: EventEmitter<StateModel>;
  @Event() updateGoalDateList: EventEmitter<DueDateModel>;
  @Event() showGoalInfoList: EventEmitter<string>;
  @Event() showAddActionList: EventEmitter<GoalModel>;
  @Event() updateActionStateList: EventEmitter<StateModel>;
  @Event() updateActionDateList: EventEmitter<DueDateModel>;
  @Event() showActionInfoList: EventEmitter<string>;
  @Event() errorsList: EventEmitter<ErrorsModel>;
  @Event() actionSuggestedRejectedList : EventEmitter<ActionGoalSuggestedModel>;
  @Event() actionSuggestedAcceptedList : EventEmitter<ActionGoalSuggestedModel>;
  @Event() goalSuggestedRejectedList : EventEmitter<string>;
  @Event() goalSuggestedAcceptedList : EventEmitter<string>;

  @Element() elementMover: HTMLElement;
  @Event() cardMoved: EventEmitter<StateModel>;

  planStatus = GROWTH_PLAN_STATUS;
  options: OptionsModel[];


      /**
   * componentDidLoad: metodo para mover las tarjetas
   */
      public componentDidLoad() {
        // Obtén todos los elementos que contienen las tarjetas (columnas)
        const columnElements = this.elementMover.shadowRoot.querySelectorAll<HTMLElement>('.plan-table-body--head-category');

        // Inicializa SortableJS en cada columna
        columnElements.forEach((columnElement) => {
          new Sortable(columnElement, {
            animation: 150, // Duración de la animación en milisegundos
            group: {
              name: 'board',
              put: columnElement.id !== 'state-4' // Deshabilita el drop en el state suggested rejected
            },
            // Permite que los elementos se muevan entre grupos (columnas)
            filter: '.not-draggable',
            onEnd: (event) => {
              const cardId = event.item.id;
              const newColumn = event.to.id;
              const oldColumn = event.from.id;

              // Se valida si existe un nuevo movimiento
              if (newColumn !== undefined && newColumn !== oldColumn) {
                this.cardMoved.emit({ id: cardId, state: newColumn.split('-')[1] });
              }
            },
          });
        });
      }

  componentWillLoad(){
    this.options = Object.values(this.planStatus).reduce(
      (acc, curr, idx, arr) =>
        idx < arr.length - 1 ? [...acc, { label: curr, value: idx }] : acc,
      []
    );
  }

  render() {
    return (
      <Host>
        <div class={'plan-table-body'}>
          <div class={'plan-table-body--headers'}>
            <table class={'table table-test'}>
              <thead class={'table-head'}>
                <tr>
                  <th class={'table--w-25'}></th>
                  <th class={'table--w-10'}>Suggested by</th>
                  <th class={'table--w-15'}>Status</th>
                  <th class={'table--w-10'}>Creation date</th>
                  <th class={'table--w-15'}>Due date</th>
                  <th class={'table--w-10'}></th>
                  <th class={'table--w-5'}></th>
                </tr>
              </thead>
            </table>
          </div>
          {this.goalsToRender.map((element) => (
            <Fragment>
              <div class={`goal-container goal-container--color-${element.state}`}
              >
                <span>{this.planStatus[element.state]}</span>
              </div>
              <div
                  id={`state-${element.state}`}
                  class={'plan-table-body--head-category'}>
              {element.goals.map((item) => (

                <st-core-goal
                  draggable={true}
                  id={item.id}
                  key={item.id}
                  goal={item}
                  mentorMode={this.mentorMode}
                  statusOptions={this.options}
                  onGoalState={(e) => this.updateGoalStateList.emit(e.detail)}
                  onGoalDate={(e) => this.updateGoalDateList.emit(e.detail)}
                  onGoalInfo={(e) => this.showGoalInfoList.emit(e.detail)}
                  onAddAction={(e) => this.showAddActionList.emit(e.detail)}
                  onActionState={(e) =>
                    this.updateActionStateList.emit(e.detail)
                  }
                  onActionDate={(e) => this.updateActionDateList.emit(e.detail)}
                  onActionInfo={(e) => this.showActionInfoList.emit(e.detail)}
                  onGoalErrors={(e) => this.errorsList.emit(e.detail)}
                  onActionRejected={(e) =>
                    this.actionSuggestedRejectedList.emit(e.detail)
                  }
                  onActionAccepted={(e) =>
                    this.actionSuggestedAcceptedList.emit(e.detail)
                  }
                  onGoalRejected={(e) =>
                    this.goalSuggestedRejectedList.emit(e.detail)
                  }
                  onGoalAccepted={(e) =>
                    this.goalSuggestedAcceptedList.emit(e.detail)
                  }
                />
                )
                )
              }
              </div>
            </Fragment>
          ))}
        </div>
      </Host>
    );
  }
}
