import React, { useRef, useEffect } from 'react';
import { DETAIL, LEVELS } from '../data/data';

const SkillDetail = () => {
  const ref = useRef(null);
  useEffect(() => {
    ref.current.skill = DETAIL;
    ref.current.levelsEnum = LEVELS;
  }, []);
  return (
    <>
      <h2>Skill Detail</h2>
      <st-core-skill-detail ref={ref}></st-core-skill-detail>
    </>
  );
};

export default SkillDetail;
