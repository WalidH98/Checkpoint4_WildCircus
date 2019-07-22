import React from 'react';
import { Table } from 'reactstrap';

export default class TableauPrix extends React.Component {
  render() {
    return (
      <Table dark>
        <thead>
          <tr>
             <th>#</th>
            <th>Age</th>
            <th>Price</th>
            <th>Reduction*</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Adults</td>
            <td>40$</td>
            <td>35$</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Kids</td>
            <td>20$</td>
            <td>15$</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Group</td>
            <td>35$</td>
            <td>35$</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
