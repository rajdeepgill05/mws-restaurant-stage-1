import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Rajdeep extends Component {
  render(){
    return <span>{this.props.name}</span>
  }
}

class App extends Component {
  render() {
    return <p> Rajdeep  <Rajdeep name="Gill"/></p>
  }
}

export default App;
