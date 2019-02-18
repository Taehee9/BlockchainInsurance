import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";
import { AntDesign } from '@expo/vector-icons';
import TextInputForm from '../components/TextInputForm'

export default class CustomerMemo extends React.Component {
    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={{ borderColor: '#F7D358', borderWidth: 1, width: 40, height: 30, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                <Text>메모</Text>
                <Modal isVisible={this.props.isVisible}>
                    <View style={{ width: 330, height: 500, borderRadius: 30, padding: 20, marginLeft: 5, flexDirection: 'column', backgroundColor: 'white', alignItems: 'center' }}>
                        <TouchableOpacity
                            style={{ position: "absolute", top: 20, right: 20 }}
                            onPress={this.props.onPressToggle}>
                            <AntDesign style={{ fontSize: 20 }} name="closecircleo" />
                        </TouchableOpacity>
                        <Text>고객 관리 메모</Text>
                        {/*메모 적히는 부분 !!! -> flatlist...?? todo list 랑 같은 방법으로 하면 될듯! */}
                        <View style={{ backgroundColor: 'white' }}>
                            <TextInputForm style={styles.memoStyle} placeholder='고객에 대한 메모' name='customerservice' />
                        </View>
                    </View>
                </Modal>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    memoStyle: {
        width: 280,
        height: 30,
        position: 'absolute',
        top: 410,
        right: -140,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'gray',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 5
    }
})