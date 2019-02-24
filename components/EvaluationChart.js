import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";
import PureChart from 'react-native-pure-chart';
import {AntDesign} from '@expo/vector-icons';

export default class EvaluationChart extends React.Component {  
    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={styles.buttonStyle}>
                <Text style={{ color: "white" }}>조회하기</Text>
                <Modal isVisible={this.props.isVisible}>
                    <View style={styles.container}>
                        <TouchableOpacity
                            style={{ position: "absolute", top: 10, right: 10 }}
                            onPress={this.props.onPressToggle}>
                            <AntDesign size={20} color='gray' name="closecircleo" />
                        </TouchableOpacity>
                        <PureChart data={
                            [
                                {seriesName: 'series1', data: [30, 200, 170, 250], color: '#ffdb00'},
                            ]
                        } type='bar' />
                        <View style={{flexDirection:'row'}}>
                            <View style={{ marginLeft: 0, width : 40}}>
                                <Text style={{textAlign:'center'}}>자동차 보험</Text>
                            </View>
                            <View style={{ marginLeft: 25, width : 40}}>
                                <Text style={{textAlign:'center'}}>보장성 보험</Text>
                            </View>
                            <View style={{ marginLeft: 25, width : 35}}>
                                <Text style={{textAlign:'center'}}>태아 보험</Text>
                            </View>
                            <View style={{ marginLeft: 25, width : 40}}>
                                <Text style={{textAlign:'center'}}>저축성 보험</Text>
                            </View>
                        </View>
                    </View>
                </Modal>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width: 330, 
        height: 250, 
        borderRadius: 10, 
        padding: 3, 
        paddingTop:10,
        marginLeft: 5, 
        flexDirection: 'column', 
        backgroundColor: 'white', 
        alignItems: 'center' ,
        justifyContent:'center'
    },
    buttonStyle: {
        width: 100,
        height: 40,
        backgroundColor: '#A4A4A4',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
    }
})
