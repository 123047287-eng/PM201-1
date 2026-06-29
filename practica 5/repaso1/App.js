import React, { useState } from 'react';
import {StyleSheet, Text, View, TextInput, Alert, ScrollView, Switch, Pressable, SafeAreaView} from 'react-native';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [cuatrimestre, setCuatrimestre] = useState('');
  const [taller, setTaller] = useState(false); // Corregido el '=' extra
  const [constancia, setConstancia] = useState(false);
  const [participacionDeportiva, setParticipacionDeportiva] = useState(false);

  const validar = () => {
    if (!nombre.trim() || !carrera.trim() || !cuatrimestre.trim()) {
      Alert.alert('Error', 'Llene todos los campos');
      return; 
    }

    const cuatri = Number(cuatrimestre);
    if (isNaN(cuatri) || cuatri <= 0) {
      Alert.alert('Error', 'Ingrese un número válido');
      return; 
    }

    const TextoTaller = taller ? 'Si' : 'No';
    const TextoConstancia = constancia ? 'Si' : 'No';
    const TextoParticipacion = participacionDeportiva ? 'Si' : 'No';

    Alert.alert(  
      'Formulario Registrado',
      `Nombre: ${nombre}\nCarrera: ${carrera}\nCuatrimestre: ${cuatrimestre}\nTaller: ${TextoTaller}\nConstancia: ${TextoConstancia}\nDeporte: ${TextoParticipacion}`
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Registro de evento</Text>
      
      <View style={styles.campoContainer}>
        <Text style={styles.label}>Nombre completo:</Text>
        <TextInput
          style={styles.input}
          placeholder='Escribe tu nombre'
          value={nombre}
          onChangeText={setNombre}
        />
      </View>

      <View style={styles.campoContainer}>
        <Text style={styles.label}>Carrera:</Text>
        <TextInput
          style={styles.input}
          placeholder='Ej. ISC'
          value={carrera}
          onChangeText={setCarrera}
        />
      </View>

      <View style={styles.campoContainer}>
        <Text style={styles.label}>Cuatrimestre:</Text>
        <TextInput
          style={styles.input}
          placeholder='Ej. 9'
          value={cuatrimestre}
          onChangeText={setCuatrimestre}
          keyboardType="numeric" 
        />
      </View>
      
      <View style={styles.switchContainer}>
        <Text style={styles.labelPregunta}>¿Asistiras al taller?</Text>
        <View style={styles.row}>
          <Text style={styles.switchTexto}>{taller ? 'Sí' : 'No'}</Text>
          <Switch
            value={taller}
            onValueChange={setTaller}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={taller ? '#f5dd4b' : '#f4f3f4'}
          />
        </View>
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.labelPregunta}>¿Requiere constancia?</Text>
        <View style={styles.row}>
          <Text style={styles.switchTexto}>{constancia ? 'Sí' : 'No'}</Text>
          <Switch
            value={constancia}
            onValueChange={setConstancia}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={constancia ? '#f5dd4b' : '#f4f3f4'}
          />
        </View>
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.labelPregunta}>¿Participaras en actividades deportivas?</Text>
        <View style={styles.row}>
          <Text style={styles.switchTexto}>{participacionDeportiva ? 'Sí' : 'No'}</Text>
          <Switch
            value={participacionDeportiva}
            onValueChange={setParticipacionDeportiva}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={participacionDeportiva ? '#f5dd4b' : '#f4f3f4'} 
          />
        </View>
      </View>

      <Pressable 
        onPress={validar} 
        style={({ pressed }) => [
          styles.botonBase, 
          pressed ? styles.botonPresionado : styles.botonNormal 
        ]}
      >
        <Text style={styles.textoBoton}>Enviar Registro</Text> 
      </Pressable>
    </ScrollView>
    </SafeAreaView>
  );
} 

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f7fa', 
  },
  container: {
    paddingGrow: 1,
    backgroundColor: '#f5f7fa',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 30,
    justifyContent:'center'
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1a202c',
    marginBottom: 20,
  },
  campoContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2d3748',
    marginBottom: 6,
  },
  labelPregunta: {
    fontSize: 15,
    fontWeight: '500',
    color: '#2d3748',
    flex: 1,
  },
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cbd5e0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: '#2d3748',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchTexto: {
    marginRight: 8,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#4a5568',
  },
  botonBase: {
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginTop: 10,
  },
  botonPresionado: {
    backgroundColor: '#5dff2c',
  },
  botonNormal: {
    backgroundColor: '#3509d2',
  },
  textoBoton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});