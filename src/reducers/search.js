import {CHANGE_SEARCH_FIELD, TOGGLE_SEARCH_FIELD} from "../actions/actionTypes";

const initialState = {
    showSearch : false,
    query : '',
}

export default function searchReducer(state=initialState,action)
{
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            const { value } = action.payload;
            return {
                ...state,
                query : value
            };
        case TOGGLE_SEARCH_FIELD:
            return {...state,
            showSearch: (state.query.trim()=='') ? !state.showSearch : state.showSearch
            };
        default:
            return {...state};
    }
}