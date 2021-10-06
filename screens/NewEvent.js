import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

function NewEvent({navigation}){
    return(
        <View>
            <Text>New Event Screen</Text>
            <Button title='Go back' onPress={()=> navigation.goBack()} />
        </View>
    )
}

export default NewEvent;