import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import commanStyles from '../../styles/CommonStyles';

import ScreenDashboard from './ScreenDashboard';
import ScreenNotifications from './ScreenNotifications';
import ScreenSettings from './ScreenSettings';
import ScreenProfile from './ScreenProfile';
import Icon from 'react-native-vector-icons/FontAwesome';
     

const DrawerExample = DrawerNavigator(
    
);


export default DrawerExample;