// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import BasicStyle from '../styles/BasicStyle';
import {themeColor} from '../styles/Theme';
import Travel from '../views/Travel/Travel';

const TravelStack = createStackNavigator();

function TravelStackScreen() {
  return (
    <TravelStack.Navigator initialRouteName="Home">
      <TravelStack.Screen
        name="Travel"
        component={Travel}
        options={{
          title: 'Travel',
          headerShown: false,
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
    </TravelStack.Navigator>
  );
}

export default TravelStackScreen;
