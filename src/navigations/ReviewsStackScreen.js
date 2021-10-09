// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Reviews} from '../views';
import BasicStyle from '../styles/BasicStyle';
import {themeColor} from '../styles/Theme';

const ReviewsStack = createStackNavigator();

function ReviewsStackScreen() {
  return (
    <ReviewsStack.Navigator initialRouteName="Home">
      <ReviewsStack.Screen
        name="Reviews"
        component={Reviews}
        options={{
          headerShown: false,
        }}
      />
    </ReviewsStack.Navigator>
  );
}

export default ReviewsStackScreen;
