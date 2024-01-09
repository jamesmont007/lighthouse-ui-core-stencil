import React, { useRef, useEffect, useState } from 'react';
import { EVALUATION, EVALUATION_SINGLE } from '../data/data';
import { Result } from '../components';

const EvaluationTemplate = () => {
  const [result, setResult] = useState(null);

  const [evaluator, setEvaluator] = useState('');
  const evaluatorRef = useRef(evaluator);

  const ref = useRef(null);

  useEffect(() => {
    ref.current.skillData = EVALUATION;
    ref.current.completeData = [{ skillId: 'idSkill6', displayName: 'Valoracion super extraña 6' }];
    ref.current.addEventListener('submitEvent', createResult);
    ref.current.addEventListener('addNewSkill', addSingleSkill);
    return () => {
      ref.current.removeEventListener('submitEvent', createResult);
      ref.current.removeEventListener('addNewSkill', createResult);
    };
  }, []);

  useEffect(() => {
    evaluatorRef.current = evaluator;
  }, [evaluator]);

  const navigate = (e) => {
    const el = ref.current.shadowRoot.querySelector(`#skill-${e.detail}`);
    if (!el) return;
    el.scrollIntoView();
  };

  const createResult = (e) => {
    const result = {
      evaluator: evaluatorRef.current,
      data: e.detail,
    };
    setResult(JSON.stringify(result));
  };

  const addSingleSkill = () => {
    ref.current.newSkill = EVALUATION_SINGLE[0];
  };

  const onClickSubmit = () => ref.current.shadowRoot.querySelector('#surveyButton').click();

  return (
    <>
      <h2>Skill Evaluation</h2>
      <Result result={result} />
      <div className='d-flex py-3'>
        <input type='text' className='form-control p-0 col-3' onInput={(e) => setEvaluator(e.target.value)} />
        <button className='btn btn-primary ml-auto' onClick={onClickSubmit}>
          Submit
        </button>
      </div>
      <div className='d-flex'>
        <st-core-skill-evaluation ref={ref} identification='surveyButton'></st-core-skill-evaluation>
      </div>
    </>
  );
};

export default EvaluationTemplate;
