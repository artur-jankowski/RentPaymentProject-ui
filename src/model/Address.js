import React, { Component } from 'react';

class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
        homeNo: 51,
        city: 'Warsaw',
        postcode: '00-999',
        phoneNo: '666000777'
    }
  }
    render() {
      return(
        <div>
            <div>Nr mieszkania: {this.state.homeNo}</div>
            <div>Miasto: {this.state.city}</div>
            <div>Kod pocztowy: {this.state.postcode}</div>
            <div>Numer telefonu: {this.state.phoneNo}</div>
        </div>
      );
  }
}

export default Address;