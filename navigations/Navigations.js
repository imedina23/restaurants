import React from 'react'
import { NavigationContainer, TabActions } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import RestaurantsStack from './RestaurantsStack'
import FavoritesStack from  './FavoritesStack'
import TopRestaurantsStack from './TopRestaurantsStack'
import SearchStack  from './SearchStack'
import AccountStack from './AccountStack'

const Tab = createBottomTabNavigator()

export default function Navigations() {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen
            name="restaurants"
            component={RestaurantsStack}
            options={{tittle:"Restaurants"}}
            />
            <Tab.Screen
            name="favorites"
            component={FavoritesStack}
            options={{tittle:"Favorites"}}
            />
            <Tab.Screen
            name="top-restaurants"
            component={TopRestaurantsStack}
            options={{tittle:"Top Restaurants"}}
            />
            <Tab.Screen
            name="search"
            component={SearchStack}
            options={{tittle:"Search"}}
            />
            <Tab.Screen
            name="account"
            component={AccountStack}
            options={{tittle:"Account"}}
            />
        

        </Tab.Navigator>
    </NavigationContainer>
  )
}