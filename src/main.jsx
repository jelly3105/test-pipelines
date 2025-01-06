import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';
import Version1 from './versions/version1';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Version1 />
  </React.StrictMode>
);
