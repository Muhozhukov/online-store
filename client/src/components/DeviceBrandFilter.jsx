import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Card, Row } from 'react-bootstrap';
import { Context } from '../store/context';

const DeviceBrandFilter = observer(() => {
  const { device } = useContext(Context);

  return (
    <Row className="d-flex">
      {device.brands.map(brand => (
        <Card
          style={{ cursor: 'pointer' }}
          key={brand._id ? brand._id : brand.id}
          className="p-3"
          onClick={() => device.setSelectedBrand(brand)}
          border={brand._id === device.selectedBrand._id ? 'danger' : 'light'}
        >
          {brand.name}
          {console.log(brand.name)}
        </Card>
      ))}
    </Row>
  );
});

export default DeviceBrandFilter;
