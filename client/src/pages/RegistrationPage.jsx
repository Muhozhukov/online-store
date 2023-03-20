import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function RegistrationPage(a) {
  console.log(a);
  return (
    <main className="container-md d-flex justify-content-center">
      <Form className="container-sm p-3 d-flex flex-column">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Введите email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control type="password" placeholder="Пароль" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="repeatBasicPassword">
          <Form.Label>Повторите пароль</Form.Label>
          <Form.Control type="password" placeholder="Повторите пароль" />
        </Form.Group>
        <Form.Text>
          Уже зарегистрированы?
          {' '}
          <Link to="/login">Войти</Link>
        </Form.Text>
        <Button variant="primary" type="submit">
          Регистрация
        </Button>
      </Form>
    </main>
  );
}

export default RegistrationPage;
