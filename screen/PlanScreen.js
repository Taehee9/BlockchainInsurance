import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList,ScrollView } from 'react-native';
import Plan from '../components/Plan';
import Modal from "react-native-modal";

export default class PlanScreen extends React.Component {
    static navigationOptions = () => {
        return {
            title: '설계 프로그램',
            headerStyle: { backgroundColor: "#ffdb00" },
            headerTitleStyle: { fontSize: 15, color: "white" },
        };
    }
    invokeUriIndex = "ss"

    constructor(props) {
        super(props);
        this.state = {
            name : null,
            idNumber : null,
            age : null,
            job : null,            
            hyperServer : "192.168.29.197",
            companyList: undefined,
            isRefreshing: false,
            isModalVisible_name: false,
            isModalVisible_dueDate: false,
            isModalVisible_insuredDate: false,
            isModalVisible_period: false,
            insuranceName: false,
            termPayment : false,
            guaranteePeriod: false,
            paymentPeriod : false,
            isModalVisible_coName : false,
            companyList: false

        }
    }
    _toggleModalCoName = () =>
        this.setState({ isModalVisible_coName: !this.state.isModalVisible_coName });
    _toggleModalName = () =>
        this.setState({ isModalVisible_name: !this.state.isModalVisible_name });
    _toggleModalDueDate = () =>
        this.setState({ isModalVisible_dueDate: !this.state.isModalVisible_dueDate });
    _toggleModalInsuredDate = () =>
        this.setState({ isModalVisible_insuredDate: !this.state.isModalVisible_insuredDate });
    _toggleModalPeriod = () =>
        this.setState({ isModalVisible_period: !this.state.isModalVisible_period });

    makeUriIndex(){
        if(this.state.companyList=="KB생명"){ 
                invokeUriIndex = 'kb'
        }else if(this.state.companyList=="삼성생명"){
                invokeUriIndex = 'ss'
        }else{
                invokeUriIndex = 'mr'
        }
    }
    

            
    render() {
        this.makeUriIndex()  
        console.log(invokeUriIndex)
        
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

        return (
            <View style={styles.container}>
                <View style={{justifyContent:'center', alignItems:'center'}} >
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
                                <TextInput onChangeText={text =>
                                this.setState({
                                    name : text

                                })
                                } />
                             
                            </View>
                            <View style={[{ width: '40%' }, styles.textBoxStyle]}>
                            <TextInput onChangeText={text =>
                                this.setState({
                                    idNumber : text

                                })
                                } />
                            </View>
                            <View style={[{ width: '20%' }, styles.textBoxStyle]}>
                            <TextInput onChangeText={text =>
                                this.setState({
                                    age : text

                                })
                                } />
                            </View>
                            <View style={{ width: '20%', paddingLeft: 10 }}>
                            <TextInput onChangeText={text =>
                                this.setState({
                                    job : text

                                })
                                } />
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
                            <TouchableOpacity onPress={this._toggleModalCoName}>
                                <Text style={{}}>{this.state.companyList || '선택'}</Text>
                             </TouchableOpacity>
                                    <Modal isVisible={this.state.isModalVisible_coName}>
                                    <View style={{ justifyContent:'center', alignItems:'center', backgroundColor:'white', width:"100%", padding:15, borderRadius:5 }}>
                                    <FlatList
                                    style={{ paddingLeft: 2  }}
                                    data={companyList}
                                    renderItem={({ item }) => (
                                        // KB생명 삼성생명 메리츠생명
                                        <TouchableOpacity onPress={() => {

                                        this.setState({
                                            companyList: item.value
                                        }),
                                        this._toggleModalCoName()}} >

                                            <Text style={{fontSize:20, margin:5}}>{item.value}</Text>
                                        </TouchableOpacity>
                                    )}
                                    keyExtractor={(index, item) => index + item}
                                    ItemSeparatorComponent={() => (<View style={{ height: StyleSheet.hairlineWidth, backgroundColor: '#D8D8D8' }} />)}
                                />
                                </View>
                                </Modal>
                            </View>


                            <View style={{ width: '60%', paddingLeft: 10 }}>


                            <TouchableOpacity onPress={this._toggleModalName}>
                                <Text style={{}}>{this.state.insuranceName || '선택'}</Text>
                             </TouchableOpacity>
                                    <Modal isVisible={this.state.isModalVisible_name}>
                                    <View style={{ justifyContent:'center', alignItems:'center', backgroundColor:'white', width:"100%", padding:15, borderRadius:5 }}>
                                    <FlatList
                                    style={{ paddingLeft: 2  }}
                                    data={insuranceList}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity onPress={() => {
                                        this.setState({
                                            insuranceName: item.value
                                        }),
                                        this._toggleModalName()
                                    }}
                                         >

                                            <Text style={{fontSize:20, margin:5}}>{item.value}</Text>
                                        </TouchableOpacity>
                                    )}
                                    keyExtractor={(index, item) => index + item}
                                    ItemSeparatorComponent={() => (<View style={{ height: StyleSheet.hairlineWidth, backgroundColor: '#D8D8D8' }} />)}
                                />
                                </View>
                                </Modal>

    
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
                           
                            <TouchableOpacity onPress={this._toggleModalDueDate}>
                                <Text style={{}}>{this.state.termPayment || '선택'}</Text>
                             </TouchableOpacity>
                                    <Modal isVisible={this.state.isModalVisible_dueDate}>
                                    <View style={{ justifyContent:'center', alignItems:'center', backgroundColor:'white', width:"100%", padding:15, borderRadius:5 }}>
                                    <FlatList
                                    style={{ paddingLeft: 2  }}
                                    data={termPayment}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity onPress={() => {
                                        this.setState({
                                            termPayment: item.value
                                        }),
                                        this._toggleModalDueDate()}} >

                                            <Text style={{fontSize:20, margin:5}}>{item.value}</Text>
                                        </TouchableOpacity>
                                    )}
                                    keyExtractor={(index, item) => index + item}
                                    ItemSeparatorComponent={() => (<View style={{ height: StyleSheet.hairlineWidth, backgroundColor: '#D8D8D8' }} />)}
                                />
                                </View>
                                </Modal>
                               
                               

                            </View>
                            <View style={{ width: '40%', paddingLeft: 10, borderRightColor: 'gray', borderRightWidth: StyleSheet.hairlineWidth }}>
                            <TouchableOpacity onPress={this._toggleModalInsuredDate}>
                                <Text style={{}}>{this.state.guaranteePeriod || '선택'}</Text>
                             </TouchableOpacity>
                                    <Modal isVisible={this.state.isModalVisible_insuredDate}>
                                    <View style={{ justifyContent:'center', alignItems:'center', backgroundColor:'white', width:"100%", padding:15, borderRadius:5 }}>
                                    <FlatList
                                    style={{ paddingLeft: 2  }}
                                    data={guaranteePeriod}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity onPress={() => {
                                        this.setState({
                                            guaranteePeriod: item.value
                                        }),
                                        this._toggleModalInsuredDate()}} >

                                            <Text style={{fontSize:20, margin:5}}>{item.value}</Text>
                                        </TouchableOpacity>
                                    )}
                                    keyExtractor={(index, item) => index + item}
                                    ItemSeparatorComponent={() => (<View style={{ height: StyleSheet.hairlineWidth, backgroundColor: '#D8D8D8' }} />)}
                                />
                                </View>
                                </Modal>

                            </View>
                            <View style={{ width: '30%', paddingLeft: 10 }}>

                            <TouchableOpacity onPress={this._toggleModalPeriod}>
                                <Text style={{}}>{this.state.paymentPeriod || '선택'}</Text>
                             </TouchableOpacity>
                                    <Modal isVisible={this.state.isModalVisible_period}>
                                    <View style={{ justifyContent:'center', alignItems:'center', backgroundColor:'white', width:"100%", padding:15, borderRadius:5 }}>
                                    <FlatList
                                    style={{ paddingLeft: 2  }}
                                    data={paymentPeriod}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity onPress={() => {
                                        this.setState({
                                            paymentPeriod: item.value
                                        }),
                                        this._toggleModalPeriod()}} >

                                            <Text style={{fontSize:20, margin:5}}>{item.value}</Text>
                                        </TouchableOpacity>
                                    )}
                                    keyExtractor={(index, item) => index + item}
                                    ItemSeparatorComponent={() => (<View style={{ height: StyleSheet.hairlineWidth, backgroundColor: '#D8D8D8' }} />)}
                                />
                                </View>
                                </Modal>

                               
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

                    {/* 
                  UserInsuranceID: 1,
                  insuranceId: 1111,
                  name: "통합유니버설LTC종신보험",
                  startDay: "18.09.02",
                  contractor: "김복자",
                  insured: " 임수정",
                  price: "205000",
                  insuranceCo: "삼성",
                  insurancStock: false,
                  userId: 'user1',
                  plannerId: 'planner1',
                  specialContents: 'detailContents1' */}




                    <View style={{ flexDirection: 'row', marginTop: 30 }}>
                        <TouchableOpacity style={[styles.titleStyle, { marginRight: 5, left: 100 }]}>
                            <Text style={{ color: 'white' }}>보험료조회</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>
                                fetch(`http://${this.state.hyperServer}:8080/api/invoke/insurance`, {
                                    // `http://${this.state.hyperServer}:8080/api/invoke/insurance${invokeUriIndex}`  각보험회사별 채널로 인보크할경우
                                    method: 'POST',
                                    body: JSON.stringify({
                                        "Key" : "Insurance13",
                                        "UserInsuranceID": "1",
                                        "insuranceId": "1111",
                                        "name": "통합유니버설LTC종신보험",
                                        "startDay": "18.09.02",
                                        "contractor": "김복자",
                                        "insured": " 임수정",
                                        "price": "205000",
                                        "insuranceCo": "삼성",
                                        "insurancStock": "false",
                                        "userId": 'user1',
                                        "plannerId": 'planner1',
                                        "specialContents": 'detailContents1'
                                    }),
                                    headers:{
                                      "Content-Type" : "application/json"
                                    }
                                  })
                            } 
                            style={[styles.titleStyle, { left: 100 }]}>
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