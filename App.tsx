/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Provider as PaperJacobo, TextInput } from 'react-native-paper';

import {
  
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Nom=( textaMostrar:string , estil)=>{
  return (
     <Text style ={{fontStyle:estil}}>{textaMostrar}</Text>
     );
}
const Dades=()=>{

  return <TextInput></TextInput>
}

const  App =  () => {


  return (
      
  <PaperJacobo>
    <StatusBar/>
    {Nom("jacobo curras sanchez","italic")}
    {Dades("email")}
  </PaperJacobo>
  );
}

const estils = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,

  },
  sectionTitle: {
    color:'black',
    fontSize: 24,
    fontWeight: '600',
  
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  button:{
    backgroundColor: 'black',
  }
});

export default App;
