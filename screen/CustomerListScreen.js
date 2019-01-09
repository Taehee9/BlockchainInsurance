import React from 'react';
import { StyleSheet, Text, FlatList, View, TextInput, TouchableOpacity } from 'react-native';
import TextIcon from '../components/TextIcon';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import TextInputForm from '../components/TextInputForm';

export default class CustomerListScreen extends React.Component {
    key = ''
    static navigationOptions = ({ navigation }) => {
        return {
            title: '고객관리',
            headerStyle: { backgroundColor: "#F5DA81" },
            headerTitleStyle: { fontSize: 20, color: "white" },
        };
    }
    constructor(props) {
        super(props);
        this.state = {
            isRefreshing: false,
            data: [{ key: 1, name: '김유준', sex: 'm' },
            { key: 2, name: '김정수', sex: 'm' },
            { key: 3, name: '임은정', sex: 'f' },
            { key: 4, name: '권태희', sex: 'f' },
            { key: 5, name: '카롱이', sex: 'm' },
            { key: 6, name: '마롱이', sex: 'f' },]
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInputForm
                    style={[styles.input, { marginBottom: '2%' }]}
                    placeholder='찾으시는 고객을 입력해주십시오'
                    icon={<Ionicons name='ios-search' size={20} color='gray' />}
                    onChangeText={(text) => {
                        //나중에 data부분이 state가 아닌 하렛에서 가져오면 그 때 key를 사용해서 검색기능 완료하기!
                        this.key = text || 'undefined'
                    }}
                />
                
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D8D8D8',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    itemStyle: {
        paddingLeft: 10,
        fontSize: 18,
        height: 46,
        width: 375,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 40,
        paddingLeft: 15,
        paddingTop: 5,
        backgroundColor: '#fff',
        marginTop: 3,
    },
    font: {
        fontSize: 15,
        color: 'gray',
    }
});

