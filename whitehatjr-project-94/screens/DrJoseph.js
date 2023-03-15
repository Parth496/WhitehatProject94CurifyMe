import React, { Component } from 'react';
import { Text, View, TouchableOpacity,StyleSheet } from 'react-native';

export default class DrJoseph extends Component {
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
                source={require('../assets/DrJoseph.jpg')}
              />
        <Text style={{ fontSize:20}}>Hello Gentlemen and Ladies, I am Dr Joseph Fernandes, I have just finished my doctorate. I like to Study about plants and insect. I am now doing my PHD with some help by Doctor Haldi I have learned a skill how to counter mosquito Ha Ha!!</Text>
          <TouchableOpacity
                style={styles.buttons}
                onPress={() => this.props.navigation.navigate('Malaria')}>
                <Text style={{ fontSize:20, color:"black"}}>Back</Text>
          </TouchableOpacity>
  
        </View>
      )
    }
  }