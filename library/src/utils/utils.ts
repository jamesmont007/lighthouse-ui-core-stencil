import { ERROR } from '../helpers/constants';
import { FormModel, SkillModel } from '../models';

export function format(first: string, middle?: string, last?: string): string {
  return (
    (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '')
  );
}

export function getArrayFromProperty(toParse): any {
  if (typeof toParse === 'string') {
    try {
      return JSON.parse(toParse);
    } catch (error) {
      if (toParse.split(',').length > 0) return toParse.split(',');
    }
  } else {
    return toParse;
  }
}

export const transformString = (value: string): string => value.toLowerCase().trim().replace(/\s/g,'_');

export const generateOptionsFromNumberArray = (numbers) =>
  // tslint:disable-next-line: variable-name
  Array.from(numbers, (number) => ({
    label: number.toString(),
    value: number,
  }));

// Deep clone for internal state
const deepCloneObj = (arr) => JSON.parse(JSON.stringify(arr));

export const initializeData = (data) => {
  const newData = deepCloneObj(data);
  return newData.map((skill) => {
    skill.level = 0;
    skill.disabled = true;
    // tslint:disable-next-line: no-shadowed-variable
    skill.options = Array.from({ length: 5 }, (_, i) => i + 1);
    skill.details = skill.details.map((item) => ({
        detail: item,
        answer: 0,
      }));
    skill.comments = '';
    return skill;
  });
};

export const updateValue = (data) => (e) => {
  const { name, value } = e.target;
  const [skillId, type, index = null] = name.split('-_-');
  const newData = [...data];
  const skill = newData.find((item) => item.skillId === skillId);
  if (type === 'details') {
    skill.details[index].answer = value;
  } else {
    skill[type] = value;
  }
  return newData;
};

export const updateDisabled = (data) => (skill) => {
  const newData = [...data];
  skill.disabled = !skill.disabled;
  return newData;
};

export const matchDiscipline = (discipline: string) => discipline
    .toLowerCase()
    .trim()
    .match(/technical (.*?) impact/)?.[1];

export const replaceAll = (string, search, replace) => string.split(search).join(replace);

export const createSkillsObj = (formData: FormModel | SkillModel, isASingleSkill = false, handleRoutingNavbar = null) => {
  let skills: SkillModel[] | undefined;
  if (isASingleSkill) {
    skills = [({ ...formData, mandatory: true } as SkillModel)];
  } else {
    skills = (formData as FormModel).categories
      .reduce((acc, current) => [...acc, ...current.skills], []);
  }
  const formIsEmpty = skills.every(({ selectedLevel }) => typeof selectedLevel !== 'number');

  if (formIsEmpty) {
    return {
      error: ERROR.EMPTY
    };
  }

  let skillMandatoryEmpty = [];

  if ((formData as FormModel).isImpactMatrix) {
    const technicalDisciplines = (formData as FormModel).categories
      .filter(
        (category) =>
          matchDiscipline(category.name)
      )
      .filter((category) => category.visible);
    const technicalDefault = (formData as FormModel).categories
      .filter(
        (category) =>
          category.name.replace(/-\s/g, '').toLowerCase().trim() === 'technical impact'
      )
      .filter((category) => category.visible);
    if (!technicalDisciplines.length && !technicalDefault.length) {
      return {
        error: ERROR.NO_DISCIPLINE,
      };
    }
    skillMandatoryEmpty = (formData as FormModel).categories
      .reduce(
        (acc, curr) => (curr.visible ? [...acc, ...curr.skills] : acc),
        []
      )
      .filter((s) => s.mandatory)
      .filter(({ selectedLevel }) => typeof selectedLevel !== 'number');
  } else {
    skillMandatoryEmpty = skills
      .filter((s) => s.mandatory)
      .filter(({ selectedLevel }) => typeof selectedLevel !== 'number');
  }

  if (skillMandatoryEmpty.length) {
    return {
      mandatorySkills: skillMandatoryEmpty
    };
  }

  const skillIncomplete = skills.filter(s => typeof s.selectedLevel === 'number').find((skill) => !skill.comments);
  if (skillIncomplete) {
    handleRoutingNavbar({ detail: skillIncomplete.skillId });
    return {
      error: ERROR.INCOMPLETE.replace('___', skillIncomplete.displayName),
    };
  }

  return {
    success: skills
  };
};

export const calcColSpan = (a, b) => {
  let colSpan = 1;
  colSpan += a > b ? a - b : 0;
  return colSpan;
};

export function searchSkill(value, searchLength, actualData, displayField) {
  const search = value;
  if (search.length > searchLength) {
    if(displayField){
      return actualData.filter((item) =>
        item[displayField]
          ? item[displayField].toLowerCase().includes(search.toLowerCase())
          : ''
      );
    } else {
      return actualData.filter(item => item.toLowerCase().includes(search.toLowerCase()));
    }
  } else {
    return [];
  }
}
