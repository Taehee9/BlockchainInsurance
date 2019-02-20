import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default class RadioButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            press: 1
        }
    }
    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => this.setState({ press: 1 })}
                    style={{ borderRadius: 15, backgroundColor: this.state.press == 1 ? "#F5DA81" : "white", width: 30, height: 30, margin: 5, borderWidth: 1, borderColor: "#F5DA81" }}>
                </TouchableOpacity>
                <Text style={{ color: 'gray', textAlign: 'center', fontSize: 15, margin: 10 }}>
                    {this.props.title}</Text>
                <View style={{ width: 20 }} />
                <TouchableOpacity onPress={() => this.setState({ press: 2 })}
                    style={{ borderRadius: 15, backgroundColor: this.state.press == 2 ? "#F5DA81" : "white", width: 30, height: 30, margin: 5, borderWidth: 1, borderColor: "#F5DA81" }}>
                </TouchableOpacity>
                <Text style={{ color: 'gray', textAlign: 'center', fontSize: 15, margin: 10 }}>
                    {this.props.title2}</Text>
            </View>
        )
    }
}