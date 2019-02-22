import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { KeyboardAvoidingView, ScrollView } from 'react-native'
import TextInputForm from '../components/TextInputForm'
import RadioButton from '../components/RadioButton';
import RoundButton from '../components/RoundButton';
import { MaterialIcons, Ionicons } from '@expo/vector-icons'

export default class RegisterUserScreen extends React.Component {
    static navigationOptions = ({ }) => {
        return {
            title: 'Sign up',
            headerStyle: { backgroundColor: "#ffdb00" },
            headerTitleStyle: { fontSize: 15, color: "white" },
        };
    }
    render() {
        var radio_props = [
            { label: '남자', value: 0 },
            { label: '여자', value: 1 }
        ];
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                    <Ionicons name="ios-warning" size={15} color="gray" style={{ paddingRight: 10 }} ></Ionicons>
                    <Text style={styles.font}>각 정보들을 입력해주십시오</Text>
                </View>
                <TextInputForm style={[styles.input]} placeholder='아이디를 입력하여주십시오' name='user' />
                <TextInputForm style={styles.input} placeholder='비밀번호를 입력하여주십시오' name='key' />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: 'gray' }}>성별</Text>
                    <View style={{ width: 50 }} />
                    <RadioButton title='남자' title2='여자' />
                </View>
                <TextInputForm style={styles.input} placeholder='e-mail을 입력하여주십시오' icon={<MaterialIcons name='email' color='gray' size={20} />} />
                <TextInputForm style={styles.input} placeholder='생년월일을 입력하여주십시오' name='calendar' />
                <TextInputForm style={styles.input} placeholder='핸드폰번호를 입력하여주세요' name='phone' />
                <TextInputForm style={styles.input} placeholder='자주다니는 지역을 입력하여주세요' name='enviromento' />
                <TextInputForm style={styles.input} placeholder='계좌번호를 입력하여주세요' icon={<MaterialIcons name='account-balance-wallet' color='gray' size={20} />} />
                <RoundButton title="Register" onPress={() => this.props.navigation.navigate('RegisterUser')} 
                    style={[styles.button, {borderWidth:1, borderColor: "#be9c00", marginTop:13 }]}
                    textStyle={{color:'#be9c00', fontSize:15}}/>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    font: {
        fontSize: 15,
        color: 'gray'
    },
    input: {
        width:330,
        height:40, 
        borderRadius:5,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'gray',
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:10,
    },
    button:{
        width: 330,
        height: 40,
        borderRadius: 20, 
        justifyContent:'center', 
        alignItems:'center'
    }
});
