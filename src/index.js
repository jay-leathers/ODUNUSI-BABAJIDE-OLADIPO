import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';

import { loadProducts } from './redux/slices/productsSlice';
import { getTotals } from './redux/slices/cartSlice';
import { loadCurrencies } from './redux/slices/currencySlice';
import { PersistGate } from 'redux-persist/integration/react'

import App from './App';

import './index.css';
import './assets/style/style.css';

store.dispatch(loadProducts());
store.dispatch(getTotals());
store.dispatch(loadCurrencies());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>


      <App />

  </Provider>
);