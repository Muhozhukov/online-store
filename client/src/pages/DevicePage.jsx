import React, { useEffect, useState, useContext } from 'react';
import {
  Button, Card, Col, Container, Image, Row
} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Context } from '../store/context';
import bigStar from '../images/bigStar.png';
import { fetchOneDevice, addDeviceToBasket, rateDevice } from '../api/deviceApi';
import Header from '../components/Header';

function DevicePage() {
  const [device, setDevice] = useState({ name: '', img: '' });
  const [canRate, setCanRate] = useState(true);
  const [info, setInfo] = useState([]);
  const { user, basket } = useContext(Context);
  const { id } = useParams();

  const handleRateDevice = (value) => {
    rateDevice(id, user.user.id, value)
      .then((data) => {
        console.log(data);
        setDevice(data.ratedDevice);
        setInfo(data.info);
        setCanRate(data.canRate);
      })
      .catch((err) => console.log(err));
  };

  const buyDevice = () => {
    addDeviceToBasket(user.user.id, id)
      .then((res) => {
        basket.setDevices(res.devices);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchOneDevice(id).then(data => {
      setDevice(data.device);
      setInfo(data.info);
      setCanRate(data.canRate);
    });
  }, []);

  return (
    <>
      <Header />
      <Container className="mt-3">
        <Row>
          <Col md={4}>
            {console.log(device)}
            <Image width={300} height={300} src={`http://localhost:4000/${device.img}`} />
          </Col>
          <Col md={4}>
            <Row className="d-flex flex-column align-items-center justify-center">
              <h2>{device.name}</h2>
              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  background: `url(${bigStar}) no-repeat center center`,
                  width: 240,
                  height: 240,
                  backgroundSize: 'cover',
                  fontSize: 64
                }}
              >
                {device.rating}
              </div>
              {canRate && (
                <div className="d-flex gap-3 justify-content-center ">
                  {[1, 2, 3, 4, 5].map((i) => {
                    return <Button key={i} onClick={() => handleRateDevice(i)} variant="outline-dark">{i}</Button>;
                  })}
                </div>
              )}
            </Row>
          </Col>
          <Col md={4}>
            <Card
              className="d-flex flex-column align-items-center justify-content-around"
              style={{
                width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'
              }}
            >
              <h3>
                От:
                {device.price}
                {' '}
                руб.
              </h3>
              <Button variant="outline-dark" onClick={() => buyDevice()}>Добавить в корзину</Button>
            </Card>
          </Col>
        </Row>
        <Row className="d-flex flex-column m-3">
          <h1>Характеристики</h1>
          {info.map((item, index) => (
            <Row key={item._id ? item._id : item.id} style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}>
              {item.title}
              :
              {item.description}
            </Row>
          ))}
        </Row>
      </Container>
    </>

  );
}

export default DevicePage;
