import React, {useState} from 'react'
import {StyleSheet, Text, View} from 'react-native'

const SystemizeTitle = () => {

    return (
        <View>
            <Text style={styles.title}>Systemize</Text>
            <View style={styles.rectangle}/>
        </View>
    );
}

const styles = StyleSheet.create({    
    title:{
        height: 17,
        width: "auto",
        margin: "auto",
        bottom: 47,
        fontFamily: "Sobat",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 35,
        lineHeight: 16,
        /* identical to box height, or 40% */
        letterSpacing: "0.02em",
        textTransform: "uppercase",
        
        color: "#000000",
        zIndex: 2
    },
    rectangle: {
        height: 30,
        width: 270,
        left: 0,
        top: -5,
        borderRadius: 0,
        zIndex: 1,
        /* Teal/600 */

        backgroundColor: "#A5E5D5",
        marginBottom: 20
    }

    
})

export default SystemizeTitle