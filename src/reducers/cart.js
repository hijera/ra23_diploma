import {ADD_TO_CART, REMOVE_FROM_CART} from "../actions/actionTypes";
import {loadState} from "../localStorage";

const initialState = {
    cart: loadState('cart',[])
};


export default function cartReducer(state=initialState,action) {

    switch (action.type) {

        case ADD_TO_CART:
            const {product,count} = action.payload;
            const eObj=state.cart.find(item=>item.id==product.id && item.size==action.payload.size);
        return {
            ...state,
            cart:(eObj) ? [...state.cart,{ ...eObj , count: eObj.count+count} ] :
                [...state.cart,{title:product.title,count:count,size:action.payload.size,price_per_item:product.price,id:product.id}]
        };
        case REMOVE_FROM_CART:
            const {id} = action.payload;
            return {
                ...state,
                cart:state.cart.filter(item=>!(item.id==id && item.size==action.payload.size))
            };
        default:
            return state;
    }
}