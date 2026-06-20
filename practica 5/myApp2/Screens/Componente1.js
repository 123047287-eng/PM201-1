/* zona 1: lugar donde estan las importaiones de archivos y componentes */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';



/* 
zona 2: Main - Componentes del screen */

export default function App() {
  return (
    <View>
        <Text>Aquí va la primer práctica de componentes nativos</Text>
    </View>

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
});
