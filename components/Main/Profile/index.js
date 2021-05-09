import React, {useState} from 'react'
import {StyleSheet, View, Text} from 'react-native'


const Profile = () => {
    return (
        <View style={styles.tasks}>
            <Text>systemize</Text>
            <Text>Edit Profile</Text>
            <Text>Tim</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    tasks: {
        margin: 'auto',
        width: 'fit-content',
        padding: 10
    }
})

export default Profile