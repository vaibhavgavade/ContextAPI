import React, { Component } from 'react';
import { View, Text,FlatList,TouchableOpacity } from 'react-native';
import CartContext from '../Src/context/mycontext';
import MyConsumer from '../Src/OnsumerComponent';

export default class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerData:[
          {data:'one'},
          {data:'two'}
      ]
  };
}

  render() {
    return (
      <View style={{justifyContent:'center',alignItems:'center',flex:1,marginTop:50}}>
        <Text> Drawer </Text>
        <MyConsumer/>
        {/* <FlatList
        data={this.state.drawerData}
        renderItem={({item})=>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate(item.data)}>
                <Text>one</Text>
            </TouchableOpacity>
            }/> */}
    <MyConsumer/>
    <MyConsumer/>
            

           
           
      </View>
    );
  }
  }
