import React, { useRef, useEffect, useState } from 'react';
import { EVALUATION_SINGLE } from '../data/data';
import { Result } from '../components';

const Evaluation = () => {
  const [result, setResult] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    ref.current.skillData = EVALUATION_SINGLE;
    ref.current.addEventListener('submitEvent', handleSubmit);
  }, []);

  const handleSubmit = (e) => {
    if (e.detail.error) {
      setResult(e.detail.error);
      return;
    }
    setResult(JSON.stringify(e.detail.success));
  };

  const onClickSubmit = () => {
    const formButton = ref.current.shadowRoot.querySelector('#surveyButton');
    formButton.click();
  };

  return (
    <>
      <h2>Skill Evaluation</h2>
      <div className="d-flex p-3">
        <button className="btn btn-primary ml-auto" onClick={onClickSubmit}>
          Submit
        </button>
      </div>
      <st-core-skill-evaluation
        ref={ref}
        identification="surveyButton"
      ></st-core-skill-evaluation>
      <Result result={result} />
    </>
  );
};

export default Evaluation;
