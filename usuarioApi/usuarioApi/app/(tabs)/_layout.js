import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; 
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen 
        name='alta'
        options={{
          title: 'Alta', 
          tabBarIcon: ({ size }) => (
           <AntDesign name="user" size={size} color="black" />
          )
        }}
      />

      <Tabs.Screen 
        name='consulta'
        options={{
          title: 'Consulta',
          tabBarIcon: ({ size }) => (
            <AntDesign name="search1" size={size} color="black" />
          )
        }}
      />

 
      <Tabs.Screen 
        name='index'
        options={{
          title: 'inicio', 
          href: null
        }}
      />

    </Tabs>
  );
}
