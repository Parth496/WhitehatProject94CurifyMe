import React, { Component } from 'react';
import { Text, View, TouchableOpacity,StyleSheet } from 'react-native';

export default class Cough extends Component {
  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('DrIyer')}>
              <Text>Dr Iyer</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('DrChaturvedi')}>
              <Text>Dr Chaturvedi</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('DrPatil')}>
              <Text>Dr DrPatil</Text>
            </TouchableOpacity>
        <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Text style={{ fontSize:20, color:"black"}}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
    buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
    width: 160,
    height: 50,
  }
});