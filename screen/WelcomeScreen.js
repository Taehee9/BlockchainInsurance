import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { KeyboardAvoidingView, ScrollView } from 'react-native'
import TextInputForm from '../components/TextInputForm'
import RoundButton from '../components/RoundButton';

var { height, width } = Dimensions.get('window');
const isTablet = width > 350;

export default class WelcomeScreen extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Image style={{ width: '40%', height: '30%' }} source={require('../assets/umbrella.jpg')} />
        <Text style={{ fontSize: 30, color: 'gray', marginBottom: 15 }}>INSURANCE</Text>

        <TextInputForm placeholder="Username" name="user" />
        <TextInputForm placeholder="Password" name="key" secureTextEntry={true} />
        <View style={{ flexDirection: 'row' }}>
          <RoundButton title="회원가입" onPress={() => this.props.navigation.navigate('Registeruser')} />
          <RoundButton title="로그인" onPress={() => this.props.navigation.navigate('Main')} />
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
});
