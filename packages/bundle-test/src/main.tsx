import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import i18n from "./i18n"

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _i18n: any
  }
}
window._i18n = i18n

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
