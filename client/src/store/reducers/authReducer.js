import * as actionTypes from "../actions/actionTypes";

const initialState = {
    currentUser: null
};

export default function (state = initialState, action) {  
    switch (action.type) {
        case actionTypes.FETCH_USER:
            return {
                ...state,
                currentUser: action.payload || false
            }
        default: return state;
    }
}