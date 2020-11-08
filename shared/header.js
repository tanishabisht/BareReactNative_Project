import React from 'react'
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Header = ({navigation, title}) => {

    const openMenyHandler = () => {
        navigation.openDrawer()
    }

    return(
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
        <Icon name="menu" size={30} style={styles.icon} onPress={openMenyHandler} />
        <View style={styles.headerTitle}>
            <Image source={require('../assets/heart_logo.png')} style={styles.headerImage} />
            <Text style={styles.headerText}>{title}</Text>
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1
    },
    headerTitle: {
        flexDirection: 'row'
    },
    icon: {
        position: 'absolute',
        left: 16
    },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10
    }
})
 
export default Header