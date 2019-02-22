import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { BarChart } from 'react-native-chart-kit'

export default class EvaluationChartScreen extends React.Component {
    static navigationOptions = ({ }) => {
        return {
            title: '설계사평가지표',
            headerStyle: { backgroundColor: "#ffdb00" },
            headerTitleStyle: { fontSize: 15, color: "white" },
        };
    }

    render() {
        const data = {
            labels: ['자동차보험', '보장성보험', '저축성보험', '태아보험'],
            datasets: [{
                data: [20, 45, 28, 80]
            }]
        }
        const chartConfig = {
            backgroundGradientFrom: '#F5DA81',
            backgroundGradientTo: '#F5DA81',
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`
        }
        return (
            <View style={styles.container}>
                <BarChart
                    data={data}
                    width={350}
                    height={300}
                    chartConfig={chartConfig}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#D8D8D8',
        alignItems: 'center',
        marginTop: 10
    },

});
