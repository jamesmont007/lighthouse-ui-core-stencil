import { h } from '@stencil/core';
import { growthPlanValidations } from '../../../helpers/constants';
import { generatorRandomUUID } from '../../../utils/generator-random-uuid';
import { StCoreGrowthPlan } from '../st-core-growth-plan';

const MOCK_PLAN = {
  description: 'mock description',
  historicMode: true,
  goals: [
    {
      isEditMode: false,
      goalId: '0',
      description: 'Java',
      skillId: 'java',
      state: 0,
      createdAt: '2021-02-20',
      estimatedCompletionDate: '2021-02-20',
      commitments: [
        {
          name: 'asjklajs',
          state: 1,
          createdAt: '2021-03-01',
          estimatedCompletionDate: '2021-03-01',
        },
      ],
    },
  ],
  viewers: [
    {
      date: '2021-05-16',
      jauthId: 'user-test',
      ldapId: 'user-test',
      name: 'user test',
    },
  ],
};

describe('st-core-growth-plan', () => {
  let component: StCoreGrowthPlan;

  beforeEach(async () => {
    component = new StCoreGrowthPlan();
    component.plan = {
      name: 'Plan name test',
      projection: 'Description',
      mentors: [
        'Lorem ipsum dolor sit amet',
        'Integer ac efficitur lorem id blandit est',
      ],
      goals: [
        {
          description: 'Goal one description',
          actions: [
            {
              id: generatorRandomUUID(),
              description: 'Lorem Ipsum',
              startDate: '2023-07-10T20:20:07.819Z',
              dueDate: '2023-07-15T20:20:07.819Z',
              state: 0,
            },
          ],
          state: 1,
          dueDate: '2023-07-25T20:20:07.819Z',
          id: generatorRandomUUID(),
        },
        {
          description: 'Goal two description',
          actions: [
            {
              id: generatorRandomUUID(),
              description: 'Lorem Ipsum',
              startDate: '2023-07-10T20:20:07.819Z',
              dueDate: '2023-07-13T20:20:07.819Z',
              state: 0,
            },
            {
              id: generatorRandomUUID(),
              description: 'Lorem Ipsum',
              startDate: '2023-07-10T20:20:07.819Z',
              dueDate: '2023-07-15',
              state: 1,
            },
          ],
          state: 0,
          dueDate: '2023-07-25T20:20:07.819Z',
          id: generatorRandomUUID(),
        },
        {
          description: 'Goal suggested/rejected description',
          actions: [
            {
              id: '10b5851b-ed82-4af7-8a3a-8d81ea56c03e',
              description: 'Lorem Ipsum',
              startDate: '2023-07-10T20:20:07.819Z',
              dueDate: '2023-07-15T20:20:07.819Z',
              state: 4,
            },
          ],
          state: 4,
          dueDate: '2023-07-25T20:20:07.819Z',
          id: generatorRandomUUID(),
        },
      ],
    };
  });

  describe('component initialization', () => {
    it('Should initialize variables', () => {
      component.componentWillLoad();
      expect(component.innerPlan).toEqual(component.plan);
      expect(component.goalsToRender).toBeDefined();
    });
  });

  describe('handleUpdateProjection', () => {
    it('Should call updateProjection', () => {
      component.editProjectionMode = true;
      const text = 'Projection';
      component.projectionTextareaRef = <textarea></textarea>;
      component.projectionTextareaRef.value = text;
      spyOn(component.updateProjection, 'emit').and.callFake(() => { });
      spyOn(component.errors, 'emit').and.callFake(() => { });

      component.handleUpdateProjection();

      expect(component.updateProjection.emit).toHaveBeenCalledWith(text);
      expect(component.editProjectionMode).toBeFalsy();
      expect(component.errors.emit).not.toHaveBeenCalled();
    });

    it('Should not call updateProjection', () => {
      component.editProjectionMode = true;
      const text = '';
      component.projectionTextareaRef = <textarea></textarea>;
      component.projectionTextareaRef.value = text;
      spyOn(component.updateProjection, 'emit').and.callFake(() => { });
      spyOn(component.errors, 'emit').and.callFake(() => { });

      component.handleUpdateProjection();

      expect(component.updateProjection.emit).not.toHaveBeenCalled();
      expect(component.errors.emit).toHaveBeenCalledWith({
        title: growthPlanValidations.PROJECTION_EMPTY_TITLE,
        message: growthPlanValidations.PROJECTION_EMPTY_MESSAGE,
        type: 'warning',
      });
    });
  });

  describe('#updatePlan', () => {
    it('Should update the plan with filter value', () => {
      component.filterWord = 'test';
      spyOn(component, 'filterPlan').and.returnValue(MOCK_PLAN);
      spyOn(component, 'reRenderGoals').and.callFake(() => { });

      component.updatePlan(null);
      expect(component.innerPlan).toEqual(MOCK_PLAN);
      expect(component.reRenderGoals).toHaveBeenCalled();
      expect(component.filterPlan).toHaveBeenCalledWith(component.plan, component.filterWord);
    });

    it('Should update the plan and do not call filter plan function', () => {
      component.filterWord = '';
      spyOn(component, 'filterPlan').and.callFake(() => { });
      spyOn(component, 'reRenderGoals').and.callFake(() => { });

      component.updatePlan(MOCK_PLAN);
      expect(component.innerPlan).toEqual(MOCK_PLAN);
      expect(component.reRenderGoals).toHaveBeenCalled();
      expect(component.filterPlan).not.toHaveBeenCalled();
    });
  });

  describe('handleFilter', () => {
    it('Should emit filter', () => {
      const e: any = {
        target: {
          value: 'test'
        }
      };
      spyOn(component, 'filterPlan').and.returnValue(MOCK_PLAN);
      spyOn(component, 'reRenderGoals').and.callFake(() => { });

      component.handleFilter(e);
      expect(component.filterWord).toEqual(e.target.value);
      expect(component.filterPlan).toHaveBeenCalledWith(component.plan, e.target.value);
      expect(component.reRenderGoals).toHaveBeenCalled();
      expect(component.innerPlan).toEqual(MOCK_PLAN);
    });
  });

  describe('handleClearFilter', () => {
    it('Should clear filter', () => {
      component.filterInputRef = <input></input>;
      component.filterInputRef.value = 'test';
      spyOn(component, 'reRenderGoals').and.callFake(() => { });

      component.handleClearFilter();
      expect(component.filterInputRef.value).toBe('');
      expect(component.filterWord).toEqual('');
      expect(component.innerPlan).toEqual(component.plan);
      expect(component.reRenderGoals).toHaveBeenCalledWith();
    });
  });

  describe('clearFilter', () => {
    it('Should clear filter field', async () => {
      component.filterInputRef = <input></input>;
      component.filterInputRef.value = 'test';
      component.filterWord = 'test';
      await component.clearFilter();
      expect(component.filterInputRef.value).toBe('');
      expect(component.filterWord).toEqual('');
    });
  });
});
