import React, {useState} from 'react'
import {StyleSheet, View, Text} from 'react-native'

const HomeCard = () => {
    return (
        <View style={styles.cardBackground}>
            <View>
            <Text>Did you know?</Text>
            <Text>See your weekly productivity summary on your profile.</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardBackground: {
        backgroundColor: "#f98b88",
        borderRadius: 10,
        margin: 'auto',
        width: 'fit-content',
        padding: 10,
    }
})

export default HomeCard