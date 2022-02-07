import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TrinidadDetails from './src/views/screens/TrinidadDetails';
import BasilicoDetails from './src/views/screens/BasilicoDetails';
import BossanovaDetails from './src/views/screens/BossanovaDetails';
import PanamaDetails from './src/views/screens/PanamaDetails';
import Studios from './src/views/screens/Studios';
import Trinadad from './src/views/screens/Trinadad';
import Basilico from './src/views/screens/Basilico';
import Panama from './src/views/screens/Panama';
import Bossanova from './src/views/screens/Bossanova';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Studios" component={Studios} />
        <Stack.Screen name="Trinadad" component={Trinadad} />
        <Stack.Screen name="Basilico" component={Basilico} />
        <Stack.Screen name="Panama" component={Panama} />
        <Stack.Screen name="Bossanova" component={Bossanova} />
        <Stack.Screen name="TrinidadDetails" component={TrinidadDetails} />
        <Stack.Screen name="BasilicoDetails" component={BasilicoDetails} />
        <Stack.Screen name="PanamaDetails" component={PanamaDetails} />
        <Stack.Screen name="BossanovaDetails" component={BossanovaDetails} />




      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
