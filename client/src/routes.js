import {
  ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE
} from './utils/constants';
import AdminPage from './pages/AdminPage';
import BasketPage from './pages/BasketPage';
import Auth from './pages/Auth';
import RegistrationPage from './pages/RegistrationPage';
import Shop from './pages/Shop';
import DevicePage from './pages/DevicePage';

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    element: AdminPage
  },
  {
    path: BASKET_ROUTE,
    element: BasketPage
  }
];

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    element: Auth
  },
  {
    path: REGISTRATION_ROUTE,
    element: RegistrationPage
  },
  {
    path: SHOP_ROUTE,
    element: Shop
  },
  {
    path: DEVICE_ROUTE,
    element: DevicePage,
  }
];
