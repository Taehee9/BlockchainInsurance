import React from 'react';
import { StyleSheet, Text, FlatList, View, TextInput, TouchableOpacity, Picker } from 'react-native';
import TextIcon from '../components/TextIcon';
import { Ionicons } from '@expo/vector-icons';
import TextInputForm from '../components/TextInputForm';
import CustomerList from '../components/CustomerList'
import { connect } from 'react-redux';

class CustomerListScreen extends React.Component {
    key = ''
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
            isRefreshing: false,
            myClientData:[],
            clientNum:0,
            // client: null,
            ClientInfo: [
                {
                    id: 'user1',
                    name: '이명우',
                    age: 37,
                    sex: 'man',
                    phonenumber: '010-3244-6452',
                    image: "https://c.pxhere.com/images/83/47/34059fbbeb030532db3efd773f38-1432915.jpg!d",
                    area: 'seoul',
                    email:'mk201@naver.com',
                    accountNum: '2343-49564-482359',
                    residentNumber: '831002-1521451',     
                },
                {
                    id: 'user2',
                    name: '최유리',
                    age: 29,
                    sex: 'woman',
                    phonenumber: '010-4234-6785',
                    image: "https://c.pxhere.com/images/49/ce/1aa023be2db2dd135006212751eb-1419067.jpg!d",
                    area: 'Gwangju',
                    email:'yychoi@naver.com',
                    accountNum: '3243-32144-234235',
                    residentNumber: '910303-2535612',     
                },
                {
                    id: 'user3',
                    name: '박대우',
                    age: 33,
                    sex: 'man',
                    phonenumber: '010-6456-3244',
                    image: "https://c.pxhere.com/images/8c/df/cb62014c0ae743c2b3c601585c67-1432843.jpg!d",
                    area: 'seoul',
                    email:'tpk404ys@gmail.com',
                    accountNum: '8567-77754-542676',
                    residentNumber: '871112-1543162',     
                },
                {
                    id: 'user4',
                    name: '박민지',
                    age: 42,
                    sex: 'woman',
                    phonenumber: '010-3327-6687',
                    image: "https://c.pxhere.com/photos/a0/49/mom_daughter_kid_sea_mother_child-1140225.jpg!d",
                    area: 'ulsan',
                    email:'parkmj6211@naver.com',
                    accountNum: '4567-49564-489456',
                    residentNumber: '780101-2848482',     
                },
                {
                    id: 'user5',
                    name: '박진형',
                    age: 11,
                    sex: 'man',
                    phonenumber: '010-9082-3325',
                    image: "https://c.pxhere.com/images/26/b9/ea5d9b560316a6dbe5fc4fc0a552-1419082.png!d",
                    area: 'yeosu',
                    email:'jjh1011@naver.com',
                    accountNum: '5522-13579-635789',
                    residentNumber: '010307-3564151',     
                },
                {
                    id: 'user6',
                    name: '이나래',
                    age: 2,
                    sex: 'woman',
                    phonenumber: '010-4467-2274',
                    image: "https://c.pxhere.com/photos/98/b5/baby_baby_models_children-877608.jpg!d",
                    area: 'gyeonggi suwon',
                    email:'narae2@naver.com',
                    accountNum: '8522-74368-413456',
                    residentNumber: '181218-4429038',     
                },    
                {
                    id: 'user7',
                    name: '조기웅',
                    age: 33,
                    sex: 'man',
                    phonenumber: '010-3466-8467',
                    image: "https://c.pxhere.com/images/1a/4f/e66d65aa89d9e14e6ab19ae854a4-1432849.jpg!d",
                    area: 'seoul',
                    email:'jkkiwoong0308@naver.com',
                    accountNum: '8654-75435-775433',
                    residentNumber: '870507-1939214',     
                },
                {
                    id: 'user8',
                    name: '오상호',
                    age: 39,
                    sex: 'man',
                    phonenumber: '010-3245-1243',
                    image: "https://c.pxhere.com/images/90/52/afb3b7db5a59c414f22f4f860390-1432835.jpg!d",
                    area: 'busan',
                    email:'5sangho555@gmail.com',
                    accountNum: '3427-33464-445796',
                    residentNumber: '811030-1187648',     
                },
                {
                    id: 'user10',
                    name: '김준원',
                    age: 28,
                    sex: 'man',
                    phonenumber: '010-2443-6758',
                    image: "https://c.pxhere.com/images/0c/27/9d2db6e085eb55fff9569cd3f885-1428531.jpg!d",
                    area: 'gyeonggi ansan',
                    email:'junna2828@google.com',
                    accountNum: '5234-43546-234687',
                    residentNumber: '920414-1348651',     
                },
                {
                    id: 'user11',
                    name: '김민정',
                    age: 36,
                    sex: 'woman',
                    phonenumber: '010-3424-9995',
                    image: "https://c.pxhere.com/photos/67/59/woman_pregnant_asian_chinese_pregnant_woman_belly_young_love-832579.jpg!d",
                    area: 'seoul',
                    email:'mkkim8806@naver.com',
                    accountNum: '2343-43248-489456',
                    residentNumber: '841106-2208415',     
                },
                {
                    id: 'user12',
                    name: '안민호',
                    age: 30,
                    sex: 'man',
                    phonenumber: '010-1124-6654',
                    image: "https://c.pxhere.com/images/8e/9c/b7e6b3e858ad961aa1edb1cfdebf-1428657.jpg!d",
                    area: 'seoul',
                    email:'hun3329nam@gmail.com',
                    accountNum: '6423-23443-234332',
                    residentNumber: '900517-1239851',     
                },
            ],
            UserInsuranceInfo:[
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


    fetchHyperledgerQueryAllClinets() {
        return fetch(
          `http://192.168.56.1:8080/api/query/queryAllClients`
        )
          .then(response => response.json())
          .catch(error => {
            console.error(error);
          });
      }

      componentDidMount = async () => {
        await this.fetchHyperledgerQueryAllClinets().then(items => {
          this.setState({
            client : JSON.parse(items.response),
          })    
        })
      
        await this.setState({
            clientInfo : this.state.client.map((item => item.Record)),
          })    
        
        console.log("client info :" + this.state.clientInfo)
      }

    // myClientCheck(client, insurance){
    //     myClient=[];
    //     m=0, k=0, p=0;
    //     for(let i=0; i< client.length; i++){
    //         for(let j=0; j<insurance.length; j++){
    //             if(client[i].name == insurance[j].insured){
    //                 if(m==0){
    //                     myClient[m]=client[i];
    //                     m++;
    //                 }
    //                 else{
    //                     if(myClient[m-1].id != client[i].id){
    //                         myClient[m]= client[i];
    //                         m++;
    //                     }
    //                 }
    //             }
    //         }
    //     }
    //     return myClient;
    // }
    clientSex(data){
        if(data.sex=='man'){
            return '남'
        }
        else{
            return '여'
        }
    }
    //여기서 data는 insuranceData쪽 부분 말하는 거
    priceCheck(data) {
        price = 0;
        for (let i = 0; i < data.length; i++) {
            price += data[i].price
        }
        return price;
    }
    
    render() {
        console.log(this.props.ClientInfo)
        console.log(this.props.UserInsuranceInfo)
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', backgroundColor: 'white', width: '100%', height: 50, alignItems: 'center', paddingLeft: 10 }}>
                    <Text style={{ fontSize: 20, color: 'gray' }}>고객리스트</Text>
                    <View style={{ width: 10 }} />
                    {/* <Text style={{ fontSize: 15, color: 'gray' }}>총 {this.myClientCheck(this.state.ClientInfo, this.state.UserInsuranceInfo).length}명</Text> */}
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

                    data={this.state.clientInfo}
                    // data={this.myClientCheck(this.props.ClientInfo, this.props.UserInsuranceInfo)}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => { this.props.navigation.navigate('DetailCustomer', { itemId: item }) }}
                            style={{ flexDirection: 'column', width: 370, height: 80, justifyContent: 'center', paddingTop:10,paddingLeft: 10, paddingRight: 10, marginBottom: 1 }}>
                            <CustomerList image={item.image} name={item.name} sex={this.clientSex(item)} age={item.age}/>
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

const mapStateToProps = (state) => {
    return {
        UserInsuranceInfo:state.UserInsuranceInfo,
        ClientInfo:state.ClientInfo,
        hyperServer : state.hyperServer,
    }
}
export default connect(mapStateToProps)(CustomerListScreen);

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
