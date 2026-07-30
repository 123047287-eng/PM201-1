import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert, Platform } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function EditarUsuarioScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const [nombre, setNombre] = useState(params.nombre || '');
  const [edad, setEdad] = useState(params.edad || '');

  const mostrarMensaje = (titulo, mensaje, accionFinal) => {
    if (Platform.OS === 'web') {
      alert(`${titulo}: ${mensaje}`);
      if (accionFinal) accionFinal();
    } else {
      Alert.alert(
        titulo,
        mensaje,
        [{ text: 'OK', onPress: () => { if (accionFinal) accionFinal(); } }]
      );
    }
  };

  const handleGuardarCambios = async () => {
    if (!nombre || !edad) {
      mostrarMensaje("Todos los cambios son obligatorios");
      return;
    }

    try {
      const credencialesBase64 = btoa("admin:1234");
      const respuesta = await fetch(`http://192.168.100.126:5000/v1/usuarios/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${credencialesBase64}`
        },
        body: JSON.stringify({
          nombre: nombre,
          edad: parseInt(edad, 10),
        }),
      });

      if (respuesta.ok) {
        mostrarMensaje("Éxito", "Usuario actualizado correctamente", () => {
          router.replace('/consulta'); 
        });
      } else {
        mostrarMensaje("No se pudieron guardar los cambios");
      }
    } catch (error) {
      console.log("Error al actualizar:", error);
      mostrarMensaje("Error de red", "No se pudo conectar con el servidor");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Actualizar Usuario</Text>

      <Text style={styles.label}>Nombre</Text>
      <TextInput 
        style={styles.input} 
        value={nombre} 
        onChangeText={setNombre} 
        placeholder="Ingrese nombre"
      />

      <Text style={styles.label}>Edad</Text>
      <TextInput 
        style={styles.input} 
        value={String(edad)} 
        onChangeText={setEdad} 
        keyboardType="numeric"
        placeholder="Ingrese edad"
      />

      <Pressable style={styles.btnSave} onPress={handleGuardarCambios}>
        <Text style={styles.btnText}>Guardar cambios</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: 
    '#fff' 
},
  title: 
  { fontSize: 22,
     fontWeight: 'bold', 
     textAlign: 'center', 
     marginBottom: 25 
    },
  label:
  { color: '#333',
     fontSize: 14, 
     fontWeight: '600', 
     marginBottom: 5 
},
  input: 
  { borderWidth: 1, 
    borderColor: '#E5E7EB', 
    borderRadius: 8, 
    padding: 12, 
    marginBottom: 20, 
    fontSize: 16
 },
  btnSave: 
    { backgroundColor: '#FFCC00',
     padding: 14, 
     borderRadius: 8, 
     alignItems: 'center', 
     marginTop: 10 
    },
  btnText: 
  { fontWeight: 'bold', 
    fontSize: 16, 
    color: '#000'
}
});