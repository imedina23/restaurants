
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import TopRestaurants from '../screens/TopRestaurants'


const Stack = createStackNavigator()

export default function TopRestaurantsStack() {
  return (

    <Stack.Navigator>
        <Stack.Screen 
            name="search"
            component={TopRestaurants}
            options={{title: "Top 5"}}
        
        />
    </Stack.Navigator>
   
  )
}