import React, { useRef, useEffect, useState } from 'react';
import { SKILL_LIST } from '../data/data';
import { Result } from '../components';

const SelectSkill = () => {
  const [skill, setSkill] = useState(null);
  const el = useRef(null);

  useEffect(() => {
    el.current.data = SKILL_LIST;
    el.current.addEventListener('sendSkillId', (e) => setSkill(e.detail));
  });

  return (
    <>
      <h2>Select Skill</h2>
      <st-core-select-skill ref={el} name="Juan"></st-core-select-skill>
      <Result result={skill} />
    </>
  );
};

export default SelectSkill;
