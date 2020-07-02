import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, tap, retry, filter,  switchMap, catchError } from 'rxjs/operators';
import {
    ADD_TO_CART,
    CAT_REQUEST,
    CATALOG_REQUEST,
    PRODUCT_REQUEST,
    REMOVE_FROM_CART,
    TOP_REQUEST
} from "../actions/actionTypes";
import {
    catalogRequestFailure,
    catalogRequestSuccess, categoriesRequestFailure, categoriesRequestSuccess,
    productRequestFailure,
    productRequestSuccess, topRequestFailure, topRequestSuccess
} from "../actions/actionCreators";
import {saveState} from "../localStorage";


export const productRequestEpic = action$ => action$.pipe(
    ofType(PRODUCT_REQUEST),
    map(o => o.payload.id),
    switchMap(o => ajax.getJSON(`${process.env.REACT_APP_PRODUCT_URL.replace(":id",o)}`).pipe(
        retry(process.env.REACT_APP_RETRY_COUNT),
        map(o => productRequestSuccess(o)),
        catchError(e => of(productRequestFailure(e))),
    )),
);

export const catalogRequestEpic = (action$, state$) => action$.pipe(
    ofType(CATALOG_REQUEST),
    tap(o=>console.log(state$)),
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
    switchMap(o => ajax.getJSON(`${process.env.REACT_APP_TOP_URL}`).pipe(
        retry(process.env.REACT_APP_RETRY_COUNT),
        map(o => topRequestSuccess(o)),
        catchError(e => of(topRequestFailure(e))),
    )),
);

export const categoriesRequestEpic = action$ => action$.pipe(
    ofType(CAT_REQUEST),
    switchMap(o => ajax.getJSON(`${process.env.REACT_APP_CAT_URL}`).pipe(
        retry(process.env.REACT_APP_RETRY_COUNT),
        map(o => categoriesRequestSuccess(o)),
        catchError(e => of(categoriesRequestFailure(e))),
    )),
);

//    map(o => o.payload),
//     map(o => new URLSearchParams({categoryId: o.categoryId ? o.categoryId : "",offset:o.offset? o.offset: ""})),
/*export const addToCartEpic = action$ => action$.pipe(
    ofType(ADD_TO_CART),

);*/