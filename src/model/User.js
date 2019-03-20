import React, { Component } from 'react';

class User extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            email: "example@example.com",
            password: "pwd",
        }
        this.changeName = this.changeName.bind(this);
        this.changeSurname = this.changeSurname.bind(this);
    };

    changeName(e)
    {
        this.setState(
            {
                imie: e.target.value
            }
        )
    };

    changeSurname(e)
    {
        this.setState(
            {
                nazwisko: e.target.value
            }
        )
    };

    render(){
        return (
            <div>
                <h2>Hello {this.state.email}</h2>
            </div>
        );
    };
}



export default User;