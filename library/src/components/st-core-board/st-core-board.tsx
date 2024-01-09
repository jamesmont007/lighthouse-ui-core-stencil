import {
  Component,
  Host,
  h,
  Element,
  Event,
  EventEmitter,
  Prop,
} from '@stencil/core';
import Sortable from 'sortablejs';

import { GROWTH_PLAN_STATUS } from '../../helpers/constants';
import { OptionsModel } from '../../models';
import {
  ActionGoalSuggestedModel,
  ActionModel,
  DueDateModel,
  ErrorsModel,
  GoalModel,
  StateModel,
  SubCategoriActionModel
} from '../../models/goal.model';

@Component({
  tag: 'st-core-board',
  styleUrl: 'st-core-board.scss',
  shadow: true,
})
export class StCoreBoard {
  @Prop({ mutable: true }) actionsToRender: ActionModel = {};
  @Prop() mentorMode = false;

  @Event() updateGoalStateList: EventEmitter<StateModel>;
  @Event() updateGoalDateList: EventEmitter<DueDateModel>;
  @Event() showGoalInfoList: EventEmitter<string>;
  @Event() showAddActionList: EventEmitter<GoalModel>;
  @Event() editToDoAction: EventEmitter<SubCategoriActionModel>;
  @Event() editDoingAction: EventEmitter<SubCategoriActionModel>;
  @Event() editSuspendedDeclinedAction: EventEmitter<SubCategoriActionModel>;
  @Event() editDoneAction: EventEmitter<SubCategoriActionModel>;
  @Event() updateActionStateList: EventEmitter<StateModel>;
  @Event() updateActionDateList: EventEmitter<DueDateModel>;
  @Event() showActionInfoBoard: EventEmitter<string>;
  @Event() errorsList: EventEmitter<ErrorsModel>;
  @Event() actionSuggestedRejectedBoard: EventEmitter<ActionGoalSuggestedModel>;
  @Event() actionSuggestedAcceptedBoard: EventEmitter<ActionGoalSuggestedModel>;
  @Event() goalSuggestedRejectedBoard: EventEmitter<string>;
  @Event() goalSuggestedAcceptedBoard: EventEmitter<string>;

  @Element() elementCardMover: HTMLElement;
  @Event() cardMoved: EventEmitter<StateModel>;
  planStatus = GROWTH_PLAN_STATUS;
  options: OptionsModel[];

  /**
   * componentDidLoad: metodo para mover las tarjetas
   */
  componentDidLoad() {
    // Obtén todos los elementos que contienen las tarjetas (columnas)
    const columnElements =
      this.elementCardMover.shadowRoot.querySelectorAll<HTMLElement>(
        '.plan-board-column__rail'
      );

    // Inicializa SortableJS en cada columna
    columnElements.forEach((columnElement) => {
      new Sortable(columnElement, {
        animation: 150, // Duración de la animación en milisegundos
        group: {
          name: 'board',
          put: columnElement.id !== 'state-4'
        }, // Permite que los elementos se muevan entre grupos (columnas)
        filter: '.not-draggable',
        onEnd: (event) => {
          const cardId = event.item.id;
          const newColumn = event.to.id;
          const oldColumn = event.from.id;

          // Se valida si existe un nuevo movimiento
          if (newColumn !== undefined && newColumn !== oldColumn) {
            const newState = Number(newColumn.split('-')[1]);
            const selectedAction = { id: cardId, state: newState };

            // this.changeInnerState(selectedAction, Number(oldColumn.split('-')[1]));
            this.cardMoved.emit(selectedAction);
          }
        },
      });
    });
  }

  changeInnerState(val: StateModel, oldCol: number) {
    const columnStates = [
      'inToDoActions',
      'inDoingActions',
      'inDoneActions',
      'inSuspendedOrDeclineActions',
      'inSuggestedOrRejectedActions'
    ];
    const prevActionPosition = columnStates[oldCol];
    const nextActionPosition = columnStates[val.state];

    // Find the current action card in the board
    const currentAction = this.actionsToRender[prevActionPosition].find((item: SubCategoriActionModel) => item.id === val.id);

    const finalActionState = { ...currentAction, state: Number(val.state) };

    this.actionsToRender[prevActionPosition] = this.actionsToRender[prevActionPosition]
      .filter((item: SubCategoriActionModel) => item.id !== val.id);

    this.actionsToRender[nextActionPosition] = [...this.actionsToRender[nextActionPosition], finalActionState];

    this.actionsToRender = { ...this.actionsToRender };
  }

  componentWillLoad() {
    this.options = Object.values(this.planStatus).reduce(
      (acc, curr, idx, arr) =>
        idx < arr.length - 1 ? [...acc, { label: curr, value: idx }] : acc,
      []
    );
  }

  render() {
    return (
      <Host>
        <div class={'plan-board'}>
          <div class={'plan-board-column'}>
            <div
              class={
                'plan-board-column__label plan-board-column__label--color-0'
              }
            >
              <span>{this.planStatus[0]}</span>
            </div>
            <div class={'plan-board-column__rail'} id="state-0">
              {this.actionsToRender?.inToDoActions?.map((action) => (
                <st-core-action-card
                  key={action.id}
                  draggable={true}
                  id={action.id}
                  action={action}
                  onEditAction={(e) => this.editToDoAction.emit(e.detail)}
                  onActionInfo={(e) => this.showActionInfoBoard.emit(e.detail)}
                  onActionRejected={(e) =>
                    this.actionSuggestedRejectedBoard.emit(e.detail)
                  }
                  onActionAccepted={(e) =>
                    this.actionSuggestedAcceptedBoard.emit(e.detail)
                  }
              ></st-core-action-card>
              ))}
            </div>
          </div>
          <div class={'plan-board-column'}>
            <div
              class={
                'plan-board-column__label plan-board-column__label--color-1'
              }
            >
              <span>{this.planStatus[1]}</span>
            </div>
            <div class={'plan-board-column__rail'} id="state-1">
              {this.actionsToRender?.inDoingActions?.map((action) => (
                <st-core-action-card
                key={action.id}
                draggable={true}
                id={action.id}
                action={action}
                onEditAction={(e) => this.editDoingAction.emit(e.detail)}
                onActionInfo={(e) => this.showActionInfoBoard.emit(e.detail)}
                onActionRejected={(e) =>
                  this.actionSuggestedRejectedBoard.emit(e.detail)
                }
                onActionAccepted={(e) =>
                  this.actionSuggestedAcceptedBoard.emit(e.detail)
                }
              ></st-core-action-card>
              ))}
            </div>
          </div>
          <div class={'plan-board-column'}>
            <div
              class={
                'plan-board-column__label plan-board-column__label--color-3'
              }
            >
              <span>{this.planStatus[3]}</span>
            </div>
            <div class={'plan-board-column__rail'} id="state-3">
              {this.actionsToRender?.inSuspendedOrDeclineActions?.map((action) => (
                <st-core-action-card
                  key={action.id}
                  draggable={true}
                  id={action.id}
                  action={action}
                  onEditAction={(e) => this.editSuspendedDeclinedAction.emit(e.detail)}
                  onActionInfo={(e) => this.showActionInfoBoard.emit(e.detail)}
                  onActionRejected={(e) =>
                    this.actionSuggestedRejectedBoard.emit(e.detail)
                  }
                  onActionAccepted={(e) =>
                    this.actionSuggestedAcceptedBoard.emit(e.detail)
                  }
                ></st-core-action-card>
              ))}
            </div>
          </div>
          <div class={'plan-board-column'}>
            <div
              class={
                'plan-board-column__label plan-board-column__label--color-2'
              }
            >
              <span>{this.planStatus[2]}</span>
            </div>
            <div class={'plan-board-column__rail'} id="state-2">
              {this.actionsToRender?.inDoneActions?.map((action) => (
                <st-core-action-card
                  key={action.id}
                  draggable={true}
                  id={action.id}
                  action={action}
                  onEditAction={(e) => this.editDoneAction.emit(e.detail)}
                  onActionInfo={(e) => this.showActionInfoBoard.emit(e.detail)}
                  onActionRejected={(e) =>
                    this.actionSuggestedRejectedBoard.emit(e.detail)
                  }
                  onActionAccepted={(e) =>
                    this.actionSuggestedAcceptedBoard.emit(e.detail)
                  }
              ></st-core-action-card>
              ))}
            </div>
          </div>
          <div class={'plan-board-column'}>
            <div
              class={
                'plan-board-column__label plan-board-column__label--color-4'
              }
            >
              <span>{this.planStatus[4]}</span>
            </div>
            <div class={'plan-board-column__rail'} id="state-4">
              {this.actionsToRender?.inSuggestedOrRejectedActions?.map((action) => (
                <st-core-action-card
                  key={action.id}
                  draggable={true}
                  id={action.id}
                  action={action}
                  onActionInfo={(e) => this.showActionInfoBoard.emit(e.detail)}
                  onActionRejected={(e) =>
                    this.actionSuggestedRejectedBoard.emit(e.detail)
                  }
                  onActionAccepted={(e) =>
                    this.actionSuggestedAcceptedBoard.emit(e.detail)
                  }
              ></st-core-action-card>
              ))}
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
