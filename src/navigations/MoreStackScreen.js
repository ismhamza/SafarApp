// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {More} from '../views';
import BasicStyle from '../styles/BasicStyle';
import {themeColor} from '../styles/Theme';

const MoreStack = createStackNavigator();

function MoreStackScreen() {
  return (
    <MoreStack.Navigator initialRouteName="Home">
      <MoreStack.Screen
        name="More"
        component={More}
        options={{
          title: 'More',
          headerStyle: {
            backgroundColor: themeColor.primaryBg,
            height: 70,
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12,
          },
          headerTintColor: themeColor.secondary,
          headerTitleStyle: {
            ...BasicStyle.textBoldXxxl,
          },
        }}
      />
    </MoreStack.Navigator>
  );
}

export default MoreStackScreen;
