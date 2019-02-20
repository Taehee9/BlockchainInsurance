import React from 'react';
import { Text, TouchableOpacity, Alert } from 'react-native';

export default class RoundButton extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}
                style={{ borderRadius: 5, backgroundColor: '#F5DA81', width: 145, height: 40, margin: 5 }}>
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 15, margin: 10 }}>
                    {this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}