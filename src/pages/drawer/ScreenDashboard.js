

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import GridView from 'react-native-super-grid';

import commanStyles from '../../styles/CommonStyles';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


class ScreenDashboard extends Component {

    static navigationOptions = {

        drawerIcon: ({ tintColor }) => {
            return (
                <MaterialIcons
                    name="dashboard"
                    size={24}
                    style={{ color: tintColor }}
                > </MaterialIcons>
            );
        }
    }

    render() {

        // Taken from https://flatuicolors.com/
        const items = [
            { name: 'All Products', code: '#ffffff', imageName: '../../images/healer/padlock.png' }, { name: 'Attendance', code: '#ffffff', imageName: '../../images/healer/padlock.png' },
            { name: 'Place Order', code: '#ffffff', imageName: '../../images/healer/padlock.png' }, { name: 'My Cart', code: '#ffffff', imageName: '../../images/healer/padlock.png' },
            { name: 'Customer', code: '#ffffff', imageName: '../../images/healer/padlock.png' }, { name: 'Visit Now', code: '#ffffff', imageName: '../../images/healer/padlock.png' },
            { name: 'Plan Visit', code: '#ffffff', imageName: '../../images/healer/padlock.png' }, { name: 'Categories', code: '#ffffff', imageName: '../../images/healer/padlock.png' },

        ];


        return (
            <GridView
                itemDimension={130}
                items={items}
                style={styles.gridView}
                renderItem={item => (
                    <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                        <View  style={styles.imageContainer} >
                            <Image source={require('../../images/sales/ic_cart_web.png')} style={styles.itemImage} />
                        </View>
                        <Text style={styles.itemName}>{item.name}</Text>
                        {/* <Text style={styles.itemCode}>{item.code}</Text> */}
                    </View>
                )}
            />
        );
    }


}

export default ScreenDashboard;


const styles = StyleSheet.create({
    gridView: {
        paddingTop: 25,
        paddingBottom: 25,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'center',
        borderRadius: 5,
        alignItems: 'center',
        padding: 10,
        height: 150,
    },
    itemName: {
        fontSize: 16,
        color: '#000',
        flex: .2,
        justifyContent: 'flex-end',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },

    itemImage:
        {  
            justifyContent: 'center',
            height: 50,
            width: 50,

        },

    imageContainer:
        {
            flex: .8,
            padding: 2,
            justifyContent: 'center',

        },
});







