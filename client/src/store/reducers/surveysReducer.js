import * as actionTypes from "../actions/actionTypes";

const initialState = {
    surveys: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_SURVEYS:
            return {
                ...state,
                surveys: action.payload
            }
        default: return state;
    }
}