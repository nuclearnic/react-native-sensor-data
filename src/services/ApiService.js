import RNDeviceInfo from 'react-native-device-info'
import NetworkInfo from 'react-native-network-info'
import RNCalendarEvents from 'react-native-calendar-events'
// import CallHistory from 'react-native-call-history'


const apiEndpoint = 'http://a8a4e885.ngrok.io'

export default class ApiService {
  static postDeviceInfo() {
    fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        deviceInfo: {
          apiLevel: RNDeviceInfo.getAPILevel(),
          applicationName: RNDeviceInfo.getApplicationName(),
          batterLevel: RNDeviceInfo.getBatteryLevel(),
          brand: RNDeviceInfo.getBrand(),
          buildNumber: RNDeviceInfo.getBuildNumber(),
          buildId: RNDeviceInfo.getBundleId(),
          carrier: RNDeviceInfo.getCarrier(),
          deviceCountry: RNDeviceInfo.getDeviceCountry(),
          deviceId: RNDeviceInfo.getDeviceId(),
          deviceLocale: RNDeviceInfo.getDeviceLocale(),
          deviceName: RNDeviceInfo.getDeviceName(),
          firstInstallTime: RNDeviceInfo.getFirstInstallTime(),
          fontScale: RNDeviceInfo.getFontScale(),
          freeDiskStorage: RNDeviceInfo.getFreeDiskStorage(),
          ipAddress: RNDeviceInfo.getIPAddress(),
          installReferrer: RNDeviceInfo.getInstallReferrer(),
          instanceID: RNDeviceInfo.getInstanceID(),
          lastUpdateTime: RNDeviceInfo.getLastUpdateTime(),
          MACAdress: RNDeviceInfo.getMACAddress(),
          manufacturer: RNDeviceInfo.getManufacturer(),
          maxMemory: RNDeviceInfo.getMaxMemory(),
          model: RNDeviceInfo.getModel(),
          phoneNumber: RNDeviceInfo.getPhoneNumber(),
          readableVersion: RNDeviceInfo.getReadableVersion(),
          serialNumber: RNDeviceInfo.getSerialNumber(),
          systemName: RNDeviceInfo.getSystemName(),
          systemVersion: RNDeviceInfo.getSystemVersion(),
          timezone: RNDeviceInfo.getTimezone(),
          totalDiskCapacity: RNDeviceInfo.getTotalDiskCapacity(),
          totalMemory: RNDeviceInfo.getTotalMemory(),
          uniqueId: RNDeviceInfo.getUniqueID(),
          userAgent: RNDeviceInfo.getUserAgent(),
          version: RNDeviceInfo.getVersion(),
          is24Hour: RNDeviceInfo.is24Hour(),
          isEmulator: RNDeviceInfo.isEmulator(),
          isPinOrFingerprintSet: RNDeviceInfo.isPinOrFingerprintSet(),
          isTablet: RNDeviceInfo.isTablet(),
        },
        calendarEvents: {
          key: 'value',
        }
      })
    })
  }

  static postNetworkInfo() {
    // NetworkInfo.NetworkInfo.getIPAddress(ip => {
    //   console.log(ip)
    // });
  }
  static postCalendarEvents() {
    RNCalendarEvents.authorizeEventStore()
    let startDate = '2017-09-15T15:53:00'
    let endDate = '2018-09-15T15:53:00'

    // Works
    // RNCalendarEvents.fetchAllEvents("2017-06-08T00:00:00.000Z", "2018-09-12T00:00:00.000Z")
    // // RNCalendarEvents.fetchAllEvents(startDate, endDate, [])
    //   .then((events) => {
    //     console.log('events: ')
    //     console.log(events)
    //   })
    //   .catch(() => {
    //     console.warn(error)
    //   })

      // Works
      // RNCalendarEvents.findCalendars()
      //   .then((calendars) => {
      //     console.log(calendars)
      //   })

    // Works
    // RNCalendarEvents.saveEvent('Title of event', {
    //   startDate: '2018-09-19T19:26:00.000Z',
    //   endDate: '2018-10-19T19:26:00.000Z'
    // })

    // AddCalendarEvent.presentEventCreatingDialog(eventConfig)
    // .then(() => {
    //   console.warn(JSON.stringify(eventInfo));
    // })
    // .catch(() => {
    //   console.warn(error);
    // });
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

  // static postCallHistory() {
  //   CallHistory.list(
  //     (history) => {console.log(history)},
  //     (error) => {console.warn(error)}
  //   )
  // }
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