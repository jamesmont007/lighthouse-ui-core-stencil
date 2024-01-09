import { h } from '@stencil/core';
import { GrowthPlanEnum } from '../../../helpers/constants';
import { generatorRandomUUID } from '../../../utils/generator-random-uuid';
import { MOCK_GROWTH_PLAN } from '../../st-core-growth-plan/test/mocks';
import { StCoreFinishedGrowthPlan } from '../st-core-finished-growth-plan';

describe('st-core-finished-growth-plan', () => {
  let component: StCoreFinishedGrowthPlan;

  beforeEach(async () => {
    component = new StCoreFinishedGrowthPlan();
    component.finishedPlan = MOCK_GROWTH_PLAN;
  });

  describe('component initialization', () => {
    it('Should initialize variables', () => {
      component.componentWillLoad();
      expect(component.innerFinishedPlan).toEqual(component.finishedPlan);
      expect(component.goals).toBeDefined();
    });
  });

  describe('#showActionsHandler', () => {
    it('Should update isVisible field according to given id', () => {
      component.goals = MOCK_GROWTH_PLAN.goals;
      const id = MOCK_GROWTH_PLAN.goals[0].id;
      component.showActionsHandler(id);
      expect(component.goals[0].isVisible).toBeTruthy();
      expect(component.goals[1].isVisible).toBeFalsy();
    });
  });

  describe('#handleGoalName', () => {
    it('Should set goal filter & emit value', () => {
      const value = 'test';
      const e: any = {
        target: {
          value
        }
      };
      spyOn(component.filters, 'emit').and.callFake(() => { });
      component.handleGoalName(e);

      expect(component.planFilter).toEqual({ ...component.planFilter, goal: value });
      expect(component.filters.emit).toHaveBeenCalledWith(component.planFilter);
    });
  });

  describe('#handleSelectState', () => {
    it('Should set state filter & emit value', () => {
      const value = 'Done';
      const e: any = {
        target: {
          value
        }
      };
      spyOn(component.filters, 'emit').and.callFake(() => { });
      component.handleSelectState(e);

      expect(component.planFilter).toEqual({ ...component.planFilter, state: GrowthPlanEnum.DONE });
      expect(component.filters.emit).toHaveBeenCalledWith(component.planFilter);
    });
  });

  describe('#handleStartDate', () => {
    it('Should set start date filter & emit value', () => {
      const detail = '28/08/2023';
      const e: any = {
        detail
      }
      spyOn(component.filters, 'emit').and.callFake(() => { });
      component.handleStartDate(e);

      expect(component.planFilter).toEqual({ ...component.planFilter, startDate: detail });
      expect(component.filters.emit).toHaveBeenCalledWith(component.planFilter);
    });
  });

  describe('#handleEndDate', () => {
    it('Should set end date filter & emit value', () => {
      const detail = '28/08/2023';
      const e: any = {
        detail
      }
      spyOn(component.filters, 'emit').and.callFake(() => { });
      component.handleEndDate(e);

      expect(component.planFilter).toEqual({ ...component.planFilter, endDate: detail });
      expect(component.filters.emit).toHaveBeenCalledWith(component.planFilter);
    });
  });

  describe('#cleanFilters', () => {
    it('Should clear all filters & emit value', async() => {
      component.planFilter = {
        goal: 'test',
        state: 'DONE',
        startDate: '28/08/2023',
        endDate: '28/08/2023'
      }
      component.inputGoalNameRef = <input></input>;
      component.inputGoalNameRef.value = 'text';
      component.selectStateRef = <select></select>
      component.selectStateRef.value = 'DONE';
      component.datePicketStartRef = <st-core-date-picker></st-core-date-picker>;
      component.datePicketEndRef = <st-core-date-picker></st-core-date-picker>;
      
      component.datePicketStartRef.cleanInput = jest.fn();
      component.datePicketEndRef.cleanInput = jest.fn();
      
      spyOn(component.datePicketStartRef, 'cleanInput').and.callFake(() =>{ });
      spyOn(component.datePicketEndRef, 'cleanInput').and.callFake(() =>{ });
      spyOn(component.filters, 'emit').and.callFake(() => { });

      await component.cleanFilters();

      expect(component.datePicketStartRef.cleanInput).toHaveBeenCalled();
      expect(component.inputGoalNameRef.value).toBe('');
      expect(component.selectStateRef.value).toBe('');
      expect(component.datePicketEndRef.cleanInput).toHaveBeenCalled();
      expect(component.planFilter).toEqual({
        goal: '',
        state: '',
        startDate: '',
        endDate: ''
      })
      expect(component.filters.emit).toHaveBeenCalledWith(component.planFilter);
    });
  });

  describe('handleActionInfo', () => {
    it('Should emit action id', () => {
      const id = generatorRandomUUID();
      spyOn(component.showActionInfo, 'emit').and.callFake(() => {});
      component.handleActionInfo(id);
      expect(component.showActionInfo.emit).toHaveBeenCalledWith(id);
    });
  });

  describe('handleGoalInfo', () => {
    it('Should emit goal id', () => {
      const id = generatorRandomUUID();
      spyOn(component.showGoalInfo, 'emit').and.callFake(() => {});
      component.handleGoalInfo(id);
      expect(component.showGoalInfo.emit).toHaveBeenCalledWith(id);
    });
  });
});
