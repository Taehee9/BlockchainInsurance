import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import TextIcon from '../components/TextIcon';
import HomeButton from '../components/HomeButton';
import { FontAwesome } from '@expo/vector-icons';

export default class MainScreen extends React.Component {
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
      pressFirst: true,
      query: '보험시장',
      NewsItems: {}
    }
  }

  componentDidMount() {
    this.fetchNews().then(items =>
      this.setState({
        NewsItems: items
      })
    );
  }

  fetchNews(page = 1) {
    const display = 10;
    const start = display * (page - 1) + 1;
    var query = this.state.query;

    return fetch(`https://openapi.naver.com/v1/search/news.json?query=${query}&display=${display}&start=${start}`,
      {
        headers: {
          "X-Naver-Client-Id": "vTiJhVKTgkFtmAOe1aRw",
          "X-Naver-Client-Secret": "KNnOp1CgQd"
        }
      }).then(response => response.json())
      .then(responseJson => {
        return responseJson.items;
      })
      .catch(error => { console.error(error); });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{ alignItems: 'center' }}>
          <View style={styles.userInfo}>
            <Image style={styles.userPic}
              source={{ uri: 'https://lh3.googleusercontent.com/ozdfqprPAfTJNWyX1NImlzUFtS1xdoeOKbr4J86P5oYRcIGYihzAkqzaGLE5oSOWcE3Vz2MNH1Lr9V7k_RdlmpdkzSRs5GKjPFtjamRTxc2qGUab4-X-YyH6H1hessw6N2mK3wNx6A51Ko55i9ttwov9Y163R3Bx1KZHAob-E87hL2yRS9A-BDLdhfR0yS-GvUZf54PjJ1VT5gtLzu8h8v7rMe_q9X0kHDtPyKP_zCzImQI2vy_J0HcR0bBuWZYLxm3JSGHvklpUonDerXuX1JpNHgvUumOPFBXB8aQrtbPbtwMdB1_MAebFAotxmmzyxIlPSi9OkY1Pm2TkYBIkEBQXuUWZz5LLAUwtowi3kQOJmM7a6amPiQjgpUO816kl3q85p9MoRAhdkgQDgYMA2igQZ_XVEtLddMg-ltPqBIi5K_vx4GrTtTIN6wq1oIjqa8CaBvaPta1InNV5-epXktD-NpI5yVzXprV45D51QMfqbyCk05niChyshXPbHBTBHjLK9HU-lNLIjlpXgfIzgu124VMBdUyFRXHYzz5fN-y2Qn_YldnZL4vMgIILrY0QeBkmze5ahg3BThu5IuYanD0DTtZwwqYUPAAlNCjx0vQN0lS10UmtTgZILmKJpbTMDPRUhLAFNB1BwJSXDZGhOmtA=w635-h845-no' }} />
            <View style={{ justifyContent: 'center' }}>
              <View style={{ marginBottom: 15 }}>
                <Text style={{ fontSize: 20, color: '#FFBB00', fontWeight: "300" }}>카롱이</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <TextIcon title="신뢰도" icon={<FontAwesome name="heart-o" size={15} color='gray' />}> </TextIcon>
                <Text style={{ color: 'gray' }}> 77%</Text>
              </View>
              <View style={{ height: 7 }} />
              <View style={{ flexDirection: 'row' }}>
                <TextIcon title="좋아요" icon={<FontAwesome name="thumbs-o-up" size={15} color='gray' />}> </TextIcon>
                <Text style={{ color: 'gray' }}> 88%</Text>
              </View>
              <View style={{ height: 7 }} />
              <View style={{ flexDirection: 'row' }}>
                <TextIcon title="싫어요" icon={<FontAwesome name="thumbs-o-down" size={15} color='gray' />}> </TextIcon>
                <Text style={{ color: 'gray' }}> 10%</Text>
              </View>

            </View>
          </View>

          <View style={{ flexDirection: 'row', height: 60 }}>
            <HomeButton title='일정관리' iconName='inbox' onPress={() => this.props.navigation.navigate('Calendar')} />
            <HomeButton title='해야 할 일' iconName='inbox' onPress={() => this.props.navigation.navigate('Todo')} />
            <HomeButton title='고객 관리 현황' iconName='inbox' />
          </View>

          {/*
            고객 관리 현황 부분 버튼을 없애고 이 부분에
            고객 생일 다가오는 사람, 신청한 사람 등의 알림을 그냥 뜨게! 
            즉 한번에 볼 수 있게!!(중요 정보들만)
            
            새소식, 보험뉴스 이 부분은 지금 집어넣기는 했지만, 없앨 수도 있음!!!
            너무 이것저것 많은 UI보다 깔끔한게 좋을 거 같아서...?
          */}

          <TouchableOpacity style={styles.adImage}>
            <Image
              source={{ uri: "https://t1.daumcdn.net/cfile/tistory/217BD13E583B9F760F" }}
              style={{ width: '100%', height: 100 }}
            />
          </TouchableOpacity>
          <View style={styles.tabButtonView}>
            <TouchableOpacity
              style={[styles.tabButton, { borderColor: this.state.pressFirst == true ? "#F5DA81" : "white" }]}
              onPress={() => this.setState({ pressFirst: true, query: '보험시장' },
                () => { this.fetchNews().then(items => this.setState({ NewsItems: items })); }
              )}>
              <Text style={{ fontSize: 12, color: this.state.pressFirst == true ? '#515151' : '#A4A4A4' }}>새소식</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tabButton, { borderColor: this.state.pressFirst == false ? "#F5DA81" : "white" }]}
              onPress={() => this.setState({ pressFirst: false, query: 'GA시장' },
                () => { this.fetchNews().then(items => this.setState({ NewsItems: items })); }
              )} >
              <Text style={{ fontSize: 12, color: this.state.pressFirst == false ? '#515151' : '#A4A4A4' }}>보험뉴스</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: '100%' }}>
            <FlatList
              data={this.state.NewsItems}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.newsButton}>
                  <Text style={{ fontSize: 13 }}>{item.title}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(index, item) => index + item}
            />
          </View>
          {/*<TouchableOpacity style={styles.moreButton}>
            <Text style={{ fontSize: 14, color: '#515151' }}>더보기</Text>
              </TouchableOpacity>*/}
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
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 140,
    backgroundColor: 'white',
    marginBottom: 3
  },
  userPic: {
    width: 90,
    height: 110,
    borderRadius: 15,
    marginLeft: 15,
    marginRight: 10
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
