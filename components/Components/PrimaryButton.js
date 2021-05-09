import React, {useState} from 'react'
import {ColorPropType, StyleSheet, Text, TouchableOpacity} from 'react-native'

const PrimaryButton = (props) => {

    const onClicked = () => {
        props.onPress()
    }
    return (
        <TouchableOpacity style={styles.primaryButton} onPress={onClicked}>
            <Text style={styles.buttonText}>{props.text}</Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    buttonText:{
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.02,
        color: "white",
        fontStyle: "normal",
        fontWeight: "bold"

    },
    primaryButton:{
        width: 144,
        height: 50,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#3B60E4",
        padding: 5,
        borderRadius: 5,        
    }
})

export default PrimaryButton