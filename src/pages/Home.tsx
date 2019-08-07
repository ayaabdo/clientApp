import React, { Component } from 'react';
import { Button,Image, Segment } from 'semantic-ui-react';
import img from '../pictures/resort.jpg';
import  './Style.css';

class Home extends Component {
  render() {
    return (
      <div>
       <img id = 'pic' src = {img} />
       <h1 className = 'para'>We know how to please you</h1>
       <button className = 'btn'>View Details</button>
       <Button circular color='facebook' icon='facebook' />
    <Button circular color='twitter' icon='twitter' />
    <Button circular color='linkedin' icon='linkedin' />
    <Button circular color='google plus' icon='google plus' />
    </div>
      );
  }
}

const style = {
  btn: {
    position: 'absolute',
    top: '90%',
    left: '47%',
    background: 'teal',
    padding: '12px 24px',
    color: 'white',
    border: '5px',
  },
};
export default Home;