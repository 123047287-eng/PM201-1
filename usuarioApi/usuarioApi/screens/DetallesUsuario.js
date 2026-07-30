import React, { useState } from 'react';
import { View, Text, Pressable, Modal, StyleSheet, Alert, Platform } from 'react-native';
import { useLocalSearchParams, useRouter,Stack } from 'expo-router';

export default function DetallesUsuarioScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [cargando, setCargando] = useState(false);

  const mostrarNotificacion = (titulo, mensaje, alCerrar) => {
    if (Platform.OS === 'web') {
      alert(`${titulo}: ${mensaje}`);
      if (alCerrar) alCerrar();
    } else {
      Alert.alert(
        titulo,
        mensaje,
        [{ text: 'OK', onPress: () => { if (alCerrar) alCerrar(); } }]
      );
    }
  };

  const handleEliminar = async () => {
    if (cargando) return;
    setCargando(true);

    try {
      const credencialesBase64 = btoa('admin:1234');
      
      const respuesta = await fetch(`http://192.168.100.126:5000/v1/usuarios/${params.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${credencialesBase64}`
        }
      });

      if (respuesta.ok) {
        setModalVisible(false);
        mostrarNotificacion(
          'Éxito', 
          'El usuario se eliminó correctamente', 
          () => router.replace('/consulta')
        );
      } else {
        setModalVisible(false);
        mostrarNotificacion('Error', 'No se pudo borrar de la BD');
      }
    } catch (error) {
      console.log('Error al eliminar:', error);
      setModalVisible(false);
      mostrarNotificacion('Error', 'Ocurrió un problema al intentar eliminar');
    } finally {
      setCargando(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles del Usuario</Text>

      <Text style={styles.label}>Nombre</Text>
      <Text style={styles.value}>{params.nombre}</Text>

      <Text style={styles.label}>Edad</Text>
      <Text style={styles.value}>{params.edad} años</Text>

      <Pressable 
        style={styles.btnUpdate}
        onPress={() => router.push({ pathname: '/(stack)/actualizar', params })}
      >
        <Text style={styles.btnTextBlack}>Actualizar</Text>
      </Pressable>

      <Pressable 
        style={styles.btnDelete}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.btnTextWhite}>Eliminar</Text>
      </Pressable>

      <Modal 
        visible={modalVisible} 
        transparent 
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Confirmar eliminación</Text>
            <Text style={styles.modalText}>
              ¿Estás seguro de que deseas eliminar al usuario {params.nombre}?
            </Text>
            <View style={styles.modalActions}>
              <Pressable 
                style={styles.btnCancel} 
                onPress={() => setModalVisible(false)}
                disabled={cargando}
              >
                <Text style={{ color: '#000' }}>Cancelar</Text>
              </Pressable>
              
              <Pressable 
                style={[styles.btnConfirm, cargando && { opacity: 0.6 }]} 
                onPress={handleEliminar}
                disabled={cargando}
              >
                <Text style={{ color: '#fff', fontWeight: 'bold' }}>
                  {cargando ? 'Eliminando...' : 'Sí, eliminar'}
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  label: { color: '#888', marginTop: 10 },
  value: { fontSize: 18, fontWeight: 'bold' },
  btnUpdate: { backgroundColor: '#FFCC00', padding: 12, borderRadius: 8, marginTop: 30, alignItems: 'center' },
  btnDelete: { backgroundColor: '#E53935', padding: 12, borderRadius: 8, marginTop: 10, alignItems: 'center' },
  btnTextBlack: { color: '#000', fontWeight: 'bold' },
  btnTextWhite: { color: '#FFF', fontWeight: 'bold' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
  modalContent: { width: '80%', backgroundColor: '#fff', borderRadius: 12, padding: 20, alignItems: 'center' },
  modalTitle: { color: '#D32F2F', fontWeight: 'bold', fontSize: 16, marginBottom: 10 },
  modalText: { textAlign: 'center', marginBottom: 20 },
  modalActions: { flexDirection: 'row', gap: 10 },
  btnCancel: { backgroundColor: '#E0E0E0', padding: 10, borderRadius: 6 },
  btnConfirm: { backgroundColor: '#D32F2F', padding: 10, borderRadius: 6 }
});