import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function DeviceGridTemplate({ children }) {
  return (
    <Row xs={1} md={4} className="g-4 mt-1">
      {Array.from({ length: 16 }).map((item, index) => (
        <Col key={index}>
          {children}
        </Col>
      ))}
    </Row>
  );
}

export default DeviceGridTemplate;
