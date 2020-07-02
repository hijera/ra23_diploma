import {
    ADD_COUNT,
    PRODUCT_REQUEST,
    PRODUCT_REQUEST_FAILURE,
    PRODUCT_REQUEST_SUCCESS,
    REMOVE_COUNT, SELECT_SIZE
} from "../actions/actionTypes";


const initialState = {
    product : null,
    loading: false,
    error: null,
    id: null,
    count: 1,
    activeSize: null,
};

export default function productReducer(state=initialState,action)
{
    switch (action.type) {
        case PRODUCT_REQUEST:
            const {id} = action.payload;
            return {
                ...state,
                loading: true,
                error: null,
                details: null,
                count: 1,
                activeSize: null,
                id
            };
        case PRODUCT_REQUEST_FAILURE:
            const {error} = action.payload;
            return {
                ...state,
                loading: false,
                error,
            };
        case PRODUCT_REQUEST_SUCCESS:
            const {product} = action.payload;
            return {
                ...state,
                product,
                loading: false,
                error: null,
            };
        case ADD_COUNT:
            return {
                ...state,
                count: (state.count<10) ? (state.count+1) : state.count,
            };
        case REMOVE_COUNT:
            return {
                ...state,
                count: (state.count> 0 )? (state.count-1): state.count,
            };
        case SELECT_SIZE:
            const {size} = action.payload;
            return {
              ...state,
              activeSize:  size
            };
        default:
            return state;
    }
}