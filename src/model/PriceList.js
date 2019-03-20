import React, { Component } from 'react';

class User extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            imie: "Jan",
            nazwisko: "Nowak",
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
                <h2>Hello {this.state.imie} {this.state.nazwisko}</h2>
                <form>
                    <input id="name" type="text" placeholder="Name" onChange={this.changeName}
                    ></input>
                    <input id="surname" type="text" placeholder="Surname" onChange={this.changeSurname}></input>
                </form>
            </div>
        );
    };
}



export default User;