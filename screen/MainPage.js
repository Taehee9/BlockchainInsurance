import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import IconText from '../components/IconText';
import HomeButton from '../components/HomeButton';
import CustomerNotice from '../components/CustomerNotice';
import { connect } from 'react-redux';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationEvents } from 'react-navigation';

class MainPage extends React.Component {
    static navigationOptions = ({ }) => {
        return {
            title: 'BOINDA',
            headerStyle: { backgroundColor: "#ffdb00" },
            headerTitleStyle: { fontSize: 15, color: "white" },
        };
    }

    constructor(props) {
        super(props);
        this.state = {
            PlannerInfo: {
                id: 'planner1',
                name: '오유나', 
                startDay: "18.01.04",
                clientNum: 80,
                team: 'kalon',
                coin: 234,
                uri: "https://c.pxhere.com/images/87/00/1279d3d870b042d42d56be594ee3-1428661.jpg!d",
                smartRecommedPoint: 10,
                comment: "재무설계 가능한 설계사",
                residentNumber: '900629',
                sex: 'woman',
                activeArea: 'seoul',
                career: 'KB손해보험 2년차',
                phoneNum: '010-2343-4464',
                certificateemail:'yoona2343@gmail.com',
            },

        }
    }
    companyLogo(companyName) {
        if (companyName == "삼성") {
            return "https://t1.daumcdn.net/news/201706/22/sfdirect/20170622162421882zmiv.jpg";
          } else if (companyName == "국민")
            return "https://yt3.ggpht.com/a-/AN66SAxGY8-zefx7A2NaQGRgY0SIm20xE2vr4aIGCg=s900-mo-c-c0xffffffff-rj-k-no";
          else if (companyName == "메리츠")
            return "http://image.nsmall.com/itemimg/3/26/963/26451963_S.jpg";
        }
    componentWillMount(){
        this.props.dispatch({
            type: 'PROFILE_IMAGE',
            image: this.state.PlannerInfo.uri
        });
    }
    componentDidMount = async () => {
        await this.fetchHyperledgerData().then(items => {
          this.props.dispatch({
            type: "ADD_PlannerInfo",
            PlannerInfo: JSON.parse(items.response),
          })
        }  
      )
      await this.fetchHyperledgerInsuranceDatass().then(items => {
        this.props.dispatch({
          type: "ADD_UserInsuranceInfo",
          UserInsuranceInfo: JSON.parse(items.response),
        })
      }  
    )
    await this.fetchHyperledgerClientData().then(items => {
        this.props.dispatch({
          type: "ADD_ClientInfo",
          ClientInfo: JSON.parse(items.response),
        })
      }  
    )
    }
    fetchHyperledgerData() {
        return fetch(
          `http://${this.props.hyperServer}:8080/api/query/queryAllPlanners`
        )
          .then(response => response.json())
          .catch(error => {
            console.error(error);
          });
      }
      fetchHyperledgerInsuranceDatass() {
        return fetch(
          `http://${this.props.hyperServer}:8080/api/queryss/queryAllContractedInsurance`
        )
          .then(response => response.json())
          .catch(error => {
            console.error(error);
          });
      }
    
    fetchHyperledgerClientData() {
        return fetch(
          `http://${this.props.hyperServer}:8080/api/query/queryAllClients`
        )
          .then(response => response.json())
          .catch(error => {
            console.error(error);
          });
      }
    render() {
        console.log(this.props.PlannerInfo[0].name);
        console.log(this.props.ClientInfo);
        console.log(this.props.UserInsuranceInfo);
        const data = [
            { key: 'a', name: 'ios-contacts', title: '소속팀', sub: this.state.PlannerInfo.team },
            { key: 'b', name: 'ios-calendar', title: '경력', sub: this.state.PlannerInfo.career },
            { key: 'c', name: 'ios-thumbs-up', title: '점수', sub: this.state.PlannerInfo.smartRecommedPoint },
            { key: 'd', name: 'ios-people', title: '고객수', sub: this.state.PlannerInfo.clientNum +' 명' },
            { key: 'e', name: 'ios-pin', title: '주 활동지역', sub: this.state.PlannerInfo.activeArea },
            { key: 'f', name:'ios-cash', title: '포인트', sub:this.state.PlannerInfo.coin +' BoC'}
        ]
        const notice= [
            {key:'a', logo:this.companyLogo('국민'), name:'안민호', sub: '보험금 청구가 접수되었습니다.'},
            {key:'b', logo:this.companyLogo('메리츠'), name:'박대우', sub: '보험금 해지 문의하셨습니다.'},
            {key:'c', logo:this.companyLogo('국민'), name:'최유리', sub: '보험금 처리가 종결되었습니다.' },
            {key:'d', logo:this.companyLogo('삼성'), name:'박진형', sub: '보험금 처리가 종결되었습니다.'},
            {key:'e', logo:this.companyLogo('삼성'), name:'김준원', sub: '보험금 해지 문의하셨습니다.'},
            {key:'f', logo:this.companyLogo('국민'), name:'김민정', sub: '보험금 청구가 접수되었습니다.'},
        ]
        const items = data.map((item) => {
            return (
                <View style={styles.cont} key={item.key}>
                    <IconText name={item.name} title={item.title} style={{ paddingRight: '10%' }}></IconText>
                    <Text style={{ color: '#A4A4A4', paddingTop: 7 }}>{item.sub}</Text>
                </View>
            );
        })
        return (
            <View style={styles.container}>
                <NavigationEvents
                        onWillFocus={async() => {
                                await this.fetchHyperledgerData().then(items => {
                                  this.props.dispatch({
                                    type: "ADD_PlannerInfo",
                                    PlannerInfo: JSON.parse(items.response),
                                  })
                                }  
                              )
                              await this.fetchHyperledgerInsuranceDatass().then(items => {
                                this.props.dispatch({
                                  type: "ADD_UserInsuranceInfo",
                                  UserInsuranceInfo: JSON.parse(items.response),
                                })
                              }  
                            )
                            await this.fetchHyperledgerClientData().then(items => {
                                this.props.dispatch({
                                  type: "ADD_ClientInfo",
                                  ClientInfo: JSON.parse(items.response),
                                })
                              }  
                            )
                        }} />   
                {<View style={{ alignItems: 'center' }}>
                    <View style={styles.userInfo}>
                        <Image style={styles.userPic}
                            source={{ uri: this.props.image || '' }} />
                        <View style={{ marginTop: 10, marginBottom: 15 }}>
                            <Text style={{ fontSize: 20, color: '#be9c00', fontWeight: "300" }}>{this.state.PlannerInfo.name}</Text>
                        </View>
                        <View style={{ width: '100%', marginTop: 5 }}>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <View style={styles.line} />
                                {items}
                            </View>
                            <View style={{height:5}} />
                            <View style={{paddingLeft:20, flexDirection:'row'}}>
                                <Ionicons name='ios-chatboxes' color='#a4a4a4' size={20} />
                                <View style={{width:2}} />
                                <Text style={{color:'#A4A4A4', fontSize:15}}>할 말   {this.state.PlannerInfo.comment}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <HomeButton title='일정관리' iconName='inbox' onPress={() => this.props.navigation.navigate('Calendar')} />
                        <HomeButton title='해야 할 일' iconName='inbox' onPress={() => this.props.navigation.navigate('TodoList')} />
                    </View>

                    <View style={{width:'100%', height: 190}}>
                        <FlatList
                            style={{ paddingLeft: 2, backgroundColor: 'white' }}
                            data={notice}
                            renderItem={({ item }) => (
                                <CustomerNotice logo={item.logo} name={item.name} description={item.sub} />
                            )}
                            keyExtractor={(index, item) => index + item}
                            ItemSeparatorComponent={() => (<View style={{ height: StyleSheet.hairlineWidth, backgroundColor: '#D8D8D8' }} />)}
                        />
                    </View>

                </View>}
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        image: state.image,
        PlannerInfo:state.PlannerInfo,
        hyperServer : state.hyperServer,
        UserInsuranceInfo:state.UserInsuranceInfo,
        ClientInfo:state.ClientInfo,
    }
}
export default connect(mapStateToProps)(MainPage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f8f8f8'
    },
    userInfo: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 280,
        backgroundColor: 'white',
        marginBottom: 1
    },
    userPic: {
        width: 100,
        height: 100,
        borderRadius: 5,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'gray'
    },
    cont: {
        width: '50%',
        height: 30,
        paddingLeft: '5%',
        flexDirection: 'row'
    },
    line: {
        position: 'absolute',
        height: '90%',
        width: StyleSheet.hairlineWidth,
        left: '50%',
        backgroundColor: 'gray'
    },

});
