import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Cartcontext from '../context/mycontext'
import { tsThisType } from '@babel/types';

export default class myprovider extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value:1
    };
  }
  changetext = value =>{
      this.setState({value})
  }


  render() {


  const ContextValue= {
      myValue:this.state.value,
      aotherValueL:this.changetext
      }

    return (
     <Cartcontext.Provider  value={{state: this.state}}>
         {this.props.children}
     </Cartcontext.Provider>
             
    );
  }
}
