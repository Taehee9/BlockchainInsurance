import React from 'react';
import { StyleSheet, Text, FlatList, View, TextInput, TouchableOpacity, Picker } from 'react-native';
import TextIcon from '../components/TextIcon';
import { Ionicons } from '@expo/vector-icons';
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
            clientData: [],
            data: [
                {
                    key: 1, name: '김유준', sex: '남성', 생년월일: '1989-01-10', 연락처: '010-4969-9947',
                    insuranceItem: [{ logo: 'kb', name: 'test', price: 40000 }, { logo: 'samsung', name: 'test33', price: 2000 }]
                },
                {
                    key: 2, name: '김정수', sex: '남성', 생년월일: '1990-02-20', 연락처: '010-1111-2222',
                    insuranceItem: [{ logo: 'kb', name: 'kb', price: 2000 }, { logo: 'samsung', name: 'samsung', price: 20000 }]
                },
                {
                    key: 3, name: '임은정', sex: '여성', 생년월일: '1990-03-30', 연락처: '010-2333-0446',
                    insuranceItem: [{ logo: 'samsung', name: '언뉭', price: 4000 }]
                },
                {
                    key: 4, name: '권태희', sex: '여성', 생년월일: '1995-09-04', 연락처: '010-7231-9969',
                    insuranceItem: [{ logo: 'kb', name: '탱탱', price: 100 }, { logo: 'samsung', name: 'x탱', price: 200 }]
                },
                {
                    key: 5, name: '카롱이', sex: '남성', 생년월일: '2015-03-21', 연락처: '010-1234-5678',
                    insuranceItem: [{ logo: 'kb', name: '카롱카롱', price: 100 }, { logo: 'kb', name: '카롱보험', price: 1000 }, { logo: 'samsung', name: 'test3', price: 2000 }]
                },
                {
                    key: 6, name: '마롱이', sex: '여성', 생년월일: '2006-08-19', 연락처: '010-5555-8888',
                    insuranceItem: [{ logo: 'kb', name: '마롱마롱', price: 100 }]
                },
            ]
        }
    }

    priceCheck(data) {
        price = 0;
        for (let i = 0; i < data.length; i++) {
            price += data[i].price
        }
        return price;
    }
    fetchHyperledgerInsuranceData() {
        return fetch(
            `http://192.168.0.9:8080/api/query/queryAllContractedInsurance`
        )
            .then(response => response.json())
            .catch(error => {
                console.error(error);
            });
    }
    fetchHyperledgerClientData() {
        return fetch(
            `http://192.168.0.9:8080/api/query/queryAllClients`
        )
            .then(response => response.json())
            .catch(error => {
                console.error(error);
            });
    }
    componentDidMount() {
        this.fetchHyperledgerClientData().then(items => {
            this.setState({
                clientData: JSON.parse(items.response)
            })
        });
    }

    render() {
        console.log(clientDataMap);
        let clientDataMap = this.state.clientData.map(item => item.Record)
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', backgroundColor: 'white', width: '100%', height: 50, alignItems: 'center', paddingLeft: 10 }}>
                    <Text style={{ fontSize: 20, color: 'gray' }}>고객리스트</Text>
                    <View style={{ width: 10 }} />
                    <Text style={{ fontSize: 15, color: 'gray' }}>총 {this.state.data.length}명</Text>
                    <View style={{ width: 155 }} />

                </View>
                <View style={{ height: StyleSheet.hairlineWidth, backgroundColor: 'black', width: '100%' }} />
                <TextInputForm
                    style={styles.input}
                    placeholder='찾으시는 고객을 입력해주십시오'
                    icon={<Ionicons name='ios-search' size={20} color='gray' />}
                    onChangeText={(text) => {
                        //나중에 data부분이 state가 아닌 하렛에서 가져오면 그 때 key를 사용해서 검색기능 완료하기!
                        this.key = text || 'undefined'
                    }}
                />
                <View style={{ width: '100%', height: StyleSheet.hairlineWidth, backgroundColor: '#D8D8D8' }} />
                <FlatList
                    style={{ paddingLeft: 2, backgroundColor: 'white' }}
                    data={clientDataMap}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => { this.props.navigation.navigate('DetailCustomer', { itemId: item }) }}
                            style={{ flexDirection: 'column', width: 370, height: 100, justifyContent: 'center', paddingLeft: 10, paddingRight: 10, marginBottom: 1 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
                                <Text style={{ fontSize: 25 }}>{item.name}</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 15, color: 'gray' }}>{item.sex}</Text>
                                    <View style={{ width: 5 }} />
                                    <Text style={{ fontSize: 15, color: 'gray' }}>{item.residentNumber}</Text>
                                </View>
                            </View>

                        </TouchableOpacity>
                    )}
                    keyExtractor={(index, item) => index + item}
                    ItemSeparatorComponent={() => (<View style={{ height: StyleSheet.hairlineWidth, backgroundColor: '#D8D8D8' }} />)}
                    refreshing={this.state.isRefreshing}
                    onRefresh={() => {
                        this.setState({
                            isRefreshing: true
                        })
                        setTimeout(() => {
                            this.setState({
                                isRefreshing: false
                            })
                        }, 2000);
                    }}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 50,
        paddingLeft: 15,
        paddingTop: 5,
        backgroundColor: '#fff',
        marginTop: 3,
    },
});

