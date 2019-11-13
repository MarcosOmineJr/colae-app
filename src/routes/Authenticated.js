import { createBottomTabNavigator } from 'react-navigation-tabs';

import { HomeScreen, InConstructionScreen } from '../screens';

const Authenticated = createBottomTabNavigator({
    Home:{
        screen: HomeScreen,
        navigationOptions:{
            tabBarLabel: 'Para Mim'
        }
    },
    Search:{
        screen: InConstructionScreen,
        navigationOptions:{
            tabBarLabel: 'Pesquisa'
        }
    },
    Chat:{
        screen: InConstructionScreen,
        navigationOptions:{
            tabBarLabel: 'Conversas'
        }
    },
    Shopping:{
        screen: InConstructionScreen,
        navigationOptions:{
            tabBarLabel: 'Compras'
        }
    },
    Profile:{
        screen: InConstructionScreen,
        navigationOptions:{
            tabBarLabel: 'Meu Perfil'
        }
    }
},{
    initialRouteName: 'Home'
});

export default Authenticated;