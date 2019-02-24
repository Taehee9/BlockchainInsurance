import React from 'react';
import { StyleSheet, View, TouchableOpacity, FlatList } from 'react-native';
import VideoList from '../components/VideoList';

export default class ContentsScreen extends React.Component {
    static navigationOptions = ({ }) => {
        return {
            title: '교육 동영상',
            headerStyle: { backgroundColor: "#ffdb00" },
            headerTitleStyle: { fontSize: 15, color: "white" },
        };
    }
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { key: 1, title: '꼭 알아야할 자동차보험 기초', description: '꼭 알아야만 하는 자동차 보험들을 담았습니다. 기초부분 교육이 필요하신 분들 꼭 들어주세요~', image:require('../assets/1.png'),uri: 'https://youtu.be/TdCMBOE_1Qs' },
                { key: 2, title: '최대한 많은 내용 담은 자동차 보험', description: '자동차 보험의 모든 것! 최대한 많은 내용을 꽉꽉 담은 교육 영상!!', image:require('../assets/2.png'),uri: 'https://youtu.be/_Csl2X1rxoM' },
                { key: 3, title: '백지 한장으로 끝내는 보장성보험', description: '한 장이면 모든 내용 다~ 알 수 있는 보장성 보험 교육!', image:require('../assets/3.png'),uri: 'https://youtu.be/x77ypkbSw3c' },
                { key: 4, title: '보장성보험 - 진단비 준비방법, 갱신형 보험활용 방법', description: '진단비 준비 방법부터 갱신형 보험활용 방법까지 모든 내용을 담은 보장성 보험 교육!',image:require('../assets/4.png'), uri: 'https://youtu.be/eHJhbl4t7VM' },
                { key: 5, title: '최대한 빨리 끝내는 저축성 보험 상담', description: '시간이 없다! 단기간에 속성 과외식 교육! 저축성 보험 상담입니다!', image:require('../assets/5.png'),uri: 'https://youtu.be/7FTOzahtIxU' },
                { key: 6, title: '저축성 보험', description: '저축성 보험 교육입니다.', image:require('../assets/6.png'),uri: 'https://youtu.be/0wq_bf_6jm0' },
                { key: 7, title: '기적의 태아보험 보장 내용', description: '태아보험과 어린이보험의 차이부터 모든 보장내용까지 모든 것을 다 담은 교육입니다.',image:require('../assets/7.png'), uri: 'https://youtu.be/R36CSEhDNQg' },
                { key: 8, title: '태아보험 알뜰한 설계안', description: '태아보험을 알뜰하게 설계하자! 알뜰한 태아보험 설계안', image:require('../assets/8.png'), uri: 'https://youtu.be/mp5u4kNsqh0' },
            ]
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('contentDetail', { itemUri: item.uri, itemTitle: item.title, itemDescription: item.description }) }}>
                            <VideoList title={item.title} description={item.description} uri={item.image} />
                        </TouchableOpacity>
                    )}
                    keyExtractor={(index, item) => index + item}
                    ItemSeparatorComponent={() => (<View style={{ height: StyleSheet.hairlineWidth, backgroundColor: '#D8D8D8' }} />)}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white'
    },
});
