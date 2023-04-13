import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from "./components/redux/store";
import { App } from 'components/App';
import { PersistGate } from "redux-persist/integration/react";
import configureStore from './components/redux/configureStore'

import './index.css';

const { persistor } = configureStore()

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  // </React.StrictMode>
);
