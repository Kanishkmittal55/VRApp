import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Text, StyleSheet, Button, View, DevSettings, Image, TouchableOpacity } from "react-native";
import { useARButton } from '../ReloadContext/ARButtonContext'; // Adjust the path as needed
import Video from 'react-native-video';
import LinearGradient from 'react-native-linear-gradient';

const LandingPage = ({ navigation }) => {
  const { isARButtonActive, setARButtonActive, setArButtonPressed } = useARButton();
  
  const navigateToARScreen = () => {
    setARButtonActive(false);
    // Reset the navigation stack and navigate to the arScreen
    navigation.reset({
        index: 0,
        routes: [{ name: 'qrScanner' }],
    });
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button 
          title="Reload" 
          onPress={reloadApp} 
          color="black"
        />
      )
    });
  }, [navigation]);

  const reloadApp = () => {
    DevSettings.reload();
  }

  return (
    <LinearGradient
      colors={["#02AABD", "#00CDAC"]} // Gradient colors
      style={styles.mainView}
    >
      {/* <Video
        source={require('../assets/Home-Screen-Video.mp4')}   // Adjust the path to point to your video
        style={[StyleSheet.absoluteFill, {
          top: 270,
          transform: [{ scale: 1.0 }] 
        }]}  // This will make the video cover the whole screen
        resizeMode="cover"  // This ensures the video covers the screen and is clipped if necessary
        repeat  // This will make the video loop indefinitely
      /> */}

      {/* <Image 
        source={require('../assets/appopener.webp')} // Adjust the path to point to your logo
        style={styles.logo}
        resizeMode="contain" // This ensures the logo fits within the dimensions you provide
      /> */}

      {/* Appopener Text */}
      <Text style={styles.appOpenerText}>My App</Text>

      {/* Custom AR Button */}
      <TouchableOpacity style={styles.arButton} onPress={navigateToARScreen} disabled={!isARButtonActive}>
        <Text style={styles.arText}>AR</Text>
      </TouchableOpacity>

      {!isARButtonActive && <Text style={styles.reloadText}>Please reload the app to access AR again.</Text>}
      {/* <Button 
        title="Reload App"
        onPress={reloadApp}
        color="white"
      /> */}
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 400
  },
  textStyle: {
    color: 'white',
  },
  arButton: {
    position: 'absolute', // Position the button absolutely 
    bottom: 20,           // 20 pixels from the bottom
    right: 20,            // 20 pixels from the right
    backgroundColor: 'white',
    width: 60,            // Set your desired width for the circle
    height: 60,           // Set your desired height for the circle
    borderRadius: 30,     // Half of width/height to make it a perfect circle
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 400,
    height: 250,
    borderRadius: 80, // Rounded edges
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },

  appOpenerText: {
    fontFamily: 'Poppins-Bold', // Ensure this matches the font file name
    fontSize: 60,
    color: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: 20,
  },
  arText: {
    color: '#ff4c01',
    fontSize: 20,
    fontWeight: 'bold',
  },
  reloadText: {
    color: 'white',
    marginTop: 20,
  }
})

export default LandingPage;
