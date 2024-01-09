import { growthPlanValidations } from '../../../helpers/constants';
import { DetailEvent } from '../../../models';
import { generatorRandomUUID } from '../../../utils/generator-random-uuid';
import { StCoreGoal } from '../st-core-goal';

describe('st-core-goal', () => {
  let component: StCoreGoal;
  beforeEach(async () => {
    component = new StCoreGoal();
    const goalActions = [
      {
        id: '10b5851b-ed82-4af7-8a3a-8d81ea56c03e',
        description: 'Lorem Ipsum',
        startDate: '2023-07-10T20:20:07.819Z',
        dueDate: '2023-07-15T20:20:07.819Z',
        state: 0,
      },
      {
        id: '11b5851b-ed82-4af7-8a3a-8d81ea56c03e',
        description: 'Lorem Ipsum',
        startDate: '2023-07-10T20:20:07.819Z',
        dueDate: '2023-07-15T20:20:07.819Z',
        state: 1,
      },
      {
        id: '12b5851b-ed82-4af7-8a3a-8d81ea56c03e',
        description: 'Lorem Ipsum',
        startDate: '2023-07-10T20:20:07.819Z',
        dueDate: '2023-07-15T20:20:07.819Z',
        state: 2,
      },
    ];
    component.goal = {
      description: 'Goal one description',
      dueDate: '2023-07-16T20:20:07.819Z',
      actions: goalActions,
      state: 1,
    };
  });
  describe('component initialization', () => {
    it('Should initialize variables', () => {
      component.componentWillLoad();
      expect(component.innerGoal).toEqual({ ...component.goal, isVisible: true });
      expect(component['DUE_DATE']).toBeDefined();
      expect(component.innerGoal.isVisible).toBeTruthy();
    });
  });

  describe('handleGoalState', () => {
    it('Should emit goalState', ()=>{
      component.innerGoal = component.goal;
      const e = {
        target: {
          value: 'Test',
        },
      };
      const id = generatorRandomUUID();
      spyOn(component.goalState, 'emit').and.callFake(() => {});
      spyOn(component.goalErrors, 'emit').and.callFake(() => {});
  
      component.handleGoalState(e, id);
      expect(component.goalState.emit).toHaveBeenCalledWith({ id, state: e.target.value });
      expect(component.goalErrors.emit).not.toHaveBeenCalled();
    });
  });

  describe('handleGoalDateChange', () => {
    it('Should emit goalDate', () => {

      const e = new DetailEvent('test');
      e.detail = 'test'

      const id = generatorRandomUUID();
      spyOn(component.goalDate, 'emit').and.callFake(() => {});

      component.handleGoalDateChange(e, id);
      expect(component.goalDate.emit).toHaveBeenCalledWith({ id, dueDate: e.detail });
    });
  });

  describe('handleActionStateChange', () => {
    it('Should emit actionState', ()=> {
      const action = component.goal.actions[0];
      const id = action.id;
      const e = {
        target: {
          value: 'Test',
        },
      };
      spyOn(component.actionState, 'emit').and.callFake(() => {});
      spyOn(component.goalErrors, 'emit').and.callFake(() => {});
  
      component.handleActionStateChange(e, action);
      expect(component.actionState.emit).toHaveBeenCalledWith({ id, state: e.target.value });
      expect(component.goalErrors.emit).not.toHaveBeenCalled();
    });
  });

  describe('handleActionDateChange', () => {
    it('Should emit actionDate', ()=> {
      component.innerGoal = component.goal;
      const action = component.goal.actions[0];
      const id = action.id;
      const e = new DetailEvent('test');
      e.detail = 'test'
      spyOn(component.actionDate, 'emit').and.callFake(() => {});
      spyOn(component.goalErrors, 'emit').and.callFake(() => {});
  
      component.handleActionDateChange(e, action);
      expect(component.actionDate.emit).toHaveBeenCalledWith({ id, dueDate: e.detail });
      expect(component.goalErrors.emit).not.toHaveBeenCalled();
    });

    it('Should not emit actionDate and emit an error with validation', ()=> {
      component.innerGoal = component.goal;
      const action = component.goal.actions[0];
      action.dueDate = '2023-07-17T20:20:07.819Z'
      const e = new DetailEvent('test');
      e.detail = 'test'
      spyOn(component.actionDate, 'emit').and.callFake(() => {});
      spyOn(component.goalErrors, 'emit').and.callFake(() => {});
  
      component.handleActionDateChange(e, action);
      expect(component.actionDate.emit).not.toHaveBeenCalled();
      expect(component.goalErrors.emit).toHaveBeenCalledWith({
        title: growthPlanValidations.TITLE_PLAN,
        message: growthPlanValidations.GOAL_HIGHER_DATE,
        type: 'warning',
      });
    });
  });

});
