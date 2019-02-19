import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import IconText from '../components/IconText';
import HomeButton from '../components/HomeButton';

export default class MainPage extends React.Component {
    static navigationOptions = ({ }) => {
        return {
            title: 'KALON',
            headerStyle: { backgroundColor: "#F5DA81" },
            headerTitleStyle: { fontSize: 22, color: "white" },
        };
    }

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const data = [
            { key: 'a', name: 'ios-contacts', title: '소속팀', sub: 'KALON' },
            { key: 'b', name: 'ios-calendar', title: '경력', sub: '3년' },
            { key: 'c', name: 'ios-thumbs-up', title: '신뢰도', sub: '88%' },
            { key: 'd', name: 'ios-people', title: '고객수', sub: '7명' },
            { key: 'e', name: 'ios-pin', title: '주 활동지역', sub: '일산' },
            { key: 'f', name: 'ios-chatboxes', title: 'comment', sub: '화이팅!' }
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
            <ScrollView style={styles.container}>
                <View style={{ alignItems: 'center' }}>
                    <View style={styles.userInfo}>
                        <Image style={styles.userPic}
                            source={{ uri: 'https://lh3.googleusercontent.com/ozdfqprPAfTJNWyX1NImlzUFtS1xdoeOKbr4J86P5oYRcIGYihzAkqzaGLE5oSOWcE3Vz2MNH1Lr9V7k_RdlmpdkzSRs5GKjPFtjamRTxc2qGUab4-X-YyH6H1hessw6N2mK3wNx6A51Ko55i9ttwov9Y163R3Bx1KZHAob-E87hL2yRS9A-BDLdhfR0yS-GvUZf54PjJ1VT5gtLzu8h8v7rMe_q9X0kHDtPyKP_zCzImQI2vy_J0HcR0bBuWZYLxm3JSGHvklpUonDerXuX1JpNHgvUumOPFBXB8aQrtbPbtwMdB1_MAebFAotxmmzyxIlPSi9OkY1Pm2TkYBIkEBQXuUWZz5LLAUwtowi3kQOJmM7a6amPiQjgpUO816kl3q85p9MoRAhdkgQDgYMA2igQZ_XVEtLddMg-ltPqBIi5K_vx4GrTtTIN6wq1oIjqa8CaBvaPta1InNV5-epXktD-NpI5yVzXprV45D51QMfqbyCk05niChyshXPbHBTBHjLK9HU-lNLIjlpXgfIzgu124VMBdUyFRXHYzz5fN-y2Qn_YldnZL4vMgIILrY0QeBkmze5ahg3BThu5IuYanD0DTtZwwqYUPAAlNCjx0vQN0lS10UmtTgZILmKJpbTMDPRUhLAFNB1BwJSXDZGhOmtA=w635-h845-no' }} />
                        <View style={{ marginTop: 10, marginBottom: 15 }}>
                            <Text style={{ fontSize: 20, color: '#FFBB00', fontWeight: "300" }}>카롱이</Text>
                        </View>
                        <View >
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <View style={styles.line} />
                                {items}
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <HomeButton title='일정관리' iconName='inbox' onPress={() => this.props.navigation.navigate('Calendar')} />
                        <HomeButton title='해야 할 일' iconName='inbox' onPress={() => this.props.navigation.navigate('Todo')} />
                    </View>




                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#D8D8D8'
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
        borderRadius: 15
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
    adImage: {
        height: 106,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabButtonView: {
        width: '100%',
        height: 40,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingLeft: 10,
        flexDirection: 'row'
    },
    tabButton: {
        borderWidth: 0.5,
        borderRadius: 25,
        width: 80,
        height: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    newsButton: {
        height: 50,
        borderColor: "#F2F2F2",
        borderWidth: 1,
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: 10
    },
    moreButton: {
        backgroundColor: 'white',
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
