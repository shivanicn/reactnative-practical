import { StyleSheet } from "react-native";

import Styles from '../src/styles/CommonStyles';
import { Text, View } from "../components/Themed";
import * as Service from '../src/service/CommonService';
import { useEffect, useState } from 'react';
import { FontAwesome } from "@expo/vector-icons";
import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";

export default function ProfileScreen() {
  const colorScheme = useColorScheme();

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
  useEffect(() => {
    getUserInfo()
  }, []);

  return (
    <View style={Styles.container}>
      {
        (Name == '' && Surname == '' && Number == '' && Email == '') ?
          <FontAwesome
            name="spinner"
            size={25}
            style={{ marginTop: 20 }}
            color={Colors[colorScheme].text}
          />
          :
          <View>
            <Text style={Styles.text}>Name</Text>
            <Text style={Styles.title}>{Name}</Text>
            <Text style={Styles.text}>Surname</Text>
            <Text style={Styles.title}>{Surname}</Text>
            <Text style={Styles.text}>Contact Number</Text>
            <Text style={Styles.title}>{Number}</Text>
            <Text style={Styles.text}>Email</Text>
            <Text style={Styles.title}>{Email}</Text>
          </View>
      }
    </View>
  );
}
