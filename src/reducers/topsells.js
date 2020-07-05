import {TOP_REQUEST, TOP_REQUEST_FAILURE, TOP_REQUEST_SUCCESS} from "../actions/actionTypes";

const initialState = {
    list : [],
    loading: false,
    error: null,
};

export default function topsellsReducer(state=initialState,action)
{
    switch (action.type) {
        case TOP_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                list: [],
            };
        case TOP_REQUEST_FAILURE:
            const {error} = action.payload;
            return {
                ...state,
                loading: false,
                error,
            };
        case TOP_REQUEST_SUCCESS:
            const {list} = action.payload;
            return {
                ...state,
                list,
                loading: false,
                error: null,
            };
        default:
            return state;
    }
}