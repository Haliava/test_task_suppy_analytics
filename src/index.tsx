import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxStoreProvider } from 'react-redux';
import {store} from "./app/store";
import App from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <ReduxStoreProvider store={store}>
        <App />
    </ReduxStoreProvider>
);
