import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'

import LoginScreen from './screens/LoginScreen.js'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="loginScreen"
            component={LoginScreen}
            hideNavBar={true}
          />
        </Scene>
      </Router>
    );
  }
}
