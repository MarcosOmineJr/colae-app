import React from 'react';

import {
    StyleSheet,
    View,
    Text,
    Dimensions
} from 'react-native';

import ColaeAPI from '../api';

const { width, height } = Dimensions.get('window');

export default class Login extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <ColaeAPI.ColUI.Background />
                <ColaeAPI.ColUI.Card contentContainerStyle={styles.card}>
                    <Text>Eae man, esse é o conteúdo do card</Text>
                </ColaeAPI.ColUI.Card>
                <ColaeAPI.ColUI.Button blue label='login' colSpan={4} />
                <ColaeAPI.ColUI.Button textOnly label='Esqueceu a senha?' labelColor='#ffffff' contentContainerStyle={styles.passwordButton} />
                <ColaeAPI.ColUI.Button textOnly label='Não tenho uma conta!' labelColor='#ffffff' />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        paddingTop: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    card:{
        height: height*0.5144,
        marginBottom: 10
    },
    passwordButton:{
        marginBottom: -15
    }
});