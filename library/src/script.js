// Data
/* eslint-env es6 */
const TEMPLATE_LIST = [
  { form: { formId: "soft-skill-form", name: "Del Ser" }, discipline: { id: 'backend', name: 'backend' } },
  { form: { formId: "technical-skill-form", name: "Técnica" }, discipline: { id: 'frontend', name: 'frontend' } },
];

const TODAY = `${new Date().getFullYear()}${new Date().getMonth() + 1 < 9 ? "-0" : "-"
  }${new Date().getMonth() + 1}${new Date().getDate() < 9 ? "-0" : "-"
  }${new Date().getDate()}`;

const mockPlan = {
  name: 'Plan name test',
  projection: 'I want to be a full stack engineer to be able to cover more opportunities and roles.\\n\\nAlso i would like to improve my mobile skills so i can become an expert Lastly, i would like to start learning in depth about game development',
  mentors: ['Lorem ipsum dolor sit amet', 'Integer ac efficitur lorem id blandit est'],
  goals: [
    {
      description: "Goal one description",
      actions: [
        {
          "id": "10b5851b-ed82-4af7-8a3a-8d81ea56c03e",
          "description": "Lorem Ipsum",
          "startDate": "2023-07-10T20:20:07.819Z",
          "dueDate": "2023-07-15T20:20:07.819Z",
          "state": 0
        },
        {
          "id": "11b5851b-ed82-4af7-8a3a-8d81ea56c03e",
          "description": "Lorem Ipsum",
          "startDate": "2023-07-10T20:20:07.819Z",
          "dueDate": "2023-07-13T20:20:07.819Z",
          "state": 1

        },
        {
          "id": "12b5851b-ed82-4af7-8a3a-8d81ea56c03e",
          "description": "Lorem Ipsum",
          "startDate": "2023-07-10T20:20:07.819Z",
          "dueDate": "2023-07-21T20:20:07.819Z",
          "state": 0
        }
      ],
      state: 1,
      dueDate: '2023-07-25T20:20:07.819Z',
      id: 'f417f050-27ee-4835-8a9c-62f985bcbaa7',
      suggestedByName: "John Doe"
    },
    {
      description: "Goal two description",
      actions: [
        {
          "id": "10b5851b-ed82-4af7-8a3a-8d81ea56c03e",
          "description": "Lorem Ipsum",
          "startDate": "2023-07-10T20:20:07.819Z",
          "dueDate": "2023-07-13T20:20:07.819Z",
          "state": 0
        },
        {
          "id": "11b5851b-ed82-4af7-8a3a-8d81ea56c03e",
          "description": "Lorem Ipsum",
          "startDate": "2023-07-10T20:20:07.819Z",
          "dueDate": "2023-07-15",
          "state": 1

        },
        {
          "id": "12b5851b-ed82-4af7-8a3a-8d81ea56c03e",
          "description": "Lorem Ipsum",
          "startDate": "2023-07-10T20:20:07.819Z",
          "dueDate": "2023-07-15",
          "state": 0
        }
      ],
      state: 0,
      dueDate: '2023-07-25T20:20:07.819Z',
      id: 'dabd0117-ad90-4f9f-b294-af9286d36fa2'
    },
    {
      description: "Goal suggested/rejected description",
      actions: [
        {
          "id": "10b5851b-ed82-4af7-8a3a-8d81ea56c03e",
          "description": "Lorem Ipsum",
          "startDate": "2023-07-10T20:20:07.819Z",
          "dueDate": "2023-07-15T20:20:07.819Z",
          "state": 4
        },
        {
          "id": "11b5851b-ed82-4af7-8a3a-8d81ea56c03e",
          "description": "Lorem Ipsum",
          "startDate": "2023-07-10T20:20:07.819Z",
          "dueDate": "2023-07-15",
          "state": 5

        },
        {
          "id": "12b5851b-ed82-4af7-8a3a-8d81ea56c03e",
          "description": "Lorem Ipsum",
          "startDate": "2023-07-10T20:20:07.819Z",
          "dueDate": "2023-07-15",
          "state": 5
        }
      ],
      state: 5,
      dueDate: '2023-07-25T20:20:07.819Z',
      id: '15dc9390-f6d8-4f8e-925b-50d9027719c1'
    },
    {
      description: "Goal suggested/rejected description",
      actions: [
        {
          "id": "10b5851b-ed82-4af7-8a3a-8d81ea56c03e",
          "description": "Lorem Ipsum",
          "startDate": "2023-07-10T20:20:07.819Z",
          "dueDate": "2023-07-15T20:20:07.819Z",
          "state": 4
        },
        {
          "id": "11b5851b-ed82-4af7-8a3a-8d81ea56c03e",
          "description": "Lorem Ipsum",
          "startDate": "2023-07-10T20:20:07.819Z",
          "dueDate": "2023-07-15",
          "state": 5

        },
        {
          "id": "12b5851b-ed82-4af7-8a3a-8d81ea56c03e",
          "description": "Lorem Ipsum",
          "startDate": "2023-07-10T20:20:07.819Z",
          "dueDate": "2023-07-15",
          "state": 4
        }
      ],
      state: 4,
      dueDate: '2023-07-25T20:20:07.819Z',
      id: 'fabd0117-ad90-4f9f-b294-af9286d36fa2'
    },
    {
      description: "Goal description",
      actions: [
        {
          "id": "10b5851b-ed82-4af7-8a3a-8d81ea56c03e",
          "description": "Lorem Ipsum",
          "startDate": "2023-07-10T20:20:07.819Z",
          "dueDate": "2023-07-15T20:20:07.819Z",
          "state": 0
        },
        {
          "id": "11b5851b-ed82-4af7-8a3a-8d81ea56c03e",
          "description": "Lorem Ipsum",
          "startDate": "2023-07-10T20:20:07.819Z",
          "dueDate": "2023-07-15",
          "state": 2

        },
      ],
      state: 1,
      dueDate: '2023-07-25T20:20:07.819Z',
      id: '10b5851b-ed82-4af7-8a3a-9d81ea56c03e'
    },
    {
      description: "Goal Done",
      actions: [
        {
          "id": "10b5851b-ed82-4af7-8a3a-8d81ea56c03e",
          "description": "Lorem Ipsum",
          "startDate": "2023-07-10T20:20:07.819Z",
          "dueDate": "2023-07-15T20:20:07.819Z",
          "state": 2
        },
        {
          "id": "11b5851b-ed82-4af7-8a3a-8d81ea56c03e",
          "description": "Lorem Ipsum",
          "startDate": "2023-07-10T20:20:07.819Z",
          "dueDate": "2023-07-15",
          "state": 2

        },
        {
          "id": "11b5851b-ed82-4af7-8a3a-8d81ea56c03e",
          "description": "Lorem Ipsum",
          "startDate": "2023-07-10T20:20:07.819Z",
          "dueDate": "2023-07-15",
          "state": 3

        },
        {
          "id": "11b5851b-ed82-4af7-8a3a-8d81ea56c03e",
          "description": "Lorem Ipsum",
          "startDate": "2023-07-10T20:20:07.819Z",
          "dueDate": "2023-07-15",
          "state": 3

        },
      ],
      state: 2,
      dueDate: '2023-07-25T20:20:07.819Z',
      id: '85bc28f9-07df-444e-8d72-89124e76a69a'
    },
    {
      description: "Suspended",
      actions: [
        {
          "id": "10b5851b-ed82-4af7-8a3a-8d81ea56c03e",
          "description": "Lorem Ipsum",
          "startDate": "2023-07-10T20:20:07.819Z",
          "dueDate": "2023-07-15T20:20:07.819Z",
          "state": 3
        },
        {
          "id": "11b5851b-ed82-4af7-8a3a-8d81ea56c03e",
          "description": "Lorem Ipsum",
          "startDate": "2023-07-10T20:20:07.819Z",
          "dueDate": "2023-07-15",
          "state": 3,
          "suggestedByName": "John Doe"

        },
      ],
      state: 3,
      dueDate: '2023-07-25T20:20:07.819Z',
      id: '55bc28f9-07df-444e-8d72-89124e76a69a'
    },
  ]
};

const SKILL_LIST = [
  {
    activeSkill: true,
    description: "Apache Spark - Streaming",
    radarDescription: "Apache Spark - Streaming",
    radarLevel: "not-in-radar",
    requiresValidation: true,
    skillId: "apache-spark--streaming",
    skillTypeId: "tools-libraries",
  },
  {
    activeSkill: true,
    description: "Bases de Datos  relacionales\n",
    requiresValidation: false,
    skillId: "bases-de-datos-relacionales",
    skillTypeId: "technical-skills",
  },
  {
    activeSkill: true,
    description: "Cats",
    displayName: "Cats",
    radarLevel: "not-in-radar",
    requiresValidation: false,
    skillId: "cats",
    skillTypeId: "languages-frameworks",
    skillTypeName: "Languages & Frameworks",
  },
  {
    activeSkill: true,
    description: "Short description",
    displayName: "Orientación a Calidad",
    radarDescription: "Radar description",
    radarLevel: "not-in-radar",
    requiresValidation: false,
    skillId: "orientacion-a-calidad",
    skillTypeId: "technical-skills",
    skillTypeName: "Technical Skills",
    trendingSkill: false,
  },
  {
    activeSkill: true,
    description: "Short description",
    displayName: "Velocidad  Alineación con Estimaciones",
    radarDescription: "Radar description",
    radarLevel: "not-in-radar",
    requiresValidation: false,
    skillId: "velocidadalineacion-con-estimaciones",
    skillTypeId: "technical-skills",
    skillTypeName: "Technical Skills",
    trendingSkill: false,
  },
  {
    activeSkill: true,
    description: "Short description",
    displayName: "Prácticas de Ingeniería y Proceso",
    radarDescription: "Radar description",
    radarLevel: "not-in-radar",
    requiresValidation: false,
    skillId: "practicas-de-ingenieria-y-proceso",
    skillTypeId: "technical-skills",
    skillTypeName: "Technical Skills",
    trendingSkill: false,
  },
  {
    activeSkill: true,
    description: "Short description",
    displayName: "Conocimiento de Lenguajes/Frameworks",
    radarDescription: "Radar description",
    radarLevel: "not-in-radar",
    requiresValidation: false,
    skillId: "conocimiento-de-lenguajes-frameworks",
    skillTypeId: "technical-skills",
    skillTypeName: "Technical Skills",
    trendingSkill: false,
  },
  {
    activeSkill: true,
    description: "Short description",
    displayName: "Habilidades de Diseño y Comunicación de Datos",
    radarDescription: "Radar description",
    radarLevel: "not-in-radar",
    requiresValidation: false,
    skillId: "habilidades-de-diseno-y-comunicacion-de-datos",
    skillTypeId: "technical-skills",
    skillTypeName: "Technical Skills",
    trendingSkill: false,
  },
  {
    activeSkill: true,
    description: "Short description",
    displayName: "PostgreSQL",
    radarDescription: "Radar description",
    radarLevel: "fully-adopted",
    requiresValidation: false,
    skillId: "postgresql",
    skillTypeId: "platforms",
    skillTypeName: "Platforms",
    trendingSkill: false,
  },
  {
    activeSkill: true,
    description: "Short description",
    displayName: "CSS 3",
    radarDescription: "Radar description",
    radarLevel: "not-in-radar",
    requiresValidation: false,
    skillId: "css-3",
    skillTypeId: "languages-frameworks",
    skillTypeName: "Languages & Frameworks",
    trendingSkill: false,
  },
  {
    activeSkill: true,
    description: "Short description",
    displayName: "Materialize",
    radarDescription: "Radar description",
    radarLevel: "not-in-radar",
    requiresValidation: false,
    skillId: "materialize",
    skillTypeId: "languages-frameworks",
    skillTypeName: "Languages & Frameworks",
    trendingSkill: false,
  },
  {
    activeSkill: true,
    description: "Short description",
    displayName: "Semantic UI",
    radarDescription: "Radar description",
    radarLevel: "not-in-radar",
    requiresValidation: false,
    skillId: "semantic-ui",
    skillTypeId: "languages-frameworks",
    skillTypeName: "Languages & Frameworks",
    trendingSkill: false,
  },
  {
    activeSkill: true,
    description: "Short description",
    displayName: "Redux",
    radarDescription: "Radar description",
    radarLevel: "proficient",
    requiresValidation: false,
    skillId: "redux",
    skillTypeId: "tools-libraries",
    skillTypeName: "Tools & Libraries",
    trendingSkill: false,
  },
  {
    activeSkill: true,
    description: "Short description",
    displayName: "NGRX",
    radarDescription: "Radar description",
    radarLevel: "proficient",
    requiresValidation: false,
    skillId: "ngrx",
    skillTypeId: "tools-libraries",
    skillTypeName: "Tools & Libraries",
    trendingSkill: false,
  },
  {
    activeSkill: true,
    description: "Short description",
    displayName: "ASPx",
    radarDescription: "Radar description",
    radarLevel: "not-in-radar",
    requiresValidation: false,
    skillId: "aspx",
    skillTypeId: "tools-libraries",
    skillTypeName: "Tools & Libraries",
    trendingSkill: false,
  },
  {
    activeSkill: true,
    description: "Short description",
    displayName: "Apollo",
    radarDescription: "Radar description",
    radarLevel: "exploring",
    requiresValidation: false,
    skillId: "apollo",
    skillTypeId: "tools-libraries",
    skillTypeName: "Tools & Libraries",
    trendingSkill: false,
  },
  {
    activeSkill: true,
    description: "Short description",
    displayName: "IIS",
    radarDescription: "Radar description",
    radarLevel: "not-in-radar",
    requiresValidation: false,
    skillId: "iis",
    skillTypeId: "tools-libraries",
    skillTypeName: "Tools & Libraries",
    trendingSkill: false,
  },
  {
    activeSkill: true,
    description: "Short description",
    displayName: ".Net Mocking",
    radarDescription: "Radar description",
    radarLevel: "not-in-radar",
    requiresValidation: false,
    skillId: ".net-mocking",
    skillTypeId: "tools-libraries",
    skillTypeName: "Tools & Libraries",
    trendingSkill: false,
  },
  {
    activeSkill: true,
    description: "Short description",
    displayName: "RXJS",
    radarDescription: "Radar description",
    radarLevel: "not-in-radar",
    requiresValidation: false,
    skillId: "rxjs",
    skillTypeId: "tools-libraries",
    skillTypeName: "Tools & Libraries",
    trendingSkill: false,
  },
  {
    activeSkill: true,
    description: "Short description",
    displayName: "UI Testing",
    radarDescription: "Radar description",
    radarLevel: "fully-adopted",
    requiresValidation: false,
    skillId: "ui-testing",
    skillTypeId: "techniques-practices",
    skillTypeName: "Techniques & Practices",
    trendingSkill: false,
  },
  {
    activeSkill: true,
    description: "Short description",
    displayName: "Vue.JS",
    radarDescription: "Radar description",
    radarLevel: "not-in-radar",
    requiresValidation: false,
    skillId: "vue.js",
    skillTypeId: "languages-frameworks",
    skillTypeName: "Languages & Frameworks",
    trendingSkill: false,
  },
  {
    activeSkill: true,
    description: "Short description",
    displayName: "Propagación de conocimiento de negocio en el equipo",
    radarDescription: "Radar description",
    radarLevel: "not-in-radar",
    requiresValidation: false,
    skillId: "propagación-de-conocimiento-de-negocio-en-el-equipo",
    skillTypeId: "techniques-practices",
    skillTypeName: "Techniques & Practices",
    trendingSkill: false,
  },
  {
    activeSkill: true,
    description: "Short description",
    displayName: "NUnit",
    radarDescription: "Radar description",
    radarLevel: "not-in-radar",
    requiresValidation: false,
    skillId: "nunit",
    skillTypeId: "tools-libraries",
    skillTypeName: "Tools & Libraries",
    trendingSkill: false,
  },
  {
    activeSkill: true,
    description: "Short description",
    displayName: "ApiContext",
    radarDescription: "Radar description",
    radarLevel: "not-in-radar",
    requiresValidation: false,
    skillId: "apicontext",
    skillTypeId: "techniques-practices",
    skillTypeName: "Techniques & Practices",
    trendingSkill: false,
  },
  {
    activeSkill: true,
    description: "Short description",
    displayName: "Documentación del proyecto y producto",
    radarDescription: "Radar description",
    radarLevel: "not-in-radar",
    requiresValidation: false,
    skillId: "documentación-del-proyecto-y-producto",
    skillTypeId: "techniques-practices",
    skillTypeName: "Techniques & Practices",
    trendingSkill: false,
  },
  {
    activeSkill: true,
    description: "Short description",
    displayName: "Experiencia de usuario (UX)",
    radarDescription: "Radar description",
    radarLevel: "not-in-radar",
    requiresValidation: false,
    skillId: "experiencia-de-usuario-(ux)",
    skillTypeId: "technical-skills",
    skillTypeName: "Technical Skills",
    trendingSkill: false,
  },
  {
    activeSkill: true,
    description: "Short description",
    displayName: "Orientación al logro y objetivos",
    radarDescription: "Radar description",
    radarLevel: "not-in-radar",
    requiresValidation: false,
    skillId: "orientación-al-logro-y-objetivos",
    skillTypeId: "selection-skills",
    skillTypeName: "Selection process skills",
    trendingSkill: false,
  },
  {
    activeSkill: true,
    description: "Short description",
    displayName: "Negociación y manejo de compromisos",
    radarDescription: "Radar description",
    radarLevel: "not-in-radar",
    requiresValidation: false,
    skillId: "negociación-y-manejo-de-compromisos",
    skillTypeId: "techniques-practices",
    skillTypeName: "Techniques & Practices",
    trendingSkill: false,
  },
  {
    activeSkill: true,
    description: "Short description",
    displayName: "Aseguramiento de calidad del producto",
    radarDescription: "Radar description",
    radarLevel: "not-in-radar",
    requiresValidation: false,
    skillId: "aseguramiento-de-calidad-del-producto",
    skillTypeId: "techniques-practices",
    skillTypeName: "Techniques & Practices",
    trendingSkill: false,
  },
  {
    activeSkill: true,
    description: "Short description",
    displayName:
      "Entender las necesidades del negocio y validar ese entendimiento",
    radarDescription: "Radar description",
    radarLevel: "not-in-radar",
    requiresValidation: false,
    skillId: "entender-las-necesidades-del-negocio-y-validar-ese-entendimiento",
    skillTypeId: "techniques-practices",
    skillTypeName: "Techniques & Practices",
    trendingSkill: false,
  },
  {
    activeSkill: true,
    description: "Short description",
    displayName: "MXNet",
    radarDescription: "Radar description",
    radarLevel: "exploring",
    requiresValidation: false,
    skillId: "mxnet",
    skillTypeId: "languages-frameworks",
    skillTypeName: "Languages & Frameworks",
    trendingSkill: false,
  },
  {
    activeSkill: true,
    description: "Short description",
    displayName: "Tensorflow",
    radarDescription: "Radar description",
    radarLevel: "proficient",
    requiresValidation: false,
    skillId: "tensorflow",
    skillTypeId: "languages-frameworks",
    skillTypeName: "Languages & Frameworks",
    trendingSkill: false,
  },
  {
    activeSkill: true,
    description: "Short description",
    displayName: "NumPy",
    radarDescription: "Radar description",
    radarLevel: "not-in-radar",
    requiresValidation: false,
    skillId: "numpy",
    skillTypeId: "tools-libraries",
    skillTypeName: "Tools & Libraries",
    trendingSkill: false,
  },
  {
    activeSkill: true,
    description: "Short description",
    displayName: "SciPy",
    radarDescription: "Radar description",
    radarLevel: "not-in-radar",
    requiresValidation: false,
    skillId: "scipy",
    skillTypeId: "tools-libraries",
    skillTypeName: "Tools & Libraries",
    trendingSkill: false,
  },
  {
    activeSkill: true,
    description: "Short description",
    displayName: "Django",
    radarDescription: "Radar description",
    radarLevel: "proficient",
    requiresValidation: false,
    skillId: "django",
    skillTypeId: "languages-frameworks",
    skillTypeName: "Languages & Frameworks",
    trendingSkill: false,
  },
  {
    activeSkill: true,
    description: "Short description",
    displayName: "Scikit-Learn",
    radarDescription: "Radar description",
    radarLevel: "not-in-radar",
    requiresValidation: false,
    skillId: "scikit-learn",
    skillTypeId: "tools-libraries",
    skillTypeName: "Tools & Libraries",
    trendingSkill: false,
  },
  {
    activeSkill: true,
    description: "Short description",
    displayName: "Play Framework",
    radarDescription: "Radar description",
    radarLevel: "not-in-radar",
    requiresValidation: false,
    skillId: "play-framework",
    skillTypeId: "languages-frameworks",
    skillTypeName: "Languages & Frameworks",
    trendingSkill: false,
  },
];

const SKILLS = [
  {
    _id: "5f248a2756a02c0019a389e0",
    assessmentDate: "2020-07-31T13:55:43.568Z",
    comments:
      "Prueba 1 de Luz Angela para que más candidatos tengas skills y se puedan visualizar en la pantalla",
    details: [
      {
        _id: "5f248a2756a02c0019a389e1",
        answer: "No",
        detail:
          "Pregunta 1 de la primera prueba para garantizar que salga todo o que yo escribo en este campo",
      },
    ],
    evaluator: "Luz Angela Perona",
    level: 0,
    skillId: "comunicación",
  },
  {
    _id: "5f248a2756a02c0019a389dd",
    assessmentDate: "2020-07-31T13:55:43.568Z",
    comments:
      "Prueba 2 de Luz Angela para que más candidatos tengas skills y se puedan visualizar en la pantalla",
    details: [
      {
        _id: "5f248a2756a02c0019a389df",
        answer: "Si",
        detail:
          "Pregunta 1 de la segunda prueba para garantizar que salga todo o que yo escribo en este campo",
      },
      {
        _id: "5f248a2756a02c0019a389de",
        answer: "No",
        detail:
          "Pregunta 2 de la segunda prueba para garantizar que salga todo o que yo escribo en este campo",
      },
    ],
    evaluator: "Luz Angela Perona",
    level: 2,
    skillId: "apertura",
    displayName: "Apertura 1",
    skillTypeName: "Soft skills",
  },
  {
    _id: "5f248a2756a02c0019a389e0",
    assessmentDate: "2020-07-31T13:55:43.568Z",
    comments:
      "Prueba 1 de Luz Angela para que más candidatos tengas skills y se puedan visualizar en la pantalla",
    details: [
      {
        _id: "5f248a2756a02c0019a389e1",
        answer: "No",
        detail:
          "Pregunta 1 de la primera prueba para garantizar que salga todo o que yo escribo en este campo",
      },
    ],
    evaluator: "Luz Angela Perona",
    level: 0,
    skillId: "comunicación",
    displayName: "Comunicación 2",
    skillTypeName: "Soft skills",
  },
  {
    _id: "5f248a2756a02c0019a389dd",
    assessmentDate: "2020-07-31T13:55:43.568Z",
    comments:
      "Prueba 2 de Luz Angela para que más candidatos tengas skills y se puedan visualizar en la pantalla",
    details: [
      {
        _id: "5f248a2756a02c0019a389df",
        answer: "Si",
        detail:
          "Pregunta 1 de la segunda prueba para garantizar que salga todo o que yo escribo en este campo",
      },
      {
        _id: "5f248a2756a02c0019a389de",
        answer: "No",
        detail:
          "Pregunta 2 de la segunda prueba para garantizar que salga todo o que yo escribo en este campo",
      },
    ],
    evaluator: "Luz Angela Perona",
    level: 2,
    skillId: "apertura",
    displayName: "Apertura 3",
    skillTypeName: "Soft skills",
  },
  {
    _id: "5f248a2756a02c0019a389e0",
    assessmentDate: "2020-07-31T13:55:43.568Z",
    comments:
      "Prueba 1 de Luz Angela para que más candidatos tengas skills y se puedan visualizar en la pantalla",
    details: [
      {
        _id: "5f248a2756a02c0019a389e1",
        answer: "No",
        detail:
          "Pregunta 1 de la primera prueba para garantizar que salga todo o que yo escribo en este campo",
      },
    ],
    evaluator: "Luz Angela Perona",
    level: 0,
    skillId: "comunicación",
    displayName: "Comunicación 4",
    skillTypeName: "Soft skills",
  },
  {
    _id: "5f248a2756a02c0019a389dd",
    assessmentDate: "2020-07-31T13:55:43.568Z",
    comments:
      "Prueba 2 de Luz Angela para que más candidatos tengas skills y se puedan visualizar en la pantalla",
    details: [
      {
        _id: "5f248a2756a02c0019a389df",
        answer: "Si",
        detail:
          "Pregunta 1 de la segunda prueba para garantizar que salga todo o que yo escribo en este campo",
      },
      {
        _id: "5f248a2756a02c0019a389de",
        answer: "No",
        detail:
          "Pregunta 2 de la segunda prueba para garantizar que salga todo o que yo escribo en este campo",
      },
    ],
    evaluator: "Luz Angela Perona",
    level: 2,
    skillId: "apertura",
    displayName: "Apertura 5",
    skillTypeName: "Soft skills",
  },
  {
    _id: "5f248a2756a02c0019a389e0",
    assessmentDate: "2020-07-31T13:55:43.568Z",
    comments:
      "Prueba 1 de Luz Angela para que más candidatos tengas skills y se puedan visualizar en la pantalla",
    details: [
      {
        _id: "5f248a2756a02c0019a389e1",
        answer: "No",
        detail:
          "Pregunta 1 de la primera prueba para garantizar que salga todo o que yo escribo en este campo",
      },
    ],
    evaluator: "Luz Angela Perona",
    level: 0,
    skillId: "comunicación",
    displayName: "Comunicación 6",
    skillTypeName: "Soft skills",
  },
  {
    _id: "5f248a2756a02c0019a389dd",
    assessmentDate: "2020-07-31T13:55:43.568Z",
    comments:
      "Prueba 2 de Luz Angela para que más candidatos tengas skills y se puedan visualizar en la pantalla",
    details: [
      {
        _id: "5f248a2756a02c0019a389df",
        answer: "Si",
        detail:
          "Pregunta 1 de la segunda prueba para garantizar que salga todo o que yo escribo en este campo",
      },
      {
        _id: "5f248a2756a02c0019a389de",
        answer: "No",
        detail:
          "Pregunta 2 de la segunda prueba para garantizar que salga todo o que yo escribo en este campo",
      },
    ],
    evaluator: "Luz Angela Perona",
    level: 2,
    skillId: "apertura",
    displayName: "Apertura 7",
    skillTypeName: "Soft skills",
  },
  {
    _id: "5f248a2756a02c0019a389e0",
    assessmentDate: "2020-07-31T13:55:43.568Z",
    comments:
      "Prueba 1 de Luz Angela para que más candidatos tengas skills y se puedan visualizar en la pantalla",
    details: [
      {
        _id: "5f248a2756a02c0019a389e1",
        answer: "No",
        detail:
          "Pregunta 1 de la primera prueba para garantizar que salga todo o que yo escribo en este campo",
      },
    ],
    evaluator: "Luz Angela Perona",
    level: 0,
    skillId: "comunicación",
    displayName: "Comunicación 8",
    skillTypeName: "Soft skills",
  },
  {
    _id: "5f248a2756a02c0019a389dd",
    assessmentDate: "2020-07-31T13:55:43.568Z",
    comments:
      "Prueba 2 de Luz Angela para que más candidatos tengas skills y se puedan visualizar en la pantalla",
    details: [
      {
        _id: "5f248a2756a02c0019a389df",
        answer: "Si",
        detail:
          "Pregunta 1 de la segunda prueba para garantizar que salga todo o que yo escribo en este campo",
      },
      {
        _id: "5f248a2756a02c0019a389de",
        answer: "No",
        detail:
          "Pregunta 2 de la segunda prueba para garantizar que salga todo o que yo escribo en este campo",
      },
    ],
    evaluator: "Luz Angela Perona",
    level: 2,
    skillId: "apertura",
    displayName: "Apertura 9",
    skillTypeName: "Soft skills",
  },
  {
    _id: "5f248a2756a02c0019a389e0",
    assessmentDate: "2020-07-31T13:55:43.568Z",
    comments:
      "Prueba 1 de Luz Angela para que más candidatos tengas skills y se puedan visualizar en la pantalla",
    details: [
      {
        _id: "5f248a2756a02c0019a389e1",
        answer: "No",
        detail:
          "Pregunta 1 de la primera prueba para garantizar que salga todo o que yo escribo en este campo",
      },
    ],
    evaluator: "Luz Angela Perona",
    level: 0,
    skillId: "comunicación",
    displayName: "Comunicación 10",
    skillTypeName: "Soft skills",
  },
  {
    _id: "5f248a2756a02c0019a389dd",
    assessmentDate: "2020-07-31T13:55:43.568Z",
    comments:
      "Prueba 2 de Luz Angela para que más candidatos tengas skills y se puedan visualizar en la pantalla",
    details: [
      {
        _id: "5f248a2756a02c0019a389df",
        answer: "Si",
        detail:
          "Pregunta 1 de la segunda prueba para garantizar que salga todo o que yo escribo en este campo",
      },
      {
        _id: "5f248a2756a02c0019a389de",
        answer: "No",
        detail:
          "Pregunta 2 de la segunda prueba para garantizar que salga todo o que yo escribo en este campo",
      },
    ],
    evaluator: "Luz Angela Perona",
    level: 2,
    skillId: "apertura",
    displayName: "Apertura 11",
    skillTypeName: "Soft skills",
  },
  {
    _id: "5f248a2756a02c0019a389dd",
    assessmentDate: "2020-07-31T13:55:43.568Z",
    comments:
      "Prueba 2 de Luz Angela para que más candidatos tengas skills y se puedan visualizar en la pantalla",
    details: [
      {
        _id: "5f248a2756a02c0019a389df",
        answer: "Si",
        detail:
          "Pregunta 1 de la segunda prueba para garantizar que salga todo o que yo escribo en este campo",
      },
      {
        _id: "5f248a2756a02c0019a389de",
        answer: "No",
        detail:
          "Pregunta 2 de la segunda prueba para garantizar que salga todo o que yo escribo en este campo",
      },
    ],
    evaluator: "Luz Angela Perona",
    level: 2,
    skillId: "apertura",
    displayName: "Apertura 12",
    skillTypeName: "Soft skills",
  },
];

const DETAIL = {
  userSkill: {
    date: "2021-09-23T20:28:07.819Z",
    level: 5,
    skillId: "css",
    observations: "",
    displayName: "CSS",
    tags: ["Languages & Frameworks", "Tools & Libraries"],
    historic: [
      {
        evaluator: "Luis Miguel Mejía",
        kind: "import-expert",
        date: "2022-11-30",
        level: 4,
        comment: "",
        details: [
          {
            detail: "Pregunta 1",
            answer: 3
          }
        ]
      }
    ]
  },
  index: 0
};

const LEVELS = ['', 'Very Low', 'Low', 'Medium', 'High', 'Very High'];

const EVALUATION = [
  {
    skillId: "idSkill",
    isRequired: false,
    displayName: "Valoracion super extraña",
    description: "magico tooltip",
    details: [
      "¿El código que genera la persona lo considerarías de alta calidad?",
      "¿El código que genera la persona es escalable, mantenible y seguro?",
    ],
    assessmentDate: new Date(),
    identifiedBy: "mcabralesa",
  },
  {
    skillId: "idSkill2",
    isRequired: true,
    displayName: "Valoracion super extraña 2",
    description: "magico tooltip 2",
    details: [
      "¿El código que genera la persona lo considerarías de alta calidad?",
      "¿El código que genera la persona es escalable, mantenible y seguro?",
    ],
    assessmentDate: new Date(),
    identifiedBy: "mcabralesa",
  },
  {
    skillId: "idSkill3",
    isRequired: false,
    displayName: "Valoracion super extraña 3",
    description: "magico tooltip 3",
    details: [
      "¿El código que genera la persona lo considerarías de alta calidad?",
      "¿El código que genera la persona es escalable, mantenible y seguro?",
    ],
    assessmentDate: new Date(),
    identifiedBy: "mcabralesa",
  },
  {
    skillId: "idSkill4",
    isRequired: true,
    displayName: "Valoracion super extraña 4",
    description: "magico tooltip 4",
    details: [
      "¿El código que genera la persona lo considerarías de alta calidad?",
      "¿El código que genera la persona es escalable, mantenible y seguro?",
    ],
    assessmentDate: new Date(),
    identifiedBy: "mcabralesa",
  },
  {
    skillId: "idSkill5",
    isRequired: false,
    displayName: "Valoracion super extraña 5",
    description: "magico tooltip 5",
    details: [
      "¿El código que genera la persona lo considerarías de alta calidad?",
      "¿El código que genera la persona es escalable, mantenible y seguro?",
    ],
    assessmentDate: new Date(),
    identifiedBy: "mcabralesa",
  },
];

const EVALUATION_SINGLE = {
  skillId: "idSkill6",
  displayName: "Valoracion super extraña 6",
  description: "magico tooltip",
  questions: {
    options: [
      1,
      2,
      3,
      4,
      5
    ],
    details: [
      "¿El código que genera la persona lo considerarías de alta calidad?",
      "¿El código que genera la persona es escalable, mantenible y seguro?",
    ],
  },
  assessmentDate: new Date(),
  identifiedBy: "mcabralesa",
};

// Core
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", renderComponent);
});

function renderComponent(e) {
  e.preventDefault();
  const key = e.target.dataset.skill;
  const divToRender = document.getElementById("toRender");
  divToRender.innerHTML = "";

  switch (key) {
    // Input
    case "st-core-switch-input":
      const switchEl = document.createElement("st-core-switch-input");
      switchEl.texts = { enabled: 'Enabled', disabled: 'Disabled' };
      divToRender.appendChild(switchEl);
      break;
    // Select Skill
    case "st-core-select-skill":
      const selectSkill = document.createElement("st-core-select-skill");
      selectSkill.addEventListener("sendSkillId", (e) =>
        alert(`Selected id: ${e.detail}`)
      );
      selectSkill.addEventListener("sendSearch", (e) =>
        console.log(`Search text: ${e.detail}`)
      );
      selectSkill.name = "Juan Perez";
      selectSkill.data = SKILL_LIST;
      divToRender.appendChild(selectSkill);
      break;
    // Select template
    case "st-core-select-template":
      const selectTemplate = document.createElement("st-core-select-template");
      selectTemplate.addEventListener("sendTemplateId", (e) =>
        alert(`Selected template id: ${e.detail}`)
      );
      selectTemplate.addEventListener("sendFilters", (e) =>
        alert(`Filter selected: ${JSON.stringify(e.detail)}`)
      );
      selectTemplate.data = TEMPLATE_LIST;
      selectTemplate.page = 1;
      selectTemplate.pageSize = 5;
      selectTemplate.totalItems = 3;
      divToRender.appendChild(selectTemplate);
      break;
    // Skill Detail
    case "st-core-skill-detail":
      const skillDetail = document.createElement("st-core-skill-detail");
      skillDetail.info = DETAIL;
      skillDetail.levelsEnum = LEVELS;
      divToRender.appendChild(skillDetail);
      break;
    // Skill Evaluation
    case "st-core-skill-evaluation":
      const skillEvaluation = document.createElement(
        "st-core-skill-evaluation"
      );
      skillEvaluation.evaluatedName = "name-test";
      skillEvaluation.evaluatorName = "Someone";
      skillEvaluation.formName = "Impact Matrix";
      skillEvaluation.readOnly = false;
      skillEvaluation.defaultCategoryId = '26569950-55d8-4f08-8f2b-49372cf66bcf';
      skillEvaluation.disciplinesField = [
        {
          "id": "f697187f-ffb6-4c7c-8cbd-be786189a271",
          "name": "DevOps",
          "description": "Short description",
          "enabled": true,
          "roles": [
            {
              "id": "345e0ff5-32e8-42fa-88cc-a20fbae680f3",
              "name": "DevOps Lead Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 3,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "ecdaf100-c9b4-4d6f-817e-69304b68bc86",
              "name": "DevOps Associate Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 0,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "95e88460-8bb8-42c5-9c41-3d7b0a1c9c1d",
              "name": "DevOps Senior Solutions Architect",
              "description": "Short description",
              "enabled": true,
              "position": 5,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "5d4916da-af58-42c7-9b8a-3d00e7092d6f",
              "name": "DevOps Solutions Architect",
              "description": "Short description",
              "enabled": true,
              "position": 4,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "6dfba19d-da57-4a2b-904d-e757656f9766",
              "name": "DevOps Senior Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 2,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "c9375d00-9cf6-4d52-9f15-6bed0c3d682d",
              "name": "DevOps Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 1,
              "link": null,
              "responsiblesInfo": []
            }
          ],
          "responsiblesInfo": [
            {
              "id": "108c553b-ac31-4cac-81b4-cc97f1318f33",
              "fullName": "Felipe Garzon Correa",
              "email": "felipe.garzonc@perficient.com",
              "enabled": true
            }
          ]
        },
        {
          "id": "93215422-2807-434d-8ae1-55873679f1d6",
          "name": "Experience Design",
          "description": "Short description",
          "enabled": true,
          "roles": [
            {
              "id": "5727dee9-093a-4b23-a739-c27bda744ef4",
              "name": "UI Designer Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 6,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "87036e68-e6f1-4380-a7fb-cd8df2cc8e78",
              "name": "UX Designer Senior Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 5,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "619d973e-b16e-4e41-8710-109af0cb6bea",
              "name": "UI Designer Senior Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 4,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "8851d86d-4b52-4833-b043-0a3a5e2e1e17",
              "name": "UI Designer Associate Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 0,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "895845cb-4d7f-4735-9f16-8a462c3c351f",
              "name": "UI Designer Lead Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 2,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "eee68e5d-eaf3-469e-9d63-6a4d695c495d",
              "name": "UX Designer Associate Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 1,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "3129ec4e-ef1e-41c1-bbd3-45d8f8f4e92b",
              "name": "UX Designer Lead Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 3,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "aa2d5e31-3972-4614-abfc-ba5a2af1a37c",
              "name": "UX Designer Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 7,
              "link": null,
              "responsiblesInfo": []
            }
          ],
          "responsiblesInfo": [
            {
              "id": "108c553b-ac31-4cac-81b4-cc97f1318f33",
              "fullName": "Felipe Garzon Correa",
              "email": "felipe.garzonc@perficient.com",
              "enabled": true
            }
          ]
        },
        {
          "id": "8f7710c2-fcfe-4a77-8a09-a25ee7c7a3a0",
          "name": "Mobile",
          "description": "Short description",
          "enabled": true,
          "roles": [
            {
              "id": "529d1d2b-398b-4af8-b9e0-ac7598a1419e",
              "name": "iOS Architect",
              "description": "Short description",
              "enabled": true,
              "position": 6,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "67b93948-7b49-4582-8422-a04fcb497dc7",
              "name": "Android Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 3,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "5a3d0a98-1d30-4b13-b283-ee90ba988743",
              "name": "Flutter Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 5,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "3222043e-e76a-4dd1-9077-b3ae61395a08",
              "name": "Android Architect",
              "description": "Short description",
              "enabled": true,
              "position": 1,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "df4a2c45-812c-46b4-b781-2707769da219",
              "name": "Android Lead Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 2,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "15d1b6a3-3932-4320-8380-e41806c747b1",
              "name": "Flutter Architect",
              "description": "Short description",
              "enabled": true,
              "position": 0,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "4e8c5710-f411-4ebe-9564-587c5fc04022",
              "name": "iOS Lead Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 7,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "e75fb402-e694-4342-b06b-144b48f49ba4",
              "name": "iOS Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 8,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "9bc931b2-7aab-4770-99a1-e0353e47f733",
              "name": "Flutter Lead Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 4,
              "link": null,
              "responsiblesInfo": []
            }
          ],
          "responsiblesInfo": [
            {
              "id": "108c553b-ac31-4cac-81b4-cc97f1318f33",
              "fullName": "Felipe Garzon Correa",
              "email": "felipe.garzonc@perficient.com",
              "enabled": true
            }
          ]
        },
        {
          "id": "281ff5ac-1949-4150-8104-9e2a1cb4054c",
          "name": "Performance",
          "description": "Short description",
          "enabled": true,
          "roles": [
            {
              "id": "a44b1b99-1589-474f-8aab-f363de66aed8",
              "name": "Performance Lead Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 0,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "68620249-306b-4124-8665-fbb1b37ee58e",
              "name": "Performance Senior Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 3,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "b5e7f821-6139-4975-8037-aa28e2fa61c6",
              "name": "Performance Associate Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 2,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "020f0836-be6e-47ff-8ac9-d8f2999941f5",
              "name": "Performance Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 1,
              "link": null,
              "responsiblesInfo": []
            }
          ],
          "responsiblesInfo": [
            {
              "id": "108c553b-ac31-4cac-81b4-cc97f1318f33",
              "fullName": "Felipe Garzon Correa",
              "email": "felipe.garzonc@perficient.com",
              "enabled": true
            }
          ]
        },
        {
          "id": "4df3fbd7-7435-4501-a7c8-421590017d64",
          "name": "Product",
          "description": "Short description",
          "enabled": true,
          "roles": [
            {
              "id": "df5a1921-987a-4bb7-bd2b-6776ae7c5183",
              "name": "Product Business Consultant",
              "description": "Short description edited",
              "enabled": true,
              "position": 0,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "c5aab71b-2ac0-42d5-8fa4-80e12f62b009",
              "name": "Product Senior Business Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 3,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "6ede6402-ab8c-4ec1-914a-570dee8c4764",
              "name": "Product Associate Business Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 1,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "838308f2-79e9-416f-92e7-d217ae1ed7f3",
              "name": "Product Lead Business Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 2,
              "link": null,
              "responsiblesInfo": []
            }
          ],
          "responsiblesInfo": [
            {
              "id": "108c553b-ac31-4cac-81b4-cc97f1318f33",
              "fullName": "Felipe Garzon Correa",
              "email": "felipe.garzonc@perficient.com",
              "enabled": true
            }
          ]
        },
        {
          "id": "439c01b2-5fab-4ba1-8508-1161f7981ff5",
          "name": "SAP Commerce",
          "description": "Short description",
          "enabled": true,
          "roles": [
            {
              "id": "7faa70f3-412b-46a5-8c14-c0976a9cb85c",
              "name": "SAP Commerce Back End - Associate Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 0,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "85c80b71-e03c-4189-8322-7d04e5eb0a9d",
              "name": "SAP Commerce Back End - Technical Architect",
              "description": "Short description",
              "enabled": true,
              "position": 3,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "abea59f3-598f-407c-b136-4b0841011a29",
              "name": "SAP Commerce Front End - Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 8,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "a8588a77-ba72-4030-a80c-8c4ce939e4ea",
              "name": "SAP Commerce Back End - Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 4,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "51e04f96-4a08-49b5-8226-fe30cb59c894",
              "name": "SAP Commerce Front End - Senior Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 7,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "d3acc898-699f-46ea-9b2c-bad9292243e7",
              "name": "SAP Commerce Front End - Lead Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 6,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "3384ba86-3a7b-4bd1-974a-f98754b06cc0",
              "name": "SAP Commerce Back End - Lead Technical Consultant ",
              "description": "Short description",
              "enabled": true,
              "position": 1,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "86e638e4-8a3e-4688-9c15-225e635cf595",
              "name": "SAP Commerce Back End - Senior Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 2,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "f8652e90-50d4-4984-a573-2add02ba9738",
              "name": "SAP Commerce Front End - Associate Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 5,
              "link": null,
              "responsiblesInfo": []
            }
          ],
          "responsiblesInfo": [
            {
              "id": "108c553b-ac31-4cac-81b4-cc97f1318f33",
              "fullName": "Felipe Garzon Correa",
              "email": "felipe.garzonc@perficient.com",
              "enabled": true
            }
          ]
        },
        {
          "id": "6b49961d-6267-48e1-b38b-f8dffcbbb3fb",
          "name": "Entertainment",
          "description": null,
          "enabled": true,
          "roles": [
            {
              "id": "8fffc709-d9d7-4030-ba21-fe5eacf1f24b",
              "name": "3D character artist",
              "description": null,
              "enabled": true,
              "position": 0,
              "link": null,
              "responsiblesInfo": []
            }
          ],
          "responsiblesInfo": [
            {
              "id": "1a437e19-1148-4d61-85d2-aa6dc53d52c3",
              "fullName": "Salome Aristizabal Giraldo",
              "email": "salome.aristizabalg@perficient.com",
              "enabled": true
            }
          ]
        },
        {
          "id": "0875bf9e-65ef-4120-a876-9331f1e600de",
          "name": "Disciplina JG two",
          "description": null,
          "enabled": true,
          "roles": [
            {
              "id": "8a21b374-c6c8-4f6b-a94e-e057280184ee",
              "name": "Director JG",
              "description": null,
              "enabled": true,
              "position": 3,
              "link": null,
              "responsiblesInfo": [
                {
                  "id": "dfc257d0-758d-4d5a-a892-a2d2f57c375a",
                  "fullName": "Juan Gabriel Zapata Arango",
                  "email": "juan.zapataa@perficient.com",
                  "enabled": true
                }
              ]
            },
            {
              "id": "10242c53-cbec-4b14-a2ce-f736cca0069c",
              "name": "Rol JG",
              "description": "Prueba busqueda",
              "enabled": true,
              "position": 1,
              "link": null,
              "responsiblesInfo": []
            }
          ],
          "responsiblesInfo": [
            {
              "id": "1a437e19-1148-4d61-85d2-aa6dc53d52c3",
              "fullName": "Salome Aristizabal Giraldo",
              "email": "salome.aristizabalg@perficient.com",
              "enabled": true
            }
          ]
        },
        {
          "id": "b0333a18-b4e3-43ee-be11-fc939e03f4cc",
          "name": "validate",
          "description": "Short description",
          "enabled": true,
          "roles": [
            {
              "id": "a463f475-2677-49de-b442-62d309a6fcbe",
              "name": ".NET Lead Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 3,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "391a6c53-0858-4550-8f9e-7d768d94ad20",
              "name": ".NET Regression test",
              "description": null,
              "enabled": true,
              "position": 5,
              "link": null,
              "responsiblesInfo": [
                {
                  "id": "a0e57b21-fe55-4c1e-a269-ab4afcdaa067",
                  "fullName": "Juan Diego Naranjo Tafur",
                  "email": "juan.naranjot@perficient.com",
                  "enabled": true
                }
              ]
            },
            {
              "id": "0dcd5116-fa4f-4d4e-987a-3e11d07b687b",
              "name": ".NET Senior Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 2,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "0c0d81f4-28a1-4f13-aa9b-f37c7652b206",
              "name": ".NET Associate Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 0,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "f897c9a3-eb54-42f9-b535-167b4532ea73",
              "name": ".NET Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 1,
              "link": null,
              "responsiblesInfo": []
            }
          ],
          "responsiblesInfo": [
            {
              "id": "108c553b-ac31-4cac-81b4-cc97f1318f33",
              "fullName": "Felipe Garzon Correa",
              "email": "felipe.garzonc@perficient.com",
              "enabled": true
            }
          ]
        },
        {
          "id": "6b7e3700-33b1-4f0e-b12a-f99239c85bc4",
          "name": "Salesforce",
          "description": "Short description",
          "enabled": true,
          "roles": [
            {
              "id": "d9efefb8-667d-4a7d-9576-407aad35d2f5",
              "name": "Salesforce Associate Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 1,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "cfb19d4d-892a-4229-ab94-b95c8cbf5f5d",
              "name": "Salesforce Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 0,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "7df99f37-fd48-4f3c-9fa9-7ff5ddb6823b",
              "name": "Salesforce Lead Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 3,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "fc32a5d1-d50e-4945-843f-5ce068e85f10",
              "name": "Salesforce Senior Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 2,
              "link": null,
              "responsiblesInfo": []
            }
          ],
          "responsiblesInfo": [
            {
              "id": "108c553b-ac31-4cac-81b4-cc97f1318f33",
              "fullName": "Felipe Garzon Correa",
              "email": "felipe.garzonc@perficient.com",
              "enabled": true
            }
          ]
        },
        {
          "id": "8be59cc5-edf4-454c-98e2-16ab2b9f96e7",
          "name": "Javascript",
          "description": "Short description",
          "enabled": true,
          "roles": [
            {
              "id": "df20833d-c622-4293-9182-16917f366e79",
              "name": "Vue Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 19,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "2a4558fa-61dd-4db3-adf1-909b4b71e926",
              "name": "React Associate Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 8,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "41fb262e-f8aa-4e81-a1da-ebe58803a2e0",
              "name": "Angular Senior Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 2,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "f2889a3b-5406-4fd1-a7b1-757b78a1cae8",
              "name": "Vue Senior Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 18,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "9f1095d9-e63d-4210-8461-ea8ec29103b4",
              "name": "Angular Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 4,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "ba449f66-539a-46c7-9c15-804879e83ea3",
              "name": "React Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 15,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "99f2e6c7-3898-4658-a88f-e76f14c9ee68",
              "name": "React Native Associate Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 10,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "db9413a5-ef30-4439-b7ce-608de89b9860",
              "name": "React Senior Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 12,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "2877497d-a21d-41a6-b107-b4b05965a0da",
              "name": "React Lead Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 9,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "73caa8dd-184d-47d7-9f8c-8aa49f339856",
              "name": "Node Senior Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 6,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "6a8f906e-5c72-4fad-ab84-25d04571cbe6",
              "name": "Node Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 7,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "74aea3c4-92f6-48d1-88d6-65b265ab219a",
              "name": "Javascript role test",
              "description": null,
              "enabled": true,
              "position": 20,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "60dcb4dd-007a-491c-b78d-17b979ed9d21",
              "name": "Angular Lead Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 1,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "691fc83d-692f-43ec-9982-083d07181fa1",
              "name": "Angular Associate Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 0,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "77fe6206-e906-44f6-bdbb-8f407df011de",
              "name": "React Native Senior Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 13,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "df92d0bf-e8af-407a-88cf-a30a41ce463d",
              "name": "Node Associate Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 3,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "bab2e4a4-6bfd-4679-9537-690944ac3b96",
              "name": "React Native Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 14,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "b3e87edc-dcc6-4b88-95f3-e8148ea6ae32",
              "name": "Vue Associate Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 16,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "3df6bdf4-89f6-4fb8-995c-8f51993f90a5",
              "name": "Node Lead Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 5,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "19049c7a-688c-4672-9522-0a8edc116e43",
              "name": "Vue Lead Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 17,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "62a2f6f5-a7c6-4135-9297-0b37f30d0626",
              "name": "React Native Lead Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 11,
              "link": null,
              "responsiblesInfo": []
            }
          ],
          "responsiblesInfo": [
            {
              "id": "108c553b-ac31-4cac-81b4-cc97f1318f33",
              "fullName": "Felipe Garzon Correa",
              "email": "felipe.garzonc@perficient.com",
              "enabled": true
            }
          ]
        },
        {
          "id": "57f478c4-f218-4b19-bb50-94759b659b5a",
          "name": "Tech Strategy",
          "description": null,
          "enabled": true,
          "roles": [
            {
              "id": "47929abf-000a-41b8-b835-41cc11b55af8",
              "name": "Tech Core SME",
              "description": "Tech Core SME",
              "enabled": true,
              "position": 2,
              "link": "Tech Core SME",
              "responsiblesInfo": []
            },
            {
              "id": "0aa1f5b0-d258-478f-902c-673142999bc7",
              "name": "Cross SME",
              "description": "Cross SME",
              "enabled": true,
              "position": 1,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "99f6b976-4504-402b-92a6-59641af9fdac",
              "name": "Platform SME",
              "description": "Platform SME",
              "enabled": true,
              "position": 0,
              "link": null,
              "responsiblesInfo": []
            }
          ],
          "responsiblesInfo": [
            {
              "id": "f60b8550-1d85-4cc2-b7e3-135ae9993831",
              "fullName": "Camilo Alejandro Florez Rojas",
              "email": "camilo.florezr@perficient.com",
              "enabled": true
            }
          ]
        },
        {
          "id": "6f67ec26-1f32-4977-b5c1-dd3470ba9cc5",
          "name": "Data",
          "description": "Short description",
          "enabled": true,
          "roles": [
            {
              "id": "984cf913-7ffd-4ed6-a1c2-8b78e9db09b7",
              "name": "Data Analyst Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 1,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "48f2297f-9f9b-42d6-96af-147f96d403f7",
              "name": "Data Scientist/ML Engineer Senior Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 10,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "5442bcfb-24df-43a9-9606-d7d1723b708a",
              "name": "Data Analyst Associate Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 4,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "120b3203-393b-40be-8438-87b8c8363c55",
              "name": "Data Engineer Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 0,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "97972c7b-088f-4cf7-ac16-c6447e18066b",
              "name": "Data Analyst Senior Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 5,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "9f616ec7-88f3-41c5-956a-fee1921e9fba",
              "name": "Data Analyst Lead Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 2,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "818c8c2f-e1ec-4579-859c-447a81984ab5",
              "name": "Data Engineer Lead Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 7,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "51d45bf4-7c60-4d84-a0fb-b5ec115048e2",
              "name": "Data Engineer Associate Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 6,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "07d19f3e-e2af-4888-b2cf-17c9a7e2c408",
              "name": "Data Scientist/ML Engineer Lead Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 9,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "62c2b97a-62cc-4796-b9dd-45ecfe5a47f6",
              "name": "Data Scientist/ML Engineer Associate Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 8,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "bd01e27d-1d16-46c9-8ed6-b0969316a9c8",
              "name": "Data Engineer Senior Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 3,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "0f19683e-c64d-4f95-ae0e-7533123eecc7",
              "name": "Data Scientist/ML Engineer Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 11,
              "link": null,
              "responsiblesInfo": []
            }
          ],
          "responsiblesInfo": [
            {
              "id": "108c553b-ac31-4cac-81b4-cc97f1318f33",
              "fullName": "Felipe Garzon Correa",
              "email": "felipe.garzonc@perficient.com",
              "enabled": true
            },
            {
              "id": "dfc257d0-758d-4d5a-a892-a2d2f57c375a",
              "fullName": "Juan Gabriel Zapata Arango",
              "email": "juan.zapataa@perficient.com",
              "enabled": true
            }
          ]
        },
        {
          "id": "51dd8b45-3247-4d01-b377-9d33bd7bb7fe",
          "name": "QA",
          "description": "Short description edited",
          "enabled": true,
          "roles": [
            {
              "id": "cc6b3615-25c5-426e-9674-bf4771391b1f",
              "name": "QA Product Architect",
              "description": "Short description",
              "enabled": true,
              "position": 7,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "0d0c9709-1d91-4edd-a1ab-2c547b767091",
              "name": "QA Associate",
              "description": "Short description",
              "enabled": true,
              "position": 8,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "04f73f56-6a5c-4aa9-b485-75163f247a49",
              "name": "QA Automation",
              "description": "Short description",
              "enabled": true,
              "position": 4,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "11b4c391-125e-4a5c-81a8-c95a742d9d6a",
              "name": "Technical QA",
              "description": "Short description",
              "enabled": true,
              "position": 5,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "1beaf00c-a4a5-4a31-97ca-31d7d7fa1fc1",
              "name": "QA Manager",
              "description": "Short description",
              "enabled": true,
              "position": 2,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "eaa07502-b318-4e38-9908-51aff585c79c",
              "name": "Test Analyst",
              "description": "Short description",
              "enabled": true,
              "position": 0,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "d402f770-785c-4535-9029-0364dee60b2b",
              "name": "QA Explorer",
              "description": "Short description",
              "enabled": true,
              "position": 1,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "d3276679-7f71-4ddf-8bb2-2f14bd979be0",
              "name": "Technical QA Lead",
              "description": "Short description",
              "enabled": true,
              "position": 6,
              "link": null,
              "responsiblesInfo": []
            }
          ],
          "responsiblesInfo": [
            {
              "id": "108c553b-ac31-4cac-81b4-cc97f1318f33",
              "fullName": "Felipe Garzon Correa",
              "email": "felipe.garzonc@perficient.com",
              "enabled": true
            }
          ]
        },
        {
          "id": "5273aba6-8074-4f03-92c2-b79e594313d4",
          "name": "Java",
          "description": "Short description",
          "enabled": true,
          "roles": [
            {
              "id": "c69266b7-5a5b-4544-a0d7-2de5430b5294",
              "name": "Java Architect",
              "description": "Short description",
              "enabled": true,
              "position": 3,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "0ba32a55-ff68-47d5-9772-42c1d34701fd",
              "name": "Java Associate Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 0,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "a467b4c5-2d2d-4eee-9867-626a6b2fd845",
              "name": "Java Lead Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 4,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "bf845788-ffea-4057-ad25-b180de2a03de",
              "name": "Java Senior Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 2,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "ab9a6af6-1c2a-41fa-9a35-e11c9da0f5f7",
              "name": "Java Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 1,
              "link": null,
              "responsiblesInfo": []
            }
          ],
          "responsiblesInfo": [
            {
              "id": "108c553b-ac31-4cac-81b4-cc97f1318f33",
              "fullName": "Felipe Garzon Correa",
              "email": "felipe.garzonc@perficient.com",
              "enabled": true
            }
          ]
        },
        {
          "id": "6624aa0e-c7b4-4400-a8f2-9ffd8c979ce9",
          "name": "CyberSecurity",
          "description": "Short description su tia",
          "enabled": true,
          "roles": [
            {
              "id": "aced8483-fcb4-4d18-9b4c-04446a1556f3",
              "name": "DevSecOps senior technical consultant",
              "description": "Short description",
              "enabled": true,
              "position": 5,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "daa62924-3c02-4636-976a-7188a522bf89",
              "name": "Pentester Associate technical consultant",
              "description": "Short description",
              "enabled": true,
              "position": 0,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "8d2fb620-ff67-42f0-8f0f-fe62bbcdcf7b",
              "name": "Compliance senior technical consultant",
              "description": "Short description",
              "enabled": true,
              "position": 8,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "45c1be60-306f-4d41-ba21-c0a0314bda62",
              "name": "DevSecOps technical consultant",
              "description": "Short description",
              "enabled": true,
              "position": 4,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "3fd73311-1951-4999-bc65-70fa87f9ffb5",
              "name": "Pentester senior technical consultant",
              "description": "Short description",
              "enabled": true,
              "position": 2,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "a7b358e0-921b-446a-9626-97809ab29722",
              "name": "Pentester technical consultant",
              "description": "Short description",
              "enabled": true,
              "position": 1,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "584cabbc-6282-456b-a0ef-959f9526ef06",
              "name": "Compliance Associate technical consultant",
              "description": "Short description",
              "enabled": true,
              "position": 6,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "ac910c7f-a469-4520-85e1-3d4bd382641e",
              "name": "Compliance technical consultant",
              "description": "Short description",
              "enabled": true,
              "position": 7,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "7131c742-9dda-43c5-b877-832f0c9ec7da",
              "name": "DevSecOps Associate technical consultant",
              "description": "Short description",
              "enabled": true,
              "position": 3,
              "link": null,
              "responsiblesInfo": []
            }
          ],
          "responsiblesInfo": [
            {
              "id": "108c553b-ac31-4cac-81b4-cc97f1318f33",
              "fullName": "Felipe Garzon Correa",
              "email": "felipe.garzonc@perficient.com",
              "enabled": true
            }
          ]
        },
        {
          "id": "c3035688-b862-425e-9426-30abbb6c0286",
          "name": "Postman automation 02936046",
          "description": "Postman automation",
          "enabled": true,
          "roles": [
            {
              "id": "b7b19eb7-6aac-4a63-8b72-32f5bc28a892",
              "name": "Automation 24779494",
              "description": "Postman automation",
              "enabled": true,
              "position": 0,
              "link": null,
              "responsiblesInfo": [
                {
                  "id": "0966795a-7fed-4693-a1ae-dfc0e616901e",
                  "fullName": "Rene Corwin",
                  "email": "Cassandra_Smith@hotmail.com",
                  "enabled": true
                }
              ]
            }
          ],
          "responsiblesInfo": [
            {
              "id": "0966795a-7fed-4693-a1ae-dfc0e616901e",
              "fullName": "Rene Corwin",
              "email": "Cassandra_Smith@hotmail.com",
              "enabled": true
            }
          ]
        },
        {
          "id": "babec7b4-624b-4133-bd64-2bcb74a2f966",
          "name": "PD Discipline modified",
          "description": "PD Discipline modified",
          "enabled": true,
          "roles": [
            {
              "id": "124ac70a-de72-4861-b640-83a32a144c9c",
              "name": "PD Role modified",
              "description": "PD Role modified",
              "enabled": true,
              "position": 0,
              "link": null,
              "responsiblesInfo": [
                {
                  "id": "dfc257d0-758d-4d5a-a892-a2d2f57c375a",
                  "fullName": "Juan Gabriel Zapata Arango",
                  "email": "juan.zapataa@perficient.com",
                  "enabled": true
                }
              ]
            }
          ],
          "responsiblesInfo": [
            {
              "id": "1a437e19-1148-4d61-85d2-aa6dc53d52c3",
              "fullName": "Salome Aristizabal Giraldo",
              "email": "salome.aristizabalg@perficient.com",
              "enabled": true
            },
            {
              "id": "2600f373-e992-4294-97b4-9eb9a666d9b9",
              "fullName": "Catherin Andrea Ochoa Rojas",
              "email": "catherin.ochoar@perficient.com",
              "enabled": true
            },
            {
              "id": "dfc257d0-758d-4d5a-a892-a2d2f57c375a",
              "fullName": "Juan Gabriel Zapata Arango",
              "email": "juan.zapataa@perficient.com",
              "enabled": true
            }
          ]
        },
        {
          "id": "c3dd0766-7812-4826-9217-73e0e2d14ea5",
          "name": "Postman automation 14755665",
          "description": "Postman automation",
          "enabled": true,
          "roles": [
            {
              "id": "52d15bde-9395-43ac-a4d8-1f2920d03ba6",
              "name": "Automation 07946238",
              "description": "Postman automation",
              "enabled": true,
              "position": 0,
              "link": null,
              "responsiblesInfo": [
                {
                  "id": "a40ba1d0-d05f-4188-a351-0b69f93e291b",
                  "fullName": "Percy Wehner",
                  "email": "Tyreek.Funk68@yahoo.com",
                  "enabled": true
                }
              ]
            }
          ],
          "responsiblesInfo": [
            {
              "id": "a40ba1d0-d05f-4188-a351-0b69f93e291b",
              "fullName": "Percy Wehner",
              "email": "Tyreek.Funk68@yahoo.com",
              "enabled": true
            }
          ]
        },
        {
          "id": "962e2279-0b96-42a9-9311-bcf0eb0716c3",
          "name": "Exploratory JG Testing modified",
          "description": "Exploratory JG Testing modified",
          "enabled": true,
          "roles": [
            {
              "id": "1edcea73-a5d2-4836-9d72-6800e76789dd",
              "name": "Role Exploratory",
              "description": "Role Exploratory",
              "enabled": true,
              "position": 0,
              "link": null,
              "responsiblesInfo": [
                {
                  "id": "1a437e19-1148-4d61-85d2-aa6dc53d52c3",
                  "fullName": "Salome Aristizabal Giraldo",
                  "email": "salome.aristizabalg@perficient.com",
                  "enabled": true
                }
              ]
            }
          ],
          "responsiblesInfo": [
            {
              "id": "2600f373-e992-4294-97b4-9eb9a666d9b9",
              "fullName": "Catherin Andrea Ochoa Rojas",
              "email": "catherin.ochoar@perficient.com",
              "enabled": true
            }
          ]
        },
        {
          "id": "edb061bf-d2ab-4fda-9a73-02567367b97b",
          "name": "Disciplina LH modified",
          "description": "Disciplina LH modified",
          "enabled": true,
          "roles": [
            {
              "id": "d1b72364-2a0c-4cc6-98ff-137f17789297",
              "name": "Role LH modified",
              "description": "Role LH modified",
              "enabled": true,
              "position": 0,
              "link": null,
              "responsiblesInfo": [
                {
                  "id": "2600f373-e992-4294-97b4-9eb9a666d9b9",
                  "fullName": "Catherin Andrea Ochoa Rojas",
                  "email": "catherin.ochoar@perficient.com",
                  "enabled": true
                },
                {
                  "id": "dfc257d0-758d-4d5a-a892-a2d2f57c375a",
                  "fullName": "Juan Gabriel Zapata Arango",
                  "email": "juan.zapataa@perficient.com",
                  "enabled": true
                }
              ]
            }
          ],
          "responsiblesInfo": [
            {
              "id": "1a437e19-1148-4d61-85d2-aa6dc53d52c3",
              "fullName": "Salome Aristizabal Giraldo",
              "email": "salome.aristizabalg@perficient.com",
              "enabled": true
            },
            {
              "id": "2600f373-e992-4294-97b4-9eb9a666d9b9",
              "fullName": "Catherin Andrea Ochoa Rojas",
              "email": "catherin.ochoar@perficient.com",
              "enabled": true
            },
            {
              "id": "dfc257d0-758d-4d5a-a892-a2d2f57c375a",
              "fullName": "Juan Gabriel Zapata Arango",
              "email": "juan.zapataa@perficient.com",
              "enabled": true
            }
          ]
        },
        {
          "id": "7812569e-2ed0-4692-bd46-40b5837811be",
          "name": "Postman automation 16404934",
          "description": "Postman automation",
          "enabled": true,
          "roles": [
            {
              "id": "e7ddc41d-86a6-4b15-a54c-e122aaeef7d9",
              "name": "Automation 12798962",
              "description": "Postman automation",
              "enabled": true,
              "position": 0,
              "link": null,
              "responsiblesInfo": [
                {
                  "id": "b86f2186-fd7e-4d89-bcf6-6cca398acda4",
                  "fullName": "Christina Hoppe",
                  "email": "Mertie_Kerluke47@hotmail.com",
                  "enabled": true
                }
              ]
            }
          ],
          "responsiblesInfo": [
            {
              "id": "b86f2186-fd7e-4d89-bcf6-6cca398acda4",
              "fullName": "Christina Hoppe",
              "email": "Mertie_Kerluke47@hotmail.com",
              "enabled": true
            }
          ]
        },
        {
          "id": "7698ca71-1434-428d-b9c6-ae3b620e468d",
          "name": "Mobile testing",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          "enabled": true,
          "roles": [
            {
              "id": "9b3ef775-e55c-41b9-8957-b30b7a1a3354",
              "name": "Mobile testing iOS",
              "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              "enabled": true,
              "position": 0,
              "link": null,
              "responsiblesInfo": [
                {
                  "id": "2600f373-e992-4294-97b4-9eb9a666d9b9",
                  "fullName": "Catherin Andrea Ochoa Rojas",
                  "email": "catherin.ochoar@perficient.com",
                  "enabled": true
                }
              ]
            }
          ],
          "responsiblesInfo": [
            {
              "id": "2600f373-e992-4294-97b4-9eb9a666d9b9",
              "fullName": "Catherin Andrea Ochoa Rojas",
              "email": "catherin.ochoar@perficient.com",
              "enabled": true
            }
          ]
        },
        {
          "id": "8f6921fe-7db0-40bd-a19d-3515a8914331",
          "name": "Adobe",
          "description": "Short description edited",
          "enabled": true,
          "roles": [
            {
              "id": "2bd0fdc5-4323-4c10-adfe-e35dc637ea95",
              "name": "AEM - Senior Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 8,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "94005ba0-21a2-435a-a0d9-277f140585c6",
              "name": "AEM - Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 10,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "d4744fbb-82a2-4fb9-b30d-ba26ae1ad29f",
              "name": "Adobe Commerce Frontend Associate Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 2,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "e18fdfef-1a73-4ff4-b5b0-73b13f949170",
              "name": "Adobe Commerce Frontend Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 1,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "51b335b2-223f-4cd4-9fff-7cdb85f89394",
              "name": "Adobe Commerce Backend Senior Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 0,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "e160bff9-e1e0-4b79-95fd-bac9dc9dff63",
              "name": "AEM - Lead Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 9,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "4a90f90e-628a-424e-9709-5639ef679942",
              "name": "AEM - Senior Technical Architect",
              "description": "Short description",
              "enabled": true,
              "position": 7,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "93d8c7b6-3ee3-49b7-a07a-70c5f1529f18",
              "name": "AEM - Technical Architect",
              "description": "Short description",
              "enabled": true,
              "position": 6,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "9646a208-fe13-4f38-8d7f-939719519bdb",
              "name": "Adobe Commerce Backend Associate Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 3,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "d3a46eff-62a3-4bea-a881-52f8e232fdc5",
              "name": "Adobe Commerce Frontend Senior Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 4,
              "link": null,
              "responsiblesInfo": []
            },
            {
              "id": "bcff7d7b-fe45-4e4f-b9cf-2dacf8a4a047",
              "name": "Adobe Commerce Lead Technical Consultant",
              "description": "Short description",
              "enabled": true,
              "position": 5,
              "link": null,
              "responsiblesInfo": []
            }
          ],
          "responsiblesInfo": [
            {
              "id": "0f93e113-0797-4d3e-8790-7586df366423",
              "fullName": "Alejandro Fernandez Restrepo",
              "email": "alejandro.fernandezr@perficient.com",
              "enabled": true
            },
            {
              "id": "108c553b-ac31-4cac-81b4-cc97f1318f33",
              "fullName": "Felipe Garzon Correa",
              "email": "felipe.garzonc@perficient.com",
              "enabled": true
            }
          ]
        },
        {
          "id": "cd3339db-11c9-4c16-996c-29e6abc593fd",
          "name": "Game Development",
          "description": null,
          "enabled": true,
          "roles": [
            {
              "id": "e081844b-e2e0-426e-a0ee-d8459bfc58df",
              "name": "Game character artist",
              "description": null,
              "enabled": true,
              "position": 0,
              "link": null,
              "responsiblesInfo": [
                {
                  "id": "1a437e19-1148-4d61-85d2-aa6dc53d52c3",
                  "fullName": "Salome Aristizabal Giraldo",
                  "email": "salome.aristizabalg@perficient.com",
                  "enabled": true
                }
              ]
            }
          ],
          "responsiblesInfo": [
            {
              "id": "1a437e19-1148-4d61-85d2-aa6dc53d52c3",
              "fullName": "Salome Aristizabal Giraldo",
              "email": "salome.aristizabalg@perficient.com",
              "enabled": true
            }
          ]
        },
        {
          "id": "da4e3e88-875b-47c5-af02-85fcdd8ba1b1",
          "name": "Disciplina retest",
          "description": null,
          "enabled": true,
          "roles": [
            {
              "id": "21885b3a-7c37-4c79-91c4-08a4425fd56e",
              "name": "Rol Test",
              "description": null,
              "enabled": true,
              "position": 0,
              "link": null,
              "responsiblesInfo": [
                {
                  "id": "2600f373-e992-4294-97b4-9eb9a666d9b9",
                  "fullName": "Catherin Andrea Ochoa Rojas",
                  "email": "catherin.ochoar@perficient.com",
                  "enabled": true
                }
              ]
            }
          ],
          "responsiblesInfo": [
            {
              "id": "dfc257d0-758d-4d5a-a892-a2d2f57c375a",
              "fullName": "Juan Gabriel Zapata Arango",
              "email": "juan.zapataa@perficient.com",
              "enabled": true
            }
          ]
        },
        {
          "id": "53361a91-d6f0-4221-bcca-20c409396a1d",
          "name": "Postman automation 76599337",
          "description": "Postman automation",
          "enabled": true,
          "roles": [
            {
              "id": "3826db11-6db6-4245-9500-7011cfa7afb4",
              "name": "Automation 71340189",
              "description": "Postman automation",
              "enabled": true,
              "position": 0,
              "link": null,
              "responsiblesInfo": [
                {
                  "id": "9f6b8420-b1a8-4df7-bc61-3335111bf5f6",
                  "fullName": "Nelson Swift",
                  "email": "Hulda.Goyette@yahoo.com",
                  "enabled": true
                }
              ]
            }
          ],
          "responsiblesInfo": [
            {
              "id": "9f6b8420-b1a8-4df7-bc61-3335111bf5f6",
              "fullName": "Nelson Swift",
              "email": "Hulda.Goyette@yahoo.com",
              "enabled": true
            }
          ]
        }
      ].map((discipline) => ({
        id: discipline.id,
        label: discipline.name,
        value: discipline.name,
      }));
      skillEvaluation.formInfo = {
        "id": "520f13bb-c501-4b4e-9136-3909bebcd5c4",
        "name": "Impact Matrix",
        "disciplineId": "57f478c4-f218-4b19-bb50-94759b659b5a",
        "enabled": true,
        "categories": [
          {
            "id": "1425fcb2-1f50-412a-8d1e-ad47e0c79236",
            "name": "Oriented Solution Analysis - Impact",
            "description": "Ability to understand problems beyond technology, has high analytical skills, proposes solutions with project context, approach and knowledge and is able to implement engineering best practices.",
            "enabled": true,
            "position": 9,
            "skills": [
              {
                "skillId": "4ee49ca4-5edc-4b28-89a2-2fad536dcc0c",
                "displayName": "System Thinking Impact",
                "description": "Defines processes and structures that enables the strong growth and execution of a diverse eng organization",
                "categoryId": "1425fcb2-1f50-412a-8d1e-ad47e0c79236",
                "mandatory": true,
                "position": 0,
                "details": [
                  {
                    "id": "d10c48f9-8606-431b-8104-3b6992d183e5",
                    "description": "Respects and participates in processes, giving meaningful feedback to help the organization improve",
                    "position": 0
                  },
                  {
                    "id": "a0f11a0f-4cdf-402e-ae47-a7ab0ef3cdfd",
                    "description": "Identifies opportunities to improve existing processes and proposes and achieve changes that positively affect the local team",
                    "position": 1
                  },
                  {
                    "id": "d6c46515-949c-44d3-bbbc-5c40305b1358",
                    "description": "Develops processes and programs to solve ongoing organizational problems",
                    "position": 2
                  },
                  {
                    "id": "2089e4e1-b416-4ed3-b624-e53e9c9c4ba9",
                    "description": "Thinks deeply about organizational issues and identifies hidden dynamics that contribute to them",
                    "position": 3
                  },
                  {
                    "id": "0edf043b-d6fc-4207-afcf-95d7af2b5519",
                    "description": "Leads initiatives to address issues stemming from hidden dynamics and company norms",
                    "position": 4
                  }
                ]
              },
              {
                "skillId": "9a25f4ac-b0f1-416b-88f3-8d591d2841df",
                "displayName": "Methodology Impact",
                "description": "Understand, apply and adapt your approach to problem solving",
                "categoryId": "1425fcb2-1f50-412a-8d1e-ad47e0c79236",
                "mandatory": true,
                "position": 0,
                "details": [
                  {
                    "id": "8b2188f9-8022-4548-891c-237c5ff93c93",
                    "description": "Can demonstrate a theoretical understanding of how to resolve a problem",
                    "position": 0
                  },
                  {
                    "id": "dee4dcb7-ba88-4aa9-b5f4-338e194c4758",
                    "description": "Is learning the practice of how to follow best practice processes, under support and guidance from colleagues",
                    "position": 1
                  },
                  {
                    "id": "eb0b5ab9-f362-4019-81ee-4119b0b5ff68",
                    "description": "Can confidently follow a well established approach to the problem to be solved",
                    "position": 2
                  },
                  {
                    "id": "31e39ff3-23ac-42b3-87f1-493b7b265b64",
                    "description": "Demonstrates a high level of flexibility in adapting their ways of working as necessary in order to achieve the best results, without simply making it up as they go",
                    "position": 3
                  },
                  {
                    "id": "b984a5d8-1951-4e3c-bd32-6550d59f891d",
                    "description": "Is calm and collected at improvising and adapting to change in challenging circumstances",
                    "position": 4
                  }
                ]
              },
              {
                "skillId": "9ea7f34e-4b78-42f0-8024-bcaf28722e2e",
                "displayName": "Problem Solving Impact",
                "description": "Ability to propose and execute the solucion that makes sense and adds value to the current situation",
                "categoryId": "1425fcb2-1f50-412a-8d1e-ad47e0c79236",
                "mandatory": true,
                "position": 0,
                "details": [
                  {
                    "id": "1550a501-dbff-4d9f-8fe3-ffc46a41c5a4",
                    "description": "Explore different ways to solve problems. Identify pros & cons, questions, impact",
                    "position": 0
                  },
                  {
                    "id": "c6380857-ce76-4a52-b481-6e4c1773dc27",
                    "description": "Explore concepts, narrow to the best solution agnostic to the techologies having in mind the project and team standards",
                    "position": 1
                  },
                  {
                    "id": "0bc5ea93-d1b0-45ed-820c-8f1ecdce6bad",
                    "description": "Explore and refine quickly without losing effort. Solve at low fidelity, then polish for delivery",
                    "position": 2
                  },
                  {
                    "id": "70b11a2b-30c2-470c-b19f-05e2e164cb8a",
                    "description": "Deliver superior solution design while inspiring, teaching, and speeding up others",
                    "position": 3
                  },
                  {
                    "id": "6b269cf7-5516-4816-880c-fa3bf5a0c723",
                    "description": "Overdeliver superior solution design, level up others, and always push the work further",
                    "position": 4
                  }
                ]
              },
              {
                "skillId": "bc29309b-ea77-48ce-9794-61d97f66ac9a",
                "displayName": "Pragmatism Impact",
                "description": "The ability to deal with problems based on conditions that really exist, rather than following fixed theories, ideas, or rules",
                "categoryId": "1425fcb2-1f50-412a-8d1e-ad47e0c79236",
                "mandatory": true,
                "position": 0,
                "details": [
                  {
                    "id": "e416cdd5-c4e2-4cdd-8e0d-214b5d98037a",
                    "description": "Find solutions to small unknown problems accomplish the time and expectations. Avoid rework of the delivered tasks",
                    "position": 0
                  },
                  {
                    "id": "34bed8b6-0fd3-46aa-9ea5-3b1da71fd03a",
                    "description": "Is able to change their mind over strongly-held beliefs and pursue a new path with no loss of velocity",
                    "position": 1
                  },
                  {
                    "id": "4eb2a2d2-decc-4071-bd8d-adec066fb4d0",
                    "description": "Is able to break down the assumptions of themselves and peers, and find common solutions",
                    "position": 2
                  },
                  {
                    "id": "7dd0ca2b-8af2-47d7-ba81-0181aeee7ad7",
                    "description": "Is able to help whole teams to move on their goals through simplifying and breaking down problems",
                    "position": 3
                  },
                  {
                    "id": "d90f222c-fdee-4a48-977c-89dbb63411ff",
                    "description": "Is able to break down and save the time of whole parts of the organisation through simple solutions and workflows",
                    "position": 4
                  }
                ]
              }
            ]
          },
          {
            "id": "3faa0dc2-9faf-425e-9648-3d389f14095a",
            "name": "Potential - Impact",
            "description": "The ability of people to grow in the company by supporting their growth plan and meeting their objectives in a responsible and visible way.",
            "enabled": true,
            "position": 4,
            "skills": [
              {
                "skillId": "1c08bc72-8615-4dbd-ad6c-466582f10818",
                "displayName": "Adaptability Impact",
                "description": "The ability or willingness to change in order to suit different conditions",
                "categoryId": "3faa0dc2-9faf-425e-9648-3d389f14095a",
                "mandatory": true,
                "position": 0,
                "details": [
                  {
                    "id": "f57fa343-31e8-4e71-ac86-62aec8c20079",
                    "description": "Comfortable with new contexts and roles",
                    "position": 0
                  },
                  {
                    "id": "5e6c8e70-b0dd-4174-8563-bfd207199b3b",
                    "description": "Happy with vague requirements and enjoys helping to define the work and clarify the scopes",
                    "position": 1
                  },
                  {
                    "id": "d528e048-af85-4dce-81ac-7ce1d31f3c9f",
                    "description": "Can take problems outside their skillset and quickly adapt to solve them. Helps other peers to do the same",
                    "position": 2
                  },
                  {
                    "id": "cbce0d9b-11b4-4548-92ff-51393e2b845d",
                    "description": "Leads others in looking for ways to better serve business or customer needs, even outside their own discipline. Willing to lead mundane but important tasks",
                    "position": 3
                  },
                  {
                    "id": "b6ee8f97-987a-49ce-b8fa-5a4b4f763d74",
                    "description": "Not defined by any one skillset or title, often critical to the company's success in a number of areas. Utilises entire teams creatively to accomplish tasks",
                    "position": 4
                  }
                ]
              },
              {
                "skillId": "20ec16c0-eb93-4bdd-816f-ccb7a53386ab",
                "displayName": "Growth Impact",
                "description": "The ability to develop a career plan and to confidently make decisions in line with that career plan",
                "categoryId": "3faa0dc2-9faf-425e-9648-3d389f14095a",
                "mandatory": true,
                "position": 0,
                "details": [
                  {
                    "id": "f9e1deb5-ad41-46c8-ac10-6df885493981",
                    "description": "Understands their strengths, weaknesses and is able to work on them",
                    "position": 0
                  },
                  {
                    "id": "e63be4ec-ddd5-44e5-9fcc-31835e5e5ee0",
                    "description": "Knows what they want in the future and is actively working on the steps to get there. Has a plan that they can articulate confidently",
                    "position": 1
                  },
                  {
                    "id": "819228e6-b9f1-425a-a95a-30dbbed0f4ce",
                    "description": "Has a dynamic and compelling plan for their future based in the experience and feedback received, and can articulate it in a compelling way to others. Has a deep understanding of themselves and understands how this impacts their future",
                    "position": 2
                  },
                  {
                    "id": "b70d7707-0c65-419b-8e4c-2cdd00bf8ae7",
                    "description": "Is acutely aware of and open about their faults and personality traits, and have trained themselves to adapt around them. An open book – takes criticism and acts on it. As a result, highly trusted by the highest levels of the company and beyond. Encourages others to be self-aware also",
                    "position": 3
                  },
                  {
                    "id": "e046b2dd-16c0-495b-95b8-91bbe4014321",
                    "description": "Is able to help others identify what they want out of life, and has helped many people find the right path for themselves",
                    "position": 4
                  }
                ]
              },
              {
                "skillId": "75292ae8-9eff-4137-a850-947edbee5e5b",
                "displayName": "Curiosity Impact",
                "description": "The desire and willingness to know or learn new things",
                "categoryId": "3faa0dc2-9faf-425e-9648-3d389f14095a",
                "mandatory": true,
                "position": 0,
                "details": [
                  {
                    "id": "154047f5-f0fa-4344-bd99-8632c40aa911",
                    "description": "Is naturally interested about the work of others and the world around them",
                    "position": 0
                  },
                  {
                    "id": "4589469b-e22a-4e91-95d4-11b158cf55ab",
                    "description": "Asks lots of questions in pursuit of understanding. A positive attitude to learning, both on a professional and personal level with others. Looks for patterns and inspiration to influence their work",
                    "position": 1
                  },
                  {
                    "id": "e2d68317-50dc-47a5-9c30-7d186e235bc4",
                    "description": "Actively encourages innovation and exploration in others. Challenges assumptions through asking questions, never assumes the given answer. Gets to root causes and unexpected answers",
                    "position": 2
                  },
                  {
                    "id": "4c871827-a287-4a2b-8479-274eb00762e2",
                    "description": "Uses curiosity to break down silos and challenge assumptions across teams. An unthreatening attitude and genuine interest encourage curiosity in their own team, with clear benefits to the quality of work",
                    "position": 3
                  },
                  {
                    "id": "80c992c3-18ae-40d3-9714-e2b29c595164",
                    "description": "Completely open-minded in everything they do, with impact across an entire business. Improves and opens up conversations, and brings teams together to explore new ways of working. Never assumes their team is right",
                    "position": 4
                  }
                ]
              },
              {
                "skillId": "dfa548a7-2379-4a5c-b96e-38d0636b73b0",
                "displayName": "Initiative Impact",
                "description": "Challenges the status quo and effects positive organizational change outside of mandated worka",
                "categoryId": "3faa0dc2-9faf-425e-9648-3d389f14095a",
                "mandatory": true,
                "position": 0,
                "details": [
                  {
                    "id": "18730478-71cb-4c60-a97d-8ce042901d36",
                    "description": "Identifies opportunities for organizational change or product improvements",
                    "position": 0
                  },
                  {
                    "id": "9ef01552-b15f-49b4-afeb-b0fa59a47ea4",
                    "description": "Causes change to positively impact a few individuals or minor improvements to an existing product, service or process",
                    "position": 1
                  },
                  {
                    "id": "0c180118-6f45-427d-a941-7b4b7a2ecd26",
                    "description": "Causes change to positively impact an entire team or instigates a minor feature, service or process",
                    "position": 2
                  },
                  {
                    "id": "8e98846b-c7bb-4c32-b755-ec366dab9496",
                    "description": "Affects changes that has a substantial positive impact on the engineering organization or a major product impact",
                    "position": 3
                  },
                  {
                    "id": "00790e1d-e884-445a-afd4-caa754414970",
                    "description": "Affects changes that has a substantial positive impact on the whole company",
                    "position": 4
                  }
                ]
              }
            ]
          },
          {
            "id": "3fff4e2e-45fe-435e-981a-5d61e53478e7",
            "name": "Technical - Impact",
            "description": "Guides others, gives them orientation, motivates them, helps them to remove obstacles, helping them to meet their personal and company goals.",
            "enabled": true,
            "position": 1,
            "skills": [
              {
                "skillId": "8424fddc-9979-4a61-a8d8-b76c79bb4aa4",
                "displayName": "Security - Impact",
                "description": null,
                "categoryId": "3fff4e2e-45fe-435e-981a-5d61e53478e7",
                "mandatory": false,
                "position": 0,
                "details": []
              },
              {
                "skillId": "af4220de-37dc-4df8-95be-463360789129",
                "displayName": "Software Architecture - Impact",
                "description": null,
                "categoryId": "3fff4e2e-45fe-435e-981a-5d61e53478e7",
                "mandatory": false,
                "position": 0,
                "details": []
              },
              {
                "skillId": "bde926f1-b306-4700-b656-2085e1e9779f",
                "displayName": "Systems Thinking - Impact",
                "description": null,
                "categoryId": "3fff4e2e-45fe-435e-981a-5d61e53478e7",
                "mandatory": false,
                "position": 0,
                "details": []
              },
              {
                "skillId": "c6246515-3ecf-4d02-a1e6-35fd5fbefb13",
                "displayName": "Writing code - impact",
                "description": null,
                "categoryId": "3fff4e2e-45fe-435e-981a-5d61e53478e7",
                "mandatory": false,
                "position": 0,
                "details": []
              },
              {
                "skillId": "f9d0c73f-f81c-429f-a066-d27815b755bd",
                "displayName": "Technical Understanding - Impact",
                "description": null,
                "categoryId": "3fff4e2e-45fe-435e-981a-5d61e53478e7",
                "mandatory": false,
                "position": 0,
                "details": []
              },
              {
                "skillId": "fb932366-bc4f-4b3b-a054-0b76e3c92470",
                "displayName": "Delivery - Impact",
                "description": null,
                "categoryId": "3fff4e2e-45fe-435e-981a-5d61e53478e7",
                "mandatory": false,
                "position": 0,
                "details": []
              }
            ]
          },
          {
            "id": "44f620b8-bbb5-4e76-9022-3ecbae6d5ac7",
            "name": "Leadership - Impact",
            "description": "Interact with the client, being able to gain their trust in order to propose solutions that align with strategic needs and exceed their expectations, share information in a timely and transparent manner; and be in a position to discuss teaming, engineering and strategic issues.",
            "enabled": true,
            "position": 2,
            "skills": [
              {
                "skillId": "223ef2ad-f903-414d-bbe9-9945596440d8",
                "displayName": "Influence - Impact",
                "description": "The ability to positively persuade (Perficient's values oriented) people to believe or achieve something",
                "categoryId": "44f620b8-bbb5-4e76-9022-3ecbae6d5ac7",
                "mandatory": true,
                "position": 0,
                "details": [
                  {
                    "id": "e8d29fba-4e01-4f1e-8778-8e49a46de828",
                    "description": "The ability to positively persuade (Perficient's values oriented) people to believe or achieve something",
                    "position": 0
                  },
                  {
                    "id": "00584d8a-171c-4bd7-b9b3-a94bf6cdf321",
                    "description": "Can convince colleagues to follow through on team objectives",
                    "position": 1
                  },
                  {
                    "id": "b6bfe96f-6363-4b61-9dd4-508de0fbdfa0",
                    "description": "lead small groups to achieve results through positive influence",
                    "position": 2
                  },
                  {
                    "id": "d9cc10ce-76dc-44cb-b26e-a643e2cb13a4",
                    "description": "Is able to use this knowledge to build consensus among people who have differing point of views",
                    "position": 3
                  },
                  {
                    "id": "821e1b46-e213-422c-8276-56c9aa7f3b8a",
                    "description": "Creates cultures where people are open to new ideas and different ways of thinking. Has the ability to convince large numbers of people that their way is best",
                    "position": 4
                  },
                  {
                    "id": "bbae635d-dfe3-41b5-9ef6-d955dd5aacda",
                    "description": "Encourage other people to share the ideas and behaviour through networks and generate a global impact",
                    "position": 5
                  }
                ]
              },
              {
                "skillId": "989e17cb-cd66-43a0-9e3f-4a73dfa9dd2b",
                "displayName": "Negotiation - Impact",
                "description": "Fosters a culture across the organization where people are encouraged to share their opinions and contribute to discussions in a respectful manner",
                "categoryId": "44f620b8-bbb5-4e76-9022-3ecbae6d5ac7",
                "mandatory": true,
                "position": 4,
                "details": [
                  {
                    "id": "26f27d1d-0a07-4862-b1e4-2a40dbcd1d38",
                    "description": "Shares their opinions and contributes to discussions in a respectful manner and is open to changing their perspective and plans based on others' input.",
                    "position": 0
                  },
                  {
                    "id": "2f9ca841-d66b-4a57-af7b-68102191abe9",
                    "description": "Approaches disagreement with their teammates non-defensively with inquisitiveness. Uses contradictory opinions as a basis for constructive, productive conversations. ",
                    "position": 1
                  },
                  {
                    "id": "a6e75d3f-f974-48ff-8600-473fffa80e6e",
                    "description": "Encourages their teammates to openly share their opinions and contribute to discussions in a respectful manner.",
                    "position": 2
                  },
                  {
                    "id": "9ba2389a-a0e5-4e2c-b65f-fc3e0eedfc08",
                    "description": "Fosters a culture within their team where people are encouraged to share their opinions and contribute to discussions in a respectful manner.",
                    "position": 3
                  },
                  {
                    "id": "2b3ee177-fbfe-42e6-8ec9-496ca10c4bd1",
                    "description": "Fosters a culture across Perficient where people are encouraged to share their opinions and contribute to discussions in a respectful manner and is able to achive the better solutions based on the different perspectives",
                    "position": 4
                  }
                ]
              },
              {
                "skillId": "a71fef36-d4eb-4f20-8147-c89269fd3a58",
                "displayName": "People Development Impact",
                "description": "Provides strategic support to people to help them build the career they want",
                "categoryId": "44f620b8-bbb5-4e76-9022-3ecbae6d5ac7",
                "mandatory": true,
                "position": 1,
                "details": [
                  {
                    "id": "452b0ab2-409b-465a-9802-ba5fb69196ac",
                    "description": "Gives insight into opportunities and helps identify individuals' strengths and improvement opportunities",
                    "position": 0
                  },
                  {
                    "id": "747b9dfe-b457-4bdc-9585-e85946fb2cf6",
                    "description": "Formally supports and advocates for one person and provides tools to help them solve career problems",
                    "position": 1
                  },
                  {
                    "id": "a8d399b4-1d0b-4266-871d-81c2cc0bf021",
                    "description": "Inspires and retains a small group of people and actively pushes them to stretch themselves",
                    "position": 2
                  },
                  {
                    "id": "6915a562-3635-4e32-a4b6-610d96d40914",
                    "description": "Manages interactions and processes between groups, promoting best practices and setting a positive example",
                    "position": 3
                  },
                  {
                    "id": "7a7d2ef2-c28f-417e-9a90-5f4845128b7e",
                    "description": "Supports the development of a signficant part of the people within the company, and widely viewed as a trusted advisor",
                    "position": 4
                  }
                ]
              },
              {
                "skillId": "c454fb41-425a-425f-9c82-7de7148ad948",
                "displayName": "Ownership - Impact",
                "description": "The ability to consistently act in the company’s best interest over your own - to act like an owner of the company. This is ultimately a barometer of how able you are to build trust within your team and organisation",
                "categoryId": "44f620b8-bbb5-4e76-9022-3ecbae6d5ac7",
                "mandatory": true,
                "position": 2,
                "details": [
                  {
                    "id": "de54e656-d58a-411a-a454-a16b4a280ab5",
                    "description": "Is demonstrating care over their work and time across basic tasks, with support",
                    "position": 0
                  },
                  {
                    "id": "d1bd0d1b-6363-4b83-8526-1303dd02d74c",
                    "description": "Is thinking in company needs across broad aspects of their role unsupported, and looking for opportunities to grow",
                    "position": 1
                  },
                  {
                    "id": "d9f2833d-1d48-4746-acd2-8ad12161635d",
                    "description": "Is constantly thinking in terms of where to add value and use their unique leverage within a team, and is taking on new responsibility wherever possible",
                    "position": 2
                  },
                  {
                    "id": "b3408666-5387-4129-984d-f087a876e95d",
                    "description": "Thinks like a founder of their team. Actively levels up the ownership of others, uses ownership as a barometer against which they judge the quality and capability of teams. Trusted to drive key goals team and company-wide with lots of autonomy",
                    "position": 3
                  },
                  {
                    "id": "fe91be67-1963-49ab-8a81-acbffc30155d",
                    "description": "Through extreme trust and ownership, has become a pseudo organisation founder if they aren't one already. Completely trusted to take on and deliver the highest importance goals of the company with very little oversight.",
                    "position": 4
                  }
                ]
              },
              {
                "skillId": "df1b8360-6ee5-4df5-9489-70239d5664ed",
                "displayName": "Success Oriented - Impact",
                "description": "Inspires day to day excellence, maximizes potential and effectively resolves performance issues with emphaty",
                "categoryId": "44f620b8-bbb5-4e76-9022-3ecbae6d5ac7",
                "mandatory": true,
                "position": 0,
                "details": [
                  {
                    "id": "cec345ef-f3f0-4fc8-b874-b36820ca0391",
                    "description": "Helps individuals identify blockers and helps them identify next steps for resolution",
                    "position": 0
                  },
                  {
                    "id": "74b593de-2415-4fda-af27-993e6f0bb97f",
                    "description": "Helps individuals resolve difficult performance issues, with insight, emphaty, and ability",
                    "position": 1
                  },
                  {
                    "id": "c465ca0e-aeb0-4d6e-b023-ad4600cdbdea",
                    "description": "Intervenes in long-standing performance issues with targeted behavior change or performance plans",
                    "position": 2
                  },
                  {
                    "id": "520f59d5-a1ac-4ecc-bcfc-f238c5db6f84",
                    "description": "Mediates escalated situations, empowers underperforming teams, and resolves conflict",
                    "position": 3
                  },
                  {
                    "id": "53986bcd-cf7f-4a56-a4db-2cb8d6f5b5c3",
                    "description": "Resolves complex organizational dysfunction, or persistent conflict at senior levels",
                    "position": 4
                  }
                ]
              },
              {
                "skillId": "ff49f0e1-1a13-4dad-806e-761f8cc8b80b",
                "displayName": "Thought Leadership - Impact",
                "description": "Avowed as a person who shares knowledge with the people ",
                "categoryId": "44f620b8-bbb5-4e76-9022-3ecbae6d5ac7",
                "mandatory": true,
                "position": 0,
                "details": [
                  {
                    "id": "116c6c51-ce68-4b92-a32c-e3ef6dee6ea3",
                    "description": "Understands their area of work and shares their knowledge frequently with their teammates.\t",
                    "position": 0
                  },
                  {
                    "id": "963feb55-43f5-4f37-907c-2b3e09df350e",
                    "description": "Understands their work domain, shares their knowledge frequently with their teammates and contributes to their team's documentation. Watches out for opportunities to share knowledge.",
                    "position": 1
                  },
                  {
                    "id": "74df064f-f6a1-4870-80aa-c5dc66d8d65b",
                    "description": "Understands their team's domain, shares their knowledge frequently with their teammates and contributes to their team's documentation. Watches out for opportunities to share knowledge and encourages others to do the same.",
                    "position": 2
                  },
                  {
                    "id": "d1b5cce5-3b42-4d84-ab42-eb69aa2458e1",
                    "description": "Fosters a culture of documentation and knowledge sharing within their team and with their team's business stakeholders; actively demonstrates these behaviors.",
                    "position": 3
                  },
                  {
                    "id": "d94aee66-98e7-4394-8537-0b7843fcde9a",
                    "description": "Fosters a culture of knowledge sharing using the best practices across all Perficient; actively demonstrates these behaviors. ",
                    "position": 4
                  }
                ]
              }
            ]
          },
          {
            "id": "673f5943-b2c5-45c0-909c-d5f283c53751",
            "name": "Culture - Impact",
            "description": "How oriented is the person with the Perficient culture, their ability to be transparent, to be open, to recognize their mistakes, to do entrepreneurial championing. ",
            "enabled": true,
            "position": 5,
            "skills": [
              {
                "skillId": "1958bbd1-a885-4573-ba6a-afe509bd35cf",
                "displayName": "Feedback Impact",
                "description": "Open to seek, receive and give constructive feedback on your work or the work of others.",
                "categoryId": "673f5943-b2c5-45c0-909c-d5f283c53751",
                "mandatory": true,
                "position": 0,
                "details": [
                  {
                    "id": "fea12465-af38-4e64-a2a8-ab1d784cecc9",
                    "description": "Actively seeks efective feedback from peers and colleagues on their own work and keep the evidence into the company's tools",
                    "position": 0
                  },
                  {
                    "id": "544a5d50-5cce-49d4-beca-7e3f3b2d8f13",
                    "description": "Able to give honest feedback to team members when needed. Understands the position they're in and thinks about appropriate phrasing accordingly\n",
                    "position": 1
                  },
                  {
                    "id": "36ba0163-0775-4c52-8af0-ffb0b4ad0f6e",
                    "description": "Knows the difference between opinion and objective critique, and manages their everyday feedback process to ensure it's actionable and fair. Able to unpick team issues and give good direction by ensuring agreements between team members",
                    "position": 2
                  },
                  {
                    "id": "cc0cfe9c-2ee3-4210-a68c-b2ad22ae9992",
                    "description": "Able to critique work at a level that allows team members to feel autonomous and empowered. Practices radical candour – empathically, timely, clear and directed feedback– to team and peers",
                    "position": 3
                  },
                  {
                    "id": "291cf72d-e15d-4061-b04b-349a47804fdc",
                    "description": "Fosters a culture of delivering praise and constructive feedback across several teams as well as their respective business stakeholders. Actively demonstrates these behaviors",
                    "position": 4
                  }
                ]
              },
              {
                "skillId": "8201bb52-bc3a-4401-87d1-7c37fc6ec293",
                "displayName": "Collaboration Impact",
                "description": "Support colleagues when they need help, and recognise the hard work of others",
                "categoryId": "673f5943-b2c5-45c0-909c-d5f283c53751",
                "mandatory": true,
                "position": 0,
                "details": [
                  {
                    "id": "f2ea9e02-d396-4990-afab-1b6f2b2c1699",
                    "description": "Makes themselves available to support others on demand, whenever realistically possible",
                    "position": 0
                  },
                  {
                    "id": "d44d08e1-9dc0-4fe4-9d84-5d5b49b2f346",
                    "description": "Publicly acknowledges the effort, hard work or support of others",
                    "position": 1
                  },
                  {
                    "id": "df219adc-d560-4178-99ab-2e9b8e31eed1",
                    "description": "Proactively reaches out to support colleagues when they appear in need of help or guidance",
                    "position": 2
                  },
                  {
                    "id": "3b98f7fe-6107-4fb3-8a45-47122b2143d7",
                    "description": "Recognises and flags stress and fatigue in others to support their continued wellbeing",
                    "position": 3
                  },
                  {
                    "id": "547267c3-7bf0-4dfb-a52d-034998e9d9d9",
                    "description": "Preempts and intervenes as necessary to minimise or avoid distress, unhappiness or burnout in colleagues",
                    "position": 4
                  }
                ]
              },
              {
                "skillId": "ab01f216-7191-40a4-97f1-5d1d97d39e7a",
                "displayName": "Community Impact",
                "description": "Builds community internally, gives of themself to the team, and champions and extols company's values",
                "categoryId": "673f5943-b2c5-45c0-909c-d5f283c53751",
                "mandatory": true,
                "position": 0,
                "details": [
                  {
                    "id": "42bbd86f-5daa-4e7f-91c0-40bc0eca75e7",
                    "description": "Is available and present on current teams, and works to contribute positively to company culture",
                    "position": 0
                  },
                  {
                    "id": "2df64849-5c3e-45d1-809b-cea8ba7b75b4",
                    "description": "Steps up, builds connectedness, and takes concrete actions to promote an inclusive culture",
                    "position": 1
                  },
                  {
                    "id": "15c6ddd3-a248-4a0f-b04b-63df7deede0e",
                    "description": "Contributes to improving team relatedness, and helps build a culture of lending support",
                    "position": 2
                  },
                  {
                    "id": "fce9fe3d-f9a0-41cf-9e3e-585dcaea6066",
                    "description": "Exemplifies selflessness for the team without compromising responsibilities, and lifts everyone up",
                    "position": 3
                  },
                  {
                    "id": "1c2d1d41-5ce3-4ff9-a18d-fc5abbf56582",
                    "description": "Lives the company values, guards positive culture, safety spaces, having a voice will all mean different things to different people and defines policies that support relatedness between teams",
                    "position": 4
                  }
                ]
              },
              {
                "skillId": "cf14554e-0dcf-4490-bed4-82ab8ffdd406",
                "displayName": "People Oriented - Impact",
                "description": "Empathy for the emotional well-being of group members in difficult times, and celebrates their successes",
                "categoryId": "673f5943-b2c5-45c0-909c-d5f283c53751",
                "mandatory": true,
                "position": 0,
                "details": [
                  {
                    "id": "415819f4-9a1b-4927-88eb-997857644ffb",
                    "description": "Uses tools and processes to help ensure colleagues are healthy and happy",
                    "position": 0
                  },
                  {
                    "id": "41afa9a4-ba86-4d5f-90ed-da75133bbd7a",
                    "description": "Creates a positive, supportive, engaging team environment for group members",
                    "position": 1
                  },
                  {
                    "id": "763d0176-6319-4e0c-8420-ac93e9014e13",
                    "description": "Manages expectations across peers, leads in Perficient, promotes a healthy work environment, and prevents one-sided decisions",
                    "position": 2
                  },
                  {
                    "id": "0994a2c5-adab-4bcf-a5a1-4e3960fafd6c",
                    "description": "Advocates for the needs of teams and group members, and proactively works to keep a good environment and motivated teamwork ",
                    "position": 3
                  },
                  {
                    "id": "701c60de-b0c7-489e-ba1c-776488320e4f",
                    "description": "Manages communications, channels negativity into inspiration and motivation, and protects the entire team",
                    "position": 4
                  }
                ]
              },
              {
                "skillId": "d83d2720-da1a-4ecf-9849-53cbfece6485",
                "displayName": "Pride Impact",
                "description": "Pursue exellence on behalf of our people, promotes Perficient and its values to the outside world and establishes it as an attractive and great place to work",
                "categoryId": "673f5943-b2c5-45c0-909c-d5f283c53751",
                "mandatory": true,
                "position": 0,
                "details": [
                  {
                    "id": "e0e60606-84c2-4810-973c-46441175ce44",
                    "description": "Represents Perficient values externally, and influences individuals positively",
                    "position": 0
                  },
                  {
                    "id": "781c40dd-33e9-4cb0-9e6b-5026415d287a",
                    "description": "Participates in small events, and takes simple actions that positively influence groups of people",
                    "position": 1
                  },
                  {
                    "id": "bd4bbb73-43f2-443f-bc6e-17a57a73b7ec",
                    "description": "Works hard to positively influence large groups of people on their views of Perficient",
                    "position": 2
                  },
                  {
                    "id": "46a1c99f-2220-4a51-b5d8-9177c5fa55c5",
                    "description": "Establishes Perficient as an great, innovative company and workplace to the whole industry",
                    "position": 3
                  },
                  {
                    "id": "ea846bbc-923c-4ae4-80f5-7e1319cf05cc",
                    "description": "Introduces Perficient in a positive light to a wider audience outside the industry",
                    "position": 4
                  }
                ]
              },
              {
                "skillId": "ed84c4d0-cf58-4c86-9ad2-020899ebdd54",
                "displayName": "Communication Impact",
                "description": "Shares the right amount of information with the right people, at the right time, and listens effectively",
                "categoryId": "673f5943-b2c5-45c0-909c-d5f283c53751",
                "mandatory": true,
                "position": 0,
                "details": [
                  {
                    "id": "243b9e99-4bb9-4292-b312-4f2e9a449678",
                    "description": "Communicates effectively to close people  when called upon, and incorporates constructive feedback",
                    "position": 0
                  },
                  {
                    "id": "1350c654-598e-4225-8223-97ee1b4a4e13",
                    "description": "Communicates with the wider team appropriately, focusing on timeliness and good quality conversations",
                    "position": 1
                  },
                  {
                    "id": "81c41c60-8dd9-4874-9804-bedff1692e0b",
                    "description": "Proactively shares information, actively ask for feedback, and facilitates communication for multiple teams or stakeholders",
                    "position": 2
                  },
                  {
                    "id": "922f4aa8-3c48-472f-abd7-5512ca9c4700",
                    "description": "Communicates complex ideas skillfully and with nuance, and establishes alignment within the wider organization",
                    "position": 3
                  },
                  {
                    "id": "0ded4c71-bfc3-4b5f-b340-040e40b86b8c",
                    "description": "Influences outcomes at the highest level, moves beyond mere broadcasting, and sets best practices for others",
                    "position": 4
                  }
                ]
              }
            ]
          },
          {
            "id": "76c1b9e2-2aeb-46f7-b3f6-dfa709d98be6",
            "name": "Technical Javascript - Impact",
            "description": null,
            "enabled": true,
            "position": 7,
            "skills": [
              {
                "skillId": "24b0e90a-7ce0-48ba-a099-8f56b9b5e3db",
                "displayName": "Node",
                "description": "short description",
                "categoryId": "76c1b9e2-2aeb-46f7-b3f6-dfa709d98be6",
                "mandatory": true,
                "position": 0,
                "details": []
              },
              {
                "skillId": "c98b4a7a-113e-42dd-bafe-f95d6bc16b22",
                "displayName": "Javascript",
                "description": "Short description",
                "categoryId": "76c1b9e2-2aeb-46f7-b3f6-dfa709d98be6",
                "mandatory": true,
                "position": 1,
                "details": [
                  {
                    "id": "7724da85-f1b0-474e-903b-8544bd84a685",
                    "description": "Variables (Tipos, BigInt)",
                    "position": 0
                  },
                  {
                    "id": "7ca81b96-8d3f-4b6c-b502-3852627e8553",
                    "description": "Comparaciones estrictas",
                    "position": 1
                  },
                  {
                    "id": "b5579e36-ef8e-4ac7-81b0-8bd666a6a453",
                    "description": "Scope",
                    "position": 2
                  },
                  {
                    "id": "ccfba767-036b-4ce3-a3a8-8edc906ae624",
                    "description": "Const vs Let vs Var (Hoisting - Hoisted Functions)",
                    "position": 3
                  },
                  {
                    "id": "ff8835ed-a217-4aea-8a11-9168586b205c",
                    "description": "Context (this)",
                    "position": 4
                  },
                  {
                    "id": "23ecc007-6fee-4211-8bc5-c1ffda540e05",
                    "description": "Arrow functions (Diferencia con una function)",
                    "position": 5
                  },
                  {
                    "id": "92159b00-d003-4a56-bb80-4f52af1329af",
                    "description": "Closure",
                    "position": 6
                  },
                  {
                    "id": "2170db93-e969-4c4a-b5b6-cd4ebb65fa85",
                    "description": "Asincronicidad (Callback, promise, then, catch, finally, async - await, promise hell, callback hell)",
                    "position": 7
                  },
                  {
                    "id": "f8b24109-5256-4a56-9b5d-3c1cd1aeddfd",
                    "description": "Ciclos (enumerable, iterable, forin, forof)",
                    "position": 8
                  },
                  {
                    "id": "bc07138c-b830-48ae-acef-d173c0322c99",
                    "description": "Ecmascript (Rest, spread operator, destructuring objects, optional chainning, nullish operator, void, template strings)",
                    "position": 9
                  }
                ]
              }
            ]
          },
          {
            "id": "8da58109-2dd3-4e65-b618-218491bc550d",
            "name": "Technical QA - Impact",
            "description": null,
            "enabled": true,
            "position": 8,
            "skills": [
              {
                "skillId": "b70900af-b0ea-47b8-b66e-20b5fefcc515",
                "displayName": "QA passionate",
                "description": "QA passionate",
                "categoryId": "8da58109-2dd3-4e65-b618-218491bc550d",
                "mandatory": false,
                "position": 0,
                "details": []
              }
            ]
          },
          {
            "id": "b044591e-1f25-4f2a-8813-aacab1015970",
            "name": "English - Impact",
            "description": "Interacts, communicates, writes and makes him/herself understood in English.",
            "enabled": true,
            "position": 6,
            "skills": [
              {
                "skillId": "70b01d92-2c0d-4560-b803-8712978b6678",
                "displayName": "English Impact",
                "description": "Interact, comunicate, speak in English Language ",
                "categoryId": "b044591e-1f25-4f2a-8813-aacab1015970",
                "mandatory": true,
                "position": 0,
                "details": []
              }
            ]
          },
          {
            "id": "cb6451ca-0f35-4fab-a74e-c293ed24aa85",
            "name": "New category",
            "description": null,
            "enabled": true,
            "position": 9,
            "skills": []
          },
          {
            "id": "e881acc0-5f29-43da-903a-a0cb07b5a9bb",
            "name": "Client - Impact",
            "description": "Interact with the client, being able to gain their trust in order to propose solutions that align with strategic needs and exceed their expectations, share information in a timely and transparent manner; and be in a position to discuss teaming, engineering and strategic issues.",
            "enabled": true,
            "position": 3,
            "skills": [
              {
                "skillId": "525dab5d-df29-43ba-9700-6f97d836fab4",
                "displayName": "Relationship Development Impact",
                "description": "The ability to develop and manage a relationship with a client, using tools where appropriate",
                "categoryId": "e881acc0-5f29-43da-903a-a0cb07b5a9bb",
                "mandatory": true,
                "position": 0,
                "details": [
                  {
                    "id": "b3ebc78e-86a5-4890-9ad7-f2f8addee974",
                    "description": "Is able to understand the importance of building a relationship with a client.",
                    "position": 0
                  },
                  {
                    "id": "43155d33-99c6-4a23-a6ae-1d9b0aee95f1",
                    "description": "Is able to build and manage relationships with multiple clients of similar type, developing rapport and resolving basic concerns where appropriate.",
                    "position": 1
                  },
                  {
                    "id": "be59cb1c-ed4a-4e58-9c6b-9ae686333cc4",
                    "description": "Is able to build and manage many relationships, across multiple clients types, resolving complex client concerns as required.",
                    "position": 2
                  },
                  {
                    "id": "02689b75-644c-47cd-a87e-0f874051d648",
                    "description": "Leads multiple teams in building and managing client relationships. Is known across the organisation as an expert in developing rapport and addressing client concerns.",
                    "position": 3
                  },
                  {
                    "id": "b78e1666-3624-456a-a8bb-b4a62f6e5259",
                    "description": "Leads the organisation in developing long lasting client relationships. Mentors less experts junior colleagues at all levels around managing relationships.",
                    "position": 4
                  }
                ]
              },
              {
                "skillId": "729a51ad-278d-41e7-b9d0-f6e44766b49f",
                "displayName": "Client Satisfaction Impact",
                "description": "The ability to meet and exceed client needs, while also maintaining a focus on the bottom line",
                "categoryId": "e881acc0-5f29-43da-903a-a0cb07b5a9bb",
                "mandatory": true,
                "position": 0,
                "details": [
                  {
                    "id": "0744e262-8821-4b40-b2ba-954eda7bdfa4",
                    "description": "is able to understand client needs and articulate them to the team",
                    "position": 0
                  },
                  {
                    "id": "eddaccbe-ef86-4918-8cfa-5c7fdb3f9875",
                    "description": "is able to use client feedback to make product decisions with input from engineering and design",
                    "position": 1
                  },
                  {
                    "id": "b3fe8070-a160-4842-b31d-01f51e99f428",
                    "description": "Is able to understand not only client needs, but also their emotional state. Has a high degree of empathy for the customer",
                    "position": 2
                  },
                  {
                    "id": "0d25f2d4-c228-4a5b-93bc-1e113eec97a3",
                    "description": "Leads cross functional teams in developing products and services that are delivered with an understanding of the client's emotional needs",
                    "position": 3
                  },
                  {
                    "id": "2e9da568-cfc7-4a56-8e8c-f7ccca81ab90",
                    "description": "is responsible for driving an organisation's success through understanding and meeting client needs",
                    "position": 4
                  }
                ]
              },
              {
                "skillId": "776b926e-c8d1-4365-99ca-d21e92354872",
                "displayName": "Business Context Impact",
                "description": "The ability to look for, understand and use the needs and constraints of the business in your work",
                "categoryId": "e881acc0-5f29-43da-903a-a0cb07b5a9bb",
                "mandatory": true,
                "position": 0,
                "details": [
                  {
                    "id": "cf371307-194b-4675-9c1f-94f8b2298264",
                    "description": "Knows how the business operates on a high level as well as their core team metrics, and can use that knowledge in daily decisions, with help",
                    "position": 0
                  },
                  {
                    "id": "88d83561-edfe-4ea1-a525-17e4809f52a1",
                    "description": "Understands how the business works and the goals of their team. Is able to relate that to their own work",
                    "position": 1
                  },
                  {
                    "id": "6b2895ef-899f-4303-bcd6-f4d7d56b4dda",
                    "description": "Is actively finding business insights that they need for their work, using people from outside their team. Helping team-mates to understand the business",
                    "position": 2
                  },
                  {
                    "id": "3b41123f-91dc-4686-bf07-9f30fd5c8864",
                    "description": "Actively works to understand all aspects of the business. Autonomously looks for data wherever they need to aid their own and their team's understanding. Coaching others in using business needs",
                    "position": 3
                  },
                  {
                    "id": "eb05a96b-e689-4ba3-9e6d-a3c3d5038689",
                    "description": "Deeply involved in business strategy. Regularly advocates with business partners for a design process which caters for users, and ensures their team understands the business context in which they're working",
                    "position": 4
                  }
                ]
              },
              {
                "skillId": "908ad2b6-d296-4884-97ab-e4a2871683a7",
                "displayName": "Product Strategy Impact",
                "description": "The ability to define and drive product strategy",
                "categoryId": "e881acc0-5f29-43da-903a-a0cb07b5a9bb",
                "mandatory": true,
                "position": 0,
                "details": [
                  {
                    "id": "58bae94f-0f7b-4bd8-832f-cbe35f17f779",
                    "description": "Is aware of and understands the strategy for their section of the product",
                    "position": 0
                  },
                  {
                    "id": "8008db18-9f76-49d6-975c-9f08522f899c",
                    "description": "Is able to manage the strategy for a specific area of the product",
                    "position": 1
                  },
                  {
                    "id": "f390ea92-6700-4a97-9677-e1e08ebaa9db",
                    "description": "Is able to lead the team on strategy for an area of the product, ensuring alignment with business goals",
                    "position": 2
                  },
                  {
                    "id": "64514396-6185-43b2-b869-f99f532939dd",
                    "description": "Is a leader in the organisation on strategy across multiple areas of the product, always aligning with business goals",
                    "position": 3
                  },
                  {
                    "id": "e718302d-44ad-454e-a75c-fb7483e17f2f",
                    "description": "Is an expert in product strategy. Leads the organisation internally and externally in driving the development of the entire product",
                    "position": 4
                  }
                ]
              }
            ]
          },
          {
            "id": "ff5196ae-a9d3-43ae-af8e-ae8520885105",
            "name": "Technical Java - Impact",
            "description": null,
            "enabled": true,
            "position": 10,
            "skills": [
              {
                "skillId": "fac4ee6e-365c-41a4-9c36-cf1541767664",
                "displayName": "Arquetipos (Java)",
                "description": "Arquetipos (Java)",
                "categoryId": "ff5196ae-a9d3-43ae-af8e-ae8520885105",
                "mandatory": false,
                "position": 0,
                "details": [
                  {
                    "id": "72a44b78-b608-413e-b143-cedd033fab26",
                    "description": "(Junior) Access modifiers",
                    "position": 0
                  },
                  {
                    "id": "9c206c86-ea35-4778-a6f8-4741a7c218bf",
                    "description": "(Junior) Boxing y unboxing",
                    "position": 1
                  },
                  {
                    "id": "358412b2-27c7-43b2-8349-2762b5d1e254",
                    "description": "(Junior) Keywords",
                    "position": 2
                  },
                  {
                    "id": "2ab5d399-4b7a-444b-8d3d-8d66ca0cd5af",
                    "description": "(Junior) Exception handling / logging",
                    "position": 3
                  },
                  {
                    "id": "50de0c7b-2d31-4518-987f-0872afa80917",
                    "description": "(Junior) uso de Equals, toString y hashCode",
                    "position": 4
                  },
                  {
                    "id": "690008d1-e258-4e65-82d1-c8968c076612",
                    "description": "(Mid) Optional",
                    "position": 5
                  },
                  {
                    "id": "a4a8d414-b1cc-448a-bd7e-db07b4cf38fb",
                    "description": "(Mid) Lambdas and Streams",
                    "position": 6
                  },
                  {
                    "id": "4e853218-7a30-403a-81b1-95e750cdae2e",
                    "description": "(Mid) Generics",
                    "position": 7
                  },
                  {
                    "id": "bd5242c1-069f-4b6a-abf5-2765822b3ae5",
                    "description": "(Senior) Aspects and/or interceptors",
                    "position": 8
                  },
                  {
                    "id": "1b1196f9-42d9-4df7-aa07-7dec659dec83",
                    "description": "(Senior) Reflection",
                    "position": 9
                  },
                  {
                    "id": "b22dcd6d-1e42-46e9-9657-f801be431bfe",
                    "description": "(Senior) Completable Futures, Executors",
                    "position": 10
                  },
                  {
                    "id": "63da897d-8602-4dd6-af25-c822f83823cd",
                    "description": "(Senior) Concurrency",
                    "position": 11
                  },
                  {
                    "id": "1a7d61e2-96f6-4478-82a2-a3a0f3740224",
                    "description": "Leadership",
                    "position": 12
                  },
                  {
                    "id": "a37b75db-54b7-490c-bfd7-225bbd79b2a0",
                    "description": "Front end, Angular, React",
                    "position": 13
                  },
                  {
                    "id": "28317be7-d7a6-41a3-b131-b5252af93a6f",
                    "description": "Dev Ops",
                    "position": 14
                  },
                  {
                    "id": "b17c5936-d93e-40eb-98cb-147589241531",
                    "description": "Business Analyst",
                    "position": 15
                  },
                  {
                    "id": "2ffab8d0-057e-464b-9656-ea7118852d45",
                    "description": "Quality Assurance",
                    "position": 16
                  },
                  {
                    "id": "78ad6651-7785-4655-887d-cef01f52786a",
                    "description": "Elastic Search",
                    "position": 17
                  }
                ]
              }
            ]
          }
        ],
        "skills": []
      };
      skillEvaluation.showInfoPanel = true;
      skillEvaluation.isASingleSkill = true;
      skillEvaluation.skill = {
        skillId: '12afvxxvaf',
        displayName: 'English',
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
      skillEvaluation.skills = [
        { skillId: "idSkill6", displayName: "Valoracion super extraña 6" },
        { skillId: "idSkill7", displayName: "English" },
      ];
      skillEvaluation.users = [
        { id: 'asdasd', fullName: 'Prueba User', email: "prueba.user@perficient.com" }
      ];
      /*  skillEvaluation.addEventListener("submitEvent", (event) => {
         alert(JSON.stringify(event));
       }); */
      skillEvaluation.addEventListener("addNewSkill", (event) => {
        skillEvaluation.newSkill = EVALUATION_SINGLE;
      });
      skillEvaluation.surveyButton = "surveyButton";
      skillEvaluation.showDownloadButton = true;
      skillEvaluation.initialDiscipline = "Salesforce";
      skillEvaluation.addEventListener("selectedDiscipline", (event) => {
        console.log(event);
      });
      skillEvaluation.addEventListener("downloadReport", (event) => {
        console.log(event);
      });
      divToRender.appendChild(skillEvaluation);
      break;
    // Autocomplete
    case "st-core-autocomplete":
      const autocomplete = document.createElement("st-core-autocomplete");
      autocomplete.data = [
        { text: "MARIA", value: 1 },
        { text: "Manuel", value: 2 },
        { text: "MAria Alejandra", value: 3 },
      ];
      autocomplete.displayField = "text";
      autocomplete.valueField = "value";
      divToRender.appendChild(autocomplete);
      break;
    // Breadcrumbs
    case "st-core-breadcrumbs":
      const breadcrumbs = document.createElement("st-core-breadcrumbs");
      breadcrumbs.paths = [
        { text: "Abuelo", link: "LinkAbuelo" },
        { text: "padre", link: "LinkPadre", dataAutomation: "auto-link-padre" },
        { text: "hijo" },
      ];
      breadcrumbs.isValidation = true;
      divToRender.appendChild(breadcrumbs);
      break;
    // Form Input
    case "st-core-form-input":
      const formInput = document.createElement("st-core-form-input");
      formInput.labelText = "Nombre";
      formInput.showRequired = true;
      formInput.errorMsg = { required: "hey esto esta vacio" };
      setTimeout(() => {
        formInput.errors = { required: true };
      }, 3000);
      const interno = document.createElement("input");
      interno.type = "text";
      interno.classList = ["form-control"];
      formInput.appendChild(interno);
      divToRender.appendChild(formInput);
      break;
    // Modal
    case "st-core-modal":
      const modal = document.createElement("st-core-modal");
      const footer = document.createElement("div");
      footer.className = "modal-footer";
      const button = document.createElement("button");
      button.type = "button";
      button.innerText = "Close Modal";
      button.className = "btn btn-secondary";
      button.addEventListener("click", () => {
        modal.closeModal();
      });
      footer.appendChild(button);
      modal.appendChild(footer);
      divToRender.appendChild(modal);
      modal.openModal();
      // create button open modal
      const container = document.getElementById("toRender");
      const openModal = document.createElement("button");
      openModal.type = "button";
      openModal.innerText = "Open Modal";
      openModal.className = "btn btn-secondary";
      openModal.addEventListener("click", () => {
        modal.openModal();
      });
      container.appendChild(openModal);
      break;
    // dropdown
    case "st-core-dropdown":
      const dropdown = document.createElement("st-core-dropdown");
      dropdown.data = [
        {
          text: "Prueba",
          value: 1,
          img: "https://picjumbo.com/wp-content/uploads/the-golden-gate-bridge-sunset-1080x720.jpg",
        },
        {
          text: "Test",
          value: 2,
          img: "https://picjumbo.com/wp-content/uploads/the-golden-gate-bridge-sunset-1080x720.jpg",
        },
      ];
      dropdown.list = [
        {
          text: "Prueba 1",
          value: 1,
          img: "https://picjumbo.com/wp-content/uploads/the-golden-gate-bridge-sunset-1080x720.jpg",
        },
        {
          text: "Prueba 2",
          value: 2,
          img: "https://picjumbo.com/wp-content/uploads/the-golden-gate-bridge-sunset-1080x720.jpg",
        },
        {
          text: "Prueba 3",
          value: 3,
          img: "https://picjumbo.com/wp-content/uploads/the-golden-gate-bridge-sunset-1080x720.jpg",
        },
        {
          text: "Test 1",
          value: 3,
          img: "https://picjumbo.com/wp-content/uploads/the-golden-gate-bridge-sunset-1080x720.jpg",
        },
        {
          text: "Test 2",
          value: 3,
          img: "https://picjumbo.com/wp-content/uploads/the-golden-gate-bridge-sunset-1080x720.jpg",
        },
        {
          text: "Test 3",
          value: 3,
          img: "https://picjumbo.com/wp-content/uploads/the-golden-gate-bridge-sunset-1080x720.jpg",
        },
        {
          text: "Test 4",
          value: 3,
          img: "https://picjumbo.com/wp-content/uploads/the-golden-gate-bridge-sunset-1080x720.jpg",
        },
        {
          text: "Test 5",
          value: 3,
          img: "https://picjumbo.com/wp-content/uploads/the-golden-gate-bridge-sunset-1080x720.jpg",
        },
        {
          text: "Jorge Manuel Dublas Perez",
          value: 3,
          img: "https://picjumbo.com/wp-content/uploads/the-golden-gate-bridge-sunset-1080x720.jpg",
        },
        {
          text: "Manuel Santa Renez",
          value: 3,
          img: "https://picjumbo.com/wp-content/uploads/the-golden-gate-bridge-sunset-1080x720.jpg",
        },
      ];
      dropdown.isOneRegister = false;
      dropdown.valueFilter = "text";
      dropdown.isImg = true;
      divToRender.appendChild(dropdown);
      break;
    // tags inputs
    case "st-core-tags-inputs":
      const tagsInputs = document.createElement("st-core-tags-inputs");
      tagsInputs.data = ["test 1", "test 2", "test 3"];
      divToRender.appendChild(tagsInputs);
      break;
    // table
    case "st-core-table":
      const table = document.createElement("st-core-table");
      table.thead = [
        { key: "candidate", name: "Nombre candidato", sortKey: "candidate.name", },
        { key: "candidateEmail", name: "Email candidato", sortKey: "candidate.code", },
        { key: "startDate", name: "Fecha y hora", sortKey: "startDate" },
        { key: "area", name: "Área", sortKey: "area.name" },
        { key: "type", name: "Tipo", sortKey: "type.name" },
        { key: "level", name: "Nivel", sortKey: "level.name" },
        { key: "notes", name: "Notas privadas", className: "text-cell" },
      ];
      table.data = [
        {
          _id: "60131c18ec9f740018c61479",
          area: "React",
          candidate: "Prueba Laura Pareja",
          startDate: "2021-01-28T22:00:00.000Z",
          type: "Valoración",
          level: "Intermedio",
        },
        {
          _id: "60131c18ec9f740018c61479",
          area: "Angular",
          candidate: "Prueba Daniel Castellanos",
          startDate: "2021-01-28T22:00:00.000Z",
          type: "Perfilacion",
          level: "Avanzado",
        },
      ];
      divToRender.appendChild(table);
      break;
    // date picker
    case "st-core-date-picker":
      const datePicker = document.createElement("st-core-date-picker");
      datePicker.class = "date";
      divToRender.appendChild(datePicker);
      break;
    // selector
    case "st-core-selector":
      const selector = document.createElement("st-core-selector");
      selector.options = [{ label: '1', value: 1 }, { label: '2', value: 2 }];
      selector.selected = 2;
      selector.value = "";
      divToRender.appendChild(selector);
      break;
    // toast
    case "st-core-toast":
      const toastDanger = document.createElement("st-core-toast");
      toastDanger.type = 'danger';
      toastDanger.header = 'danger';
      toastDanger.message = 'adakhskhaskskhajshkahskahskjashksahsakshksahasjksah';
      const toastWarning = document.createElement("st-core-toast");
      toastWarning.type = 'warning';
      toastWarning.header = 'warning';
      toastWarning.message = 'adakhskhaskskhajshkahskahskjashksahsakshksahasjksah';
      const toastSuccess = document.createElement("st-core-toast");
      toastSuccess.type = 'success';
      toastSuccess.header = 'success';
      toastSuccess.message = 'flksjdlkdjdlskjdlkjdaljaldjaldjaldjaldjaljdadaldjlajdal';
      divToRender.appendChild(toastDanger);
      divToRender.appendChild(toastWarning);
      divToRender.appendChild(toastSuccess);
      break;
    // tooltip-skill
    case "st-core-tooltip":
      const toolTip = document.createElement("st-core-tooltip");
      toolTip.text = 'Tooltip de prueba';
      toolTip.color = 'gray';
      divToRender.appendChild(toolTip);
      break;
    case "st-core-paginator":
      const paginator = document.createElement("st-core-paginator");
      paginator.totalItems = 45;
      divToRender.appendChild(paginator);
      break;
    case "st-core-radar":
      const radar = document.createElement("st-core-radar");
      radar.testMode = false;
      radar.userStatus = [4, 2, 3, 4, 5];
      radar.targetStatus = [5, 5, 5, 5, 5];
      radar.categories = ['Orientación cliente', 'Tech Know How', 'Estategia e Innovación', 'Proceso producto', 'Orientación equipo'];
      radar.colors = {
        user: '#255aee',
        goal: '#ffc300'
      };
      divToRender.appendChild(radar);
      break;
    case "st-core-skill-table":
      const skillTable = document.createElement("st-core-skill-table");
      skillTable.userSkills = [
        {
          activeSkill: true,
          favoriteSkill: false,
          requiresValidation: false,
          date: "2021-09-23T20:28:07.819Z",
          level: 5,
          skillId: "css",
          observations: "",
          displayName: "CSS",
          skillTypeId: "languages-frameworks",
          tags: ["Languages & Frameworks", "Tools & Libraries"],
          type: "EXPERT",
          evaluationType: [
            {
              type: "EXPERT",
              evaluator: 'Luis Miguel Mejía',
              level: 5,
              date: "2021-09-23T20:28:07.819Z"
            },
            {
              type: "PEER",
              level: 3,
              date: "2021-09-23T20:28:07.819Z"
            },
            {
              type: "SELF",
              level: 4,
              date: "2021-09-23T20:28:07.819Z"
            }
          ],
          historic: [
            {
              evaluator: "Luis Miguel Mejía",
              kind: "EXPERT",
              date: "2022-11-30",
              level: 4,
              comment: null,
              details: null
            }
          ],
          discipline: {
            id: 'id-123',
            name: 'Javascript'
          }
        },
        {
          activeSkill: true,
          favoriteSkill: false,
          requiresValidation: false,
          date: "2022-07-11T16:31:40.571Z",
          observations: "rfgasdfsadfasdfsadf",
          level: 3,
          skillId: "generalidades-desarrollo-front-end",
          displayName: "Generalidades desarrollo Front End",
          skillTypeId: "techniques-practices",
          tags: ["Techniques & Practices", 'sdfgssdfs'],
          type: "PEER",
          evaluationType: [
            {
              type: "PEER",
              level: 3,
              date: "2021-09-23T20:28:07.819Z"
            },
            {
              type: "SELF",
              level: 4,
              date: "2021-09-23T20:28:07.819Z"
            }
          ],
          historic: [
            {
              evaluator: "Luis Miguel Mejía",
              kind: "SELF",
              date: "2022-11-30",
              level: 4,
              comment: "Es muy bueno, pero debo seguir practicando para saber como actuar frente a bla bla bla bla bla sadadasjdajsdaj",
              details: [
                {
                  detail: "Pregunta 1",
                  answer: 3
                }
              ]
            }
          ],
          discipline: {
            id: 'id-456',
            name: 'QA'
          }
        },
        {
          activeSkill: true,
          favoriteSkill: false,
          level: 4,
          requiresValidation: false,
          date: "2020-06-11T20:55:21.471Z",
          skillId: "typescript",
          observations: "",
          displayName: "TypeScript",
          skillTypeId: "languages-frameworks",
          tags: ["Languages & Frameworks"],
          type: "SELF",
          evaluationType: [
            {
              type: "SELF",
              level: 4,
              date: "2021-09-23T20:28:07.819Z"
            }
          ],
          historic: [
            {
              evaluator: "Luis Miguel Mejía",
              kind: "SELF",
              date: "2022-11-30",
              level: 4,
              comment: "Es muy bueno, pero debo seguir practicando para saber como actuar frente a bla bla bla bla bla sadadasjdajsdaj",
              details: [
                {
                  detail: "Pregunta 1",
                  answer: 3
                }
              ]
            }
          ]
        },
      ];
      skillTable.displayField = "tag";
      skillTable.valueField = "id";
      skillTable.tagsToFilter = [
        "Others",
        "Languages & Frameworks",
        "Administrative skills",
        "Techniques & Practices",
        "Selection process skills",
        "Platforms",
        "Languages",
        "Tools & Libraries",
        "Soft skills"
      ];
      divToRender.appendChild(skillTable);
      break;
    case "st-core-skillset-table":
      const skillsetTable = document.createElement("st-core-skillset-table");
      skillsetTable.skillSet = {
        skills: [{
          skillId: "css",
          level: 5,
          name: "CSS"
        }, {
          skillId: "java",
          level: 3,
          name: "Java"
        }, {
          skillId: "c++",
          level: 4,
          name: "C++"
        }, {
          skillId: "c#",
          level: 5,
          name: "C#"
        }],
        name: "CSS",
        level: 5,
        description: "description blabasbdiabdabudai",
        enabled: true
      };
      divToRender.appendChild(skillsetTable);
      break;
    case "st-core-profile-table":
      const profile = document.createElement("st-core-profile-table");
      profile.data = [
        {
          discipline: 'Discipline one',
          forms: [
            {
              id: '16b5851b-ed82-4af7-8a3a-8d81ea56c03e',
              name: 'Form 1'
            },
            {
              id: '15b5851b-ed82-4af7-8a3a-8d81ea56c03e',
              name: 'Form 2'
            },
          ]
        },
        {
          discipline: 'Discipline two',
          forms: [
            {
              id: '17b5851b-ed82-4af7-8a3a-8d81ea56c03e',
              name: 'Formulario 1'
            },
            {
              id: '18b5851b-ed82-4af7-8a3a-8d81ea56c03e',
              name: 'Formulario 2'
            },
          ]
        },
        {
          discipline: 'Discipline three',
          forms: [
            {
              id: '19b5851b-ed82-4af7-8a3a-8d81ea56c03e',
              name: 'test form 1'
            },
            {
              id: '11b5851b-ed82-4af7-8a3a-8d81ea56c03e',
              name: 'test form 2'
            },
            {
              id: '12b5851b-ed82-4af7-8a3a-8d81ea56c03e',
              name: 'test form 3'
            },
            {
              id: '13b5851b-ed82-4af7-8a3a-8d81ea56c03e',
              name: 'formulario 4'
            },
          ]
        }
      ];
      divToRender.appendChild(profile);
      break;

    case "st-core-growth-plan":
      const plan = document.createElement("st-core-growth-plan");
      plan.plan = mockPlan;
      plan.addEventListener('updateProjection', (e) => {
        console.log('projetion', e);
      });
      plan.addEventListener('updateMentors', (e) => {
        console.log('updateMentors', e);
      });
      plan.addEventListener('addGoal', (e) => {
        console.log('add goal', e);
      });
      plan.addEventListener('showBoardAddAction', (e) => {
        console.log('add action board', e);
      });
      plan.addEventListener('showBoardEditAction', (e) => {
        console.log('edit action board', e);
      });
      plan.addEventListener('filter', (e) => {
        console.log('filter', e);
      });
      plan.addEventListener('errors', (e) => {
        console.log('errros', e);
      });
      plan.addEventListener('updateGoalState', (e) => {
        console.log('updateGoalState', e);
      });
      plan.addEventListener('updateGoalDate', (e) => {
        console.log('updateGoalDate', e);
      });
      plan.addEventListener('showGoalInfo', (e) => {
        console.log('showGoalInfo', e);
      });
      plan.addEventListener('showAddAction', (e) => {
        console.log('showAddAction', e);
      });
      plan.addEventListener('updateActionState', (e) => {
        console.log('updateActionState', e);
      });
      plan.addEventListener('updateActionDate', (e) => {
        console.log('updateActionDate', e);
      });
      plan.addEventListener('showActionInfo', (e) => {
        console.log('showActionInfo', e);
      });
      plan.addEventListener('actionSuggestedRejected', (e) => {
        console.log('actionSuggestedRejected', e);
      });
      plan.addEventListener('actionSuggestedAccepted', (e) => {
        console.log('actionSuggestedAccepted', e);
      });
      plan.addEventListener('goalSuggestedRejected', (e) => {
        console.log('goalSuggestedRejected', e);
      });
      plan.addEventListener('goalSuggestedAccepted', (e) => {
        console.log('goalSuggestedAccepted', e);
      });
      plan.addEventListener('finishPlan', (e) => {
        console.log('finishPlan', e);
      });

      divToRender.appendChild(plan);
      break;
    case "st-core-finished-growth-plan":
      const finishedPlan = document.createElement("st-core-finished-growth-plan");
      finishedPlan.finishedPlan = mockPlan;
      divToRender.appendChild(finishedPlan);
      break;
    default:
      break;
  }
}
