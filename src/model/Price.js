import React, { Component } from 'react';

class User extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            price: 10
        }
    };

    render(){
        return(
            <div>
                Cena jednostkowa: {this.state.price}
            </div>
        );
    }
}



export default User;