// Top level stack navigation

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './TabNav';
import NewEvent from '../screens/NewEvent';


const Stack = createStackNavigator();

function RootStack({navigation}){
    return(
        <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={BottomTabNavigator} />
        <Stack.Screen name='NewEvent' component={NewEvent}/>
    </Stack.Navigator>
    </NavigationContainer>
    );
}

export default RootStack;