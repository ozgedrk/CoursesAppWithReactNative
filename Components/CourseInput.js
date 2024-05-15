import { StyleSheet, Text, View, Modal, Image, TextInput, Button } from 'react-native'
import React, {useState} from 'react'

export default function CourseInput({visible, onAddCourse, onCancel}) {

  const [enteredCourseText, setEnteredCourseText] = useState('')

  const addCourseHandler = () =>{
    onAddCourse(enteredCourseText);
    setEnteredCourseText('');
  }
  const courseInputHandler = (enteredText) =>{
    setEnteredCourseText(enteredText);
  }

  return (
    <Modal animationType="slide" visible={visible} >
      <View style={styles.InputContainer}>
        <Image style={styles.Image} source={require('../assets/Images/mylogo.png')} />
        <TextInput style={styles.TextInput} placeholder='Add New Course!' value={enteredCourseText} onChangeText={courseInputHandler}/>
          <View style={styles.ButtonContainer}>
              <View>
                <Button style={styles.Button} title='Add' color="cyan" 
                onPress={addCourseHandler}/> 
              </View>
              <View>
                <Button style={styles.Button} title='Cancel' color="red" onPress={onCancel}/>
              </View>
          </View>
      </View>
  </Modal>
  )
}

const styles = StyleSheet.create({
  InputContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    padding: 15,
  },
  Image:{
    width: 300,
    height: 300,
    alignSelf: 'center',
    margin: 20,
    borderRadius: 40,
  },
  TextInput:{
    borderWidth: 1,
    width: '100%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'pink',
    borderColor: 'pink',
  },
  ButtonContainer:{
    flexDirection: 'row',
    marginTop: 10,
  },
  Button:{
    width : 100,
    marginHorizontal: 10,
  },
})