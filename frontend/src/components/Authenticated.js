import React, { useState } from 'react';
import {auth} from '../firebase';
import { Redirect } from "react-router-dom";

const Authenticated = (props) => {
    
    const[isLoggedIn, setIsLoggedIn] = useState(null);

    auth.onAuthStateChanged((user) => {
        if (user) {
            var uid = user.uid;
            setIsLoggedIn(true);  
        } else {
            setIsLoggedIn(false);
        }
      });

      if (props.nonAuthenticated) {
        if (isLoggedIn == null) {
            return ("Loading...");
          }
          else if (!isLoggedIn) {
            return props.children;
          }
          else if (isLoggedIn) {
            return <Redirect to="/"/>
          }
      }

      else {
        if (isLoggedIn == null) {
            return ("Loading...");
          }
          else if (isLoggedIn) {
            return props.children;
          }
          else if (!isLoggedIn) {
            return <Redirect to="/home"/>
          }
      }
      
}

export default Authenticated;
