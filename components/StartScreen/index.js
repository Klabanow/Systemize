import React, {useState} from 'react'
import {StyleSheet, Image, View} from 'react-native'
import SystemizeTitle from '../Components/SystemizeTitle'
import PrimaryButton from '../Components/PrimaryButton'

const StartScreen = ({ navigation }) => {
    
    const getStarted = () => {
        navigation.navigate('Main', {username: 'jeff'})
    }


    return (
        <View style={styles.container}>
            <SystemizeTitle/>
            <View style={styles.underline}/>
            <Image style={styles.image} source={require('./img/office1.png')}/>
            <PrimaryButton style={styles.button} text={"Get Started"} onPress={getStarted}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundImage: "linear-gradient(white, salmon)",
        alignItems: 'center',
        justifyContent: 'center',
        },
    image: {
        marginTop: 50,
        height: 237,
        width: 343,
        marginBottom: 50
        
    }

})
export default StartScreen