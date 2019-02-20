import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CheckBox from 'react-native-check-box';

export default class Plan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
        }
    }
    render() {
        return (
            <View style={{ height: 30, flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ width: '10%', borderRightColor: 'gray', borderRightWidth: StyleSheet.hairlineWidth }}>
                    <CheckBox
                        onClick={() => {
                            this.setState({
                                isChecked: !this.state.isChecked
                            })
                        }}
                        isChecked={this.state.isChecked}
                        uncheckedCheckBoxColor='#A4A4A4'
                        checkedCheckBoxColor='#A4A4A4'
                    />
                </View>
                <View style={[styles.textBoxStyle, { width: '40%' }]}>
                    <Text></Text>
                </View>
                <View style={[styles.textBoxStyle, { width: '25%' }]}>
                    <Text></Text>
                </View>
                <View style={{ width: '25%', paddingLeft: 10 }}>
                    <Text></Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    backStyle: {
        width: '90%',
        height: 60,
        flexDirection: 'column',
        borderColor: 'gray',
        borderWidth: StyleSheet.hairlineWidth,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBoxStyle: {
        paddingLeft: 10,
        borderRightColor: 'gray',
        borderRightWidth: StyleSheet.hairlineWidth
    }
})