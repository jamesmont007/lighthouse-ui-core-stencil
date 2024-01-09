jest.mock('../../utils/locate');

import { SkillEvaluation } from './skill-evaluation';

describe('skill-evaluation', () => {
  let component: SkillEvaluation;

  beforeEach(async () => {
    component = new SkillEvaluation();
  });

  it('renders', async () => {
    expect(component).toBeTruthy();
  });

  describe('#componentWillLoad', () => {
    it('Should call to setSkillData if prop data is a single skill', async () => {
      component.isASingleSkill = true;
      const skill = {
        skillId: '12afvxxvaf',
        displayName: 'Skill Four',
        categoryId: 'generatorRandomUUID()',
        enabled: true,
        position: 2,
        mandatory: true,
        showInfo: true,
        details: [
          {
            id: 'Detail 1',
            description: 'Detail 1',
            position: 0,
            enabled: true
          },
          {
            id: 'Detail 2',
            description: 'Detail 2',
            position: 1,
            enabled: true
          }
        ]
      };
      component.skill = skill;
      component.evaluatedName = 'someone';
      component.formName = 'something';

      spyOn(component, 'setSkillData').and.callFake(() => {});
      spyOn(component, 'setFormData').and.callFake(() => {});

      await component.componentWillLoad();

      expect(component.setSkillData).toHaveBeenCalledWith(skill);
      expect(component.setFormData).not.toHaveBeenCalled();
    });
  });

  describe('#handleInputChange', () => {
    it('Should call to set skill data if is a single skill', () => {
      const event = {
        target: { value: 2 }
      };

      const skill = {
        skillId: '12afvxxvaf',
        displayName: 'Skill Four',
        categoryId: 'generatorRandomUUID()',
        enabled: true,
        position: 2,
        mandatory: true,
        details: [
          {
            id: 'Detail 1',
            description: 'Detail 1',
            position: 0,
            enabled: true
          },
          {
            id: 'Detail 2',
            description: 'Detail 2',
            position: 1,
            enabled: true
          }
        ]
      };

      component.evaluatedName = 'someone';
      component.formName = 'something';
      component.isASingleSkill = true;
      spyOn(component, 'setSkillData').and.callFake(() => {});
      spyOn(component, 'setFormData').and.callFake(() => {});
  
      component.handleInputChange(event, skill);
      expect(component.setSkillData).toHaveBeenCalledWith({
        ...skill,
        selectedLevel: event.target.value
      });
      expect(component.setFormData).not.toHaveBeenCalled();
    });

    it('Should set skill comment', () => {
      const event = {
        target: { value: 'afdasda' }
      };

      const skill = {
        skillId: '12afvxxvaf',
        displayName: 'Skill Four',
        categoryId: 'generatorRandomUUID()',
        enabled: true,
        position: 2,
        mandatory: true,
        details: [
          {
            id: 'Detail 1',
            description: 'Detail 1',
            position: 0,
            enabled: true
          },
          {
            id: 'Detail 2',
            description: 'Detail 2',
            position: 1,
            enabled: true
          }
        ]
      };

      component.evaluatedName = 'someone';
      component.formName = 'something';
      component.isASingleSkill = true;
      spyOn(component, 'setSkillData').and.callFake(() => {});
      spyOn(component, 'setFormData').and.callFake(() => {});
  
      component.handleInputChange(event, skill, true);
      expect(component.setSkillData).toHaveBeenCalledWith({
        ...skill,
        comments: event.target.value
      });
      expect(component.setFormData).not.toHaveBeenCalled();
    });
  });
});
