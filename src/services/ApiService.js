import RNDeviceInfo from 'react-native-device-info'
import NetworkInfo from 'react-native-network-info'
import RNCalendarEvents from 'react-native-calendar-events'

export default class ApiService {
  static postDeviceInfo() {
    console.log('Device info from service')
    console.log(RNDeviceInfo.getModel())
    console.log(RNDeviceInfo.getBrand())
  }
  static postNetworkInfo() {
    NetworkInfo.NetworkInfo.getIPAddress(ip => {
      console.log(ip)
    });
  }
  static postCalendarEvents() {
    RNCalendarEvents.authorizeEventStore()
    let startDate = '2008-09-15T15:53:00'
    let endDate = '2019-09-15T15:53:00'
    console.log(RNCalendarEvents.fetchAllEvents(startDate, endDate))
  }
  static postGeolocation() {
    console.log("geolocationzzz ")
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position)
      },
      (error) => console.log(error),
      { enableHighAccuracy: true, timeout: 20000 },
    )
  }
  // static login() {
  //   return new Promise((resolve, reject) => {
  //     api
  //       .get(`${AUTH_ENDPOINT}/login`)
  //       .then((response) => {
  //         resolve(response.data.auth_session);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   });
  }