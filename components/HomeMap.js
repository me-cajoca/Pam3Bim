import { View, Text, TouchableOpacity, Image, useWindowDimensions, StyleSheet, ScrollView } from 'react-native';

export default function Home({ navigation }) {
  const { width, height } = useWindowDimensions();
  const kanto = require('./assets/Kanto/kantoMap.jpeg');
  const hoenn = require('./assets/Hoenn/HoennMap.jpeg');

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Pokédex</Text>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Kanto')}>
        <Image source={kanto} style={{ width: width * 0.8, height: height * 0.25, resizeMode: 'contain' }} />
        <Text style={styles.cardTitle}>Kanto</Text>
        <Text style={styles.cardSub}>151 Pokémons</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Hoen')}>
        <Image source={hoenn} style={{ width: width * 0.8, height: height * 0.25, resizeMode: 'contain' }}/>
        <Text style={styles.cardTitle}>Hoenn</Text>
        <Text style={styles.cardSub}>135 Pokémons</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 48,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#222',
    alignSelf: 'flex-start',
    marginBottom: 24,
  },
  card: {
    width: '100%',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
    marginTop: 12,
  },
  cardSub: {
    fontSize: 13,
    color: '#888',
    marginTop: 4,
  },
});