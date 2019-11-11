import React from 'react';

import {
    TouchableOpacity,
    Text,
    Dimensions,
    StyleSheet
} from 'react-native';

import Colae, { shadow } from './styles';

const { width } = Dimensions.get('window');

export default class Button extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            theme: Colae.lightTheme
        }
        this._getTheme = this._getTheme.bind(this);
    }

    componentDidMount(){
        this._getTheme();
    }

    async _getTheme(){
        let s = this.state;
        s.theme = await Colae.getColorTheme();
        this.setState(s);
    }

    render(){
        if(!this.props.textOnly){
            if(!this.props.secondary){
                return (
                    <TouchableOpacity
                    style={[styles.container, { width: ((width*0.1027)*this.props.colSpan)+((width*0.055)*(this.props.colSpan-1)) },this.props.blue?{ backgroundColor: this.state.theme.accent}:{ backgroundColor: this.state.theme.main}, shadow]}
                    onPress={this.props.onPress}>
                        <Text style={styles.label}>{this.props.label.toUpperCase()}</Text>
                    </TouchableOpacity>
                );
            } else {
                return (
                    <TouchableOpacity
                    style={[styles.container, { width: ((width*0.1027)*this.props.colSpan)+((width*0.055)*(this.props.colSpan-1)) },this.props.blue?{ borderWidth:1, borderColor: this.state.theme.accent}:{ borderWidth:1, borderColor: this.state.theme.main}]}
                    onPress={this.props.onPress}>
                        <Text style={[styles.label, this.props.blue?{ color: this.state.theme.accent }:{ color: this.state.theme.main }]}>{this.props.label.toUpperCase()}</Text>
                    </TouchableOpacity>
                );
            }
        } else {
            return (
                <TouchableOpacity
                style={[styles.container, { width: ((width*0.1027)*this.props.colSpan)+((width*0.055)*(this.props.colSpan-1)) }]}
                onPress={this.props.onPress}>
                    <Text style={[styles.label, { color: this.props.labelColor }]}>{this.props.label}</Text>
                </TouchableOpacity>
            );
        }
    }
}

Button.defaultProps = {
    colSpan: 3,
    label: 'label',
    onPress: ()=>{},
    labelColor: '#000000'
}

const styles = StyleSheet.create({
    container:{
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
    },
    label:{
        fontFamily: 'roboto',
        color: '#FFFFFF',
        letterSpacing: 2
    }
});