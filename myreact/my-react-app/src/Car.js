import React from 'react';

class Car extends React.Component {
    shoot (m) {
        alert(m);
      }

    constructor() {
        super();
        this.state = {color: "red"};
      }

    render() { // return <h2>I am a {this.props.color} Car!</h2>;
        return (
        <p>
        <h2>Hi, I am a {this.state.color}/{this.props.color} Car, imported from Car class file!</h2>
        <button onClick={() => this.shoot("Goal!")}>Take the shot!</button>
        </p>
        );
    }
}

export default Car;