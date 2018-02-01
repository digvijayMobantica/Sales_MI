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


import ScreenDrawerNavigation from '../pages/drawer/ScreenDrawerNavigation.js';
import ScreenDashboard from '../pages/drawer/ScreenDashboard.js';
import ScreenNotifications from '../pages/drawer/ScreenNotifications.js';
import ScreenProfile from '../pages/drawer/ScreenProfile.js';
import ScreenSettings from '../pages/drawer/ScreenSettings.js';



const AppRouter = StackNavigator(
    {
      // ScreenSplash: {
      //   screen: ScreenSplash,
      // },

      // ScreenSignup: {
      //   screen: ScreenSignup,
      // },

      // ScreenLogin: {
      //   screen: ScreenLogin,
      // },

      ScreenDrawerNavigation: {
        screen: ScreenDrawerNavigation,
      },

      ScreenNotifications: {
        screen: ScreenNotifications,
      },

      ScreenProfile: {
        screen: ScreenProfile,
      },

      ScreenDashboard: {
        screen: ScreenDashboard,
      },

      ScreenSettings: {
        screen: ScreenSettings,
      },
 

    }
     
);

export default AppRouter;