import React, { Component } from 'react';
import { Text, View, TouchableOpacity,StyleSheet } from 'react-native';

export default class DrHaldi extends Component {
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
                source={require('../assets/DrHaldi.webp')}
              />
        <Text style={{ fontSize:20}}>Hello Patient, My name is Dr Haldi I have done my PHD is biology and i have also studied
          Many animals and insects Like Mosquito, Frogs etc. If u have any animal viruses I am the best person to contact. If you need to contact me call at 99999 888XX</Text>
          <TouchableOpacity
                style={styles.buttons}
                onPress={() => this.props.navigation.navigate('Malaria')}>
                <Text style={{ fontSize:20, color:"black"}}>Back</Text>
          </TouchableOpacity>
  
        </View>
      )
    }
  }