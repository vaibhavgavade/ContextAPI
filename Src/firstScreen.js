import React,{Component} from 'react';
import { View, Text,Button,StyleSheet} from 'react-native';
import MyConsumer from '../Src/OnsumerComponent';


export default class firstScreen extends Component {
    render() {
    return (
    <View>
             <MyConsumer/>
             <MyConsumer/>
    </View>
       
    
    );
  }
}


