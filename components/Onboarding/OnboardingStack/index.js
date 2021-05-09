import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from '../../StartScreen';
import Onboarding1 from '../Onboarding1';
import Onboarding2 from '../Onboarding2'
import Onboarding3 from '../Onboarding3'
import Onboarding4 from '../Onboarding4'
import Main from '../../Main'

const Stack = createStackNavigator();

const OnboardingStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen
          name="Start"
          component={StartScreen}/>
        <Stack.Screen name="Onboarding1" component={Onboarding1} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} />
        <Stack.Screen name="Onboarding3" component={Onboarding3} />
        <Stack.Screen name="Onboarding4" component={Onboarding4} />
        <Stack.Screen name="Main" component={Main}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default OnboardingStack