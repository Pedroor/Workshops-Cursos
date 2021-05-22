import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Welcome } from './src/pages/Welcome';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });
  return <Welcome />;
};

export default App;
