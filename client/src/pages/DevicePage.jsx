import React, { useEffect, useState } from 'react';
import {
  Button, Card, Col, Container, Image, Row
} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
// import bigStar from '../assets/bigStar.png';
import { fetchOneDevice } from '../api/deviceApi';
import Header from '../components/Header';

function DevicePage() {
  const [device, setDevice] = useState({ name: '', img: '' });
  const [info, setInfo] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetchOneDevice(id).then(data => {
      setDevice(data.device);
      setInfo(data.info);
    });
  }, []);

  return (
    <>
      <Header />
      <Container className="mt-3">
        <Row>
          <Col md={4}>
            <Image width={300} height={300} src={`http://localhost:4000/${device.img}`} />
          </Col>
          <Col md={4}>
            <Row className="d-flex flex-column align-items-center">
              <h2>{device.name}</h2>
              {/* <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${bigStar}) no-repeat center center`,
                 width: 240, height: 240, backgroundSize: 'cover', fontSize: 64
              }}
            >
              {device.rating}
            </div> */}
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
              <Button variant="outline-dark">Добавить в корзину</Button>
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
