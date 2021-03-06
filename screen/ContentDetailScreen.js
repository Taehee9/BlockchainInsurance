import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Video } from 'expo';
import VideoPlayer from '@expo/videoplayer';

export default class ContentDetailScreen extends React.Component {
    static navigationOptions = ({ }) => {
        return {
            title: '동영상',
            headerStyle: { backgroundColor: "#ffdb00" },
            headerTitleStyle: { fontSize: 15, color: "white" },
        };
    }

    render() {
        const itemUri = this.props.navigation.getParam('itemUri');
        const itemTitle = this.props.navigation.getParam('itemTitle');
        const itemDescription = this.props.navigation.getParam('itemDescription');

        return (
            <View style={{ flexDirection: 'column', flex: 1 }}>
                <VideoPlayer
                    videoProps={{
                        shouldPlay: true,
                        resizeMode: Video.RESIZE_MODE_CONTAIN,
                        source: {
                            uri: itemUri
                        },
                    }}
                    isPortrait={true}
                    playFromPositionMillis={0}
                />

                <View style={{ padding: 20 }}>
                    <View style={{ height: 10 }} />
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{itemTitle}</Text>
                    <View style={{ height: 10 }} />
                    <Text>{itemDescription}</Text>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({

});
