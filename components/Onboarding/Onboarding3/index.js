import React from 'react';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';
import { Dimensions } from 'react-native';
import PrimaryButton from '../../Components/PrimaryButton';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const Onboarding3 = (props) => {
    const [value, setValue] = React.useState("high");
    const handleChange = (event) => {
        setValue(event.target.value)
    } 
    const onPress = () => {
      props.navigation.navigate('Onboarding4', {name: props.route.params.name, level: value})
    }

  return (
    <View style={styles.container} >
        <Text style={styles.text}>Nice to meet you! Now, how productive would you say you are?</Text>
      <FormControl component="fieldset">
        <RadioGroup onChange={handleChange}>
          <FormControlLabel
            control={<Radio />}
            label="Pretty productive!" value="high"
          />
          <FormControlLabel
            control={<Radio  />}
            label="I'm alright, but could be better!" value="medium"
          />
          <FormControlLabel
            control={<Radio />}
            label="I'm struggling - please help!" value="low"
          />
        </RadioGroup>
      </FormControl>
 
        <Image style={styles.image} source={require("./img/productive1.png")}/>
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
        width: 300,
    },
    text:{
      width: Dimensions.get('window').width - 40,
      fontFamily: "Sobat",
      fontWeight: 700,
      fontSize: 24,
      lineHeight: 30,
      marginBottom: 30,
      marginLeft: 20,
      marginRight: 20
    },
});

export default Onboarding3