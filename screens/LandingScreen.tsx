import { StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

import { Text, View } from "../components/Themed";
import Styles from '../src/styles/CommonStyles';
import { RootStackScreenProps } from '../types';
import Navigation from '../App';
import { useState, useEffect } from 'react';
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

export default function LandingScreen({ navigation }: RootStackScreenProps<'LandingScreen'>) {
  const colorScheme = useColorScheme();

  function MainScreen() {
    setTimeout(() => {
      navigation.replace('Root')
    }, 2000);
  }

  useEffect(() => {
    MainScreen()
  }, []);

  return (
    <View style={Styles.container}>
      <FontAwesome
        name='user'
        size={120}
        style={{ marginBottom: 15 }}
        color={Colors[colorScheme].text}
      />

      <Text style={Styles.title}>Shivani Sisodiya Assessment</Text>

      <FontAwesome
        name="spinner"
        size={25}
        style={{ marginTop: 20 }}
        color={Colors[colorScheme].text}
      />
    </View>
  );
}