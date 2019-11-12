import React from 'react';

import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import ColaeAPI from '../api';

export default class Login extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <ColaeAPI.ColUI.Background />
                <Text style={{fontSize: 30}}>Cadastro</Text>
                <ColaeAPI.ColUI.Button blue colSpan={4} label='próximo' />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});