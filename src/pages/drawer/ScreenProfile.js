

import React, { Component } from 'react';
import { Font } from 'expo';
import Text from '../../elements/Text';
import GradientButton from '../../elements/GradientButton';
import CheckBox from '../../elements/CheckBox';

import {
    TextInput,
    View,
    StyleSheet,
    Image,
    ScrollView,
    Platform,
    StatusBar,
    Button,
    TouchableOpacity,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import {
    deviceHeight,
    shadowOpt,
    colors
} from '../../styles/variables';

import commanStyles from '../../styles/CommonStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class ScreenProfile extends Component {

    state = {
        fontLoaded: false,
    }

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        headerTitle: 'Profile',
        tabBarLabel: 'Profile',
        drawerIcon: ({ tintColor }) => {
            return (
                <MaterialIcons
                    name="account-circle"
                    size={24}
                    style={{ color: tintColor }}
                > </MaterialIcons>
            );
        }

    }

    async componentDidMount() {
        await Font.loadAsync({
            'Poppins-Light': require('../../../fonts/Poppins-Light.ttf'),
            'Poppins-Regular': require('../../../fonts/Poppins-Regular.ttf'),
            'Poppins-Medium': require('../../../fonts/Poppins-Medium.ttf'),
            'Poppins-SemiBold': require('../../../fonts/Poppins-SemiBold.ttf'),
            'Poppins-Bold': require('../../../fonts/Poppins-Bold.ttf'),
        });
        this.setState({ fontLoaded: true });
    }

    render() {

        if (this.state.fontLoaded != true) {
            return (
                <View />
            )
        }

        return (
            <View style={CommonStyles.normalSinglePage}>
                <ScrollView contentContainerStyle={{ height: deviceHeight - 25 }}>
                    <View style={styles.titleBox}>
                        <Text extraLarge black extraBold>SIGN UP</Text>
                    </View>
                    <View style={styles.formBox}>
                        <View style={CommonStyles.textInputField}>
                            <Image
                                source={require('../../images/person/avatar.png')}
                                style={styles.imagePosition}
                            />
                            <TextInput
                                placeholder='Company Id'
                                style={CommonStyles.textInput}
                                underlineColorAndroid='transparent'
                            />
                        </View>
                        <View style={CommonStyles.textInputField}>
                            <Image
                                source={require('../../images/healer/padlock.png')}
                                style={styles.imagePosition}
                            />
                            <TextInput
                                placeholder='Password'
                                style={CommonStyles.textInput}
                                underlineColorAndroid='transparent'
                                secureTextEntry={true}
                                value="abc"

                            />
                        </View>
                        <View style={CommonStyles.textInputField}>
                            <Image
                                source={require('../../images/healer/padlock.png')}
                                style={styles.imagePosition}
                            />
                            <TextInput
                                placeholder='Re Password'
                                style={CommonStyles.textInput}
                                underlineColorAndroid='transparent'
                                secureTextEntry={true}
                                value="abc"
                            />
                        </View>
                        <View style={CommonStyles.textInputField}>
                            <Image
                                source={require('../../images/healer/envelope.png')}
                                style={styles.imagePosition}
                            />
                            <TextInput
                                placeholder='Email'
                                style={CommonStyles.textInput}
                                underlineColorAndroid='transparent'
                            />
                        </View>
                    </View>
                    {/* <View >
                        <Button
                        // onPressButton={this._handleClickSignUpButton.bind(this)}
                        // setting={shadowOpt}
                        >
                            <Text>
                                Save
                            </Text>

                        </Button>
                    </View> */}
                    {/* <View style={{ flex: 1, justifyContent: 'center', margin: 8 }}>
                        <Button onPress={this._handleClickSignUpButton} title='Save' color="#009688" backgroundColor="#1E6738" />
                    </View> */}

                    <TouchableOpacity
                        style={styles.saveButton}
                        onPress={() => this._handleClickSignUpButton()}
                        underlayColor='#fff'>
                        <Text style={styles.text}>Save</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>

        );
    }

    _handleClickSignUpButton() {
        console.log('Button Pressed');
    }

}

export default ScreenProfile;




const ELEMENT_HEIGHT = 377;
const spaceHeight = deviceHeight - ELEMENT_HEIGHT;

const styles = StyleSheet.create(
    {
        imagePosition: {
            position: 'absolute',
            bottom: 12,
            left: 20,
            width: 19,
            height: 22,
            padding: 5

        },
        titleBox: {
            height: 52,
            ...Platform.select({
                ios: {
                    marginTop: spaceHeight * 0.38,
                    marginBottom: spaceHeight * 0.24,
                },
                android: {
                    marginTop: spaceHeight * 0.32,
                    marginBottom: spaceHeight * 0.18,
                },
            }),
            justifyContent: 'center',
            alignItems: 'center',
        },
        saveButton: {
            marginRight: 40,
            marginLeft: 40,
            marginTop: 10,
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: colors.red,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: '#fff'
        },

        text: {
            fontSize: 20,
            color: colors.white,
        },
        formBox: {
            height: 255,
            alignItems: 'center',
            marginBottom: spaceHeight * 0.15,
        },
        noteBox: {
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingBottom: 15,
        }

    }
);



