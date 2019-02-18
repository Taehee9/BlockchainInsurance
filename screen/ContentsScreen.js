import React from 'react';
import { StyleSheet, View, TouchableOpacity, FlatList } from 'react-native';
import VideoList from '../components/VideoList';

export default class ContentsScreen extends React.Component {
    static navigationOptions = ({ }) => {
        return {
            title: '교육 동영상',
            headerStyle: { backgroundColor: "#F5DA81" },
            headerTitleStyle: { fontSize: 20, color: "white" },
        };
    }
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { key: 1, title: '교육 동영상 1', description: '간단한 설명들이 들어가있으면 좋을 것 같긴한데.. 진짜 이렇게 구현하려는지는 잘 모르겠습니다..!! 일단 넣어보고 나중에 바꾸는걸루~', uri: 'https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=920D18A8698F6DB5D31BC1B2FC5A9A0E76FC&outKey=V127bb8010028133107a2021dc9e8493b20990ade6de1cc9361b3021dc9e8493b2099&width=544&height=306' },
                { key: 2, title: '교육 동영상 2', description: '간단한 설명들이 들어가있으면 좋을 것 같긴한데..', uri: 'https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=42AD2C27A32536A8812BE4F9E5678B749DE1&outKey=V1271b5dc2079b7d8a8825d241b37b14007b5b0e1cbefc035e4e35d241b37b14007b5&width=544&height=306' },
                { key: 3, title: '교육 동영상 3', description: '진짜 이렇게 구현하려는지는 잘 모르겠습니다..!!', uri: 'https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=A384FD800DDDAD6B9A3A5EA760548C2736AB&outKey=V122a01221f22d3f72cc62daa0d894fdc4a4d648ae59d7dc799812daa0d894fdc4a4d&width=544&height=306' },
                { key: 4, title: '교육 동영상 4', description: '일단 넣어보고 나중에 바꾸는걸루~', uri: 'https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=B67A708176414229A4C255B15CE35ED8F7CC&outKey=V123660808137f6846b285cbb560d9c0886c6997541c456eafd675cbb560d9c0886c6&width=544&height=306' },
                { key: 5, title: '교육 동영상 5', description: '딴딴해지자 튼튼해지자 똘똘해지자~ 엄마아빠 속썩이지말자~ 사고치지말자~', uri: 'https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=920D18A8698F6DB5D31BC1B2FC5A9A0E76FC&outKey=V122b0b801028133107a2021dc9e8493b2099b0d3f4a500f3a513021dc9e8493b2099&width=544&height=306' },
                { key: 6, title: '교육 동영상 6', description: '딴딴해지자 튼튼해지자 똘똘해지자~ 하루하루~ 그렇게 살다보면 ~ 정말 뭐라도 되지않을까~~', uri: 'https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=42AD2C27A32536A8812BE4F9E5678B749DE1&outKey=V1271b5dc2079b7d8a8825d241b37b14007b5b0e1cbefc035e4e35d241b37b14007b5&width=544&height=306' },
                { key: 7, title: '교육 동영상 7', description: '난 스무살때 옷도사고 머리도 세워보고~ 결국 패션의 완성은 얼굴이엇어~ 그때 느꼇지 안되는건 있구나!!', uri: 'https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=A384FD800DDDAD6B9A3A5EA760548C2736AB&outKey=V122a01221f22d3f72cc62daa0d894fdc4a4d648ae59d7dc799812daa0d894fdc4a4d&width=544&height=306' },
                { key: 8, title: '교육 동영상 8', description: '딴따라하자~ 딩가딩가하자~ 사람들에게 꿈과희망~ 전하고 노래하면~ 정말 뭐라도 되지않을까아아아아', uri: 'https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=B67A708176414229A4C255B15CE35ED8F7CC&outKey=V123660808137f6846b285cbb560d9c0886c6997541c456eafd675cbb560d9c0886c6&width=544&height=306' },
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
                            <VideoList title={item.title} description={item.description} uri={item.uri} />
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
