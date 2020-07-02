import { createStore, combineReducers, applyMiddleware, compose, } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import itemsReducer from '../reducers/items';
import productReducer from "../reducers/product";
import topsellsReducer from "../reducers/topsells";
import {catalogRequestEpic, categoriesRequestEpic, productRequestEpic, topsellsRequestEpic} from "../epics";
import cartReducer from "../reducers/cart";
import {saveState} from "../localStorage";
import categoryReducer from "../reducers/category";


const reducer = combineReducers({
    list : itemsReducer,
    product: productReducer,
    topsells: topsellsReducer,
    cart : cartReducer,
    categories: categoryReducer
});



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epic = combineEpics(
    catalogRequestEpic,
    productRequestEpic,
    topsellsRequestEpic,
    categoriesRequestEpic
);

const epicMiddleware = createEpicMiddleware();

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(epicMiddleware)
));

store.subscribe(() => {
    saveState('cart',store.getState().cart.cart);
});

epicMiddleware.run(epic);




export default store;