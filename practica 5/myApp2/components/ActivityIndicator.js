import React, {useState} from "react";
import { ActivityIndicator,Button,StyleSheet,Text,View } from "react-native";

export default function MyActivityIndicator(){
    const [loading, setLoading] = useState(false);
    return(
        <View style={styles.container}>
            <Text style = {styles.titulo}>
                ActivityIndicator
            </Text>
            <Text style = {styles.descripcion}>
                La prop animating controla si el indicador se muestra o no.
                tambien se pude usar para cambiar el tamaño "size" y el color.
            </Text>
            <Button
            title="Mostrar/Ocultar Spinner"
            onPress = {() => setLoading((estadoActual) => !estadoActual)}
            ></Button>
            <View style = {styles.indicator}>
                <ActivityIndicator
                size = "large"
                color = "blue"
                animating = {loading}
                ></ActivityIndicator>
            </View>
            <Text style ={styles.estado}>
                Estado actual:  {loading ? 'Cargando':'Detenido'}
            </Text>


        </View>
    );

}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    elevation: 3,
    marginBottom: 20,
    padding: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descripcion: {
    color: '#444444',
    lineHeight: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  indicador: {
    height: 60,
    justifyContent: 'center',
    marginTop: 10,
  },
  estado: {
    fontWeight: '600',
  },
});
