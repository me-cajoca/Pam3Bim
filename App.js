import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './components/TabNavigator';
import Kanto from './components/Kanto';
import Hoenn from './components/Hoenn';
import HomeMap from './components/HomeMap'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
    
      <Drawer.Navigator>
      
        <Drawer.Screen name="Home" component={HomeMap} />
        <Drawer.Screen name="Kanto" component={Kanto} />
        <Drawer.Screen name="Hoen" component={Hoenn} />

      </Drawer.Navigator>
    </NavigationContainer>
    
  );
}