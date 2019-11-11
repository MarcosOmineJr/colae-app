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
                <ColaeAPI.ColUI.Card header headerText='Alala, Header do Card e pa' contentContainerStyle={styles.card}>
                    <Text>Eae man, esse é o conteúdo do card</Text>
                </ColaeAPI.ColUI.Card>
                <ColaeAPI.ColUI.Card>
                    <Text>Eae man, esse é o conteúdo do outro card</Text>
                </ColaeAPI.ColUI.Card>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    card:{
        marginBottom: 20
    }
});