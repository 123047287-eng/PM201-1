import {Text,View,Button,StyleSheet} from 'react-native';
import React,{useState} from 'react';   

export const Perfil = ({nombre,carrera,materia,cuatri,style}) => {
    const [mostrar,setMostrar]=useState(false)
    return(
        <View style = {[estilos.tarjeta, style]}>
            <Text style = {estilos.nombre}>{nombre}</Text>
            {mostrar &&
            <>
            <Text style = {estilos.carrera}>{carrera}</Text>
            <Text style = {estilos.OtroTexto}>{materia}</Text>
            <Text style = {estilos.OtroTexto} >{cuatri}</Text>
            </>
            }
            <Button title ="Ver Perfil" onPress={()=>setMostrar(!mostrar)}></Button>

        </View>
    )


}


const estilos =  StyleSheet.create({
    nombre:{
        fontSize:24,
         fontWeight:100,
        fontWeight:300,
        textTransfor:'uppercase',
    },
    carrera:{
        fontSize:18,
        color:'blue',
        fontFamily:'Arial',
    },
    OtroTexto:{
        fontWeight:100,
        fontSize:25,
        fontFamily:'Arial',
        fontStyle:'italic',
    },
    tarjeta:{
        borderWidth:8,
        paddingLeft: 25,
        margin:20,
        
        
    },
});




// export const Perfil = () => {
//     return(
//     <view>
//         <Text>Daira Valeria Curiel Morales </Text>
//         <Text> Programación Móvil</Text>
//         <Text>   Ingeniería en Sistemas Computacionales</Text>
//         <Text>   9no Cuatrimestre </Text>
//     </view>
//     )

// }