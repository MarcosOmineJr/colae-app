import React from 'react';

import { connect } from 'react-redux';

import {
    StyleSheet,
    View,
    Text,
    Dimensions
} from 'react-native';

import {
    Button
} from 'native-base';

import ColaeAPI from '../api';

const { ColUI } = ColaeAPI;

const { height, width } = Dimensions.get('window');

class SignUp1 extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <ColaeAPI.ColUI.Background />
                <View style={styles.cardContainer}>
                    <ColUI.Card contentContainerStyle={styles.card}>
                        <Text style={{color: this.props.ColUITheme.accent, fontSize: 30}}>Cadastro 1</Text>
                    </ColUI.Card>
                </View>
                <View style={styles.btnContainer}>
                    <ColUI.Button blue colSpan={4} label='Próximo' onPress={()=>this.props.navigation.navigate('SU_Interests')} />
                    <Button transparent onPress={()=>this.props.navigation.navigate('Login')}>
                        <Text style={styles.btnLabel}>Já tenho uma conta!</Text>
                    </Button>
                </View>
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
    cardContainer:{
        flex: 2,
        width,
        alignItems: 'center',
        justifyContent: 'center'
    },
    card:{
        height: height*0.504,
    },
    btnContainer:{
        flex: 1,
        width,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    btnLabel:{
        color: '#ffffff'
    }
});

const mapStateToProps = (state)=>{
    return {
        ColUITheme: state.themesReducer.ColUITheme
    };
}

const mapDispatchToProps = (dispatch)=>{
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp1);