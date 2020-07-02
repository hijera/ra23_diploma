import {
    CAT_REQUEST,
    CAT_REQUEST_FAILURE,
    CAT_REQUEST_SUCCESS, SELECT_CAT,

} from "../actions/actionTypes";

const initialState = {
    categories: [{id:0, title:"Все"}],
    selectedCategory:0,
};

export default function categoryReducer(state=initialState,action) {
    switch (action.type) {
        case CAT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                categories: initialState.categories,
            };
        case CAT_REQUEST_FAILURE:
            const {error} = action.payload;
            return {
                ...state,
                loading: false,
                error,
            };
        case CAT_REQUEST_SUCCESS:
            const {categories} = action.payload;
            return {
                ...state,
                categories: [initialState.categories[0],...categories],
                loading: false,
                error: null,
            };
        case SELECT_CAT:
            const {catId} = action.payload;
            return {
                ...state,
                selectedCategory: catId,
            };
        default:
            return state;
    }
};