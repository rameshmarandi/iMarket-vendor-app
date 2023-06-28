
import uuid from 'react-native-uuid';
export const asyncKeys = {
  loginSession: '@IsLogdIn',
  token: '@Token',
};
export let userID = uuid.v4()
export const isLive = true;
//--------------------------------- MG Base URl ---------------------------------
export const BASEURL = isLive ? 'https://' : 'https://';

//--------------------------------- MG Image Base URl ---------------------------------
export const IMG_URL = isLive
  ? 'https://www.icicicareers.com/CareerApplicantApi/'
  : 'https://clg.icicibank.com/CareerApplicantAoi/';
