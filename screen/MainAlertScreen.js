import React, { Component } from 'react';
import { StyleSheet, Modal, Text, TouchableHighlight, View, Alert } from 'react-native';


export default class MainAlertScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.modalStyle}>
          <Text style={{ fontSize: 20 }}>알림창</Text>

          <TouchableHighlight
            onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}>
            <Text style={{ fontSize: 20 }}>가리기</Text>
          </TouchableHighlight>
        </View>
      </View>
      // <TouchableHighlight
      //   onPress={() => {
      //     this.setModalVisible(true);
      //   }}>
      //   <Text style={{ fontSize: 20 }}>열기</Text>
      // </TouchableHighlight>
      // </View>
    );
  }
}
//알림창 뜨는 Modal 부분 
// <Modal
// animationType="slide"
// transparent={false}
// visible={this.state.modalVisible}
// onRequestClose={() => {
//   Alert.alert('닫힘');
// }}>
// <View style={[styles.containe, styles.modalContainer]}>
//   <View style={{ marginLeft: 30, marginTop: 30 }}>
//     <FlatList
//       data={this.state.data}
//       renderItem={({ item, index }) => <BookItem title={item.title} image={item.image} publisher={item.publisher} />}
//       ItemSeparatorComponent={() => (
//         <View style={{ height: StyleSheet.hairlineWidth, backgroundColor: 'black' }} />
//       )}
//       keyExtractor={(item, index) => item + index}
//     />
//     <TouchableOpacity
//       onPress={() => {
//         this.setModalVisible(!this.state.modalVisible);
//       }}
//       style={{ backgroundColor: 'gray', width: 35, height: 35, position: 'absolute', marginLeft: 290, marginTop: -15 }}
//     >
//       <Text style={styles.alertFont}>X</Text>
//     </TouchableOpacity>
//   </View>
// </View>
// </Modal>
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '60%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
  modalStyle: {
    width: '100%',
    height: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1
  }
});
