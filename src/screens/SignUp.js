import React from 'react';

import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class Login extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 30}}>Cadastro</Text>
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