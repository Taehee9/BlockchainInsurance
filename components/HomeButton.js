import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default class HomeButton extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.buttonStyle} onPress={this.props.onPress}>
        <AntDesign name={this.props.iconName} style={styles.iconStyle} />
        <View style={{ height: 3 }} />
        <Text style={styles.fontStyle}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "white",
    height: 60,
    width: 187,
    borderColor: "#F2F2F2",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  iconStyle: {
    textAlign: "center",
    color: "#F7D358",
    fontSize: 20
  },
  fontStyle: {
    fontSize: 12,
    color: "#A4A4A4"
  }
});
