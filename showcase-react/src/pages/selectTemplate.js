import React, { useRef, useEffect, useState } from 'react';
import { TEMPLATE_LIST } from '../data/data';
import { Result } from '../components';

const SelectTemplate = () => {
  const [template, setTemplate] = useState(null);
  const el = useRef(null);

  useEffect(() => {
    el.current.data = TEMPLATE_LIST;
    el.current.addEventListener('sendTemplateId', (e) => setTemplate(e.detail));
  });

  return (
    <>
      <h2>Select Template</h2>
      <st-core-select-template ref={el}></st-core-select-template>
      <Result result={template} />
    </>
  );
};

export default SelectTemplate;
