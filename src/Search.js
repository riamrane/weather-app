import React, { useState } from 'react'
import { Button, Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'

export default function Search({fetchWeatherData}) {
    const [cityName, setCityName] = useState('');
  return (
    <View style={styles.searchBar}>
        <TextInput 
        placeholder='Search City'
        value={cityName}
        onChangeText={(text)=>setCityName(text)}
        />
        <Button title='search' onPress={()=>fetchWeatherData(cityName)}/>        
    </View>
  )
}


const styles =  StyleSheet.create({
    searchBar:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:Dimensions.get('screen').width-20,
        borderWidth:1.5,
        paddingVertical:10,
        borderRadius:25,
        marginHorizontal:10,
        paddingHorizontal:10,
        backgroundColor:'lightgray'
    }
})