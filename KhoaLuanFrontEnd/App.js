import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import HomeScreen from './components/giaovu/Home'
// import QLKLScreen from './components/giaovu/QuanLyKhoaLuan'
// import KLDetail from './components/giaovu/KhoaLuanDetail'
import QLHDBV from './components/giaovu/QuanLyHDBV'
import HDBVDetail from './components/giaovu/HDBVDetail'

import QLKLScreen from './components/giaovien/QuanLyKhoaLuan'
import KLDetail from './components/giaovien/KhoaLuanDetail'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const HomeStack = () => {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name='Home' component={HomeScreen} /> */}
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name='Home' component={HomeScreen} /> */}
        {/* <Stack.Screen name='QLKL' component={QLKLScreen} /> */}
        {/* <Stack.Screen name='KLDetail' component={KLDetail} /> */}
        {/* <Stack.Screen name='QLHDBV' component={QLHDBV} /> */}
        {/* <Stack.Screen name='QLHDBV' component={HDBVDetail} /> */}
        {/* <Stack.Screen name='QLKL' component={QLKLScreen} /> */}
        <Stack.Screen name='KLDetail' component={KLDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
