/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Button, Switch, TextInput } from 'react-native-paper';

import {
  
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';




const  App =  () => {
  
    const [isSwitchOn, setIsSwitch] = React.useState(false);
  
    
  

  return (
       <View>

      <StatusBar/>
      <Text style={estils.sectionTitle}>text input EMAIL</Text>
      <TextInput  placeholder='EMAIL' keyboardType='email-address'></TextInput>
      <Text>{'\n'}</Text>
      <Text style={estils.sectionTitle}>button(amb text i coma)</Text>
      <Button style={{backgroundColor:'purple'}} labelStyle={{color:'white'}} icon='alien'>alien</Button>
      <Button style={{backgroundColor:'purple'}} labelStyle={{backgroundColor:'purple',color:'black'}} icon='alien'>alien</Button>
      <Button style={estils.button} mode='outlined' icon='alien'>alien</Button>
      <Button style={estils.button} icon='alien'>alien</Button>
      <Text>{'\n'}</Text>
      <Text style={estils.sectionTitle}>switch Necessites un descans?</Text>
      <Switch value={isSwitchOn} onValueChange={()=>setIsSwitch(!isSwitchOn)}></Switch>
       </View>
  
  );
}

const estils = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,

  },
  sectionTitle: {
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
