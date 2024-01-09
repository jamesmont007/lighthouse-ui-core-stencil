import React, { useEffect, useRef } from 'react';

const Breadcrumbs = () => {
  const ref = useRef(null);
  const data = [
    { text: 'Abuelo', link: 'LinkAbuelo' },
    { text: 'padre', link: 'LinkPadre', dataAutomation: 'auto-link-padre' },
    { text: 'hijo' },
  ];

  useEffect(() => {
    ref.current.paths = data;
  }, [data]);

  return (
    <div>
      <h2>Breadcrumbs</h2>
      <st-core-breadcrumbs ref={ref}></st-core-breadcrumbs>
    </div>
  );
};

export default Breadcrumbs;
