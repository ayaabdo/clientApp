import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'
import  './Style.css';
import SignUp from './SignUp';

class SignIn extends Component{
   constructor(props:any){
       super(props);
       this.handleSignIn = this.handleSignIn.bind(this);
   }
   handleSignIn(e : any,props:any){
       e.preventDefault();
         var email = localStorage.getItem('email');
        var Email = JSON.stringify(email);
        const password = localStorage.getItem('password');
        for(var i = 0;i < Email.length;++i){
            if(Email[i] === e.target.email){
                console.log('found!');
                return;
            }
            console.log(Email[i]);
        }
        console.log('does not exist!');

//    const name = localStorage.getItem('name');
  

}
    render(){
        return(
            <div>
                 <Form className = 'myform'>
                 <Form.Input
                   // error='Please enter your email'
                    fluid
                    type = 'email'
                    name = 'email'
                    label='Email'
                    placeholder='Email'
                />
                <Form.Input
                   // error='Please enter your email'
                    fluid
                    type = 'password'
                    name = 'password'
                    label='Password'
                    placeholder='Password'
                />
                <Form.Button id = 'btn' onClick = {this.handleSignIn}>sign in</Form.Button>
            
                 </Form>
            </div>
        );

  
   }
}
export default SignIn;