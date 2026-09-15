import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';



const BaseCards = ({nome}) => {
  var imagem
  if (nome == "Bulbasaur"){
    imagem = require('./assets/bulbasaur.png')
  }
  else if (nome == "Charmander"){
    imagem = require('./assets/charmander.png')
  }
  else if (nome == "Squirtle"){
    imagem = require('./assets/Squirtle.png')
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>{nome}</Text>
        <Image
          source={imagem}
          style={{ width: 200, height: 200 }}
        />
      </View>
    </View>
  );
};

export default BaseCards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },

  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    marginBottom: 50,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,

    elevation: 6,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 20,
    textAlign: 'center',
  },

  label: {
    fontSize: 18,
    fontWeight: '700',
    color: '#334155',
    marginTop: 12,
  },

  texto: {
    fontSize: 16,
    color: '#64748b',
    marginTop: 4,
    lineHeight: 24,
  },
});