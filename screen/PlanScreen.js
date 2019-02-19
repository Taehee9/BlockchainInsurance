import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Picker } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { AntDesign } from '@expo/vector-icons'
import CheckBox from 'react-native-check-box'

export default class PlanScreen extends React.Component {
    static navigationOptions = () => {
        return {
            title: '설계 프로그램',
            headerStyle: { backgroundColor: "#F5DA81" },
            headerTitleStyle: { fontSize: 22, color: "white" },
        };
    }
    constructor(props) {
        super(props);
        this.state = {
            companyList: undefined,
        }
    }
    render() {
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
                label: 'ING생명',
                value: 'ING생명',
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
            label: '선택하세요',
            value: null,
            color: '#9EA0A4',
        };
        return (
            <View style={styles.container}>
                <View style={{ width: 70, height: 30, right: 130, marginBottom: 7, borderRadius: 5, backgroundColor: '#F7D358', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white' }}>고객정보</Text>
                </View>
                <View style={{ width: '90%', height: 60, flexDirection: 'column', borderColor: 'gray', borderWidth: StyleSheet.hairlineWidth, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ height: 30, flexDirection: 'row', alignItems: 'center', borderBottomColor: 'gray', borderBottomWidth: StyleSheet.hairlineWidth }}>
                        <View style={{ width: '20%', paddingLeft: 10, borderRightColor: 'gray', borderRightWidth: StyleSheet.hairlineWidth }}>
                            <Text>이름</Text>
                        </View>
                        <View style={{ width: '40%', paddingLeft: 10, borderRightColor: 'gray', borderRightWidth: StyleSheet.hairlineWidth }}>
                            <Text>주민등록번호</Text>
                        </View>
                        <View style={{ width: '20%', paddingLeft: 10, borderRightColor: 'gray', borderRightWidth: StyleSheet.hairlineWidth }}>
                            <Text>나이</Text>
                        </View>
                        <View style={{ width: '20%', paddingLeft: 10 }}>
                            <Text>직업</Text>
                        </View>
                    </View>
                    <View style={{ height: 30, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ width: '20%', paddingLeft: 10, borderRightColor: 'gray', borderRightWidth: StyleSheet.hairlineWidth }}>
                            <TextInput placeholder='hihi' />
                        </View>
                        <View style={{ width: '40%', paddingLeft: 10, borderRightColor: 'gray', borderRightWidth: StyleSheet.hairlineWidth }}>
                            <TextInput />
                        </View>
                        <View style={{ width: '20%', paddingLeft: 10, borderRightColor: 'gray', borderRightWidth: StyleSheet.hairlineWidth }}>
                            <TextInput />
                        </View>
                        <View style={{ width: '20%', paddingLeft: 10 }}>
                            <TextInput />
                        </View>
                    </View>
                </View>

                <View style={{ width: 70, height: 30, right: 130, marginBottom: 7, marginTop: 10, borderRadius: 5, backgroundColor: '#F7D358', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white' }}>보험정보</Text>
                </View>
                <View style={{ width: '90%', height: 60, flexDirection: 'column', borderColor: 'gray', borderWidth: StyleSheet.hairlineWidth, alignItems: 'center', justifyContent: 'center' }}>
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
                            <RNPickerSelect
                                placeholder={placeholder}
                                items={companyList}
                                onValueChange={(value) => {
                                    this.setState({
                                        companyList: value,
                                    });
                                }}
                                style={pickerSelectStyles}
                                value={this.state.companyList}
                                useNativeAndroidPickerStyle={false}
                            />
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
                <View style={{ width: '90%', height: 60, flexDirection: 'column', borderColor: 'gray', borderWidth: StyleSheet.hairlineWidth, alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>
                    <View style={{ height: 30, flexDirection: 'row', alignItems: 'center', borderBottomColor: 'gray', borderBottomWidth: StyleSheet.hairlineWidth }}>
                        <View style={{ width: '30%', paddingLeft: 10, borderRightColor: 'gray', borderRightWidth: StyleSheet.hairlineWidth }}>
                            <Text>납입기간</Text>
                        </View>
                        <View style={{ width: '40%', paddingLeft: 10, borderRightColor: 'gray', borderRightWidth: StyleSheet.hairlineWidth }}>
                            <Text>보장기간</Text>
                        </View>
                        <View style={{ width: '30%', paddingLeft: 10 }}>
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
                                        top: 5,
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


                <View style={{ marginTop: 20, width: '90%', height: 60, flexDirection: 'column', borderColor: 'gray', borderWidth: StyleSheet.hairlineWidth, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ height: 30, flexDirection: 'row', alignItems: 'center', borderBottomColor: 'gray', borderBottomWidth: StyleSheet.hairlineWidth }}>
                        <View style={{ width: '10%', paddingLeft: 10, borderRightColor: 'gray', borderRightWidth: StyleSheet.hairlineWidth }}>
                            <Text></Text>
                        </View>
                        <View style={{ width: '40%', paddingLeft: 10, borderRightColor: 'gray', borderRightWidth: StyleSheet.hairlineWidth }}>
                            <Text>특약명</Text>
                        </View>
                        <View style={{ width: '25%', paddingLeft: 10, borderRightColor: 'gray', borderRightWidth: StyleSheet.hairlineWidth }}>
                            <Text>보장금액</Text>
                        </View>
                        <View style={{ width: '25%', paddingLeft: 10 }}>
                            <Text>만기</Text>
                        </View>
                    </View>
                    <View style={{ height: 30, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ width: '10%', borderRightColor: 'gray', borderRightWidth: StyleSheet.hairlineWidth }}>
                            <CheckBox
                                onClick={() => {
                                    this.setState({
                                        isChecked: !this.state.isChecked
                                    })
                                }}
                                isChecked={this.state.isChecked}
                                uncheckedCheckBoxColor='#A4A4A4'
                                checkedCheckBoxColor='#A4A4A4'
                            />
                        </View>
                        <View style={{ width: '40%', paddingLeft: 10, borderRightColor: 'gray', borderRightWidth: StyleSheet.hairlineWidth }}>
                            <TextInput />
                        </View>
                        <View style={{ width: '25%', paddingLeft: 10, borderRightColor: 'gray', borderRightWidth: StyleSheet.hairlineWidth }}>
                            <TextInput />
                        </View>
                        <View style={{ width: '25%', paddingLeft: 10 }}>
                            <TextInput />
                        </View>
                    </View>
                </View>
                <View style={{ width: '90%', height: 30, flexDirection: 'column', borderColor: 'gray', borderWidth: StyleSheet.hairlineWidth, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ height: 30, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ width: '10%', borderRightColor: 'gray', borderRightWidth: StyleSheet.hairlineWidth }}>
                            <CheckBox
                                onClick={() => {
                                    this.setState({
                                        isChecked: !this.state.isChecked
                                    })
                                }}
                                isChecked={this.state.isChecked}
                                uncheckedCheckBoxColor='#A4A4A4'
                                checkedCheckBoxColor='#A4A4A4'
                            />
                        </View>
                        <View style={{ width: '40%', paddingLeft: 10, borderRightColor: 'gray', borderRightWidth: StyleSheet.hairlineWidth }}>
                            <TextInput />
                        </View>
                        <View style={{ width: '25%', paddingLeft: 10, borderRightColor: 'gray', borderRightWidth: StyleSheet.hairlineWidth }}>
                            <TextInput />
                        </View>
                        <View style={{ width: '25%', paddingLeft: 10 }}>
                            <TextInput />
                        </View>
                    </View>
                </View>
                <View style={{ width: '90%', height: 30, flexDirection: 'column', borderColor: 'gray', borderWidth: StyleSheet.hairlineWidth, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ height: 30, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ width: '10%', borderRightColor: 'gray', borderRightWidth: StyleSheet.hairlineWidth }}>
                            <CheckBox
                                onClick={() => {
                                    this.setState({
                                        isChecked: !this.state.isChecked
                                    })
                                }}
                                isChecked={this.state.isChecked}
                                uncheckedCheckBoxColor='#A4A4A4'
                                checkedCheckBoxColor='#A4A4A4'
                            />
                        </View>
                        <View style={{ width: '40%', paddingLeft: 10, borderRightColor: 'gray', borderRightWidth: StyleSheet.hairlineWidth }}>
                            <TextInput />
                        </View>
                        <View style={{ width: '25%', paddingLeft: 10, borderRightColor: 'gray', borderRightWidth: StyleSheet.hairlineWidth }}>
                            <TextInput />
                        </View>
                        <View style={{ width: '25%', paddingLeft: 10 }}>
                            <TextInput />
                        </View>
                    </View>
                </View>


                <View style={{ marginTop: 30, width: 70, height: 30, right: 130, marginBottom: 7, borderRadius: 5, backgroundColor: '#F7D358', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white' }}>보험료조회</Text>
                </View>
                <View style={{ width: '90%', paddingLeft: 10, height: 30, flexDirection: 'row', borderColor: 'gray', borderWidth: StyleSheet.hairlineWidth, alignItems: 'center' }}>
                    <View style={{ width: '50%', borderRightColor: 'gray', borderRightWidth: StyleSheet.hairlineWidth, justifyContent: 'baseline' }}>
                        <Text>예상보험료</Text>
                    </View>

                    <View style={{ width: '50%', paddingLeft: 10 }}>
                        <TextInput placeholder='hihi' />
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
        alignItems: 'center',
        justifyContent: 'center',
    },
});
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        color: 'black',
        paddingTop: 3
    }
});
