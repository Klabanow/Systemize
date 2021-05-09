import { red } from '@material-ui/core/colors'
import React, {useState} from 'react'
import {StyleSheet, View, Text} from 'react-native'
import AddButton from '../../Components/AddButton'

import HomeCard from './HomeCard'
import Tasks from './Tasks'

const Home = () => {
    return (
        <View>
            <Text style={styles.welcomeText}>Hey, what's on the agenda for today?</Text>
            <HomeCard/>
            <View style={styles.taskManage}>
                <Text style={styles.welcomeText}>Your Tasks</Text>
            </View>

            <Tasks style={styles.tasks}/>
            <View>
                <AddButton button={styles.addButton} image={styles.addImage }/>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    welcomeText: {
        borderRadius: 10,
        margin: 'auto',
        marginTop: 30,
        fontSize: 25,
        width: 'fit-content',
        padding: 10
    },
    taskManage: {
        
    },
    tasks: {
        margin: 'auto',
        width: 'fit-content',
        padding: 10,
        height: 400
   
    },  
    addButton: {
        color: red,
        width: 50,
        height: 50,
        alignSelf:'center',
        bottom: 50,
        zIndex: 4
    }

})

export default Home