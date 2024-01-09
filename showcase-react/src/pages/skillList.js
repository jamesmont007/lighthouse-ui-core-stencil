import React, { useEffect, useRef } from 'react';
import { SKILLS, LEVELS } from '../data/data';

const SkillList = () => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.data = SKILLS;
    ref.current.levelsEnum = LEVELS;
  }, []);

  return (
    <>
      <h2>Skill List</h2>
      <st-core-skill-list ref={ref} isAdmin={true}></st-core-skill-list>
    </>
  );
};

export default SkillList;
