import React, { Component } from 'react';
import Phone from './Phone';
import './App.css';


function SetTime (v){

  var ms = v % 1000;
  v = (v - ms) / 1000;
  var secs = v % 60;
  v = (v - secs) / 60;
  var mins = v % 60;
  var hrs = (v - mins) / 60% 24;
 
 
  return {hrs, mins ,secs}
 }

class App extends Component {
  render() {
    let x = SetTime(10000)
    return (
       
      <div className="App">
        <Phone time={x}/>
      
      </div>
    );
  }
}

export default App;
