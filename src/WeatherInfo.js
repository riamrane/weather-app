import React from 'react'
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Search from './Search'

export default function WeatherInfo({ weatherData,fetchWeatherData }) {
    const { name, visibility, weather: [{ icon, description }], main: { temp, humidity, pressure }, wind: { speed }, sys: { sunrise, sunset } } = weatherData
    return (
        <SafeAreaView style={styles.container}>
            <Search fetchWeatherData={fetchWeatherData}/>
            <View style={{alignItems:'center'}}>
                <Text style={styles.title}>
                    {name}
                </Text>
            </View>
            <View style={styles.logo}>
                <Image
                style={styles.largeIcon}
                source={{uri:`https://openweathermap.org/img/wn/${icon}.png`}}
                />
                <Text style={styles.currentTemp}>{temp} °C</Text>
            </View>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.extraInfo}>
                <View style={styles.info}>
                    <Text style={styles.infoText}>{temp}°C</Text>
                    <Text style={styles.infoText}>Feels Like</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.infoText}>{humidity}°C</Text>
                    <Text style={styles.infoText}>Humidity</Text>
                </View>
            </View>
            <View style={styles.extraInfo}>
                <View style={styles.info}>
                    <Text style={styles.infoText}>{visibility}</Text>
                    <Text style={styles.infoText}>Visibility</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.infoText}>{speed} m/s</Text>
                    <Text style={styles.infoText}>Wind Speed</Text>
                </View>
            </View>
            <View style={styles.extraInfo}>
                <View style={styles.info}>
                    <Text style={styles.infoText}>{new Date(sunrise*1000).toLocaleString()}</Text>
                    <Text style={styles.infoText}>Sunrise</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.infoText}>{new Date(sunset*1000).toLocaleString()}</Text>
                    <Text style={styles.infoText}>Sunset</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:15,
    },
    title:{
        width:'100%',
        textAlign: 'center',
        fontSize:26,
        fontWeight:'bold',
        color:'#e96f0z',
        marginBottom:10,
    },
    logo:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
    },
    largeIcon:{
        width:200,
        height:200,
    },
    currentTemp:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',

    },
    description:{
        textAlign:'center',
        fontSize:24,
        fontWeight:'bold',
        marginBottom:10
    },
    extraInfo:{
        flexDirection:'row',
        justifyContent:'space-around',
        padding:7,
    },
    info:{
        width:Dimensions.get('screen').width/2.5,
        backgroundColor:'#d0eafa',
        padding:10,
        borderRadius:15,
        justifyContent:'center'
    },
    infoText:{
        textAlign:'center',
        fontSize:18
    }
})
