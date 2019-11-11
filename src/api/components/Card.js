import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions
} from 'react-native';

import Colae, { shadow } from './styles';

const { width, height } = Dimensions.get('window');

export default class Card extends React.Component {
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
        if(!this.props.header){
            return (
                <View style={[styles.container, !this.props.noShadow?{...shadow }:{}, { width: ((width*0.1027)*this.props.colSpan)+((width*0.055)*(this.props.colSpan-1)) }, { alignItems: 'center', justifyContent: 'center'} ,this.props.contentContainerStyle]}>
                    {this.props.children}
                </View>
            );
        } else {
            return (
                <View style={[styles.container, !this.props.noShadow?{...shadow }:{}, { width: ((width*0.1027)*this.props.colSpan)+((width*0.055)*(this.props.colSpan-1)) }, { paddingHorizontal: '0.95%', paddingTop: '1%', alignItems: 'center', justifyContent: 'center'}, this.props.contentContainerStyle]}>
                    <View style={styles.generalContainer}>
                        <View style={[styles.headerStyle, { backgroundColor: this.state.theme.main }, this.props.headerContainerStyle]}>
                            <Text style={[styles.headerTextStyle, this.props.headerTextStyle]}>
                                {this.props.headerText}
                            </Text>
                        </View>
                        <View style={[styles.bodyContainerStyle, this.props.bodyContainerStyle]}>
                            {this.props.children}
                        </View>
                    </View>
                </View>
            );
        }
    }
}

Card.defaultProps = {
    colSpan: 6,
    headerText: 'Insert Text'
}

const styles = StyleSheet.create({
    container:{
        borderRadius: 5,
        padding: width * 0.0694
    },
    generalContainer:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerStyle:{
        width: '100%',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        alignItems: 'center',
        paddingHorizontal: (width*0.0694)+(width*0.05)+(width*0.0139),
        paddingVertical: 15,
        justifyContent: 'center'
    },
    headerTextStyle:{
        fontFamily: 'Roboto',
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold'
    },
    bodyContainerStyle:{
        padding: width * 0.0694
    }
});