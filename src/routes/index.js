import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator()

import Home from './screens'
import Login from '../screens/Login'

export default function Router() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name='Login'
          component={Login}
          options={{ headerShown: false }}
        ></Drawer.Screen>
        <Drawer.Screen
          name='Home'
          component={Home}
          options={{ headerTitle: 'Pokedex API' }}
        ></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
