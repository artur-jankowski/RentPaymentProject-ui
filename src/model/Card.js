import React, { Component } from 'react';
import Address from './Address';
import User from './User';
import Payment from './Payment';

class Card extends Component {
    render() {
      return(
        <div>
            <h2>Dane Usera</h2>
            <User />
            <h2>Adres</h2>
            <Address />
            <h2>Dane do płatności</h2>
            <Payment />
        </div>
      );
  }
}

export default Card;