import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter
} from 'react-router-dom';
import App from './App';
import UserStore from './store/UserStore';
import { Context } from './store/context';
import DeviceStore from './store/DeviceStore';
import BasketStore from './store/BasketStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{
      user: new UserStore(),
      device: new DeviceStore(),
      basket: new BasketStore()
    }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Context.Provider>

  </React.StrictMode>
);
