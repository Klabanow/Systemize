import React, {useState} from 'react'
import {StyleSheet, View, Text} from 'react-native'

const EmptyTasks = () => {
    return (
        <View>
            <Text style={styles.message}>You don't have any tasks for today yet!</Text>
            <Text style={styles.message}>Click on the '+' button below to add something!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    message: {
        fontSize: 20,
         marginTop: 30
    }
})

export default EmptyTasks