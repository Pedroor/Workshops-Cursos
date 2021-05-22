import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { UserIdentification } from './src/pages/UserIdentification';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });
  return <UserIdentification />;
};

export default App;
