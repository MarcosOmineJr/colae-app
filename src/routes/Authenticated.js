import { createBottomTabNavigator } from 'react-navigation-tabs';

import { HomeScreen } from '../screens';

const Authenticated = createBottomTabNavigator({
    Home:{
        screen: HomeScreen
    }
},{
    initialRouteName: 'Home'
});

export default Authenticated;