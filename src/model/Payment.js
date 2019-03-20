import React, { Component } from 'react';
import Address from './Address';

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
        accountNo: "0000 0000 0000 0000 0000 0000",
        name: "Pan",
    }
  }
    render() {
      return(
        <div>
            <div>Nr konta: {this.state.accountNo}</div>
            <div>Nazwa kontrahenta: {this.state.name}</div>
            <Address />
        </div>
      );
  }
}

export default Payment;