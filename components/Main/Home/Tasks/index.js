import React, {useState} from 'react'
import {StyleSheet, View, Text} from 'react-native'
import EmptyTasks from './EmptyTasks'


const Tasks = (props) => {
    return (
        <View style={props.style}>
            <EmptyTasks/>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default Tasks