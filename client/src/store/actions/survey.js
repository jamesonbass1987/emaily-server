import * as actionTypes from "./actionTypes";
import axios from "axios";


export const submitSurvey = (values, history) => async dispatch => {
    const res = await axios.post('/api/surveys', values);

    history.push('/surveys');

    dispatch({ 
        type: actionTypes.FETCH_USER, 
        payload: res.data
    })
}

export const fetchSurveys = () => async dispatch => {

    const res = await axios.get('api/surveys');

    dispatch({
        type: actionTypes.FETCH_SURVEYS,
        payload: res.data
    });

}