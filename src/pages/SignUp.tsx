import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'
import  './Style.css';
import {Link} from 'react-router-dom';
import Home from '../pages/Home';
import Navbar from '../components/Navbar';
import { string, any } from 'prop-types';
//import axios from 'axios';
//import classnames from 'classnames';

class SignUp extends Component {   
    constructor(props : any){
        super(props);
        this.state ={
             name: [],
             email:    [],
             password: [],
             password2:[],
             errors: {}
        };
        //this.onChange = this.onChange.bind(this);
        this.onSumbit = this.onSumbit.bind(this);
    }
    
   
    componentDidUpdate(prevProps:any,prevState:any){
        

    }
    onSumbit(e: any){
        e.preventDefault();
        this.setState ({
            name: e.target.name,
            email: e.target.email,
            password: e.target.password,
            password2: e.target.password2
          });
        /*localStorage.setItem('name',e.target.name);
        localStorage.setItem('email',e.target.email);
        localStorage.setItem('password',e.target.password);
        localStorage.setItem('password2',e.target.password2);
        
        /*const name = localStorage.getItem('name');
        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');
        const password2 = localStorage.getItem('password2');*/
        //const N = JSON.parse(name);
       // const Name = JSON.stringify(name);
        //const Email = JSON.stringify(email);
        //const pass = JSON.stringify(password);
        //const pass2 = JSON.stringify(password2);
        /*this.setState ({
          name: name,
          email: email,
          password: password,
          password2: password2
        });*/
    }
  render() {
      //const { errors } = this.state;
    return (
        <div>
            <Form className = 'myform'>
            <h1>Please sign up</h1>
                <Form.Input
                    //error='Please enter your last name'
                    type = 'text'
                    name = 'name'
                    label='Name'
                    placeholder='Enter your full name'
                    //value={this.state.name}
                   // onChange={this.onChange}
                />
                <Form.Input
                   // error='Please enter your email'
                    //fluid
                    type='email'
                    name = 'email'
                    label='Email'
                    placeholder='Email'
                    //value={this.state.email}
                   // onChange = {this.onChange}
                />
                <Form.Input
                   // error='Please enter your email'
                    //fluid
                    type="password"
                    name = 'password'
                    label='Password'
                    placeholder='Password'
                   //value={this.state.password}
                   // onChange = {this.onChange}
                />
                <Form.Input
                   // error='Please enter your email'
                    //fluid
                    type="password"
                    name = 'password2'
                    label='Password'
                    placeholder='Confirm your Password'
                    //value={this.state.password2}
                   // onChange = {this.onChange}
                />
                <Form.Select options={options} label = 'Gender' placeholder='Gender' /*error*/ />
                <Form.Checkbox
                label='I agree to the Terms and Conditions'
               /* error={{
                    content: 'You must agree to the terms and conditions',
                    pointing: 'left',
                }}*/
          />  
          <Form.Button id = 'btn' onClick = {this.onSumbit}>sign up</Form.Button>
            </Form>
        </div>
    );
  }
}
const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
  
]

export default SignUp;