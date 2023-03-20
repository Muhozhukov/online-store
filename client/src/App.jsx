/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import Auth from './pages/Auth';
import DevicePage from './pages/DevicePage';
import ErrorPage from './pages/ErrorPage';
// import RegistrationPage from './pages/RegistrationPage';
import Shop from './pages/Shop';
import {
  ADMIN_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE
} from './utils/constants';

//
function App() {
  return (

    <Routes>
      {/* <Route path="/" element={<DevicePage />} /> */}
      <Route path="/" element={<Shop />} />
      <Route path={LOGIN_ROUTE} element={<Auth />} />
      <Route path={REGISTRATION_ROUTE} element={<Auth />} />
      <Route path={ADMIN_ROUTE} element={<AdminPage />} />
      {/* <Route path="registration" element={<RegistrationPage />} /> */}
      <Route path={`${DEVICE_ROUTE}/:id`} element={<DevicePage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>

  );
}

export default App;
