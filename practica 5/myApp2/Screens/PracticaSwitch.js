import React, {useState} from 'react';
import {View,Text,Switch,StyleSheet} from 'react-native';

export default function App(){
    const [notificaciones,SetNotificaciones] = useState(false);
    return (
        <View style = {estilos.contenedor}>
            <Text style ={estilos.titulo}>
                Notificacion: {notificaciones ? "Activadas":"Desactivadas"}
            </Text>
        <Switch
        value={notificaciones}
        onValueChange={(valor) => SetNotificaciones(valor)}
        trackColor={{false:'gray',true:'green'}}
        thumbColor={notificaciones ? 'white':'black'}
        disabled={false}
        />
        </View>
    );
}
const estilos = StyleSheet.create({
    contenedor:{flex:1,justifyContent:'center',alignItems:'center'},titulo:{fontSize:20}
});
