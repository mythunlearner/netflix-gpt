//Body Component 
import {useEffect} from 'react'
import Login from './Login'; // Ensure this path matches your folder structure
import Browse from './Browse'; // Ensure this path matches your folder structure
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {  onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
const MainContent = () => {
    const dispatch =useDispatch();
   

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>, 
        },
        {
            path: "/browse",
            element: <Browse/>,
        },
    ]);

    useEffect(()=> {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName, photoURL }= user;
              dispatch(addUser({uid:uid, email: email ,displayName: displayName, photoURL: photoURL}));
           
            } else {
                dispatch(removeUser());
               
              // User is signed out
              // ...
            }
          });
    }, []);

    return (
        <div>
          <RouterProvider router={appRouter}/>
        </div>
      );
};

export default MainContent