import React, { Component } from 'react';
import look from '../pictures/look.jpg';
import tours from '../pictures/tours.jpg';
import  './Style.css';

class About extends Component {
  render() {
    return (
      <div>
        <img id = 'pic' src = {look} />
        <h1 className = 'para'>About Us</h1>
        <h2 className = 'txt'>Welcome to our Website</h2>
        <p  className = 'txt' >You can find here all u need to know about ur favourite hotel</p>
        <img className = 'img' src = {tours}/>
        
      </div>
    );
  }
}

export default About;