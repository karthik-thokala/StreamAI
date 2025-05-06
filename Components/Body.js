import React, { useEffect } from 'react'
import Login from "./Login";
import Browser from './Browser.js';
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom';

import { onAuthStateChanged  } from 'firebase/auth';
import {auth} from '../Utilis/firebase.js';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../Utilis/userSlice.js';

import MainContainer from './MainConatiner.js';


const Body = () => {
  
  const dispatch = useDispatch();
  
    const appRouter =   createBrowserRouter([
        {
            path:"/",
            element:<Login />
        },
        
        {
          path: '/browser/:id?',
          element: <Browser />
        }
        
        
        
    ])
    useEffect(()=>{
         onAuthStateChanged(auth,(user)=>{
          if(user){
            const {uid, email, displayName,photoURL} = user;
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
          
          }
          else{
            dispatch(removeUser()); 
           
          }
         });
    },[]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
