import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Card, ListItem } from 'react-native-elements';

export default class EventScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <SafeAreaView style={{flex:1, backgroundColor:'#161924'}}>
        <View >
        <StatusBar barStyle='light-content' />

        <View>
        <Card title='test'>
            <ListItem
            title='testing'
            leftIcon={{name:'flight-takeoff'}} />
        </Card>

        <Card title='test'>
            <ListItem
            title='testing'
            leftIcon={{name:'flight-takeoff'}} />
        </Card>

        <Card title='test'>
            <ListItem
            title='testing'
            leftIcon={{name:'flight-takeoff'}} />
        </Card>
        </View>
    </View>
    </SafeAreaView>
    );
  }
}
