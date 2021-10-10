import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeTabs} from './src/navigations';

import {themeColor} from './src/styles/Theme';
import BasicStyle from './src/styles/BasicStyle';
import {TravellingGearListing} from './src/views';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={HomeTabs}
        />
        <Stack.Screen
          name="TravellingGearListing"
          component={TravellingGearListing}
          options={{
            title: 'Travelling Gear Store',
            headerStyle: {
              backgroundColor: themeColor.white,
              height: 70,
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              ...BasicStyle.textBoldXl,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
