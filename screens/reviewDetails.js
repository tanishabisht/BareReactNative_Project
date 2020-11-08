import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native'

// import common components
import {globalStyles, images} from '../styles/global'
import Card from '../shared/card'


const ReviewDetails = ({navigation}) => {

  // IMPLEMENTATION OF NAVTIGATION USING STACK-NAVIGATOR
  // const gotoHomeHandler = () => {
  //   // .navigate('ScreenName') can be replaced by .goBack()
  //   navigation.navigate('Home')
  // }

  // const rating = route.params.rating
  const rating = navigation.getParam('rating')

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{navigation.getParam('title')}</Text>
        <Text>{navigation.getParam('body')}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating: </Text>
        <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee'
  }
})

export default ReviewDetails;