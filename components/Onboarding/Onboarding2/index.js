import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import TextField from "@material-ui/core/TextField"
import PrimaryButton from '../../Components/PrimaryButton';
import { makeStyles } from '@material-ui/core/styles'; 

const useStyles = makeStyles({
    root: {
        fontFamily: "Sobat-Regular",
    //   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
    //   padding: '0 30px',
    //   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    }
  });

const Onboarding2 = ({navigation}) => {
    const [value, setText] = React.useState('');
    const classes = useStyles();
   const onPress = () => {
       if (value.length > 1){
        navigation.navigate('Onboarding3', {name: value})
       }

   } 
  return (
    <View style={styles.container}>
        <Text style={styles.text}>To get started, tell us your name.</Text>
        <TextField classes={classes} label="Type your name here" value={value} onChange={text => setText(text.target.value)}/>
        <Image style={styles.image} source={require("./img/solo-illustration.png")}/>
        <PrimaryButton text={"Next"} onPress={onPress}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        },
    image: {
        height: 250,
        width: 293,
        marginTop: 50,
        marginBottom: 50
    },
    text: {
        //styleName: Title/Header 3;
        fontFamily: "Sobat-Regular",
        fontSize: 24,
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: 30

    },
    textField: {
        fontFamily: "Sobat-Regular",
        fontSize: 24,
    }
});

export default Onboarding2
