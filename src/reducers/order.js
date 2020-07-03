import {ORDER_REQUEST, ORDER_REQUEST_FAILURE, ORDER_REQUEST_SUCCESS} from "../actions/actionTypes";

const initialState = {
    loading: false,
    error: null,
    ordered:false,
};

export default function orderReducer(state=initialState,action) {
    switch (action.type) {
        case ORDER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                ordered:false,
            };
        case ORDER_REQUEST_FAILURE:
            const {error} = action.payload;
            return {
                ...state,
                loading: false,
                error,
            };
        case ORDER_REQUEST_SUCCESS:

            return {
                ...state,
                ordered: true,
                loading: false,
                error: null,
            };
        default:
            return {...state};
    }
}