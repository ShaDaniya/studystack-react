import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import App from './components/app/App';
import { ContextProvider } from './contexts/WordsContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
    <App />
    </ContextProvider>
  </React.StrictMode>
);

