import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import { observer } from 'mobx-react-lite';
import { Context } from '../store/context';
// import basket from '../images/basket.svg';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/constants';

const Header = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>КупиДевайс</NavLink>
        {user.isAuth ? (
          <Nav
            className="ml-auto"
            style={{ color: 'white' }}
          >
            <Button variant="outline-light mr-2" onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</Button>
            <Button variant="outline-light" onClick={() => logOut()}>Выйти</Button>
          </Nav>
        ) : (
          <Nav
            className="ml-auto"
            style={{ color: 'white' }}
          >
            <Button variant="outline-light" onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
            {/* <Button variant="outline-light">123</Button> */}
          </Nav>
        )}
      </Container>

    </Navbar>
  );
});

export default Header;
