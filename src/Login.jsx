import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Image } from "react-native";

const Login = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  const [number, onChangeNumber] = React.useState(null);
  const [numbers, onChangeNumbers] = React.useState(null);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./logo.png')} />
      <TextInput
        style={styles.txtUser}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Username"
        />
      <TextInput
        style={styles.txtUser}
        onChangeText={onChangeNumbers}
        value={numbers}
        placeholder="Password"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0DB5BA",
    width: "50%",
    padding: 10,
    borderRadius: 20,
  },
  btnText: {
    color: "#fff",
    fontSize: 20
  },
  txtUser: {
    width: "50%",
    borderRadius: 10,
    margin: 12,
    borderWidth: 0,
    padding: 10,
    backgroundColor: "#EBEBEB",
  },
  txtPass: {
    width: "50%",
    borderRadius: 10,
    margin: 12,
    borderWidth: 0,
    padding: 10,
    backgroundColor: "#EBEBEB",
  },
  logo: {
    width: "40%",
    height: "40%",
    resizeMode: "contain",
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  }
});

export default Login;
