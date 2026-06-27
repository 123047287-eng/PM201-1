/* zona 1: lugar donde estan las importaiones de archivos y componentes */
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, Image } from 'react-native';
import MenuScreen from './Screens/MenuScreen';
import PracticaScrollView from './Screens/PracticaScrollView';
import PressableScreen from './Screens/PreassableScreen';
import SwitchScreen from './Screens/SwitchScreen2';



/* 
zona 2: Main - Componentes del screen */

export default function App() {
  return (
    <SafeAreaProvider>
     <View style={styles.container}>
    <MenuScreen></MenuScreen>
    <StatusBar style="auto" />
    
    </View>
    </SafeAreaProvider>
   
  );
}


/* zona 3: Estelizacion de los componentes [estilos] y posicionamiento*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
     justifyContent:'space-around' 
  },
  tarjetaRojo:{backgroundColor:'green',},
  tarjetaRosa:{backgroundColor:'pink',},
});
