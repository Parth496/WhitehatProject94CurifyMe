import React, { Component } from 'react';
import { Text, View, TouchableOpacity,StyleSheet } from 'react-native';

export default class DrMishra extends Component {
    render() {
      return (
        <View style={styles.container}>
        
          <TouchableOpacity
                style={styles.buttons}
                onPress={() => this.props.navigation.navigate('Malaria')}>
                <Text style={{ fontSize:20, color:"black"}}>Back</Text>
          </TouchableOpacity>
  
        </View>
      )
    }
  }