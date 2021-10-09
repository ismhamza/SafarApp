// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {Bookmark} from "../views"
import { themeColor } from '../styles/Theme';
import BasicStyle from '../styles/BasicStyle';

const BookmarkStack = createStackNavigator();

function BookmarkStackScreen() {
  return (
      <BookmarkStack.Navigator initialRouteName="Home">
        <BookmarkStack.Screen 
          name="Bookmark" 
          component={Bookmark} 
          options={
            { 
              title: 'Bookmark', 
              headerStyle: {
                backgroundColor: themeColor.primaryBg,
                height:70,
                borderBottomLeftRadius: 12,
                borderBottomRightRadius: 12
              },
              headerTintColor: themeColor.secondary,
              headerTitleStyle: {
                ...BasicStyle.textBoldXxxl
              },  
            }
          } />
      </BookmarkStack.Navigator>
  );
}

export default BookmarkStackScreen;