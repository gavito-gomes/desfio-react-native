import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

import PokemonList from '../screens/PokemonList'
import PokemonData from '../screens/PokemonData'

export default function Screens() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='PokemonList'
        component={PokemonList}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name='PokemonData'
        component={PokemonData}
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  )
}
