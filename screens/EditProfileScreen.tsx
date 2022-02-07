import { StatusBar } from 'expo-status-bar';

import Styles from '../src/styles/CommonStyles';
import * as Service from '../src/service/CommonService';
import { Text, View , TextInput } from '../components/Themed';
import { useEffect, useState } from 'react';
import { RootStackScreenProps } from '../types';
import { StyleSheet, TouchableOpacity } from 'react-native';

export default function EditProfileScreen({ navigation }: RootStackScreenProps<'EditProfileScreen'>) {
  const [Name, setName] = useState('');
  const [Surname, setSurname] = useState('');
  const [Number, setNumber] = useState('');
  const [Email, setEmail] = useState('');


  const getUserInfo = async () => {
    let nameObj = await Service.getNameInfo();
    let contactObj = await Service.getContactInfo();
    
    setName(nameObj.name)
    setSurname(nameObj.surname)
    setNumber(contactObj.cell_no)
    setEmail(contactObj.email)
  }
  const saveUserData = async () => {

    var objName = {name: Name,  surname: Surname};
    const NameJSON = JSON.stringify(objName);
    Service.setNameInfo(NameJSON)

    var objContact = {email: Email,  cell_no: Number};
    const ContactJSON = JSON.stringify(objContact);
    Service.setContactInfo(ContactJSON)

    navigation.replace('Root')
  }
  useEffect(() => {
    getUserInfo()
  }, []);

  return (
    <View style={Styles.editContainer}>
      
    <Text style={Styles.editTitle}>Name</Text>
    <TextInput style={Styles.editText}
     onChangeText={newText => setName(newText)}
     defaultValue={Name}></TextInput>
    <View style={Styles.lineContainer}></View>

    <Text style={Styles.editTitle}>Surname</Text>
    <TextInput style={Styles.editText}
     onChangeText={newText => setSurname(newText)}
     defaultValue={Surname}></TextInput>
    <View style={Styles.lineContainer}></View>

    <Text style={Styles.editTitle}>Contact Number</Text>
    <TextInput style={Styles.editText}
      onChangeText={newText => setNumber(newText)}
      defaultValue={Number}></TextInput>
    <View style={Styles.lineContainer}></View>

    <Text style={Styles.editTitle}>Email</Text>
    <TextInput style={Styles.editText}
       onChangeText={newText => setEmail(newText)}
       defaultValue={Email}></TextInput>
    <View style={Styles.lineContainer}></View>

    <TouchableOpacity onPress={() => saveUserData()} style={styles.link}>
        <Text style={styles.linkText}>Save Data</Text>
      </TouchableOpacity>

  </View>
  );
}
const styles = StyleSheet.create({
  link: {
    paddingVertical: 15,
    borderRadius:10,
    marginStart:20,
    marginEnd:20,
    marginTop:40,
    backgroundColor: '#2e78b7',
  },
  linkText: {
    fontSize: 20,
    textAlign:'center',
    color: 'white',
    fontWeight:'bold'
  },
});
