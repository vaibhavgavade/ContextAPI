import {createStackNavigator,createAppContainer,createDrawerNavigator} from 'react-navigation';
import firstScreen from './Src/firstScreen';
import secondScreen from './Src/secondScreen';
import Drawer from './components/Drawer'

const AppStack = createStackNavigator({
    one:{
        screen:firstScreen,
    
     
    },
    two:{
        screen:secondScreen
    }
})



const drawer=createDrawerNavigator({
home:{
    screen:AppStack
},

},
{
    contentComponent:Drawer
}
)

const MyStack = createAppContainer(drawer)
export default MyStack;
