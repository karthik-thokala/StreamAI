import React from 'react'
import Header from './Header.js'
import { useState, useRef } from 'react'
import { CheckValidate } from '../Utilis/Validate.js'
import { addUser } from '../Utilis/userSlice.js'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../Utilis/firebase.js';
import {  useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [isSignForm, setisSignForm] = useState(true);
  const [errormessage, seterrormessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const toggleSignForm = () => {
    setisSignForm(!isSignForm);
  };
  const handleButtonclick = () => {
    
    
    const message = CheckValidate(email.current.value, password.current.value);
    seterrormessage(message);
    if (message) return;
    if (!isSignForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {

          const user = userCredential.user;
         
          updateProfile(user, {
            displayName: name.current.value, photoURL: USER_AVATAR,
          }).then(() => {
             const {uid, email, displayName,photoURL} = auth.currentUser;
                         dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
            
          }).catch((error) => {
            seterrormessage(error.message);
          });
          
         
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormessage(errorCode + errorMessage);

        });

    }
    else {
      signInWithEmailAndPassword(auth,email.current.value, password.current.value)
        .then((userCredential) => {
          
          const user = userCredential.user;
        
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormessage(errorCode + errorMessage);
        });

    }

  }
  const backgroundImage = isSignForm
  ?'https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web/IN-en-20250324-TRIFECTA-perspective_d7c906ec-0531-47de-8ece-470d5061c88a_large.jpg'
  :'https://img.freepik.com/free-vector/3d-style-retro-film-strip-background-with-text-space_1017-52848.jpg';
  return (
    <div>
      <Header />
      <div className="absolute">
        <img  className='w-screen h-screen object-cover' src={backgroundImage}
          alt="Netflix Background" />

      </div>
      <form onSubmit={(e) => e.preventDefault()} className=' w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 ' >
        <h1 className='font-bold text-3xl py-4'>{isSignForm ? "Sign In" : "Sign up"}</h1>
        {!isSignForm && <input ref={name} type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700' />}
        <input ref={email} type='text' placeholder='Email address' className='p-4 my-4 w-full bg-gray-700' />

        <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700' />
        <p className='text-red-500 font-bold text-lg py-2'>{errormessage}</p>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonclick}>{isSignForm ? "Sign In" : "Sign up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignForm}>{isSignForm ? "New to Netflix ? Sign Up Now" : "Already registered ? Sign In Now."}</p>
      </form>


    </div>
  )
}

export default Login
