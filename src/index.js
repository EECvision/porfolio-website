import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ThemeContextProvider from './states/theme/theme.context';
import './index.css';
import NavContextProvider from './states/nav/nav.context';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <NavContextProvider>
        <App />
      </NavContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
