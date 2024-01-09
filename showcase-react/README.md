This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Stencil UI Core

## Installation

To install the component library add the dependency to `package.json`

```
"lighthouse-ui-core-stencil": "git+ssh://git@github.com/pslcorp/lighthouse-ui-core-stencil.git#v1.0.4",
```

Or run

```
npm install git+ssh://git@github.com/pslcorp/lighthouse-ui-core-stencil.git#v1.0.4
```

## Include the library

To include the component library call `defineCustomElements()` from index.js file.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { defineCustomElements } from 'lighthouse-ui-core-stencil/loader';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
defineCustomElements(window);
```

## Using components

```html
<st-core-switch-input ref="{el}" value="{active}"></st-core-switch-input>
```

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
