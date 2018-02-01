import React from 'react';
import { Button, ScrollView, Text } from 'react-native';
import {
  StackNavigator,
  TabNavigator,
  StackRouter,
  createNavigator,
  createNavigationContainer,
  addNavigationHelpers,
} from 'react-navigation';

import ScreenSplash from '../pages/login/ScreenSplash.js';
import ScreenSignup from '../pages/login/ScreenSignup.js';
import ScreenLogin from '../pages/login/ScreenLogin.js';

const AppRouter = StackNavigator(
    {
      // ScreenSplash: {
      //   screen: ScreenSplash,
      // },

      // ScreenSignup: {
      //   screen: ScreenSignup,
      // },

      ScreenLogin: {
        screen: ScreenLogin,
      },
 

    }
     
);

export default AppRouter;