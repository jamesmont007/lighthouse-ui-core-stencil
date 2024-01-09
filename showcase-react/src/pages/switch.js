import React, { useState, useEffect, useRef } from 'react';
import { Result } from '../components';

const Switch = () => {
  const [active, setactive] = useState(false);
  const el = useRef(null);

  useEffect(() => {
    el.current.addEventListener('switchHappen', (e) => setactive(e.detail));
  }, []);
  return (
    <>
      <h2>Switch</h2>
      <st-core-switch-input ref={el} value={active}></st-core-switch-input>
      <Result result={active.toString()} />
    </>
  );
};

export default Switch;
