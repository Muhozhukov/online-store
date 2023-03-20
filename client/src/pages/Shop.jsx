import React, { useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { observer } from 'mobx-react-lite';
import DeviceTypeFilter from '../components/DeviceTypeFilter';
import DeviceBrandFilter from '../components/DeviceBrandFilter';
import DeviceList from '../components/DeviceList';
import { Context } from '../store/context';
import { fetchBrands, fetchDevices, fetchTypes } from '../api/deviceApi';
// import Pages from '../components/Pages';
import Header from '../components/Header';

const Shop = observer(() => {
  const { device } = useContext(Context);

  useEffect(() => {
    fetchTypes().then(data => device.setTypes(data.data));
    fetchBrands().then(data => device.setBrands(data.data));
    fetchDevices(null, null,).then(data => {
      device.setDevices(data.data);
      // device.setTotalCount(data.count);
    });
  }, []);

  useEffect(() => {
    fetchDevices(device.selectedType._id, device.selectedBrand._id).then(data => {
      device.setDevices(data.data);
      // device.setTotalCount(data.count);
    });
  }, [device.selectedType, device.selectedBrand,]);

  return (
    <>
      <Header />
      <Container>
        <Row className="mt-2">
          <Col md={3}>
            <DeviceTypeFilter />
          </Col>
          <Col md={9}>
            <DeviceBrandFilter />
            <DeviceList />
            {/* <Pages /> */}
          </Col>
        </Row>
      </Container>

    </>
  );
});

export default Shop;
