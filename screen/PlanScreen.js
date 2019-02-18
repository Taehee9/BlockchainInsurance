import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import TextIcon from '../components/TextIcon'

export default class PlanScreen extends React.Component {
    static navigationOptions = () => {
        return {
            title: '설계 프로그램',
            headerStyle: { backgroundColor: "#F5DA81" },
            headerTitleStyle: { fontSize: 22, color: "white" },
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <View>
                
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#D8D8D8'
    }
});
