import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Confirmation } from './src/pages/Confirmation';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });
  return <Confirmation />;
};

export default App;
