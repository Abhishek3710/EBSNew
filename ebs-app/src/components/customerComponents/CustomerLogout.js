import React, { useState,useEffect, useRef,useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../App";

const CustomerLogout = () => {
    const history = useHistory();
    const {state,dispatch} = useContext(UserContext);

    useEffect(() => {
        axios.get('https://localhost:5000/api/Admin/Logout').then(
            (result) => {
              if(result.data.status=='200')
              {
                dispatch({type:"LOGOUT",payload:"LOGOUT"})
                history.push(`/Home`);
              }
            }
        )
    });
    
    return (
            <>

            </>
        )
}

export default CustomerLogout;