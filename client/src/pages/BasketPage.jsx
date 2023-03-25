import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Container, Col, Button } from 'react-bootstrap';
import Header from '../components/Header';
import { Context } from '../store/context';
import { changeDeviceAmountInBasket } from '../api/deviceApi';

const BasketPage = observer(() => {
  const { basket, user } = useContext(Context);
  const handleChangeAmount = (value, device) => {
    console.log();
    changeDeviceAmountInBasket(user.user.id, device._id, value)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Header />
      <Container>
        <h2>Корзина</h2>
        {basket.devices.length > 0 ? (
          <Col>
            {basket.devices.map((item) => {
              return (
                <div className="d-flex gap-4 align-items-center" key={item._id}>
                  <p className="m-0">{item.device.name}</p>
                  <p className="m-0">{`${item.device.price} руб.`}</p>
                  <div className="d-flex align-items-center gap-2">
                    <Button onClick={() => handleChangeAmount('+', item)} variant="outline-dark">-</Button>
                    <p className="m-0">{item.amount}</p>
                    <Button onClick={() => handleChangeAmount('-', item)} variant="outline-dark">+</Button>
                  </div>
                </div>
              );
            })}
            <div className="d-flex align-items-center gap-4">
              <p>Общая стоимость:</p>
              <p>{`${basket.totalPrice} руб.`}</p>
            </div>
          </Col>
        ) : (
          <h3>В корзине ничего нет</h3>
        )}
      </Container>

    </>
  );
});

export default BasketPage;
