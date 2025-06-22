import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';
import { App } from './app';
import { Container } from './components/container';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
