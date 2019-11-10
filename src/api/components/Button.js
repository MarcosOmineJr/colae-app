import React from 'react';

import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

export default class Button extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return (
            <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                <Text style={styles.label}>{this.props.label.toUpperCase()}</Text>
            </TouchableOpacity>
        );
    }
}

Button.defaultProps = {
    label: 'padrão',
    onPress: ()=>{}
}

const styles = StyleSheet.create({
    container:{
        height: 35,
        width: 150,
        backgroundColor: '#EA1F5A',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,

        //Drop Shadow (iOS e Android):
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    },
    label:{
        fontFamily: 'roboto',
        color: '#FFFFFF',
        letterSpacing: 2
    }
});