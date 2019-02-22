import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Entypo} from '@expo/vector-icons';

export default class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            completeB : false,
            deleteB : false
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <TouchableOpacity style={{marginRight: 10}} 
                    onPress={()=>{this.setState({completeB: !this.state.completeB}) }}>
                        {this.state.completeB ? <Entypo name='baidu' size={20} color='#F7D358' /> :<Entypo name='baidu' size={20} color='gray' />}
                    </TouchableOpacity>
                    <Text style={[{ fontSize:18}, this.state.completeB ? { textDecorationLine: 'line-through', color:'gray'} : { textDecorationLine: 'none', color:'black'}]}>
                    {this.props.name}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={this.props.onPress} hitSlop={{left:20, rigth:20}}>
                        <Entypo name='erase' size={20} color='gray'/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    height:50,
    width:'100%',
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: 'white',
    justifyContent:'space-between',
    paddingLeft: 20,
    paddingRight: 20
  },
});
