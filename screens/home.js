import React, {useState} from 'react'

// basic react components
import {StyleSheet, View, Text, FlatList, TouchableOpacity, TouchableWithoutFeedback, Modal, Keyboard} from 'react-native'

// import common components
import {globalStyles} from '../styles/global'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Card from '../shared/card'
import ReviewForm from '../screens/reviewForm'





const Home = ({navigation}) => {

  // IMPLEMENTATION OF NAVTIGATION USING STACK-NAVIGATOR
  // const gotoReviewDetsHandler = () => {
  //   // .navigate can be replaced by .push
  //   navigation.navigate('ReviewDetails')
  // }

  const [reviews, setReviews] = useState([
    {title:'Zelda, Breath of Fresh Air', rating:5, body:'lorem ipsum', key:'1'},
    {title:'Gotta catch em all (again)', rating:4, body:'lorem ipsum', key:'2'},
    {title:'Not so Final', rating:2, body:'lorem ipsum', key:'3'}
  ])

  const [modalOpen, setModalOpen] = useState(false)
  
  const addReviewHandler = (review) => {
    review.key = Math.random().toString()
    setReviews(currentReviews => {
      return [review, ...currentReviews]
    })
    setModalOpen(false)
  }

  return (
    <View style={globalStyles.container}>

      <Modal visible={modalOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <Icon name="close" style={{ ...styles.icon, ...styles.iconclose}} size={24} onPress={() => setModalOpen(false)} />
            <ReviewForm addReview={addReviewHandler}/>
          </View>
        </TouchableWithoutFeedback>        
      </Modal>

      <Icon name="add" style={styles.icon} size={24} onPress={() => setModalOpen(true)} />

      <FlatList
        data={reviews}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
            <Card><Text style={globalStyles.titleText}>{item.title}</Text></Card>  
          </TouchableOpacity>
        )}
      />
    </View>           
  );
}

const styles = StyleSheet.create({
  icon: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center'
  },
  iconclose: {
    marginBottom: 0,
    marginTop: 10
  },
  modalContent: {
    flex: 1
  }
})

export default Home;