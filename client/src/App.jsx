/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useContext } from 'react';
import { Routes, Route, } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import AdminPage from './pages/AdminPage';
import Auth from './pages/Auth';
import BasketPage from './pages/BasketPage';
import DevicePage from './pages/DevicePage';
import ErrorPage from './pages/ErrorPage';
// import RegistrationPage from './pages/RegistrationPage';
import Shop from './pages/Shop';
import {
  ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE
} from './utils/constants';
import { check } from './api/userApi';
import { getBasket } from './api/deviceApi';
import { Context } from './store/context';
//
const App = observer(() => {
  const { user, basket } = useContext(Context);
  const checkBasket = () => {
    if (user.isAuth) {
      getBasket(user.user.id)
        .then((res) => {
          basket.setDevices(res.devices);
          basket.setTotalPrice(res.total_price);
          console.log(res.total_price);
        })
        .catch((err) => console.log(err));
    }
  };

  const checkAuth = () => {
    const jwt = localStorage.getItem('token');
    if (jwt) {
      check()
        .then((res) => {
          user.setUser(res);
          user.setIsAuth(true);
          checkBasket();
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    checkAuth();
    // checkBasket();
  }, []);
  return (

    <Routes>
      <Route path="/" element={<Shop />} />
      <Route path={LOGIN_ROUTE} element={<Auth />} />
      <Route path={REGISTRATION_ROUTE} element={<Auth />} />
      <Route path={ADMIN_ROUTE} element={<AdminPage />} />
      <Route path={`${DEVICE_ROUTE}/:id`} element={<DevicePage />} />
      <Route path={`${BASKET_ROUTE}`} element={<BasketPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>

  );
});

export default App;
