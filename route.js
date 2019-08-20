import {createStackNavigator,createAppContainer} from 'react-navigation';
import firstScreen from './Src/firstScreen';
import secondScreen from './Src/secondScreen';
const AppStack = createStackNavigator({
    one:{
        screen:firstScreen,
    
     
    },
    two:{
        screen:secondScreen
    }
})

const MyStack = createAppContainer(AppStack)
export default MyStack