import { Stack, useRouter } from 'expo-router';
import { Pressable, Text, StyleSheet } from 'react-native';

export default function StackLayout() {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitleAlign: 'center',
        headerTintColor: '#000',
        headerStyle: { backgroundColor: '#FFF' },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen 
        name="detalles" 
        options={{ 
          title: 'Detalle del usuario',
          // Dibujamos la píldora exacta "< (tabs)" en la esquina superior izquierda
          headerLeft: () => (
            <Pressable 
              style={styles.backButton} 
              onPress={() => router.replace('/(tabs)/consulta')}
            >
              <Text style={styles.backText}>‹ (tabs)</Text>
            </Pressable>
          ),
        }} 
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: '#F0F0F0',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginRight: 10,
  },
  backText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
  },
});