import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Cartcontext from './context/mycontext'

export default class secondScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> secondScreen </Text>
        <Cartcontext.Consumer>
          {item=>(
            <Text>{item.state.value}</Text>
          )}
        </Cartcontext.Consumer>
      </View>
    );
  }
}
