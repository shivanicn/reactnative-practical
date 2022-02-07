import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as Service from '../src/service/CommonService';
import { useEffect, useState } from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

   const setUserInfo = async () =>{

     if(await Service.getNameInfo() == null || await Service.getNameInfo() == ""){
      var objName = {name: "Michael",  surname: "Baker"};
      const NameJSON = JSON.stringify(objName);
      Service.setNameInfo(NameJSON)
     }
     if(await Service.getContactInfo() == null || await Service.getContactInfo() == ""){
      var objContact = {email: "michael@test.com",  cell_no: "0825558364"};
      const ContactJSON = JSON.stringify(objContact);
      Service.setContactInfo(ContactJSON)
     }
  }
  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
        });
        // save user info
        setUserInfo();
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
