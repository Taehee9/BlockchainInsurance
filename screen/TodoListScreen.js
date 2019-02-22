import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TextInputForm from '../components/TextInputForm';
import TodoList from '../components/TodoList';

//글 쓴 text가 지금은 하나하나 저장되는데 이걸 한번에
// 입력하고 확인버튼 누르면 입력한 내용 사라지게
// 지우기 버튼 누르면 지워지게 만들기!

//id랑 text를 같이 집어넣는 형태로 해야될 듯...?
export default class TodoListScreen extends React.Component {
    static navigationOptions = ({ }) => {
        return {
            title: '할 일 관리',
            headerStyle: { backgroundColor: "#ffdb00" },
            headerTitleStyle: { fontSize: 15, color: "white" },
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>하잇</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#D8D8D8'
    },
    confirmB: {
        backgroundColor: '#F7D358',
        width: 50,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '85%',
        height: 40,
        paddingLeft: 15,
        backgroundColor: '#fff',
        marginTop: 3,
        marginBottom: 3
    },
});
