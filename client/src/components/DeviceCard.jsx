import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';
// import star from '../assets/star.png';
import { DEVICE_ROUTE } from '../utils/constants';

function DeviceItem({ device }) {
  const navigate = useNavigate();
  return (
    <Col md={3} className="mt-3" onClick={() => navigate(`${DEVICE_ROUTE}/${device._id}`)}>
      <Card style={{ width: 150, cursor: 'pointer' }} border="light">
        <Image width={150} height={150} src={`http://localhost:4000/${device.img}`} />
        <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
          <div>{device.name}</div>
          <div className="d-flex align-items-center">
            <div>{device.rating}</div>
            {/* <Image width={18} height={18} src={star} /> */}
          </div>
        </div>
        <div>{`${device.price} руб.`}</div>
      </Card>
    </Col>
  );
}

export default DeviceItem;
