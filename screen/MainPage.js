import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import IconText from '../components/IconText';
import HomeButton from '../components/HomeButton';
import { connect } from 'react-redux';

class MainPage extends React.Component {
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
                            source={{ uri: ' ' || this.props.image }} />
                        <View style={{ marginTop: 10, marginBottom: 15 }}>
                            <Text style={{ fontSize: 20, color: '#FFBB00', fontWeight: "300" }}>카롱이</Text>
                        </View>
                        <View style={{ width: '100%', marginTop: '5%' }}>
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

                    <View>

                    </View>

                </View>
            </ScrollView>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        image: state.image
    }
}
export default connect(mapStateToProps)(MainPage);

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
        borderRadius: 15,
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
