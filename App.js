import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import CustomerListScreen from './screen/CustomerListScreen';
import MainAlertScreen from './screen/MainAlertScreen';
import MainScreen from './screen/MainScreen';
import WelcomeScreen from './screen/WelcomeScreen';
import PlanScreen from './screen/PlanScreen';
import DetailCustomerScreen from './screen/DetailCustomerScreen';

// Project 기본 사항. 
// App이름 : KALON
// 기본색상 : #F5DA81 (navigation header color - 노란색)
// backUpColor : #F7D358 (조금 진한 노란색)
// 배경 회색 : #D8D8D8

// const Settings = createStackNavigator({
//   Settings: {
//     screen: MyPageScreen
//   }
// })
// const ContentsNavigator = createStackNavigator({
//   contentsList: {
//     screen: ContentsScreen
//   },
//   contentDetail: {
//     screen: ContentDetailScreen
//   }
// })

const CustomerManagement = createStackNavigator({
  CustomerList: {
    screen: CustomerListScreen
  },
  DetailCustomer: {
    screen: DetailCustomerScreen
  },
  // CustomerMemo: {
  //   screen: customerMemoScreen
  // }
})

const MainNavigator = createStackNavigator({
  MainHome: {
    screen: MainScreen
  },
  MainAlert: {
    screen: MainAlertScreen,
  }
});

const TabNavigator = createBottomTabNavigator({
  홈: MainNavigator,
  고객관리: CustomerManagement,
  설계: PlanScreen,
  // 영상: ContentsNavigator,
  // 내정보: Settings,
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === '홈') {
          iconName = 'ios-list'
        } else if (routeName === '고객관리') {
          iconName = 'ios-car';
        } else if (routeName === '설계') {
          iconName = `ios-list`;
        } //else if (routeName === '영상') {
        //   iconName = `ios-options`;
        // } else if (routeName === '내정보') {
        //   iconName = `ios-options`;
        // }

        return (
          < Ionicons name={iconName} size={20} color={tintColor} />
        )
      },
    }),
    tabBarOptions: {
      activeTintColor: '#F7D358',
      inactiveTintColor: 'gray',
    },
  }
);

const AppNavigator = createStackNavigator({
  Welcome: {
    //screen: WelcomeScreen,
    screen: TabNavigator,
    navigationOptions: {
      header: null
    }
  },
  TabMain: {
    screen: TabNavigator
  },
},
  {
    headerMode: 'none',
  }
);
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

