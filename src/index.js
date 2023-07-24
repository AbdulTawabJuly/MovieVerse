import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

//Method 1
//ReactDOM.render(<App />, document.getElementById('root'));

//Method 2
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />,
);
