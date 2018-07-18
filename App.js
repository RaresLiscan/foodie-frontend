import React from 'react';
import { Home } from './app/views/Home.js';
import { Contact } from './app/views/Contact.js';
import { createStackNavigator } from 'react-navigation';
import { Register } from './app/views/Register.js';
import { Login } from './app/views/Login.js';
import { About } from './app/views/About.js';
import { ForgotPassword } from './app/views/ForgotPassword.js';

const MyRoutes = createStackNavigator({
  HomeRT: Home,
  ContactRT: Contact,
  RegisterRT: Register,
  LoginRT: Login,
  AboutRT: About,
  ForgotPasswordRT: ForgotPassword,
},
  {
    initialRouteName: 'HomeRT'
  }
);

export default class App extends React.Component {
  render() {
    return (
      <MyRoutes /> 
    );
  }
}


