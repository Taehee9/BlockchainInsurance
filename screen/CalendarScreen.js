import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Calendar } from 'expo';
export default class CalendarScreen extends React.Component {
    render() {
        return (
            <View style={[styles.container, { margin: 30 }]}>
                {Expo.Calendar.getCalendarsAsync()}
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
