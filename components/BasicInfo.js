import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BasicInfo extends React.Component {
    render() {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', height: 40 }}>
                <Text style={styles.fontMain}>{this.props.main}</Text>
                <Text style={styles.fontSide}>{this.props.side}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    fontMain: {
        color: "#A4A4A4",
        fontSize: 15,
        position: "absolute",
        left: 20
    },
    fontSide: {
        fontSize: 15,
        position: "absolute",
        left: 110
    }
});
