
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Restaurants from '../screens/Restaurants'

const Stack = createStackNavigator()

export default function RestaurantsStack() {
  return (

    <Stack.Navigator>
        <Stack.Screen 
            name="Restaurants"
            component={Restaurants}
            options={{title: "Restaurants"}}
        
        />
    </Stack.Navigator>
   
  )
}