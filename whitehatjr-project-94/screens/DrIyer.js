import React, { Component } from 'react';
import { Text, View, TouchableOpacity,StyleSheet } from 'react-native';

export default class DrIyer extends Component {
    render() {
      return (
        <View style={styles.container}>
         <Image
                style={{
                  width: 50,
                  height: 50,
                  marginTop: -35,
                  marginLeft: 100,
                }}
                source={require('../assets/DrIyer.webp')}
              />
        <Text style={{ fontSize:20}}>Hi My Name Is DrIyer, I have studied in University of Pune. I am MBBS. If you
        have Cold, Cough or Fever I am right person to contact. If you want to contact me Pls call me at 99999 998XX </Text>
          <TouchableOpacity
                style={styles.buttons}
                onPress={() => this.props.navigation.navigate('Cough')}>
                <Text style={{ fontSize:20, color:"black"}}>Back</Text>
          </TouchableOpacity>
  
        </View>
      )
    }
  }