import React from 'react';
import { StyleSheet, Text, View, SectionList, Image, TouchableOpacity, Linking, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomerMemo from '../components/CustomerMemo';

export default class DetailCustomerScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: '고객관리',
            headerStyle: { backgroundColor: "#ffdb00" },
            headerTitleStyle: { fontSize: 15, color: "white" },
        };
    }
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            isRefreshing: false,
            insuranceData:[
                {
                    UserInsuranceID: 1,
                    insuranceId: 1111,
                    name: "통합유니버설LTC종신보험",
                    startDay: "18.09.02",
                    contractor: "김복자",
                    insured: "박민지",
                    price: "205000",
                    insuranceCo: "삼성",
                    insurancStock: false,
                    userId: 'user1',
                    plannerId: 'planner1',
                    specialContents: 'detailContents1'
                  },
                  {
                    UserInsuranceID: 2,
                    insuranceId: 1112,
                    name: "우리아이통합보장보험",
                    startDay: "16.05.29",
                    contractor: "김민정",
                    insured: "이나래",
                    price: "132200",
                    insuranceCo: "삼성",
                    insurancStock: false,
                    userId: 'user1',
                    plannerId: 'planner1',
                    specialContents: 'detailContents1'
                  },
                  {
                    UserInsuranceID: 3,
                    insuranceId: 1113,
                    name: "New인덱스변액연금보험",
                    startDay: "13.02.22",
                    contractor: "박현주",
                    insured: "박민지",
                    price: "103211",
                    insuranceCo: "삼성",
                    insurancStock: true,
                    userId: 'user1',
                    plannerId: 'planner1',
                    specialContents: 'detailContents1'
                
                  },
                  {
                    UserInsuranceID: 4,
                    insuranceId: 1114,
                    name: "KB월지급식 ELS변액연금보험",
                    startDay: "13.01.08",
                    contractor: "오상균",
                    insured: "조기웅",
                    price: "350000",
                    insuranceCo: "국민",
                    insurancStock: false,
                    userId: 'user1',
                    plannerId: 'planner1',
                    specialContents: 'detailContents1'
                  },
                  {
                    UserInsuranceID: 5,
                    insuranceId: 1115,
                    name: "KB 국민암보험",
                    startDay: "12.12.01",
                    contractor: "임현우",
                    insured: "조기웅",
                    price: "65000",
                    insuranceCo: "국민",
                    insurancStock: false,
                    userId: 'user1',
                    plannerId: 'planner1',
                    specialContents: 'detailContents1'
                  },
                  {
                    UserInsuranceID: 6,
                    insuranceId: 1116,
                    name: "KB 건강+종신보험",
                    startDay: "15.11.04",
                    contractor: "이명우",
                    insured: "이명우",
                    price: "260000",
                    insuranceCo: "국민",
                    insurancStock: false,
                    userId: 'user1',
                    plannerId: 'planner1',
                    specialContents: 'detailContents1'
                  },
                  {
                    UserInsuranceID: 7,
                    insuranceId: 1117,
                    name: "메리츠 올인원라이프보장보험",
                    startDay: "12.11.04",
                    contractor: "전연지",
                    insured: "오상호",
                    price: "98100",
                    insuranceCo: "메리츠",
                    insurancStock: false,
                    userId: 'user1',
                    plannerId: 'planner1',
                    specialContents: 'detailContents1'
                  },

            ]
        }
    }
    insuranceCheck(insurance){
        const customer = this.props.navigation.getParam('itemId');
        myClient=[];
        m=0;               
        for(let i=0; i<insurance.length; i++){
            console.log(customer.name)
            if(customer.name == insurance[i].insured){
                    myClient[m]=insurance[i];
                    m++; 
            }
        }
        return myClient;
    }
    clientSex(data){
        if(data=='man'){
            return '남'
        }
        else{
            return '여'
        }
    }
    priceCheck(data) {
        price = 0;
        for (let i = 0; i < data.length; i++) {
            price += parseInt(data[i].price)
        }
        return price;
    }
    companyLogo(companyName) {
        if (companyName == "삼성") {
            return "https://t1.daumcdn.net/news/201706/22/sfdirect/20170622162421882zmiv.jpg";
          } else if (companyName == "국민")
            return "https://yt3.ggpht.com/a-/AN66SAxGY8-zefx7A2NaQGRgY0SIm20xE2vr4aIGCg=s900-mo-c-c0xffffffff-rj-k-no";
          else if (companyName == "메리츠")
            return "http://image.nsmall.com/itemimg/3/26/963/26451963_S.jpg";
        }
    _toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });
        
    render() {
        const customer = this.props.navigation.getParam('itemId');
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', width: '100%', height: 100, padding: 25, justifyContent: 'space-between' }}>
                    <View style={{ alignItems: 'flex-start' }}>
                        <Text style={{ fontSize: 25 }}>{customer.name}</Text>
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <Text style={{ fontSize: 17 }}>{this.clientSex(customer.sex)} </Text>
                            <Text style={{ fontSize: 17 }}>{customer.age}세</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                        <CustomerMemo onPress={() => this.setState(this._toggleModal)}
                            isVisible={this.state.isModalVisible}
                            onPressToggle={this._toggleModal} />
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <TouchableOpacity
                                onPress={() => { Linking.openURL('tel:' + customer.phonenumber) }}
                                style={{ width: 20, height: 30, alignItems: 'center', justifyContent: 'center' }}>
                                <Ionicons name='ios-call' color='gray' size={20} />
                            </TouchableOpacity>
                            <View style={{ width: 20 }} />
                            <TouchableOpacity
                                onPress={() => { Linking.openURL('sms:' + customer.phonenumber) }}
                                style={{ width: 20, height: 30, alignItems: 'center', justifyContent: 'center' }}>
                                <Ionicons name='md-text' color='gray' size={20} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{height:10}} />
                <View style={{backgroundColor:'gray',width:'100%', height:1}}/>   
                <View style={{height:10}} />
                <View style={{ width: '100%', height: 60, justifyContent: 'center', paddingLeft: 15, paddingTop:10 }}>
                    <Text style={{ fontSize: 18 }}>보유계약 {this.insuranceCheck(this.state.insuranceData).length}건</Text>
                    <View style={{height:5}} />
                    <Text style={{ fontSize: 18 }}>월납보험료 {this.priceCheck(this.insuranceCheck(this.state.insuranceData))}원</Text>
                </View>
                <View style={{ width: 375, height: 40, marginTop:10,paddingLeft: 10, borderBottomColor: 'gray', borderBottomWidth: StyleSheet.hairlineWidth }}>
                    <Text style={{ fontSize: 15, color: 'gray' }}>보험 상세보기</Text>
                </View>
                <FlatList
                    style={{ width: '100%' }}
                    data={this.insuranceCheck(this.state.insuranceData)}
                    renderItem={({ item }) => (
                        <View style={{ flexDirection: 'column', padding: 20 }}>
                            <Image source={{ uri: this.companyLogo(item.insuranceCo) }} style={{ width: 50, height: 30 }} />
                            <View style={{ height: 15 }} />
                            <Text style={{ fontSize: 18 }}>보험이름 : {item.name}</Text>
                            <View style={{ height: 5 }} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 16 }}>피보험자 : {item.insured}</Text>
                                <Text style={{ fontSize: 16 }}>월 {parseInt(item.price)}원</Text>
                            </View>
                        </View>
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
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        alignItems: 'baseline',
        justifyContent: 'flex-start',
    },

});
