import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList,ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { AntDesign } from '@expo/vector-icons';
import CheckBox from 'react-native-check-box';
import Plan from '../components/Plan';
import PickerModal from '../components/PickerModal';

export default class PlanScreen extends React.Component {
    static navigationOptions = () => {
        return {
            title: '설계 프로그램',
            headerStyle: { backgroundColor: "#ffdb00" },
            headerTitleStyle: { fontSize: 15, color: "white" },
        };
    }
    constructor(props) {
        super(props);
        this.state = {
            companyList: undefined,
            isRefreshing: false,
        }
    }
    _toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });
            
    render() {
        const data = [
            { key: 1, name: 'hi' },
            { key: 2, name: 'h22i' },
            { key: 3, name: 'h333i' },
            { key: 4, name: 'h444i' }
        ]
        const companyList = [
            {
                label: 'KB생명',
                value: 'KB생명',
            },
            {
                label: '삼성생명',
                value: '삼성생명',
            },
            {
                label: '메리츠생명',
                value: '메리츠생명',
            },
        ];
        const insuranceList = [
            {
                label: '가족건강보험',
                value: '가족건강보험',
            },
            {
                label: '노후대비보험',
                value: '노후대비보험',
            },
            {
                label: '목돈마련보험',
                value: '목돈마련보험',
            },
        ];
        const termPayment = [
            {
                label: '20년납부',
                value: '20년납부',
            },
            {
                label: '30년납부',
                value: '30년납부',
            },
            {
                label: '40년납부',
                value: '40년납부',
            },
            {
                label: '죽을때까지',
                value: '죽을때까지',
            },
        ];
        const guaranteePeriod = [
            {
                label: '80세만기',
                value: '80세만기',
            },
            {
                label: '90세만기',
                value: '90세만기',
            },
            {
                label: '100세만기',
                value: '100세만기',
            },
        ];
        const paymentPeriod = [
            {
                label: '월납',
                value: '월납',
            },
            {
                label: '연납',
                value: '연납',
            }
        ];
        const placeholder = {
            label: '선택',
            value: null,
            color: '#9EA0A4',
        };
        return (
            <View style={styles.container}>
                    <View style={styles.titleStyle}>
                        <Text style={{ color: 'white' }}>고객정보</Text>
                    </View>
                    <View style={styles.backStyle}>
                        <View style={styles.inStyle}>
                            <View style={[{ width: '20%' }, styles.textBoxStyle]}>
                                <Text>이름</Text>
                            </View>
                            <View style={[{ width: '40%' }, styles.textBoxStyle]}>
                                <Text>주민등록번호</Text>
                            </View>
                            <View style={[{ width: '20%' }, styles.textBoxStyle]}>
                                <Text>나이</Text>
                            </View>
                            <View style={{ width: '20%', paddingLeft: 10 }}>
                                <Text>직업</Text>
                            </View>
                        </View>
                        <View style={{ height: 30, flexDirection: 'row', alignItems: 'center' }}>
                            <View style={[{ width: '20%' }, styles.textBoxStyle]}>
                                <TextInput />
                            </View>
                            <View style={[{ width: '40%' }, styles.textBoxStyle]}>
                                <TextInput />
                            </View>
                            <View style={[{ width: '20%' }, styles.textBoxStyle]}>
                                <TextInput />
                            </View>
                            <View style={{ width: '20%', paddingLeft: 10 }}>
                                <TextInput />
                            </View>
                        </View>
                    </View>

                    <View style={[styles.titleStyle, { marginTop: 20 }]}>
                        <Text style={{ color: 'white' }}>보험정보</Text>
                    </View>
                    <View style={styles.backStyle}>
                        <View style={{ height: 30, flexDirection: 'row', alignItems: 'center', borderBottomColor: 'gray', borderBottomWidth: StyleSheet.hairlineWidth }}>
                            <View style={{ width: '40%', paddingLeft: 10, borderRightColor: 'gray', borderRightWidth: StyleSheet.hairlineWidth }}>
                                <Text>회사명</Text>
                            </View>
                            <View style={{ width: '60%', paddingLeft: 10 }}>
                                <Text>보험명</Text>
                            </View>
                        </View>
                        <View style={{ height: 30, flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ width: '40%', paddingLeft: 10, borderRightColor: 'gray', borderRightWidth: StyleSheet.hairlineWidth }}>
                                <PickerModal onPress={() => this.setState(this._toggleModal)}
                                    isVisible={this.state.isModalVisible}
                                    onPressToggle={this._toggleModal}
                                    name={companyList}/>
                            </View>
                            <View style={{ width: '60%', paddingLeft: 10 }}>
                                <RNPickerSelect
                                    placeholder={placeholder}
                                    items={insuranceList}
                                    onValueChange={(value) => {
                                        this.setState({
                                            insuranceList: value,
                                        });
                                    }}
                                    style={pickerSelectStyles}
                                    value={this.state.insuranceList}
                                    useNativeAndroidPickerStyle={false}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={[styles.backStyle, { marginTop: 5 }]}>
                        <View style={styles.inStyle}>
                            <View style={[styles.textBoxStyle, { width: '30%' }]}>
                                <Text>납입기간</Text>
                            </View>
                            <View style={[styles.textBoxStyle, { width: '40%' }]}>
                                <Text>보장기간</Text>
                            </View>
                            <View style={[styles.textBoxStyle, { width: '30%' }]}>
                                <Text>납입주기</Text>
                            </View>
                        </View>
                        <View style={{ height: 30, flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ width: '30%', paddingLeft: 10, borderRightColor: 'gray', borderRightWidth: StyleSheet.hairlineWidth }}>
                                <RNPickerSelect
                                    placeholder={placeholder}
                                    items={termPayment}
                                    onValueChange={(value) => {
                                        this.setState({
                                            termPayment: value,
                                        });
                                    }}
                                    style={pickerSelectStyles}
                                    value={this.state.termPayment}
                                    useNativeAndroidPickerStyle={false}
                                />
                            </View>
                            <View style={{ width: '40%', paddingLeft: 10, borderRightColor: 'gray', borderRightWidth: StyleSheet.hairlineWidth }}>
                                <RNPickerSelect
                                    placeholder={placeholder}
                                    items={guaranteePeriod}
                                    onValueChange={(value) => {
                                        this.setState({
                                            guaranteePeriod: value,
                                        });
                                    }}
                                    style={pickerSelectStyles}
                                    value={this.state.guaranteePeriod}
                                    useNativeAndroidPickerStyle={false}
                                />
                            </View>
                            <View style={{ width: '30%', paddingLeft: 10 }}>
                                <RNPickerSelect
                                    placeholder={placeholder}
                                    items={paymentPeriod}
                                    onValueChange={(value) => {
                                        this.setState({
                                            paymentPeriod: value,
                                        });
                                    }}
                                    style={{
                                        ...pickerSelectStyles,
                                        iconContainer: {
                                            top: -5,
                                            right: 15,
                                        }
                                    }}
                                    value={this.state.paymentPeriod}
                                    useNativeAndroidPickerStyle={false}
                                    Icon={() => {
                                        return <AntDesign name='down' size={10} color="gray" />;
                                    }}
                                />
                            </View>
                        </View>
                    </View>


                    <View style={[styles.backStyle, { height: 120, marginTop: 10 }]}>
                        <View style={styles.inStyle}>
                            <View style={[styles.textBoxStyle, { width: '10%' }]}>
                                <Text></Text>
                            </View>
                            <View style={[styles.textBoxStyle, { width: '40%' }]}>
                                <Text>특약명</Text>
                            </View>
                            <View style={[styles.textBoxStyle, { width: '25%' }]}>
                                <Text>보장금액</Text>
                            </View>
                            <View style={{ width: '25%', paddingLeft: 10 }}>
                                <Text>만기</Text>
                            </View>
                        </View>
                        <FlatList
                            style={{ width: '100%', height: 90 }}
                            data={data}
                            renderItem={({ item }) => (
                                <Plan />
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


                    <View style={{ flexDirection: 'row', marginTop: 30 }}>
                        <TouchableOpacity style={[styles.titleStyle, { marginRight: 5, left: 100 }]}>
                            <Text style={{ color: 'white' }}>보험료조회</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.titleStyle, { left: 100 }]}>
                            <Text style={{ color: 'white' }}>계약</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', paddingLeft: 10, height: 30, flexDirection: 'row', borderColor: 'gray', borderWidth: StyleSheet.hairlineWidth, alignItems: 'center' }}>
                        <View style={{ width: '50%', borderRightColor: 'gray', borderRightWidth: StyleSheet.hairlineWidth }}>
                            <Text>예상보험료</Text>
                        </View>

                        <View style={{ width: '50%', paddingLeft: 10 }}>
                            <Text></Text>
                        </View>
                    </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent:'center',
        alignItems:'center'
    },
    titleStyle: {
        width: 70,
        height: 30,
        borderRadius: 5,
        backgroundColor: '#F7D358',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 7,
        right: 135
    },
    backStyle: {
        width: '90%',
        height: 60,
        flexDirection: 'column',
        borderColor: 'gray',
        borderWidth: StyleSheet.hairlineWidth,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inStyle: {
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'gray',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    textBoxStyle: {
        paddingLeft: 10,
        borderRightColor: 'gray',
        borderRightWidth: StyleSheet.hairlineWidth
    }
});
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        color: 'black',
        paddingTop: 3
    }
});
