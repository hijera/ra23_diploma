import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, tap, retry, filter, debounceTime, debounce, switchMap, catchError } from 'rxjs/operators';
import {
    ADD_TO_CART,
    CAT_REQUEST,
    CATALOG_REQUEST, ORDER_REQUEST,
    PRODUCT_REQUEST,
    REMOVE_FROM_CART,
    TOP_REQUEST
} from "../actions/actionTypes";
import {
    catalogRequestFailure,
    catalogRequestSuccess, categoriesRequestFailure, categoriesRequestSuccess, orderRequestFailure, orderRequestSuccess,
    productRequestFailure,
    productRequestSuccess, topRequestFailure, topRequestSuccess
} from "../actions/actionCreators";
import {saveState} from "../localStorage";


export const productRequestEpic = action$ => action$.pipe(
    ofType(PRODUCT_REQUEST),
    debounceTime(process.env.REACT_APP_DEBOUNCE_REQUEST_TIME),
    map(o => o.payload.id),
    switchMap(o => ajax.getJSON(`${process.env.REACT_APP_PRODUCT_URL.replace(":id",o)}`).pipe(
        retry(process.env.REACT_APP_RETRY_COUNT),
        map(o => productRequestSuccess(o)),
        catchError(e => of(productRequestFailure(e))),
    )),
);

export const catalogRequestEpic = (action$, state$) => action$.pipe(
    ofType(CATALOG_REQUEST),
    debounceTime(process.env.REACT_APP_DEBOUNCE_REQUEST_TIME),
    map(o => o.payload),
    map(o => new URLSearchParams({
        categoryId: o.categoryId ? o.categoryId : "",
        offset: o.add ? state$.value.list.offset: "",
        q: o.q }
        )),
    switchMap(o => ajax.getJSON(`${process.env.REACT_APP_ITEMS_URL}?${o}`).pipe(
        retry(process.env.REACT_APP_RETRY_COUNT),
        map(o => catalogRequestSuccess(o)),
        catchError(e => of(catalogRequestFailure(e))),
    )),
);

export const topsellsRequestEpic = action$ => action$.pipe(
    ofType(TOP_REQUEST),
    debounceTime(process.env.REACT_APP_DEBOUNCE_REQUEST_TIME),
    switchMap(o => ajax.getJSON(`${process.env.REACT_APP_TOP_URL}`).pipe(
        retry(process.env.REACT_APP_RETRY_COUNT),
        map(o => topRequestSuccess(o)),
        catchError(e => of(topRequestFailure(e))),
    )),
);

export const categoriesRequestEpic = action$ => action$.pipe(
    ofType(CAT_REQUEST),
    debounceTime(process.env.REACT_APP_DEBOUNCE_REQUEST_TIME),
    switchMap(o => ajax.getJSON(`${process.env.REACT_APP_CAT_URL}`).pipe(
        retry(process.env.REACT_APP_RETRY_COUNT),
        map(o => categoriesRequestSuccess(o)),
        catchError(e => of(categoriesRequestFailure(e))),
    )),
);

export const orderRequestEpic = action$ => action$.pipe(
  ofType(ORDER_REQUEST),
    debounceTime(process.env.REACT_APP_DEBOUNCE_REQUEST_TIME),
    map(o=>o.payload),
    switchMap(o => ajax.post(`${process.env.REACT_APP_ORDER_URL}`,
        {owner:{
        phone: o.phone,
        address: o.address,
        },
    items:o.items
    },{ 'Content-Type': 'application/json' }).pipe(
        retry(process.env.REACT_APP_RETRY_COUNT),
        map(o => orderRequestSuccess(o)),
        catchError(e => of(orderRequestFailure(e))),
    )),
);
/*
{
    "owner": {
    "phone": "+7xxxxxxxxxxx",
        "address": "Moscow City",
},
    "items": [
    {
        "id": 1,
        "price": 34000,
        "count": 1
    }
]
}*/
//    map(o => o.payload),
//     map(o => new URLSearchParams({categoryId: o.categoryId ? o.categoryId : "",offset:o.offset? o.offset: ""})),
/*export const addToCartEpic = action$ => action$.pipe(
    ofType(ADD_TO_CART),

);*/