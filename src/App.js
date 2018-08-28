import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

import t from 'tcomb-form-native'
const Form = t.form.Form
// Device Data Libs
// Potentially unlink CallHistory lib
// import CallHistory from 'react-native-call-history'

import ApiService from './services/ApiService'

export default class App extends Component {
  state={
    apiEndpoint: null,
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

  handleSubmit = () => {
    ApiService.postDeviceInfo()
    ApiService.postNetworkInfo()
    ApiService.postCalendarEvents()
    ApiService.postGeolocation()
  }

  render() {
    // CallHistory.list(
    //   (history) => {this.setState({callHistory: history})},
    //   (error) => {console.warn(error)}
    // )
    return (
      <View>
        <Form
          type={deviceDataSubmit}
          value={defaultValue}
          ref={c => this._form = c}
        />
        <Button
          title="Post Data"
          // color= {COLOR.yellow800}
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

const deviceDataSubmit = t.struct({
  apiEndpoint: t.String,
})

var defaultValue = {
  apiEndpoint: 'https://c6c421af.ngrok.io',
}