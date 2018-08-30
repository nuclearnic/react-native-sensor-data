import React, { Component, PermissionsAndroid } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

import t from 'tcomb-form-native'
const Form = t.form.Form
// Device Data Libs
// Potentially unlink CallHistory lib
// import CallHistory from 'react-native-call-history'

import ApiService from './services/ApiService'

// async function requestCallLogPermission() {
//   console.log('INSIDDE ASYNCYYYY ZZZZZZZZZZZ')
//   try {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
//       {
//         'title': 'Call Log App Permission',
//         'message': 'App can read call log.'
//       }
//     )
//     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//       console.log("You can read the call log")
//     } else {
//       console.log("Call log permission denied")
//     }
//   } catch (err) {
//     console.warn(err)
//   }
// }

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
    // ApiService.postCallHistory()
  }

  render() {
    // requestCallLogPermission()
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