import {
    CATALOG_REQUEST,
    CATALOG_REQUEST_FAILURE, CATALOG_REQUEST_MORE,
    CATALOG_REQUEST_SUCCESS,
    PRODUCT_REQUEST,
    PRODUCT_REQUEST_FAILURE,
    PRODUCT_REQUEST_SUCCESS
} from "../actions/actionTypes";


const initialState = {
    list : [],
    loading: false,
    error: null,
    categoryId: null,
    offset: 0,
    maxlength: null,
    add : false
};

export default function itemsReducer(state=initialState,action)
{
    switch (action.type) {
        case CATALOG_REQUEST:
            const {categoryId,add,q} = action.payload;
            return {
                ...state,
                loading: add ? state.loading : true,
                error: null,
                q,
                categoryId,
                offset: add ? (state.offset+6) : 0,
                list: add ? state.list : [],
                add,
                maxlength: add ? state.maxlength : false
            };
        case CATALOG_REQUEST_FAILURE:
            const {error} = action.payload;
            return {
                ...state,
                loading: false,
                error,
            };
        case CATALOG_REQUEST_SUCCESS:
            const {list} = action.payload;
            console.log(list);
            return {
                ...state,
                list: state.add ? [...state.list,...list] : list,
                loading: false,
                error: null,
                maxlength: (list.length<6) ? true : state.maxlength,
            };
        default:
            return state;
    }
}