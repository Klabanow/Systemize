import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import PrimaryButton from '../../Components/PrimaryButton';

const Onboarding1 = ({navigation}) => {

  const onPress = () => {
    navigation.navigate('Onboarding2', {})
  }

  return (
    <View style={styles.container}>
        <Text style={styles.titleText}>Welcome to Systemize!</Text>
        <Text style={styles.subText}>We want to help you color code your tasks and check them off as you go.</Text>
        <Image style={styles.image} source={require("./img/work1.png")}/>
        <PrimaryButton style={styles.button} onPress={onPress} text={"Next"}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        },
    titleText:{
      fontFamily: "Sobat-Bold",
      fontWeight: 700,
      fontSize: 24,
      lineHeight: 30
    },
    subText: {
      fontFamily: "Sobat-Regular",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 20,
      margin: 20
    },
    image: {
        height: 250,
        width: 300,
        marginTop: 50,
        marginBottom: 50  
    },
    button: {
      marginLeft: 50
    }
});

export default Onboarding1
