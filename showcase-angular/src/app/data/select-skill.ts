import { SkillModel } from '../models/skill.model';

export const USERNAME = 'Pepito Perez';

export const SKILLS: SkillModel[] = [
  {
    activeSkill: true,
    description: 'Short description',
    displayName: 'Scala',
    radarDescription: 'Radar description',
    radarLevel: 'proficient',
    requiresValidation: true,
    skillId: 'scala',
    skillTypeId: 'languages-frameworks',
    skillTypeName: 'Languages & Frameworks',
    trendingSkill: false
  },
  {
    activeSkill: true,
    description: 'Short description',
    displayName: 'JQuery',
    radarDescription: 'Radar description',
    radarLevel: 'not-in-radar',
    requiresValidation: false,
    skillId: 'jquery',
    skillTypeId: 'languages-frameworks',
    skillTypeName: 'Languages & Frameworks',
    trendingSkill: false
  },
  {
    activeSkill: true,
    description: 'Short description',
    displayName: 'Linux',
    radarDescription: 'Radar description',
    radarLevel: 'not-in-radar',
    requiresValidation: false,
    skillId: 'linux',
    skillTypeId: 'platforms',
    skillTypeName: 'Platforms',
    trendingSkill: false
  },
  {
    activeSkill: true,
    description: 'Short description',
    displayName: 'Database Tuning',
    radarDescription: 'Radar description',
    radarLevel: 'proficient',
    requiresValidation: false,
    skillId: 'database-tuning',
    skillTypeId: 'techniques-practices',
    skillTypeName: 'Techniques & Practices',
    trendingSkill: false
  },
  {
    activeSkill: true,
    description: 'Short description',
    displayName: 'Websphere',
    radarDescription: 'Radar description',
    radarLevel: 'not-in-radar',
    requiresValidation: false,
    skillId: 'websphere',
    skillTypeId: 'platforms',
    skillTypeName: 'Platforms',
    trendingSkill: false
  },
  {
    activeSkill: true,
    description: 'Short description',
    displayName: 'ElectronJs',
    radarDescription: 'Radar description',
    radarLevel: 'proficient',
    requiresValidation: false,
    skillId: 'electronjs',
    skillTypeId: 'platforms',
    skillTypeName: 'Platforms',
    trendingSkill: false
  }
];
