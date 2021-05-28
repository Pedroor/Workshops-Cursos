import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Routes from './src/routes';

import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';
import OneSignal, { DeviceState } from 'react-native-onesignal';
import { Notifications } from 'react-native-notifications';

// 4ea21522-a236-431d-acdf-81fe64e6059e

// Must be outside of any component LifeCycle (such as `componentDidMount`).
PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function (token) {
    console.log('TOKEN:', token);
  },

  // (required) Called when a remote is received or opened, or local notification is opened
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);

    // process the notification

    // (required) Called when a remote is received or opened, or local notification is opened
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },

  // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
  onAction: function (notification) {
    console.log('ACTION:', notification.action);
    console.log('NOTIFICATION:', notification);

    // process the action
  },

  // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
  onRegistrationError: function (err) {
    console.error(err.message, err);
    console.log('OLA');
  },

  // IOS ONLY (optional): default: all - Permissions to register.
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },

  // Should the initial notification be popped automatically
  // default: true
  popInitialNotification: true,

  /**
   * (optional) default: true
   * - Specified if permissions (ios) and token (android and ios) will requested or not,
   * - if not, you must call PushNotificationsHandler.requestPermissions() later
   * - if you are not using remote notification or do not have Firebase installed, use this:
   *     requestPermissions: Platform.OS === 'ios'
   */
  requestPermissions: true,
});

const App = () => {
  const [isSubscribed, setIsSubscribed] = useState<DeviceState>();

  useEffect(() => {
    PushNotification.createChannel(
      {
        channelId: '13789', // (required)
        channelName: 'My channel', // (required)
        channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
        playSound: false, // (optional) default: true
        soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
        importance: 4, // (optional) default: 4. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
      },
      created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    );
    Notifications.registerRemoteNotifications();
    async function configOneSignal() {
      /* O N E S I G N A L   S E T U P */

      OneSignal.setLogLevel(6, 0);
      OneSignal.setAppId('4ea21522-a236-431d-acdf-81fe64e6059e');

      const deviceState = await OneSignal.getDeviceState();
      setIsSubscribed(deviceState);
    }

    configOneSignal();
  }, []);
  console.log(isSubscribed);

  return <Routes />;
};

export default App;
