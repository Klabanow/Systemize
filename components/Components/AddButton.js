import React, {useState} from 'react'
import {Image} from 'react-native'
import {ColorPropType, StyleSheet, Text, TouchableOpacity} from 'react-native'

const AddButton = (props) => {
    console.log(props)
    const onClicked = () => {
    }
    return (
        <TouchableOpacity style={props.button} onPress={onClicked}>
            <Image style={styles.image} source={require('../Main/icons/add.png')}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        height: "inherit",
        width: "inherit"
    }
})

export default AddButton