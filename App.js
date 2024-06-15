import React from 'react';
import { Text, StyleSheet, Button, View} from "react-native";
import LandingPage from './screens/LandingPage';
import ArScreen from './screens/ArScreen';
import SignUp from './screens/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ARButtonProvider } from './ReloadContext/ARButtonContext';
import QRCodeScannerScreen from './screens/qrCodeScanner';
import LinearGradient from 'react-native-linear-gradient';
import CustomHeader from './screens/components/CustomHeader';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <ARButtonProvider>
      <NavigationContainer>
      <LinearGradient
          colors={['#6a11cb', '#2575fc']} // Gradient colors
          style={styles.container}
        >
      <Stack.Navigator
            screenOptions={({ route }) => ({
              header: () => <CustomHeader title={route.name} />,
              headerTintColor: '#fff',
              headerTitleStyle: { fontWeight: 'bold' },
              headerTransparent: true, // Make header transparent
            })}
          >
        <Stack.Screen name="Home" component={LandingPage} />
        <Stack.Screen name="signUp" component={SignUp} />
        {/* <Stack.Screen name="arScreen" component={ArScreen} /> */}
        <Stack.Screen 
        name="arScreen" 
        component={ArScreen} 
        options={{ 
          headerShown: false,          // This hides the header entirely
        }}
      />
        {/* <Stack.Screen name="qrScanner" component={QRCodeScannerScreen} /> */}
        <Stack.Screen 
        name="qrScanner" 
        component={QRCodeScannerScreen} 
        options={{ 
          headerShown: false,          // This hides the header entirely
        }}
      />
      </Stack.Navigator>
      </LinearGradient>
      </NavigationContainer>
    </ARButtonProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;