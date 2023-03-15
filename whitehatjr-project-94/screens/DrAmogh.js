import React, { Component } from 'react';
import { Text, View, TouchableOpacity,StyleSheet } from 'react-native';

export default class DrAmogh extends Component {
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
                source={require('../assets/DrAmogh.jpg')}
              />
        <Text style={{ fontSize:20}}>Hi My Name Is DrAmogh, I have studied in University of Australia. I am a physiotherapist, a gym trainer and dietitian. If you have Obesity or Malnutrition I am the best Person to contact. If you want to call me Call me at 99999 777XX </Text>
          <TouchableOpacity
                style={styles.buttons}
                onPress={() => this.props.navigation.navigate('Obesity')}>
                <Text style={{ fontSize:20, color:"black"}}>Back</Text>
          </TouchableOpacity>
  
        </View>
      )
    }
  }