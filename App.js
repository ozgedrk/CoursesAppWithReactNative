import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { useState } from 'react';
import CourseInput from './Components/CourseInput';

export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);

  const [courses, setCourses] = useState([]);

  const startModal = () =>{
    setModalIsVisible(true)
  }
  const finishModal = () =>{
    setModalIsVisible(false)
  }
  const addCourse = (courseTitle) =>{
    //console.log(courseTitle);
    setCourses((currentCourses) => [
      ...currentCourses,
      { text: courseTitle, id: Math.random().toString()},
    ])
    finishModal();
  }
  
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button title="Add Course" color="pink" onPress={startModal} />
        <CourseInput visible={modalIsVisible} onAddCourse={addCourse} onCancel={finishModal} />
      </View>
      <View>
        <FlatList data={courses} renderItem={({item}) =>(
          <View style={styles.CourseItem}>
            <Text style={styles.CourseText}>{item.text}</Text>
          </View>
        )}>

        </FlatList>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20 ,
  },
  CourseItem:{
    backgroundColor : 'gray',
    margin: 8,
    borderRadius: 8,
  },
  CourseText:{
    padding: 8,
    color: 'white',
  },
});
