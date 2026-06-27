/* zona 1: lugar donde estan las importaiones de archivos y componentes */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React, { useState } from 'react';
import TarjetasScreen from './TarjetasScreen';
import Componente1 from './Componente1';
import PracticaSwitch from './PracticaSwitch';
import SwitchScreen from './SwitchScreen2';
import PreassableScreen from './PreassableScreen';
import Componente4_0 from './Componente4_0';
import ComponenteAlert from './ComponenteAlert';

/* zona 2: Main - Componentes del screen */
export default function App() {
  const [screen, setScreen] = useState('menu');

  switch (screen) {
    case 'tarjetas':
      return <TarjetasScreen></TarjetasScreen>;
    case 'componente1':
      return <Componente1></Componente1>;
    case 'swicth':
      return <PracticaSwitch></PracticaSwitch>;
    case 'Switch2':
      return <SwitchScreen></SwitchScreen>;
    case 'preassable':
      return <PressableScreen></PressableScreen>;
    case 'TextInput':
      return <Componente4_0></Componente4_0>;
    case 'Alert':
      return <ComponenteAlert></ComponenteAlert>;

    case 'menu':
      return (
        <View style={styles.container}>
          <Text style={{ marginBottom: 15, fontWeight: 'bold' }}>Menu practicas</Text>
          <Button title="Practica Tarjetas" onPress={() => setScreen('tarjetas')}></Button>
          <Button title="Practica Componente1" onPress={() => setScreen('componente1')}></Button>
          <Button title="Practica Swicth" onPress={() => setScreen('swicth')}></Button>
          <Button title="practica Switch2" onPress={() => setScreen('Switch2')}></Button>
          <Button title="pressable" onPress={() => setScreen('preassable')}></Button>
          <Button title="Componente TextInput" onPress={() => setScreen('TextInput')}></Button>
          <Button title="Componente Alert" onPress={() => setScreen('Alert')}></Button>
          <StatusBar style="auto" />
        </View>
      );

    default:
      return (
        <View style={styles.container}>
          <Text>Pantalla no encontrada</Text>
          <Button title="Volver al Menú" onPress={() => setScreen('menu')}></Button>
        </View>
      );
  } // Cierre del switch
} // Cierre de la funcion 

/* zona 3: Estelizacion de los componentes [estilos] y posicionamiento*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: 10, // 👈 Esto te dará una separación limpia entre tus botones nativos
  },
  BotonRosa: { backgroundColor: 'pink' },
});