/* zona 1: lugar donde estan las importaiones de archivos y componentes */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,Button, SwitchComponent } from 'react-native';
import React, {useState} from 'react';
import TarjetasScreen from './TarjetasScreen';
import Componente1 from './Componente1';
import PracticaSwitch from './PracticaSwitch';
import SwitchScreen from './SwitchScreen2';
import PressableScreen from './PreassableScreen';




/* 
zona 2: Main - Componentes del screen */

export default function App() {
    const[screen,setScreen] = useState('menu');
    switch (screen){
        case 'tarjetas':
            return <TarjetasScreen></TarjetasScreen>
        case 'componente1':
            return <Componente1></Componente1>
        case 'swicth':
            return <PracticaSwitch></PracticaSwitch>
        case 'Switch2':
            return <SwitchScreen></SwitchScreen>
        case 'preassable':
            return <PressableScreen></PressableScreen>
        case 'menu':
            default:
                return (
                 <View style={styles.container}> 
                     <Text>Menu practicas</Text>
                     <Button style = {styles.BotonRosa} title = "Practica Tarjetas" onPress={()=>setScreen('tarjetas')}></Button>
                     <Button title = "Practica Componente1" onPress={()=>setScreen('componente1')}></Button>
                     <Button title = "Practica Swicth" onPress={()=>setScreen('swicth')}></Button>
                     <Button title = "practica Switch2" onPress={() =>setScreen('Switch2')}></Button>
                     <Button title = "pressable" onPress={() =>setScreen('preassable')}></Button>
                     
                
                    
                </View>
                );//return
}//lo que cierra el switch
}//lo que cierra la funcion 


/* zona 3: Estelizacion de los componentes [estilos] y posicionamiento*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
    justifyContent:'space-around' 
  },
BotonRosa:{backgroundColor:'pink',},
});
