import {createDrawerNavigator} from 'react-navigation-drawer'
import {createAppContainer} from 'react-navigation'

// importing stacks
import HomeStack from './homeStack'
import AboutStack from './aboutStack'

const screens = {
    Home: {screen: HomeStack},
    About: {screen: AboutStack}
}

const RootDrawerNavigator = createDrawerNavigator(screens)

export default createAppContainer(RootDrawerNavigator)