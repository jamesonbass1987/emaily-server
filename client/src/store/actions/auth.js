import * as actionTypes from "./actionTypes";
import axios from "axios";
// import * as actions from "./index";

export const fetchUser = () => async dispatch => {
    const res = await axios.get("/auth/current_user")

    dispatch({
        type: actionTypes.FETCH_USER,
        payload: res.data
    }); 
};

export const handleToken = token => async dispatch => {
    const res = await axios.post("/api/billing/stripe", token);

    dispatch({
        type: actionTypes.FETCH_USER,
        payload: res.data
    }); 
}