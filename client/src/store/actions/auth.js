import * as actionTypes from "./actionTypes";
import axios from "axios";
// import * as actions from "./index";

export const fetchUser = () => async dispatch => {
    const res = await axios.get("/api/current_user")

    dispatch({
        type: actionTypes.FETCH_USER,
        payload: res.data
    }) 
};