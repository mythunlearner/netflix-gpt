// import logo from '../utils/logo.png'
import{signOut, onAuthStateChanged} from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    //Toggle GPT Search
    dispatch(toggleGptSearchView());
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
     
      <img className='w-36' 
       src={LOGO}
       alt="logo"/>
       {user && <div className="flex  p-4">
        <select className="p-2 m-2 bg-gray-500 text-white rounded-lg">
          {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
           {/* <option value="en">English</option>
           <option value="tamil">Tamil</option>
           <option value="hindi">Hindi</option>
           <option value="spanish">Spanish</option> */}
        </select>
        <button className="text-black py-2 px-4 mx-4 my-2  bg-amber-50 rounded-lg align-middle"
        onClick={handleGptSearchClick}>CHAT GPT</button>
        <img
         className="w-12 h-12"
         alt="usericon"
         src={user?.photoURL}/>
         <button onClick={handleSignOut} className="text-white">Sign Out</button>
       </div>}
    </div>
  )
}

export default Header;