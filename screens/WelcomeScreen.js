import * as React from 'react';
import { View, Image, Text, StyleSheet, Pressable } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  const logo = require("../assets/little-lemon-logo.png")
  return (
    <View style={Styles.container}>
      <Image
        source={logo}
        resizeMode='contain'
        style={Styles.logo}
      />

      <Text style={Styles.welcomeText}>LIttle Lemon, your local Mediterranean Bistro</Text>

      <Pressable style={Styles.button} onPress={(() => navigation.navigate("Subscribe"))}>
        <Text style={Styles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1 ,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },
  logo: {
    width: 200,
    height: 200,
    marginTop: -40
  },
  welcomeText: {
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 40,
    marginTop: 60
  },
  button: {
    width: '80%',
    backgroundColor: '#003030',
    padding: 10,
    alignItems: 'center',
    borderRadius: 15,
    position: 'absolute',
    bottom: 20
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18
  }
});

export default WelcomeScreen;
