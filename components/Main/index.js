import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image} from 'react-native'
import Profile from '../Main/Profile'
import Home from '../Main/Home'
import { getUser } from '../../actions/firebase';

const Tab = createBottomTabNavigator();

const Main = (props) => {
    const value = getUser(props.route.params.username)
    return (
            <Tab.Navigator initialRouteName="Home"
                tabBarOptions={{showLabel: false, style: {
                    backgroundColor: "transparent",
                    borderTopWidth: 0,
                    borderBottomWidth: 0,
                    zIndex: 0
                }}}
            >
                <Tab.Screen name="Profile" component={Profile}
                options={{
                    title: 'Profile',
                    tabBarIcon: ({size,focused,color}) => {
                      return (
                        <Image
                          style={{ width: size, height: size }}
                          source={require('./icons/profile.png')}
                        />
                      );
                    },
                  }}/>
                <Tab.Screen name="Home" component={Home}
                options={{
                    title: 'Home',
                    tabBarIcon: ({size,focused,color}) => {
                      return (
                        <Image
                          style={{ width: size, height: size }}
                          source={require('./icons/home.png')}
                        />
                      );
                    },
                  }}/>
                <Tab.Screen name="Calendar" component={Home} 
                options={{
                    title: 'Calendar',
                    tabBarIcon: ({size,focused,color}) => {
                      return (
                        <Image
                          style={{ width: size, height: size }}
                          source={require('./icons/calendar.png')}
                        />
                      );
                    },
                  }}/>
                <Tab.Screen name="Productivity" component={Home} 
                options={{
                    title: 'My profile',
                    tabBarIcon: ({size,focused,color}) => {
                      return (
                        <Image
                          style={{ width: size, height: size }}
                          source={require('./icons/profile.png')}
                        />
                      );
                    },
                  }}
                  />
            </Tab.Navigator>
    )
}

export default Main