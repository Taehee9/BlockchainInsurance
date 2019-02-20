import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { EvilIcons } from '@expo/vector-icons';
import { ImagePicker, Permissions } from "expo";
import BasicInfo from "../components/BasicInfo";

export default class MyPageScreen extends React.Component {
    static navigationOptions = () => {
        return {
            title: 'My Page',
            headerStyle: { backgroundColor: "#F5DA81" },
            headerTitleStyle: { fontSize: 22, color: "white" },
        };
    }
    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    }
    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        } else {
            this.props.dispatch({
                type: 'PROFILE_IMAGE',
                image: result
            });
        }
    };
    state = {
        image: null
    }
    render() {

        let { image } = this.state;
        return (
            <ScrollView style={styles.container}>
                <View style={styles.imageBackStyle}>
                    <TouchableOpacity style={styles.imagePickStyle} onPress={this._pickImage}>
                        {image && (
                            <Image
                                source={{ uri: image }}
                                style={{ borderRadius: 30, width: 105, height: 105 }}
                            />
                        )}
                        <View style={styles.iconStyle}>
                            <EvilIcons name="pencil" size={20} color='gray' />
                        </View>
                    </TouchableOpacity>
                </View >

                <View>
                    <View style={{ padding: 10, paddingLeft: 18, borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: '#D8D8D8', borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#D8D8D8' }}>
                        <Text style={{ fontSize: 17 }}>설계사 기본 정보</Text>
                    </View>
                    <BasicInfo main='사용자 ID' side='th9509' />
                    <BasicInfo main='이름' side='권태희' />
                    <BasicInfo main='소속팀 이름' side='KALON' />
                    <BasicInfo main='나이' side='25' />

                    <View style={{ height: 10 }} />

                    <View style={{ padding: 10, paddingLeft: 18, borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: '#D8D8D8', borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#D8D8D8' }}>
                        <Text style={{ fontSize: 17 }}>연락처</Text>
                    </View>
                    <BasicInfo main='연락처' side='010-7231-9969' />
                    <BasicInfo main='이메일' side='th9509@gmail.com' />

                    <View style={{ padding: 10, paddingLeft: 18, borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: '#D8D8D8', borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#D8D8D8' }}>
                        <Text style={{ fontSize: 17 }}>설계사 평가 지표</Text>
                    </View>
                    <View style={styles.myPageViewStyle}>
                        <Text style={styles.fontStyle}>내 평가 확인하기</Text>
                    </View>
                    <TouchableOpacity style={styles.buttonStyle} onPress={() => this.props.navigation.navigate('EvaluationChart')} >
                        <Text style={{ color: "white" }}>조회하기</Text>
                    </TouchableOpacity>

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    imageBackStyle: {
        height: 150,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    imagePickStyle: {
        width: 105,
        height: 105,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'gray',
        borderRadius: 30
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
