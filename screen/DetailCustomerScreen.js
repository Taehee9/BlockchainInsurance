import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';

export default class DetailCustomerScreen extends React.Component {
    render() {
        const customerKey = this.props.navigation.getParam('itemId');
        return (
            <View style={styles.container}>
                <View>

                </View>
                <View>
                    <Text>보험 가입 내역</Text>
                    <FlatList
                        data={[{ key: 1, name: '김유준', sex: 'm' },
                        { key: 2, name: '김정수', sex: 'm' },
                        { key: 3, name: '임은정', sex: 'f' },
                        { key: 4, name: '권태희', sex: 'f' },
                        { key: 5, name: '카롱이', sex: 'm' },
                        { key: 6, name: '마롱이', sex: 'f' }]}
                        renderItem={(item) => {

                        }}
                        keyExtractor={(item, index) => item.name + index}
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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'baseline',
        justifyContent: 'flex-start',
    },

});
