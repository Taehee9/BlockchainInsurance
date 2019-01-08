import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { KeyboardAvoidingView, ScrollView } from 'react-native'
import TextInputForm from '../components/TextInput'
import RoundButton from '../components/RoundButton';

var { height, width } = Dimensions.get('window');
const isTablet = width > 350;

export default class RegisterUserScreen extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
            //회원가입 란 만들기
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
