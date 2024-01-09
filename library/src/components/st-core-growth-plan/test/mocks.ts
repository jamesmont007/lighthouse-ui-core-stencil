import { generatorRandomUUID } from '../../../utils/generator-random-uuid';

export const MOCK_GROWTH_PLAN = {
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
