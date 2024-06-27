import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashboardScreen from '../../screen/DashboardScreen';
import ConversionScreen from '../../screen/ConversionScreen';
import Entypo from 'react-native-vector-icons/Entypo';

const Bottom = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Bottom.Navigator initialRouteName='Currency'
      screenOptions={{
        tabBarInactiveTintColor:'black',
        headerShown: false,
        tabBarStyle: {
          height: 60,
          paddingBottom: 10,
          backgroundColor: 'rgb(242, 252, 252)',
          
        },
      }}>
      <Bottom.Screen
        name="Home"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Entypo name="home" color={color} size={size} />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <Bottom.Screen
        name="Currency"
        component={ConversionScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Entypo name="swap" color={color} size={size} />
          ),
          tabBarLabel: 'Conversion',
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigation;
