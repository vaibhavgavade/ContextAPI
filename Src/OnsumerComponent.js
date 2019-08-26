import React,{Component} from 'react';
import { Text } from 'react-native';
import CartContext from '../Src/context/mycontext'
class MyConsumer extends Component {

    render() { 
        return ( 
            <CartContext.Consumer>
                {item=>(
                    <Text>{item.state.value}</Text>
                )}
            </CartContext.Consumer>

         );
    }
}
 
export default MyConsumer;