import React from 'react';
import { View, Text,StyleSheet,TouchableHighlight, Animated } from 'react-native';
import {FontAwesome5, Feather} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'






export default class AddButton extends React.Component {

    constructor(props){
        super(props);
    }

    buttonSize = new Animated.Value(1)
    mode = new Animated.Value(0)



    handlePress =()=>{

        Animated.sequence ([
            Animated.timing(this.buttonSize, {
                toValue:0.95,
                duration:200
            }),
            Animated.timing(this.buttonSize, {
                toValue:1
            }),
            Animated.timing(this.mode, {
                toValue: this.mode._value === 0 ? 1:0
            })
        ]).start()

    };



  render() {


    const sizeStyle = {
        transform: [{scale:this.buttonSize}]
    };

    const rotation = this.mode.interpolate({
        inputRange:[0,1],
        outputRange: ['0deg','45deg']
    })

    const speedOneX = this.mode.interpolate({
        inputRange:[0,1],
        outputRange:[-24,-100]
    })
    const speedOneY = this.mode.interpolate({
        inputRange:[0,1],
        outputRange:[-50,-100]
    })

    const speedTwoX = this.mode.interpolate({
        inputRange:[0,1],
        outputRange:[-24,-24]
    })
    const speedTwoY = this.mode.interpolate({
        inputRange:[0,1],
        outputRange:[-50,-150]
    })

    const speedThreeX = this.mode.interpolate({
        inputRange:[0,1],
        outputRange:[-24,50]
    })
    const speedThreeY = this.mode.interpolate({
        inputRange:[0,1],
        outputRange:[-50,-100]
    })
    return (
      <View style={{ position:'absolute', alignItems:'center'}}>

        <Animated.View style={{position:'absolute', left:speedTwoX, top:speedTwoY}}>
            <View style={styles.secondaryButton}>
                <Feather name='activity' size={24} color='#fff' />
            </View>
        </Animated.View>

        
        <Animated.View style={{position:'absolute', left:speedOneX, top:speedOneY}}>
        <AddEvent screenName='NewEvent'/>
        </Animated.View>
        


        <Animated.View style={{position:'absolute', left:speedThreeX, top:speedThreeY}}>
            <View style={styles.secondaryButton}>
                <Feather name='map' size={24} color='#fff' />
            </View>
        </Animated.View>


          <Animated.View  style={[styles.button,sizeStyle]}>
              
              <TouchableHighlight onPress={this.handlePress} underlayColor="#7f58ff">
                  <Animated.View style={{transform:[{rotate:rotation}]}}>
                      <FontAwesome5 name='plus' size={24} color='#fff' />
                  </Animated.View>
              </TouchableHighlight>
          </Animated.View>
      </View>
    );
  }
}

function AddEvent ({screenName}){
    const navigation = useNavigation();
    return(
        
        <View onPress={()=> navigation.navigate(screenName)} style={styles.secondaryButton}>
        <Feather name='users' size={24} color='#fff' />
    </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor:'#7f58ff',
        alignItems:'center',
        justifyContent:'center',
        width:72,
        height:72,
        borderRadius:36,
        position:'absolute',
        top:-60,
        shadowColor:'#7f58ff',
        shadowRadius:5,
        shadowOffset:{height:10},
        shadowOpacity:0.3,
        borderWidth:3,
        borderColor:'#fff'
    },

    secondaryButton: {
        position: 'absolute',
        alignItems:'center',
        justifyContent:'center',
        width:48,
        height:48,
        borderRadius:24,
        backgroundColor:'#7f58ff'
    }

})