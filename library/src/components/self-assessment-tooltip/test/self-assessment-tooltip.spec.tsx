import { StCoreSelfAssessmentTooltip } from '../self-assessment-tooltip';

describe('StCoreSelfAssessmentTooltip', () => {
  let component: StCoreSelfAssessmentTooltip;

  // Mock del EventEmitter para sendSelfAssessment
  const mockSendSelfAssessment = {
    emit: jest.fn()
  };

  // Mock de starsRef
  const mockStarsRef = {
    resetStars: jest.fn()
  };

  // Mock de tooltipRef
  const mockTooltipRef = {
    handlerChangeVisibility: jest.fn()
  };

  beforeEach(() => {
    component = new StCoreSelfAssessmentTooltip();

    // Asignar el EventEmitter mock a sendSelfAssessment
    component.sendSelfAssessment = mockSendSelfAssessment as any;

    // Asignar el mock de starsRef a starsRef
    component.starsRef = mockStarsRef as any;

    // Asignar el mock de tooltipRef a tooltipRef
    component.tooltipRef = mockTooltipRef as any;

    // Simular una skill
    component.skill = {
      skillId: '1',
      displayName: 'skill 1',
      date: '2018-04-10T00:00:00Z',
      level: 1,
      tags: ['type 1'],
      observation: ''
    };
  });

  it('should emit the skill to be self-assessed', async () => {
    const event = {
      preventDefault: jest.fn()
    };

    // Llamar al método handleSelfAssessment
    await component.handleSelfAssessment(event, component.skill, false);

    // Verificar que preventDefault se haya llamado
    expect(event.preventDefault).toHaveBeenCalled();

    // Verificar que sendSelfAssessment.emit se haya llamado con los datos correctos
    expect(mockSendSelfAssessment.emit).toHaveBeenCalledWith({
      skill: component.skill,
      newLevel: component.selfAssessmentRating,
      moreDetails: false
    });

    // Verificar que resetStars se haya llamado
    expect(mockStarsRef.resetStars).toHaveBeenCalled();

    // Verificar que handlerChangeVisibility se haya llamado
    expect(mockTooltipRef.handlerChangeVisibility).toHaveBeenCalled();
  });
});