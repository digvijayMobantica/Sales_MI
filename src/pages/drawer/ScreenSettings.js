 
import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import commanStyles from '../../styles/CommonStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class ScreenSettings extends Component {

    static navigationOptions = {
        headerTitle: 'Settings',
        tabBarLabel: 'Settings',
        drawerIcon: ({ tintColor }) => {
            return (
                <MaterialIcons
                    name="settings"
                    size={24}
                    style={{ color: tintColor }}
                > </MaterialIcons>
            );
        }

    }

    render() {
        return (
            <View style={commanStyles.container}>
                <Text style={{ fontSize: 30, color: 'green' }}>
                    Settings
                </Text>
                <Button onPress={() => this.props.navigation.navigate('DrawerOpen')}
                    title="Open Drawer" />
            </View>
        );
    }


}

export default ScreenSettings;

