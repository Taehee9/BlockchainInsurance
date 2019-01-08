import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import IconText from './IconText';

export default class ListItem extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.fontL}>보험 이름</Text>
            <View style={{flexDirection:'column', marginLeft:'3%'}}>
                <Text style={[styles.fontL,{fontSize:20}]}>금액</Text>
                <Text style={styles.fontS}>납입년도 등 상세 정보</Text>
            </View>
            
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  fontL: {
    fontSize:25
  },
  fontS: {
    fontSize:15,
    color:'gray'
  },
  iconContainer:{
      flexDirection:'row',
      fontSize:15,
  }
});
