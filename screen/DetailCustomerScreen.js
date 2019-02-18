import React from 'react';
import { StyleSheet, Text, View, SectionList, Image, TouchableOpacity, Linking, Alert } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomerMemo from '../components/CustomerMemo';

export default class DetailCustomerScreen extends React.Component {
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
            isModalVisible: false
        }
    }
    calculateAge(birth) {
        currentDate = new Date().toDateString().slice(-4)
        age = birth.split('-')[0]
        return currentDate - age + 1
    }
    priceCheck(data) {
        price = 0;
        for (let i = 0; i < data.length; i++) {
            price += data[i].price
        }
        return price;
    }
    companyLogo(companyName) {
        if (companyName == "samsung") {
            return "https://t1.daumcdn.net/news/201706/22/sfdirect/20170622162421882zmiv.jpg";
        } else if (companyName == "kb") {
            return "https://yt3.ggpht.com/a-/AN66SAxGY8-zefx7A2NaQGRgY0SIm20xE2vr4aIGCg=s900-mo-c-c0xffffffff-rj-k-no";
        }
    }
    _toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });
    render() {
        const customer = this.props.navigation.getParam('itemId');
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', width: '100%', height: 100, padding: 20, justifyContent: 'space-between', borderBottomColor: 'gray', borderBottomWidth: 1 }}>
                    <View style={{ alignItems: 'flex-start' }}>
                        <Text style={{ fontSize: 25 }}>{customer.name}</Text>
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <Text style={{ fontSize: 17 }}>{customer.sex} </Text>
                            <Text style={{ fontSize: 17 }}>{this.calculateAge(customer.생년월일)}세</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                        {/* 왜 setState안에 this._toggleModal이 들어가있어야되지요...?? */}
                        <CustomerMemo onPress={() => this.setState(this._toggleModal)}
                            isVisible={this.state.isModalVisible}
                            onPressToggle={this._toggleModal} />
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <TouchableOpacity
                                onPress={() => { Linking.openURL('tel:' + customer.연락처) }}
                                style={{ width: 20, height: 30, alignItems: 'center', justifyContent: 'center' }}>
                                <Ionicons name='ios-call' color='gray' size={20} />
                            </TouchableOpacity>
                            <View style={{ width: 20 }} />
                            <TouchableOpacity
                                onPress={() => { Linking.openURL('sms:' + customer.연락처) }}
                                style={{ width: 20, height: 30, alignItems: 'center', justifyContent: 'center' }}>
                                <Ionicons name='md-text' color='gray' size={20} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{ width: '100%', height: 60, justifyContent: 'center', paddingLeft: 10 }}>
                    <Text>보유계약 {customer.insuranceItem.length}건</Text>
                    <Text>월납보험료 {this.priceCheck(customer.insuranceItem)}원</Text>
                </View>

                <View >
                    <View style={{ width: 375, height: 40, paddingLeft: 10, borderBottomColor: 'gray', borderBottomWidth: StyleSheet.hairlineWidth }}>
                        <Text style={{ fontSize: 22, color: 'gray' }}>보험 상세보기</Text>
                    </View>
                    <SectionList
                        sections={[{
                            title: '보험 리스트',
                            data: customer.insuranceItem
                        }]}
                        renderSectionHeader={({ section: { title } }) => (
                            <View style={{ width: 375, height: 35, justifyContent: 'center', paddingLeft: 10, borderBottomColor: 'gray', borderBottomWidth: StyleSheet.hairlineWidth }}>
                                <Text style={{ fontSize: 20, color: 'gray' }}>{title}</Text>
                            </View>
                        )}
                        renderItem={({ item }) => (
                            <View style={{ flexDirection: 'column', padding: 20 }}>
                                <Image source={{ uri: this.companyLogo(item.logo) }} style={{ width: 50, height: 30 }} />
                                <View style={{ height: 15 }} />
                                <Text style={{ fontSize: 20 }}>보험이름 : {item.name}</Text>
                                <View style={{ height: 10 }} />
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 16 }}>피보험자 : {customer.name}</Text>
                                    <Text style={{ fontSize: 16 }}>월 {item.price}원</Text>
                                </View>
                            </View>
                        )}
                        ItemSeparatorComponent={() => (
                            <View style={{ height: StyleSheet.hairlineWidth, backgroundColor: 'gray' }} />
                        )}
                        keyExtractor={(index, item) => { index + item + customer }}
                    />
                </View>
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
