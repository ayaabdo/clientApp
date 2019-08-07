import React, { Component } from 'react';

const Validator = require('validator');
const isEmpty = require('./is-empty');
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

module.exports = function ValidateRegisterInput(data) {
  let errors = {};
  //data.firstname = !isEmpty(data.firstname) ? data.firstname : '';
  //data.lastname = !isEmpty(data.lastname) ? data.lastname : '';
  //data.email = !isEmpty(data.email) ? data.email : '';
  //data.password = !isEmpty(data.password) ? data.password : '';
  //data.password2 = !isEmpty(data.password2) ? data.password2 : '';
  //data.gender = !isEmpty(data.gender) ? data.gender : '';

  if (!Validator.isLength(data.firstname, { min: 2, max: 30 })) {
    errors.name = 'Enter ur first name';
  }

  if (Validator.isEmpty(data.firstname)) {
    errors.name = 'this field is required';
  }

  if (!Validator.isLength(data.lastname, { emailRegex})) {
    errors.name = 'Enter ur last name';
  }

  if (Validator.isEmpty(data.lastname)) {
    errors.name = 'this field is required';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'this field is required';
  }
  
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  
  if (Validator.isEmpty(data.password)) {
    errors.password = 'this field is required';
  }
  
  if (Validator.isEmpty(data.gender)) {
    errors.name = 'this field is required';
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm Password field is required';
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords does not match';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
//export default ValidateRegisterInput;