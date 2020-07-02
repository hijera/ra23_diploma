import {
    ADD_COUNT,
    ADD_TO_CART, CAT_REQUEST, CAT_REQUEST_FAILURE, CAT_REQUEST_SUCCESS,
    CATALOG_REQUEST,
    CATALOG_REQUEST_FAILURE,
    CATALOG_REQUEST_SUCCESS,
    PRODUCT_REQUEST,
    PRODUCT_REQUEST_FAILURE,
    PRODUCT_REQUEST_SUCCESS, REMOVE_COUNT, REMOVE_FROM_CART, SELECT_CAT, SELECT_SIZE,
    TOP_REQUEST,
    TOP_REQUEST_FAILURE,
    TOP_REQUEST_SUCCESS
} from "./actionTypes";

export const catalogRequest = (categoryId,q='',add=false) => ({
    type: CATALOG_REQUEST, payload: {categoryId,add,q}
});
export const catalogRequestFailure = error => ({
    type: CATALOG_REQUEST_FAILURE, payload: {error},
});
export const catalogRequestSuccess = list => ({
    type: CATALOG_REQUEST_SUCCESS, payload: {list},
});

export const categoriesRequest = () => ({
    type: CAT_REQUEST, payload: {}
});
export const categoriesRequestFailure = error => ({
    type: CAT_REQUEST_FAILURE, payload: {error},
});
export const categoriesRequestSuccess = categories => ({
    type: CAT_REQUEST_SUCCESS, payload: {categories},
});



export const topRequest = () => ({
    type: TOP_REQUEST, payload: {}
});
export const topRequestFailure = error => ({
    type: TOP_REQUEST_FAILURE, payload: {error},
});
export const topRequestSuccess = list => ({
    type: TOP_REQUEST_SUCCESS, payload: {list},
});


export const productRequest = id => ({
    type: PRODUCT_REQUEST, payload: {id}
});
export const productRequestFailure = error => ({
    type: PRODUCT_REQUEST_FAILURE, payload: {error},
});
export const productRequestSuccess = product => ({
    type: PRODUCT_REQUEST_SUCCESS, payload: {product},
});

export const addToCart = (product,count,size) => ({
    type: ADD_TO_CART, payload: {product,count,size}
});

export const removeFromCart = (id,size) => ({
    type: REMOVE_FROM_CART, payload: {id,size}
});

export const addCount = () => ({
    type: ADD_COUNT, payload: {}
});

export const removeCount = () => ({
    type: REMOVE_COUNT, payload: {}
});

export const selectSize = (size) => ({
    type: SELECT_SIZE , payload: {size}
});

export const selectCat = (catId) => ({
    type: SELECT_CAT, payload: {catId}
})