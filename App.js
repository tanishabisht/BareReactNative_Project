import React, {useState} from 'react'

// importing fonts
import * as Font from 'expo-font'

// importing navigator
import Navigator from './routes/drawer'


// defining fonts
const getFonts = () => Font.loadAsync({
  'openSans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  'openSans-bolditalic': require('./assets/fonts/OpenSans-BoldItalic.ttf')
})


const App = () => {
  return(
    <Navigator/>
  )    
}

export default App;