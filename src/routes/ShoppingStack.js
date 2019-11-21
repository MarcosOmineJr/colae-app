import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';

import { InConstructionScreen } from '../screens';

import ColaeAPI from '../api';

const { ColUI } = ColaeAPI;

const ShoppingStack = createStackNavigator({
    Shopping:{
        screen: InConstructionScreen,
        navigationOptions:{
            title: 'Compras',
            header: ({navigation})=>{
                return <ColUI.Header navigation={navigation} title='Compras' />;
            }
        }
    }
},{
    initialRouteName: 'Shopping'
});

export default ShoppingStack;