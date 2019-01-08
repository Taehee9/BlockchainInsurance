import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import TextIcon from '../components/TextIcon';
import { FontAwesome } from '@expo/vector-icons';

export default class MainScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'KALON',
      headerStyle: { backgroundColor: "#F5DA81" },
      headerTitleStyle: { fontSize: 20, color: "white" },
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image style={{ width: 100, height: 120, borderRadius: 5 }}
            source={require('../assets/umbrella.jpg')} />
          <View style={{ marginLeft: 2, paddingLeft: 10, backgroundColor: 'white', height: 120, justifyContent: 'center', width: 265, borderRadius: 5 }}>
            <Text style={{ fontSize: 30, color: '#333399', fontWeight: "500", marginBottom: 10 }}>카롱이</Text>
            <TextIcon title="신뢰도 " icon={<FontAwesome name="heart-o" size={15} color='gray' />}> </TextIcon>
            <TextIcon title="좋아요 " icon={<FontAwesome name="thumbs-o-up" size={15} color='gray' />}> </TextIcon>
            <TextIcon title="싫어요 " icon={<FontAwesome name="thumbs-o-down" size={15} color='gray' />}> </TextIcon>
          </View>
        </View>

      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#D8D8D8',
    alignItems: 'baseline',
    justifyContent: 'flex-start',
    padding: 3
  },
  modalContainer: {
    flex: 1,
    marginTop: 30,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'baseline',
    justifyContent: 'flex-start',
    width: '100%',
    height: '50%',
    borderColor: 'black',
    borderWidth: 1
  },
  alertFont: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: "bold"
  }
});
