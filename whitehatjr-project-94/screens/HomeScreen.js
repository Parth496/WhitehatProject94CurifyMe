import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';


import db from '../config';
export default class HomeScreen extends Component{
    render() {
        return (
          <View>
            <AppHeader />
            <View>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity
                  style={styles.buttons}
                  onPress={() => this.props.navigation.navigate('Diabetes')}>
                  <Text>Read a Joke</Text>
                </TouchableOpacity>
    
                <TouchableOpacity
                  style={styles.buttons}
                  onPress={() => this.props.navigation.navigate('Cough')}>
                  <Text>Horoscope</Text>
                </TouchableOpacity>
    
                <TouchableOpacity
                  style={styles.buttons}
                  onPress={() => this.props.navigation.navigate('Obesity')}>
                  <Text>Weather</Text>
                </TouchableOpacity>
    
                <TouchableOpacity
                  style={styles.buttons}
                  onPress={() => this.props.navigation.navigate('Malaria')}>
                  <Text>Top News</Text>
                </TouchableOpacity>
              </View>
              </View>
              </View>
      )
    }
}
