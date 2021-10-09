// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Bookmark, Downloads, Home, More, Search} from '../views';
import {IconCustom, TouchableIcon} from '../components';
import {
  ExploreActiveIcon,
  ExploreIcon,
  FileIcon,
  GuideActiveIcon,
  GuideIcon,
  PinActiveIcon,
  PinIcon,
  ReviewsActiveIcon,
  ReviewsIcon,
} from '../assets/Images';
import {View} from 'react-native';
import {padding, themeColor} from '../styles/Theme';
import BasicStyle from '../styles/BasicStyle';
import {} from '../../src/assets/Images';
import HomeStackScreen from './ExploreStackScreen';
import {BookmarkStackScreen, MoreStackScreen, SearchStackScreen} from '.';
import ExploreStackScreen from './ExploreStackScreen';
import TravelStackScreen from './TravelStackScreen';

const Tab = createBottomTabNavigator();

function HomeTabs({navigation}) {
  const tabBarOptions = {
    tabStyle: {
      paddingVertical: padding.xs,
    },
    style: {
      height: 65,
    },
    labelStyle: {
      ...BasicStyle.textRegularXs,
    },
    activeTintColor: themeColor.primary,
    inactiveTintColor: themeColor.grayDark,
  };

  const screenOptions = ({route}) => ({
    tabBarIcon: ({focused, color, size}) => {
      let iconName;

      if (route.name === 'Explore') {
        iconName = focused ? ExploreActiveIcon : ExploreIcon;
      } else if (route.name === 'Travel') {
        iconName = focused ? PinActiveIcon : PinIcon;
      } else if (route.name === 'Bookmark') {
        iconName = focused ? GuideActiveIcon : GuideIcon;
      } else if (route.name === 'More') {
        iconName = focused ? ReviewsActiveIcon : ReviewsIcon;
      }

      // You can return any component that you like here!
      return <IconCustom source={iconName} width={20} height={18} />;
    },
  });

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={screenOptions}
      tabBarOptions={tabBarOptions}>
      <Tab.Screen name="Explore" component={ExploreStackScreen} />
      <Tab.Screen name="Travel" component={TravelStackScreen} />
      <Tab.Screen name="Bookmark" component={BookmarkStackScreen} />
      <Tab.Screen name="More" component={MoreStackScreen} />
    </Tab.Navigator>
  );
}

export default HomeTabs;
