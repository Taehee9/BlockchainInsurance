import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,AppRegistry, FlatList, AsyncStorage } from 'react-native';
import Modal from "react-native-modal";
import { AntDesign } from '@expo/vector-icons';
import TextInputForm from '../components/TextInputForm';
import TodoList from '../components/TodoList';

export default class CustomerMemo extends React.Component {
    state = {
        tasks: [],
        text: ""
      };
    
      changeTextHandler = text => {
        this.setState({ text: text });
      };
    
      addTask = () => {
        let notEmpty = this.state.text.trim().length > 0;
    
        if (notEmpty) {
          this.setState(
            prevState => {
              let {
                   tasks, text } = prevState;
              return {
                tasks: tasks.concat({ key: tasks.length, text: text }),
                text: ""
              };
            },
            () => Tasks.save(this.state.tasks)
          );
        }
      };
      deleteTask = i => {
        this.setState(
          prevState => {
            let tasks = prevState.tasks.slice();
    
            tasks.splice(i, 1);
    
            return { tasks: tasks };
          },
          () => Tasks.save(this.state.tasks)
        );
      };
      componentDidMount() {
        Tasks.all(tasks => this.setState({ tasks: tasks || [] }));
    }
  
    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={{ borderColor: '#F7D358', borderWidth: 1, width: 40, height: 30, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                <Text>메모</Text>
                <Modal isVisible={this.props.isVisible}>
                    <View style={{ width: 330, height: 500, borderRadius: 10, padding: 3, paddingTop:10,marginLeft: 5, flexDirection: 'column', backgroundColor: 'white', alignItems: 'center' }}>
                        <TouchableOpacity
                            style={{ position: "absolute", top: 20, right: 20 }}
                            onPress={this.props.onPressToggle}>
                            <AntDesign style={{ fontSize: 20 }} name="closecircleo" />
                        </TouchableOpacity>
                        <Text style={{fontSize:20, fontWeight:'bold'}}>고객 관리 메모</Text>
                        <FlatList
                            style={styles.list}
                            data={this.state.tasks}
                            renderItem={({ item, index }) =>
                                <View>
                                    <TodoList name={item.text} onPress={()=>this.deleteTask(index)}/>
                                </View>
                                }
                            keyExtractor={(index, item) => index+ item}
                            ItemSeparatorComponent={() => (<View style={{ height: StyleSheet.hairlineWidth, backgroundColor: '#D8D8D8' }} />)}
                        />
                        <View style={{ backgroundColor: 'white' }}>
                            <TextInputForm style={styles.memoStyle} placeholder='고객에 대한 메모' name='customerservice'
                                returnKeyType="done" returnKeyLabel="done" onChangeText={this.changeTextHandler} onSubmitEditing={this.addTask} value={this.state.text} />
                        </View>
                    </View>
                </Modal>
            </TouchableOpacity>
        )
    }
}
let Tasks = {
    convertToArrayOfObject(tasks, callback) {
      return callback(
        tasks ? tasks.split("||").map((task, i) => ({ key: i, text: task })) : []
      );
    },
    convertToStringWithSeparators(tasks) {
      return tasks.map(task => task.text).join("||");
    },
    all(callback) {
      return AsyncStorage.getItem("TASKS", (err, tasks) =>
        this.convertToArrayOfObject(tasks, callback)
      );
    },
    save(tasks) {
      AsyncStorage.setItem("TASKS", this.convertToStringWithSeparators(tasks));
    }
  };

const styles = StyleSheet.create({
    memoStyle: {
        width: 280,
        height: 30,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'gray',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 5,
        marginBottom:5
    },
    list: {
      width: "100%",
      marginTop:15
    },
    textInput: {
      height: 40,
      paddingLeft: 10,
      borderColor: "gray",
      borderWidth: 1,
      width: "100%"
    }
})

AppRegistry.registerComponent("TodoList", () => TodoList); 