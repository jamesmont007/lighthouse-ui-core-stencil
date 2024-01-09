import React from 'react';
import { Link } from 'react-router-dom';
import { LINKS } from './constants';

export const Nav = () => (
  <aside className="p-3 border-right shadow" style={{ minWidth: '240px' }}>
    <nav className="list-group">
      {LINKS.map(({ label, to }, key) => (
        <Link
          key={key}
          to={to}
          className="list-group-item list-group-item-action"
        >
          {label}
        </Link>
      ))}
    </nav>
  </aside>
);
