/* zona 1: lugar donde estan las importaiones de archivos y componentes */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Saludo} from './components/Saludo';
import {Saludo2} from './components/Saludo2';
import {Perfil} from './components/Perfil';


/* 
zona 2: Main - Componentes del screen */

export default function App() {
  return (


    <View style={styles.container}>
      <Perfil style = {styles. tarjetaRojo} nombre="Karen" carrea="Ing" materia = "Movil" cuatri="9"></Perfil>
      <Perfil style = {styles.tarjetaRosa} nombre="Daira" carrea="Ing" materia = "Movil" cuatri="9"></Perfil>
      <Perfil style = {styles.tarjetaRosa} nombre="Isabel" carrea="Ing" materia = "Movil" cuatri="9"></Perfil>
      {/* <Image source={require('./assets/wave.png')}/>
      <Perfil></Perfil> */}

      {/* <Text>Hola Mundo React Native</Text>
      <Text>-----------------------------------------------------</Text>
      <Saludo/>
      <Text>-----------------------------------------------------</Text>
      <Saludo2/>
      <StatusBar style="auto" /> */}


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
  tarjetaRojo:{backgroundColor:'green',},
  tarjetaRosa:{backgroundColor:'pink',},
});
