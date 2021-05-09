import React from 'react';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';

import PrimaryButton from '../../Components/PrimaryButton';
import TextField from '@material-ui/core/TextField'

import {createUser} from '../../../actions/firebase'

const Onboarding4 = (props) => {
    const [username, setUsername] = React.useState(props.route.params.name)
    const [occupation, setOccupation] = React.useState("")
    const [bio, setBio] = React.useState("")
    // const [image, setImage] = React.useState("");
    const onPress = () => {
        createUser(username, username, props.route.params.level, occupation, bio)
        props.navigation.navigate("Main", {username: username})
    }

  return (
    <View style={styles.container} >
        <Text style={styles.text}>Finally, choose a photo for your profile and write a little bio about yourself.</Text>
        {/* <Image style={styles.image} source={require("./img/productive1.png")}/> */}
        <TextField style={styles.textField} label={"Username"} value={username} onChange={text => setUsername(text.target.value)}/>
        <TextField style={styles.textField} label={"Occupation"} value={occupation} onChange={text => setOccupation(text.target.value)}/>
        <TextField style={styles.textField} label={"Write a bio"} value={bio} onChange={text => setBio(text.target.value)}/>
        <PrimaryButton text={"Finish"} onPress={onPress} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        },
    text: {
        fontFamily: "Sobat-Regular",
        fontWeight: 700,
        fontSize: 24,
        fontStyle: 'normal'
    },
    image: {
        height: 250,
        width: 300,
    }
});

export default Onboarding4