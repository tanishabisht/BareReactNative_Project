// IMPLEMENTING STACK NAVIGATOR ON HOME->REVIEWDETAILS SCREEN

import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

// importing screens
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'

// import header component
import Header from '../shared/header'

// object with the screens we need to configure
const screens = {
    Home: {
        screen: Home, 
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='GameZone' />
            }
        }
    },
    ReviewDetails: {screen: ReviewDetails}
}

// screens object is passed
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle:{backgroundColor:'#eee', height: 60}
    }
})

// this returns a component that we can render to app.js
export default createAppContainer(HomeStack)