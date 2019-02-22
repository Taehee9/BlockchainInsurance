import React, {component} from 'react';
import { StyleSheet, View, AppRegistry, FlatList, AsyncStorage} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TextInputForm from '../components/TextInputForm';
import TodoList from '../components/TodoList';

export default class TodoListScreen extends React.Component {
    static navigationOptions = ({ }) => {
        return {
            title: '할 일 관리',
            headerStyle: { backgroundColor: "#ffdb00" },
            headerTitleStyle: { fontSize: 15, color: "white" },
        };
    }
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
            <View style={[styles.container]}>
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
            <TextInputForm style={styles.memoStyle} placeholder='할 일 추가' name='customerservice'
                returnKeyType="done" returnKeyLabel="done" onChangeText={this.changeTextHandler} onSubmitEditing={this.addTask} value={this.state.text} />
        </View>
      </View>
        );
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
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f8f8f8",
    },
    list: {
      width: "100%"
    },
    memoStyle: {
        width: '95%',
        height: 40,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'gray',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        marginBottom:10
    },
  });
  AppRegistry.registerComponent("TodoList", () => TodoList);  
