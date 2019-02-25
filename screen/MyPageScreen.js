import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { EvilIcons } from '@expo/vector-icons';
import { ImagePicker, Permissions } from "expo";
import BasicInfo from "../components/BasicInfo";
import { connect } from 'react-redux';
import EvaluationChart from "../components/EvaluationChart";

class MyPageScreen extends React.Component {
    static navigationOptions = () => {
        return {
            title: 'My Page',
            headerStyle: { backgroundColor: "#ffdb00" },
            headerTitleStyle: { fontSize: 15, color: "white" },
        };
    }
    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    }
    constructor(props){
        super(props);
        this.state={
            isModalVisible: false,
            PlannerInfo: {
                id: 'planner1',
                name: '오유나', 
                startDay: "18.01.04",
                clientNum: 80,
                team: 'kalon',
                averageEstimation: 4,
                coin:234,
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
    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri });
            this.props.dispatch({
                type: 'PROFILE_IMAGE',
                image: result.uri
            });
        }
    };
    _toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });
        
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.imageBackStyle}>
                    <TouchableOpacity style={styles.imagePickStyle} onPress={this._pickImage}>
                            <Image
                                source={{ uri: this.props.image }}
                                style={styles.userPic}
                            />
                        <View style={styles.iconStyle}>
                            <EvilIcons name="pencil" size={20} color='gray' />
                        </View>
                    </TouchableOpacity>
                </View >

                <View>
                    <View style={{ padding: 10, paddingLeft: 18, borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: '#D8D8D8', borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#D8D8D8' }}>
                        <Text style={{ fontSize: 17 }}>설계사 기본 정보</Text>
                    </View>
                    <BasicInfo main='이름' side={this.state.PlannerInfo.name} />
                    <BasicInfo main='소속팀 이름' side={this.state.PlannerInfo.team} />
                    <BasicInfo main='할 말' side={this.state.PlannerInfo.comment} />

                    <View style={{ height: 10 }} />

                    <View style={{ padding: 10, paddingLeft: 18, borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: '#D8D8D8', borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#D8D8D8' }}>
                        <Text style={{ fontSize: 17 }}>연락처</Text>
                    </View>
                    <BasicInfo main='연락처' side={this.state.PlannerInfo.phoneNum} />
                    <BasicInfo main='이메일' side={this.state.PlannerInfo.certificateemail} />

                    <View style={{ padding: 10, paddingLeft: 18, borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: '#D8D8D8', borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#D8D8D8' }}>
                        <Text style={{ fontSize: 17 }}>설계사 평가 지표</Text>
                    </View>
                    <View style={styles.myPageViewStyle}>
                        <Text style={styles.fontStyle}>내 평가 확인하기</Text>
                    </View>
                    <EvaluationChart onPress={() => this.setState(this._toggleModal)}
                            isVisible={this.state.isModalVisible}
                            onPressToggle={this._toggleModal}/>

                    <View style={{ height: 10 }} />

                    <View style={{ padding: 10, paddingLeft: 18, borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: '#D8D8D8', borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#D8D8D8' }}>
                        <Text style={{ fontSize: 17 }}>회원탈퇴</Text>
                    </View>
                    <View style={styles.myPageViewStyle}>
                        <Text style={styles.fontStyle}>KALON을 더 이상 이용하지 않을 경우 회원탈퇴를 </Text>
                        <Text style={styles.fontStyle}>진행해주세요.</Text>
                    </View>
                    <TouchableOpacity style={styles.buttonStyle} >
                        <Text style={{ color: "white" }}>탈퇴하기</Text>
                    </TouchableOpacity>
                    <View style={{ height: 10 }} />
                </View>
            </ScrollView >
        );
    }
}
const mapStateToProps = (state) => {
    return {
        image: state.image,
        PlannerInfo:state.PlannerInfo
    }
}
export default connect(mapStateToProps)(MyPageScreen);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    userPic:{
        width: 100,
        height: 100,
        borderRadius: 5,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'gray'
    },
    imageBackStyle: {
        height: 150,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    imagePickStyle: {
        width: 100,
        height: 100,
        borderRadius: 5,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'gray',
    },
    iconStyle: {
        backgroundColor: "white",
        width: 30,
        height: 30,
        position: "absolute",
        borderColor: "#D8D8D8",
        borderWidth: 1,
        bottom: -5,
        right: -10,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    myPageViewStyle: {
        width: "100%",
        paddingLeft: 20,
        marginTop: 20,
        marginBottom: 20,
        flexDirection: "column"
    },
    fontStyle: {
        color: "#A4A4A4",
        fontSize: 15,
    },
    buttonStyle: {
        width: 100,
        height: 40,
        backgroundColor: '#A4A4A4',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
    }
});
