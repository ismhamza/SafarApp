
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {BookmarkStackScreen, HomeStackScreen, HomeTabs, MoreStackScreen, SearchStackScreen} from './src/navigations';

import {BookmarkActiveIcon, BookmarkIcon, HomeActiveIcon, HomeIcon, MoreActiveIcon, MoreIcon, SearchActiveIcon, SearchIcon} from "./src/assets/Images"
import { IconCustom } from './src/components';
import { padding, themeColor } from './src/styles/Theme';
import BasicStyle from './src/styles/BasicStyle';
import { Downloads } from './src/views';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Home" component={HomeTabs} />
        <Stack.Screen 
          name="Downloads" 
          component={Downloads}
          options={ 
            { title: 'Downloads', 
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;