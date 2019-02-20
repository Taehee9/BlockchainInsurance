import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { KeyboardAvoidingView, ScrollView } from 'react-native'
import TextInputForm from '../components/TextInputForm'
import RoundButton from '../components/RoundButton';

export default class WelcomeScreen extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Image style={{ width: '40%', height: '30%' }} source={require('../assets/umbrella.jpg')} />
        <Text style={{ fontSize: 30, color: 'gray', marginBottom: 15 }}>보인다</Text>
        <TextInputForm style={styles.input} placeholder="Username" name="user" />
        <TextInputForm style={styles.input} placeholder="Password" name="key" secureTextEntry={true} />
        <View style={{ flexDirection: 'row' }}>
          <RoundButton title="회원가입" onPress={() => this.props.navigation.navigate('RegisterUser')} />
          <RoundButton title="로그인" onPress={() => this.props.navigation.navigate('MainHome')} />
        </View>
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
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '80%',
    height: 40,
    paddingLeft: 10,
    borderColor: 'black',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    backgroundColor: '#fff',
    color: 'gray',
    shadowColor: "gray",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    marginTop: 5,
    marginBottom: 5
  }
});
