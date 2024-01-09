import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Header, Nav } from './components';
import Pages from './pages';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header title="Stencil UI Core" />
        <div className="d-flex flex-grow-1">
          <Nav />
          <Pages />
        </div>
      </div>
    </Router>
  );
}

export default App;
