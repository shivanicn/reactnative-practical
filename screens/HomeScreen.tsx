import { ScrollView, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import Styles from '../src/styles/CommonStyles';
import { SetStateAction, useEffect, useState } from 'react';
import { FontAwesome } from "@expo/vector-icons";
import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";

export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
  const colorScheme = useColorScheme();
  const [Beep, setBeep] = useState<string[]>([])

  function beepBoop() {

    var beepArray = [];

    for (var i = 0; i <= 1000; i++) {

      if (i % 100 === 99) {
        beepArray.push('beep boop' + '\n')
      } else if (i % 20 === 19) {
        beepArray.push('boop' + '\n')
      } else if (i % 5 === 4) {
        beepArray.push('beep' + '\n')
      } else {
        beepArray.push(i + '\n')
      }
    }

    setBeep(beepArray)
  }

  useEffect(() => {
     beepBoop();
  }, []);

  return (
    <View style={Styles.container}>

      <Text style={Styles.mainTitle}>A vertical list of words generated in the Typescript by looping from 0 to 1000.</Text>

      {
        (Beep.length == 0 ) ?
          <FontAwesome
            name="spinner"
            size={25}
            style={{ marginTop: 20 }}
            color={Colors[colorScheme].text}
          />
          :
          <ScrollView style={Styles.scrollview}>
          <Text style={Styles.beepText}>{Beep}</Text>
        </ScrollView>
      }



    </View>
  );
}

