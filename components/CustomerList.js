import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import IconText from './IconText';

export default class CustomerList extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Image source={{uri:this.props.image}} style={{width:100, height:70, borderRadius:5 }} />
                <View style={{width:10}}/>
                <Text style={{ fontSize: 20 }}>{this.props.name}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 15, color: 'gray' }}>{this.props.sex}</Text>
                <View style={{ width: 5 }} />
                <Text style={{ fontSize: 15, color: 'gray' }}>{this.props.age}세</Text>
            </View>
        </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 10
  }
});
