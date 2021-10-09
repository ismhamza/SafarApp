// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {themeColor} from '../styles/Theme';
import BasicStyle from '../styles/BasicStyle';
import {Guidance} from '../views';

const GuidanceStack = createStackNavigator();

function GuidanceStackScreen() {
  return (
    <GuidanceStack.Navigator initialRouteName="Home">
      <GuidanceStack.Screen
        name="Guidance"
        component={Guidance}
        options={{
          headerShown: false,
        }}
      />
    </GuidanceStack.Navigator>
  );
}

export default GuidanceStackScreen;
