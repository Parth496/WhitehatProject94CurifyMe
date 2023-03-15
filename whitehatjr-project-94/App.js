import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LoginScreen from "./screens/LoginScreen";
import LoadingScreen from "./screens/LoadingScreen";
import LogoutScreen from "./screens/LogoutScreen";
import DashboardScreen from "./screens/HomeScreen";

import * as firebase from "firebase";
import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
} 

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  LogoutScreen:LoginScreen,
  DashboardScreen:DashboardScreen,
})

const AppNavigator = createAppContainer(AppSwitchNavigator)

export default function App() {
  return (
    <AppNavigator />
  )
}
