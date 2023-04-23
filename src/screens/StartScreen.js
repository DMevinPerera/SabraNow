import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import Paragraph1 from '../components/Or'
import { View } from 'react-native-web'
import { Text } from 'react-native-paper'
import { StyleSheet } from 'react-native'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Header>Welcome To</Header>
      <Logo />
      
      <Paragraph>
      Go to place to get live updates on
events taking place at SUSL
      </Paragraph>
      <Paragraph>
      Go to place to get live updates on

      </Paragraph>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Log in
      </Button>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
  <View style={{flex: 1, height: 1, backgroundColor: 'white', width: 100}} />
  <View>
      <Text style={styles.loginButtonBelowText1}>or</Text>
      </View>
  <View style={{flex: 1, height: 1, backgroundColor: 'white', width: 100}} />
</View>

      <Button
        mode="contained"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
    </Background>
  )
}

const styles = StyleSheet.create({
  hairline: {
    backgroundColor: '#A2A2A2',
    height: 2,
    width: 165
  },
  loginButtonBelowText1: {
    fontFamily: 'Arial',
    fontSize: 14,
    paddingHorizontal: 5,
    alignSelf: 'center',
    color: 'white'
  },
})
