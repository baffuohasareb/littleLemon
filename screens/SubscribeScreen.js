import React, {useState} from 'react';
import { Image, View, StyleSheet, Text, TextInput,Pressable } from 'react-native';
import { validateEmail } from '../utils';

const SubscribeScreen = ({ navigation }) => {
  const logo = require("../assets/little-lemon-logo-grey.png");

  const [email, setEmail] = useState('');

  const handleSubscribePress = () => {
    if (email !== '' && validateEmail(email)) {
      alert("You have successfully subscribed!");
      navigation.navigate("Welcome");
    } else
    if (email !== '' && !validateEmail(email)) {
      alert("Please enter a valid email address.");
    }
  }
  return(
    <View style={Styles.container}>
      <Image
        source={logo}
        resizeMode='contain'
        style={Styles.logo}
      />

      <Text style={Styles.text}>Subscribe to our newsletter for our latest finger-licking recipes</Text>

      <TextInput
        placeholder='Enter your email'
        style={Styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType='email-address'
      />

      <Pressable style={email === '' ? Styles.inactive : Styles.button} onPress={handleSubscribePress}>
        <Text style={Styles.buttonText}>Subscribe</Text>
      </Pressable>
    </View>
  );

};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  logo: {
    width: 120,
    height: 120,
    marginTop: 50
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 40,
    marginTop: 60,
  },
  input: {
    width: "80%",
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#003030",
    paddingHorizontal: 15,
    paddingVertical: 7,
    marginTop: 30,
    fontSize: 18
  },
  inactive: {
    width: '80%',
    backgroundColor: 'gray',
    padding: 10,
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 20
  },
  button: {
    width: '80%',
    backgroundColor: '#003030',
    padding: 10,
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 20
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18
  }
});
export default SubscribeScreen;