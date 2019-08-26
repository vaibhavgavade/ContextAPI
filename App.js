import React, { Component } from 'react';
import MyProvider from './Src/context/myprovider'
import MyStack from './route'


export default class App extends Component {

  render() {
    return (
      <MyProvider>
       <MyStack/>
     </MyProvider>
    
    );
  }
}

