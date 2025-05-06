import React , {useEffect} from 'react'
import {  useNavigate } from 'react-router';
import { signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../Utilis/firebase'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from '../Utilis/userSlice.js';
import { toggleGptSearchview } from '../Utilis/gptslice.js';
import { SUPPORTED_LANG } from '../Utilis/constant.js';
import { changeLangugae } from '../Utilis/configSlice.js';

const Header = () => {
  const user = useSelector(store=>store.user);
  const dispatch = useDispatch();
  
  const navigate = useNavigate();
  const showGptsearch= useSelector((store)=>store.gpt.showGptSearch)
  const handleSignout = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error")
    });
  }
  useEffect(()=>{
          const unsubscribe =  onAuthStateChanged(auth,(user)=>{
            if(user){
              const {uid, email, displayName,photoURL} = user;
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
            navigate("/browser")
            }
            else{
              dispatch(removeUser()); 
              navigate("/")
            }
           });
           return ()=>unsubscribe();
      },[]);
const handleGPTSearchClick =()=>{
    dispatch(toggleGptSearchview());
}
const handleLanguageChange=(e)=>{
  
  dispatch(changeLangugae(e.target.value));
}
  return (


    <div className="absolute w-full h-[10vh] px-8 py-2 bg-gradient-to-r from-black via-black opacity-90 z-10 flex items-center justify-between">
      
      <img
        className="w-44  h-auto "
        src='https://i.postimg.cc/MZ5cDj6d/From-mmddyyyy-To-mmddyyyy-Filters-Timestamp-Model-App-Tokens-Cost-Speed-Provider-May-6-083001-AM-GP.pngs'
        alt="Netflix Logo"
      />

      {user && ( <div className="flex p-2 justify-between">
        { showGptsearch && (<select className='p-2 m-2 bg-gray-900 text-white rounded-lg ' onChange={handleLanguageChange}>
          {SUPPORTED_LANG.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
        </select> )}
        <button className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg' onClick={handleGPTSearchClick}>{showGptsearch ? "📺 StreamHub":"🤖 CineGPT"}</button>
        <img
          className="hidden md:block w-12 h-12"
          alt="usericon"
          src={'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png'} />

        <button onClick={handleSignout} className="font-bold text-white ">
          (Sign Out)
        </button>
      </div> )}
    </div>
  )
}

export default Header
