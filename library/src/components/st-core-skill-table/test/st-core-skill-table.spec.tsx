import { h } from '@stencil/core';
import { EvaluationTypeEnum } from '../../../helpers/constants';
import { UserSkillModel } from '../../../models';
import { generatorRandomUUID } from '../../../utils/generator-random-uuid';
import { StCoreSkillTable } from '../st-core-skill-table';

describe('st-core-skill-table', () => {
  let component: StCoreSkillTable;
  const skills: UserSkillModel[] = [    
    {
      skillId: generatorRandomUUID(),
      displayName: 'skill 1',      
      observation: '',
      level: 1,
      date: '2018-04-10T00:00:00Z',
    },
    {
      skillId: generatorRandomUUID(),
      displayName: 'skill 2',      
      observation: 'Lorem',
      level: 3,
      date: '2017-04-10T00:00:00Z',
    },
    {
      skillId: generatorRandomUUID(),
      displayName: 'skill 3',      
      observation: 'Lorem Ipsum',
      level: 1,
      date: '2018-04-10T00:00:00Z',
    }
  ];

  beforeEach(async () => {
    component = new StCoreSkillTable(); 
    component.userSkills = skills;   
  });  

  describe('skill table initialization', ()=>{
    it('renders', async () => {
      expect(component).toBeTruthy();
    });
    xit('should call function initialize state', async () => {
      // tslint:disable-next-line: no-empty
      spyOn(component, 'setState').and.callFake(() => {});
      await component.componentWillLoad();
      expect(component.setState).toHaveBeenCalled();
    });
  });

  describe('Filter events emitter', ()=>{
    it('Should emit filters with displayName', () => {
      const event = {
        target: {
          value: 'Test'
        }
      }
      const filters = {
        displayName: 'Test',
        date: '',
        level: '',
        type: '',
        observation: '',
        discipline: ''
      };
      spyOn(component.filters, 'emit').and.callFake(()=>{});
      component.handleDisplayName(event);
      expect(component.userFilter).toEqual(filters);
      expect(component.filters.emit).toBeCalledWith(filters);
    });

    it('Should emit filters with type', () => {
      const event = {
        target: {
          value: 'Expert'
        }
      }
      const filters = {
        displayName: '',
        date: '',
        level: '',
        type: 'Expert',
        observation: '',
        discipline: ''
      };
      spyOn(component.filters, 'emit').and.callFake(()=>{});
      component.handleSelectType(event);
      expect(component.userFilter).toEqual(filters);
      expect(component.filters.emit).toBeCalledWith(filters);
    });

    it('Should emit filters with level', () => {
      const event = {
        target: {
          value: '1'
        }
      }
      const filters = {
        displayName: '',
        date: '',
        level: '1',
        type: '',
        observation: '',
        discipline: ''
      };
      spyOn(component.filters, 'emit').and.callFake(()=>{});
      component.handleSelectLevel(event);
      expect(component.userFilter).toEqual(filters);
      expect(component.filters.emit).toBeCalledWith(filters);
    });

    it('Should emit filters with Date', () => {
      const event = {
        target: {
          value: '2023-03-07'
        }
      };
      const filters = {
        displayName: '',
        date: '2023-03-07',
        level: '',
        type: '',
        observation: '',
        discipline: ''
      };
      spyOn(component.filters, 'emit').and.callFake(()=>{});
      component.handleDate(event);
      expect(component.userFilter).toEqual(filters);
      expect(component.filters.emit).toBeCalledWith(filters);
    });

    it('Should emit filters with Discipline', () => {
      const event = {
        target: {
          value: 'java'
        }
      };
      const filters = {
        displayName: '',
        date: '',
        level: '',
        type: '',
        observation: '',
        discipline: 'java'
      };
      spyOn(component.filters, 'emit').and.callFake(()=>{});
      component.handleDisciplineName(event);
      expect(component.userFilter).toEqual(filters);
      expect(component.filters.emit).toBeCalledWith(filters);
    });
  });

  describe('Historical event emitter', () => {
    it('Should call seeHistorical event emit', async() => {
      const skill = skills[0];
      spyOn(component.seeHistorical, 'emit').and.callFake(()=> {});
      component.handleHistorical(skill);

      expect(component.seeHistorical.emit).toHaveBeenCalledWith({ skillId: skill.skillId });
    });
  });

  describe('cleanFilters', () => {
    it('should clear all filters and emit the value', ()=>{
      component.userFilter = {
        displayName: 'test',
        date: '',
        level: '5',
        type: 'Expert',
        observation: 'Lorem',
        discipline: 'Ipsum',
      };
      component.selectLevel = <select>5</select>;
      component.selectType = <select>Expect</select>;
  
      const clear = {
        displayName: '',
        date: '',
        level: '',
        type: '',
        observation: '',
        discipline: '',
      };
  
      spyOn(component.filters, 'emit').and.callFake(()=>{});
      component.cleanFilters();
  
      expect(component.userFilter).toEqual(clear);
      expect(component.selectLevel.value).toBe('');
      expect(component.selectType.value).toBe('');
      expect(component.filters.emit).toHaveBeenCalledWith(clear);
    });
  });
});
