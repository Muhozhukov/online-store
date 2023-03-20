import React from 'react';
import Table from 'react-bootstrap/Table';

function DeviceInfoTable() {
  return (
    <Table striped>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default DeviceInfoTable;
