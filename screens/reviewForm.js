import React from 'react'

// basic react components
import {StyleSheet, View, Text, TextInput, Button} from 'react-native'

// import common components
import {globalStyles} from '../styles/global'
import FlatButton from '../shared/button'

// form
import {Formik} from 'formik'
import * as yup from 'yup'


const reviewSchema = yup.object({
    title: yup.string().required().min(4),
    body: yup.string().required().min(8),
    rating: yup.string().required().test('isNum_1-5', 'Rating must be a number 1-5', val => parseInt(val)<6 && parseInt(val)>0)
})



const ReviewForm = ({addReview}) => {

    const initialValues = {title:'', body:'', rating:''}

    return(
        <View style={globalStyles.container}>
            <Formik
            initialValues={initialValues}
            validationSchema={reviewSchema}
            onSubmit={(values) => addReview(values)}>

            {(formikProps) => (
                <View>
                    <TextInput 
                    style={globalStyles.input}
                    placeholder='Review title'
                    onChangeText={formikProps.handleChange('title')}
                    value={formikProps.values.title}
                    onBlur={formikProps.handleBlur('title')}
                    />
                    <Text style={globalStyles.errorText}>{formikProps.touched.title && formikProps.errors.title}</Text>

                    <TextInput 
                    multiline minHeight={60}
                    style={globalStyles.input}
                    placeholder='Review body'
                    onChangeText={formikProps.handleChange('body')}
                    value={formikProps.values.body}
                    onBlur={formikProps.handleBlur('body')}
                    />
                    <Text style={globalStyles.errorText}>{formikProps.touched.body && formikProps.errors.body}</Text>

                    <TextInput
                    style={globalStyles.input}
                    placeholder='Rating (1-5)'
                    onChangeText={formikProps.handleChange('rating')}
                    value={formikProps.values.rating}
                    keyboardType='numeric'
                    onBlur={formikProps.handleBlur('rating')}
                    />
                    <Text style={globalStyles.errorText}>{formikProps.touched.rating && formikProps.errors.rating}</Text>

                    <FlatButton text='submit' onPress={formikProps.handleSubmit} />
                </View>
            )}

            </Formik>
        </View>
    )
}

export default ReviewForm