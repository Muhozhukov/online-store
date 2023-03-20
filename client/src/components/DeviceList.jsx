import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Row } from 'react-bootstrap';
import { Context } from '../store/context';
import DeviceCard from './DeviceCard';

const DeviceList = observer(() => {
  const { device } = useContext(Context);

  return (
    <Row className="d-flex">
      {device.devices.map(item => <DeviceCard key={item._id ? item._id : item.id} device={item} />)}
    </Row>
  );
});

export default DeviceList;
