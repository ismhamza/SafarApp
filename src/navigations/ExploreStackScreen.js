// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Explore} from '../views';
import {IconCustom, TouchableIcon} from '../components';
import {FileIcon} from '../assets/Images';
import {View} from 'react-native';
import {themeColor} from '../styles/Theme';
import BasicStyle from '../styles/BasicStyle';

const ExploreStack = createStackNavigator();

function ExploreStackScreen({navigation}) {
  return (
    <ExploreStack.Navigator initialRouteName="Explore">
      <ExploreStack.Screen
        name="Explore"
        component={Explore}
        options={{
          headerShown: false,
        }}
      />
    </ExploreStack.Navigator>
  );
}

export default ExploreStackScreen;
