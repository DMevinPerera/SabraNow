import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

export default function Paragraph1(props) {
  return <Text style={styles.text} {...props} />
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 5,
    color: 'white',

  },
})