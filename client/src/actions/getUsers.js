import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";


export const getUsers = () => {
    axios
        .get("http://127.0.0.1:5000/fetchusers",
            {
                headers: { 'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/x-www-form-urlencoded'
            },
            mode: 'no-cors',
            withCredentials: true,
            credentials: 'same-origin'
            }
        )
        .then(response => console.log(response))
};


// User loading
export const setUserLoading = () => {
    return {
        type: USER_LOADING
    };
};

