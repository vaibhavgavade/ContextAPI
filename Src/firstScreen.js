import React,{Component} from 'react';
import { View, Text,Button,StyleSheet} from 'react-native';
import Cartcontext from '../Src/context/mycontext'

export default class firstScreen extends Component {
    render() {
    return (
    
<Cartcontext.Consumer>
    {item=>(<Text>{item.state.value}</Text>)}
    
</Cartcontext.Consumer>
     
    
    );
  }
}


