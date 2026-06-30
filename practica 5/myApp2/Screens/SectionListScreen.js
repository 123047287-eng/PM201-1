import React from 'react';
import {View,Text,StyleSheet,SectionList,SafeAreaView} from 'react-native';
import {Estudiantes} from '../components/Estudiantes';


export default function SectionListScreen(){
    const datos = [
        {
            title:'Ingenieria en sistemas',
            data:[
                    {nombre: 'erick'},
                    {nombre: 'Javier'},
                    {nombre: 'toño'}
            ]
        },
        {
            title:'Administracion',
            data:[
                    {nombre: 'Ana'},
                    {nombre: 'Juan'},
                    {nombre: 'Pedro'}       
            ]
        },

    ];

    return(
        <SafeAreaView style={styles.safeArea}>
        <View style ={styles.container}>
            <Text style = {styles.titulo}>
                Estudiantes por carrera
            </Text>

            <SectionList
                sections = {datos}
                renderSectionHeader={({section}) => (
                    <Text style={styles.header}>{section.title}</Text>
                )}
                renderItem={({item}) => (
                    <Text style = {styles.item}>{item.nombre}</Text>
                )}

        
            ></SectionList>
        </View>
        </SafeAreaView>
    );


}
const styles = StyleSheet.create({
safeArea: {
    flex: 1,
    backgroundColor: '#f5f7fa', 
  },
  container: {
    flex: 1,
    padding: 20
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#90caf9',
    padding: 10
  },
  item: {
    padding: 15
  }
});