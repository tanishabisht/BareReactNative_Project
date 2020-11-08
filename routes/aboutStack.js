// IMPLEMENTING STACK NAVIGATOR ON ABOUT SCREEN

import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'

// importing screens
import About from '../screens/about'

// import header component
import Header from '../shared/header'

// object with the screens we need to configure
const screens = {
    About: {
        screen: About, 
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='About GameZone' />
            }
        }
    }
}

// screens object is passed
const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle:{backgroundColor:'#eee', height: 60}
    }
})

// this returns a component that we can render to app.js
export default AboutStack