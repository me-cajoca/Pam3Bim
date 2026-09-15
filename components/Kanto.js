import React, {useState} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './Arquivo2';
import BaseCards from './Cards';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();



export default function Kanto() {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Iiciais de Kanto"
          component={Pokemons}
        />
        <Stack.Screen
          name="Charmander"
          component={HomeScreen}
        />
      </Stack.Navigator>
  )
}



function Pokemons(){
  return(
    <View>
      <BaseCards nome="Bulbasaur"/>
      <BaseCards nome="Charmander"/>
      <BaseCards nome="Squirtle"/>
    </View>
  )
}