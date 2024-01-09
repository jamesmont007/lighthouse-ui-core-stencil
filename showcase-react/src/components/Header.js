import React from 'react';

export const Header = ({ title = '' }) => (
  <header className="px-5 py-3 border-bottom">
    <h1 className="h1">{title}</h1>
  </header>
);
