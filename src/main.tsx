import { StrictMode, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import Routes from './routes';
import './base.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes />
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);
