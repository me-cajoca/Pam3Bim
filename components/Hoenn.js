// Hoenn.js

import React from 'react';

import {Pressable, View, ScrollView, StyleSheet} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Ionicons } from '@expo/vector-icons';

import BaseCards from './Cards';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function Hoenn() {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Iniciais de Hoenn"
          component={Pokemons}
        />
        <Stack.Screen
          name="Versões"
          component={PkmsVersions}
        />
      </Stack.Navigator>
  )
}

function Pokemons( {navigation} ){
  return(
    <ScrollView style={styles.fundo}>
      <View style={styles.lista}>

      <Pressable
        style={{ width: '100%' }}
        onPress={() => navigation.navigate('Versões', {NomePkm: "Torchic"})}
      >
        <BaseCards nome="Torchic" evo={1}/>
      </Pressable>

      <Pressable
        style={{ width: '100%' }}
        onPress={() => navigation.navigate('Versões', {NomePkm: "Mudkip"})}
      >
        <BaseCards nome="Mudkip" evo={1}/>
      </Pressable>

      <Pressable
        style={{ width: '100%' }}
        onPress={() => navigation.navigate('Versões', {NomePkm: "Treecko"})}
      >
        <BaseCards nome="Treecko" evo={1}/>
      </Pressable>

      </View>
    </ScrollView>
  )
}

function PkmsVersions( {route} ){

  const {NomePkm} = route.params

  const PrimFase = () => (
    <ScrollView>
    <View style={styles.container}>
      <BaseCards nome={NomePkm} evo={1}/>
    </View>
    </ScrollView>
  )

  const SegFase = () => (
    <ScrollView>
    <View style={styles.container}>
      <BaseCards nome={NomePkm} evo={2}/>
    </View>
    </ScrollView>
  )

  const TercrFase = () => (
    <ScrollView>
    <View style={styles.container}>
      <BaseCards nome={NomePkm} evo={3}/>
    </View>
    </ScrollView>
  )

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#6366f1',
        tabBarInactiveTintColor: '#94a3b8',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#e2e8f0',
          height: 60,
          paddingTop: 7,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Primeira Fase') {
            iconName = focused ? 'leaf' : 'leaf-outline';
          } else if (route.name === 'Segunda Fase') {
            iconName = focused ? 'flame' : 'flame-outline';
          } else if (route.name === 'Terceira Fase') {
            iconName = focused ? 'diamond' : 'diamond-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />
        },
      })}
    >
      <Tab.Screen name="Primeira Fase" component={PrimFase} />
      <Tab.Screen name="Segunda Fase" component={SegFase} />
      <Tab.Screen name="Terceira Fase" component={TercrFase} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#eaf2ff',
  },

  lista: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 40,
  },

  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#eaf2ff',
    alignItems: 'center',
    paddingTop: 5,
  },
})