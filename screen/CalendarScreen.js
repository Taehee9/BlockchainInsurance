import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Agenda } from "react-native-calendars";

//item을 click했을 때 TextInput란이 뜨게 하고 그 글을 적은 후에 확인 버튼을 누르면
// items[strTime].name에 글 적은 것을 집어넣기! 
export default class CalendarScreen extends React.Component {
    static navigationOptions = ({ }) => {
        return {
          title: '내 일정',
          headerStyle: { backgroundColor: "#F5DA81" },
          headerTitleStyle: { fontSize: 22, color: "white" },
        };
    }

    constructor(props) {
        super(props);
        this.state = {
          items: {}
        };
    }

    render() {
        return (
            <Agenda
                items={this.state.items}
                loadItemsForMonth={this.loadItems.bind(this)}
                selected={Date()}
                renderItem={this.renderItem.bind(this)}
                renderEmptyDate={this.renderEmptyDate.bind(this)}
                rowHasChanged={this.rowHasChanged.bind(this)}
            />
        );
    }

    //밑에 하루하루 일정이 보이는 부분
    loadItems(day) {
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                //선택된? 날짜 => 2019-01-24
                const strTime = this.timeToString(time);
                if (!this.state.items[strTime]) {
                this.state.items[strTime] = [];
                const numItems = Math.floor(Math.random() * 5);
                for (let j = 0; j < numItems; j++) {
                    this.state.items[strTime].push({
                        name: 'Item for ' + strTime,
                        height: Math.max(50, Math.floor(Math.random() * 150))
                    });
                }
                }
            }
            // this.state.items
            // 2018-11-27: Array(2)
            //     0:
            //     height: 129
            //     name: "Item for 2018-11-27"
            //     __proto__: Object
            //     1: {name: "Item for 2018-11-27", height: 78}
            //     length: 2
            //console.log(this.state.items);
            const newItems = {};
            //this.state.items의 값들 중 key값에 접근해서 newsItems에 this.state.items의 값을 넣는다! 
            //setState하는데 굳이 이것을 왜?? ................어렵다
            Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
            this.setState({
                items: newItems
            });
        }, 1000);
        // console.log(`Load Items for ${day.year}-${day.month}`);
    }

    renderItem(item) {
        return (
        <View style={[styles.item, {height: item.height}]}><Text>{item.name}입니다아아</Text></View>
        );
    }

    renderEmptyDate() {
        return (
        <View style={styles.emptyDate}></View>
        );
    }

    rowHasChanged(r1, r2) {
        return r1.name !== r2.name;
    }

    timeToString(time) {
        const date = new Date(time);
        console.log(date.toISOString().split('T'));
        //date.toISOString() = 2019-01-24T00:00:00.000Z
        // T를 기준으로 나눈 다음 0번째 => 2019-01-24
        return date.toISOString().split('T')[0];
    }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});
