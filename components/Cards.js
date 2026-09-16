import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

import { BuscarIMG } from './Pokemons';

const BaseCards = ({ nome, evo }) => {
  const { imagem, NamePKM } = BuscarIMG(nome, evo);

  return (
    <View style={styles.container}>

      <View style={styles.card}>

        <Text style={styles.titulo}>
          {NamePKM}
        </Text>

        <View style={styles.linhaDecorativa} />

        <Image
          source={imagem}
          style={styles.img}
        />

      </View>

    </View>
  );
};

export default BaseCards;

const styles = StyleSheet.create({
  container: {
    width: '100%',

    alignItems: 'center',

    paddingTop: 6,
  },

  card: {
    width: '97%',
    maxWidth: 500,

    backgroundColor: '#ffffff',

    borderRadius: 28,

    paddingVertical: 25,
    paddingHorizontal: 20,

    marginBottom: 22,

    borderWidth: 1,
    borderColor: '#dbeafe',

    shadowColor: '#2563eb',

    shadowOffset: {
      width: 0,
      height: 8,
    },

    shadowOpacity: 0.15,
    shadowRadius: 12,

    elevation: 8,
  },

  titulo: {
    fontSize: 32,

    fontWeight: '900',

    color: '#1e3a8a',

    textAlign: 'center',

    marginBottom: 16,

    letterSpacing: 1,
  },

  linhaDecorativa: {
    width: '40%',
    height: 5,

    backgroundColor: '#60a5fa',

    borderRadius: 999,

    alignSelf: 'center',

    marginBottom: 20,
  },

  img: {
    width: '100%',
    height: 210,

    resizeMode: 'contain',
  },
});