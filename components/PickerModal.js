import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";

export default class PickerModal extends React.Component {  
    constructor(props){
        super(props);
        this.state={
            text:'선택',
        }
    }
    render() {
        const items = this.props.name.map((item) => {
            return (
                <TouchableOpacity 
                    style={{padding:10}}
                    onPress={this.props.onPressToggle}>
                    <Text style={{fontSize:20, color: 'gray'}} onPress={this.setState({text:item.label})}>{item.label}</Text>
                    <View style={{height:7}} />
                </TouchableOpacity>
            );
        })
        return (
            <TouchableOpacity
                onPress={this.props.onPressToggle}
                style={{paddingLeft:10}}>
                <Text style={{ color: "gray" }}>{this.state.text}</Text>
                <Modal isVisible={this.props.isVisible}>
                    <View style={styles.container}>
                        <View style={{ flexDirection: 'column', flexWrap: 'wrap' }}>
                            {items}
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
        borderRadius: 10, 
        padding: 3, 
        paddingTop:10,
        marginLeft: 5, 
        flexDirection: 'column', 
        backgroundColor: 'white', 
        alignItems: 'center' ,
        justifyContent:'center'
    },
})
