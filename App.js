import React from 'react'
import { Button, StatusBar, StyleSheet, Text, View } from 'react-native'
import Weather from './src'

export default function App() {
  return (
    <View style={styles.container}>
      <Weather/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
   
  },
})