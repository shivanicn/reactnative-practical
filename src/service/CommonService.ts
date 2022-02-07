/**
 * React Native App
 * @author Shivani Sisodiya
 * @version 1.0
 * @since 4 Jan 2022
 * @format 
 * @flow strict-local
 */

import * as Preference from '../Database/Preference';
import * as Utils from '../Constant/Utils';

const KEYS = Utils.PreferenceKeys;

export const setNameInfo = (info: string) => {

    Preference.SetData(KEYS.NAME_INFO, info);

}
export const setContactInfo = (info: string) => {
    Preference.SetData(KEYS.CONTACT_INFO, info);

}
export const getNameInfo = async () => {
    let NameInfo = ""
    await Preference.GetData(KEYS.NAME_INFO).then(value => {
        NameInfo =  (value != undefined)? value : "";
    });
    return  (NameInfo != "")?   JSON.parse(NameInfo):  ""
}
export const getContactInfo = async () => {
    let ContactInfo = ""
    await Preference.GetData(KEYS.CONTACT_INFO).then(value => {
        ContactInfo =  (value != undefined)? value : "";
    });
    return  (ContactInfo != "")?   JSON.parse(ContactInfo):  ""
}
