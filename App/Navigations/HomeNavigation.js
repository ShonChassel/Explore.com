import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import PlaceDetail from '../Components/PlaceDetail/PlaceDetail';

export default function HomeNavigation() {
    const Stack=createStackNavigator();

  return (
    <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='place-detail' component={PlaceDetail}/>
    </Stack.Navigator>
  )
}