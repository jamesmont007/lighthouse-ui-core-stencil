import { SkillDetailModel } from '../models/skill-detail.model';

export const skill: SkillDetailModel = {
  skillId: 'comunicación',
  displayName: 'Comunicación',
  assessmentDate: '2020-07-31T13:55:43.568Z',
  evaluator: 'Luz Angela Perona',
  level: 1,
  comments:
    'Prueba 1 de Luz Angela para que más candidatos tengas skills y se puedan visualizar en la pantalla',
  details: [
    {
      answer: 'No',
      detail:
        'Pregunta 1 de la primera prueba para garantizar que salga todo o que yo escribo en este campo',
    },
  ]
};
