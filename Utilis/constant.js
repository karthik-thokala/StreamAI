export const LOGO = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";



export const USER_AVATAR = "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=";



const API_TOKEN = process.env.REACT_APP_TMDB_KEY;

export const API_OPTIONS = {
   method: "GET",
   headers: {
     accept: "application/json",
     Authorization: `Bearer ${API_TOKEN}`,
   },
 };

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w780";


export const SUPPORTED_LANG = [{ identifier: "en", name: "English" }, 
   { identifier: "spanish", name: "Spanish" }, 
   { identifier: "hindi", name: "hindi" }, 
   { identifier: "Tamil", name: "Tamil" }, 
   { identifier: "Telugu", name: "Telugu" }, 
   { identifier: "Malayalam", name: "Malayalam" }];


 export  const  OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY