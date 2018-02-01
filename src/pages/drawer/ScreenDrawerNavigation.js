import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import commanStyles from '../../styles/CommonStyles';

import ScreenDashboard from './ScreenDashboard';
import ScreenNotifications from './ScreenNotifications';
import ScreenSettings from './ScreenSettings';
import ScreenProfile from './ScreenProfile';


// import Icon from 'react-native-vector-icons/FontAwesome';

// const StackDashboard = StackNavigator({
//     Schedules: {
//         screen: ScreenDashboard,
//         navigationOptions: ({ navigation }) => ({
//             title: 'Dashboard',  // Title to appear in status bar
//             headerLeft: <Icon name="menu" size={35} onPress={() => navigation.navigate('DrawerOpen')} />,
//             drawerIcon: ({ tintColor }) => {
//                 return (
//                     <MaterialIcons
//                         name="dashboard"
//                         size={24}
//                         style={{ color: tintColor }}
//                     > </MaterialIcons>
//                 );
//             }
//         })
//     }
// });

// const StackNotifications = StackNavigator({
//     Schedules: {
//         screen: ScreenNotifications,
//         navigationOptions: ({ navigation }) => ({
//             title: 'Notifications',  // Title to appear in status bar
//             headerLeft: <Icon name="menu" size={35} onPress={() => navigation.navigate('DrawerOpen')} />
//         })
//     }
// });


// const StackSettings = StackNavigator({
//     Schedules: {
//         screen: ScreenSettings,
//         navigationOptions: ({ navigation }) => ({
//             title: 'Settings',  // Title to appear in status bar
//             headerLeft: <Icon name="menu" size={35} onPress={() => navigation.navigate('DrawerOpen')} />
//         })
//     }
// });
// const StackProfile = StackNavigator({
//     Schedules: {
//         screen: ScreenProfile,
//         navigationOptions: ({ navigation }) => ({
//             title: 'Profile',  // Title to appear in status bar
//             headerLeft: <Icon name="menu" size={35} onPress={() => navigation.navigate('DrawerOpen')} />
//         })
//     }
// });

const DrawerExample = DrawerNavigator(

    {
        Dashboard:
            {
                // path: '/',
                screen: ScreenDashboard,
                navigationOptions: {
                    title: 'Dashboard', // Text shown in left menu
                }

            },

        Notifications:
            {
                // path: '/sent',
                screen: ScreenNotifications,
                navigationOptions: {
                    title: 'Notifications',
                }
            },
        Settings:
            {
                // path: '/sent',
                screen: ScreenSettings,
                navigationOptions: {
                    title: 'Settings',
                }
            },

        ScreenProfile:
            {
                // path: '/sent',
                screen: ScreenProfile,
                navigationOptions: {
                    title: 'Profile',
                }
            },
    },
    //DrawerNavogator Config
    {
        initialRouteName: 'Dashboard',
        drawerPosition: 'left',
        contentOptions: {
            activeTintColor: 'red',
        }

    }
);


export default DrawerExample;