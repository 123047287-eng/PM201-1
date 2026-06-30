import React from 'react';
import {View,Text,StyleSheet,FlatList,SafeAreaView} from 'react-native';

import {Estudiantes} from '../components/Estudiantes';

export default function FlatListScreen(){
    const estudiantes = [
        {
            id:"1",
            nombre:"Erick",
            carrera:"ISC"
        },
         {
            id:"2",
            nombre:"Juan",
            carrera:"Manufactura"
        },
         {
            id:"3",
            nombre:"Chucho",
            carrera:"Negocios"
        }
    ];
    return(
         <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
            <Text style = {styles.titulo}>Lista de estudiantes:</Text>

            
            <FlatList
            data={estudiantes}
            renderItem={({item})=>(
                <Estudiantes
                nombre = {item.nombre}
                carrera = {item.carrera}
                />
            )}
            keyExtractor={(item)=> item.id}
            />
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

    card: {
        backgroundColor: '#d4f1f4',
        padding: 15,
        margin: 10,
        borderRadius: 10
    }

});