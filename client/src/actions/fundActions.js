import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";


// Register Transaction
export const userDeposit = (userData) => dispatch => {
  axios
    .post("/api/transactions/addfunds", userData)
    .then(console.log("this is working")
        )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};


// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};

