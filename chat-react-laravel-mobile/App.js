import React from 'react';
import AuthProvider from './store/AuthContext';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LobbyScreeen,ChatScreeen } from './view/index';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <AuthProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Lobby" options={{headerShown:false }}  component={LobbyScreeen} />
          
        <Stack.Screen name="Chat"
       options={{
        title: 'Chat Now',
        headerStyle: {
          backgroundColor: '#f841b5',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
          component={ChatScreeen} />      
     
      </Stack.Navigator>
    </NavigationContainer>
    </AuthProvider>
  );
}


