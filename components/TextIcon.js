import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'


export default class TextIcon extends React.Component {
    render() {
        return (
            <View style={[{ flexDirection: 'row', alignItems: 'center' }, this.props.style]}>
                <Text style={styles.font}>{this.props.title}</Text>
                <View style={{ paddingLeft: '3%' }}>
                    {this.props.icon ?
                        this.props.icon
                        : <Ionicons name={this.props.name} size={20} color='#A4A4A4' ></Ionicons>
                    }
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    font: {
        fontSize: 15,
        color: '#A4A4A4',
    }
});

