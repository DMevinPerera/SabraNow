import React from 'react'
import { StyleSheet } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
import { theme } from '../core/theme'

export default function Button1({ mode, style, ...props }) {
  return (
    <PaperButton
      style={[
        styles.button,
        mode === 'outlined' && { backgroundColor: '#02585E' },
        style,
      ]}
      labelStyle={styles.text}
      mode={mode}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  button: {
    width: '70%',
    marginVertical: 15,
    paddingVertical: 2,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 0,
    
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
    
  },
})