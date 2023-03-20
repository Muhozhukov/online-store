import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import ListGroup from 'react-bootstrap/ListGroup';
import { Context } from '../store/context';

const DeviceTypeFilter = observer(() => {
  const { device } = useContext(Context);
  return (
    <ListGroup>
      {device.types.map(type => (
        <ListGroup.Item
          style={{ cursor: 'pointer' }}
          active={type._id === device.selectedType._id}
          onClick={() => device.setSelectedType(type)}
          key={type._id ? type._id : type.id}
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default DeviceTypeFilter;
