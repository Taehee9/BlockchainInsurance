import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class CustomerNotice extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={{width:50, height:50, borderRadius:5 }} source={{uri:this.props.logo}} />
                <View style={styles.contStyle}>
                    <Text style={styles.nameStyle}>{this.props.name}님 </Text>
                    <Text style={styles.deStyle}>{this.props.description}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        flexDirection: 'row',
        justifyContent:'center'
    },
    contStyle:{
        flexDirection:'row', 
        alignItems:'center', 
        backgroundColor:'white', 
        marginLeft:3, 
        paddingLeft:5, 
        width:'83%'
    },
    nameStyle:{
        fontSize:17,
        color:'#3a3a3a'
    },
    deStyle:{
        fontSize:15,
        color:'#474747'
    }
})