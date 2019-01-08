import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import TextIcon from '../components/TextIcon'

export default class PlanScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'baseline',
        justifyContent: 'flex-start',
    }
});
