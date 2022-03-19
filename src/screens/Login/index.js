import React from 'react'
import { View, Image, TextInput, Text, Button, StyleSheet } from 'react-native'

import Logo from '../../../assets/logo.png'

export default function Login({ navigation }) {
  const goToHome = () => {
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo}></Image>
      <View>
        <Text style={styles.text}>Login</Text>
        <TextInput style={styles.input}></TextInput>
        <Text style={styles.text}>Senha</Text>
        <TextInput style={styles.input} textContentType='password'></TextInput>
        <Button
          style={styles.input}
          onPress={goToHome}
          title='
          Entrar'
        ></Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 90,
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 15,
    fontSize: 16,
  },
})
