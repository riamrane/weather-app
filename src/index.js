import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Alert, ActivityIndicator } from 'react-native'
import WeatherInfo from './WeatherInfo';

const API_KEYS = 'c20992afd932c01c371b0846ef6a8da3';

export default function Weather() {

    const [weatherData, setWeatherData]= useState(null);
    const [loaded, setLoaded] = useState(false);

    const fetchWeatherData = async (cityname) => {
        try{
            setLoaded(false);
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_KEYS}&units=metric`);
            if(response.status == 200){
                const data = await response.json();
                setWeatherData(data);
                
            }else{
                setWeatherData(null);
            } 
            setLoaded(true);           
        }catch(error){
            Alert.alert('Error', error.message)
        }
    }

    useEffect(()=>{
        fetchWeatherData('Pune');
    },[]);

    if(!loaded){
        return (
            <View style={styles.container}>
                <ActivityIndicator size={'large'} color={'red'}/>
            </View>
        )
    }
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Weather App</Text>
        </View>
        <WeatherInfo weatherData={weatherData} fetchWeatherData={fetchWeatherData} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    header:{
        alignItems:'center',
        backgroundColor:'lightblue',
        height:80,
        justifyContent:'center'
    },
    headerTitle:{
        fontSize:29,
        fontWeight:'bold'
    }
  })