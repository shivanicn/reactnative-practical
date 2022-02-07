/**
 * React Native App
 * @author Shivani Sisodiya
 * @version 1.0
 * @since 4 Jan 2022
 * @format 
 * @flow strict-local
 */

 import DefaultPreference from 'react-native-default-preference';

 export const SetData = (key: string, value: string) => {
 
     DefaultPreference.set(key, value);
 }
 
 export const GetData = (key: string) => {
     let result = DefaultPreference.get(key);
     return result;
 }
 