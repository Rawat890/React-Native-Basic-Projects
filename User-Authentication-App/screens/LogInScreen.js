import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, Pressable } from 'react-native';
import Input from '../Helper/Input';
import Button from '../Helper/Button';

const LogInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function CheckCredentials() {
    navigation.navigate('Welcome')
  }

  const navigateToSignUp = () => {
    navigation.navigate('SignUp');
  };

  const resetPassword = () => {
    navigation.navigate('ResetPassword')
  }

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Input
          placeholder="Enter email..."
          label="Email"
          value={email}
          onChangeText={setEmail}
          icon="user-circle-o"
          IconComponent="FontAwesome"
        />
        <Input
          placeholder="Enter password..."
          label="Password"
          value={password}
          icon="onepassword"
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      </View>
      <Pressable onPress={resetPassword} style={({ pressed }) => [styles.button, pressed && styles.pressed]}>
        <Text style={{ marginLeft: 10, marginTop: 15, color: 'blue', fontSize: 16, width: '60%' }}>Forgot Password</Text>
      </Pressable>
      <View style={styles.buttonContainer}>
        <Button label="Log In" onPress={CheckCredentials} />
        <Button label="Sign Up" onPress={navigateToSignUp} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 10,
    justifyContent: 'center',
    height: 480,
    borderRadius: 13,
    width: '89%',
    marginLeft: 20,
    padding: 15,
    marginTop: 80,
    backgroundColor: 'white',
  },
  buttonContainer: {
    marginTop: 30
  },
  view: {
    marginTop: -20
  },
  pressed: {
    opacity: 0.7
  }
});

export default LogInScreen;
