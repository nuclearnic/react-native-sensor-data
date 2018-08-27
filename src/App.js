import React, { Component } from 'react'
import { View, Text } from 'react-native'

import CallHistory from 'react-native-call-history'
import RNDeviceInfo from 'react-native-device-info'
import NetworkInfo from 'react-native-network-info'
import RNCalendarEvents from 'react-native-calendar-events'

export default class App extends Component {
  state={
    endpoint: null,
    callHistory: null,
    location: {
      latitude: null,
      longitude: null,
      error: null,
    },
    networkInfo: {
      ip: null,
      ipv4: null,
      ssid: null,
      bssid: null,
    }
  };



  render() {
    // CallHistory.list(
    //   (history) => {this.setState({callHistory: history})},
    //   (error) => {console.warn(error)}
    // )
    console.log('Logging stuff')
    console.log(RNDeviceInfo.getBrand())
    // console.log(this.state.callHistory)
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position)
      },
      (error) => this.setState({ error: position.error.message }),
      { enableHighAccuracy: true, timeout: 20000 },
    )
    return (
      <View>
        <Text>Hello World</Text>
      </View>
    );
  }
}
