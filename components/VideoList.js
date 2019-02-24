import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

export default class VideoList extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.imageStyle} source={this.props.uri} />
                <View style={{ flexDirection: 'column', width: '53%', paddingLeft: '5%' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{this.props.title}</Text>
                    <View style={{ height: 10 }} />
                    <Text>{this.props.description}</Text>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 120,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageStyle: {
        width: '40%',
        height: '90%',
        borderRadius:5,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'black'
    }
});

