import {ADD_TO_CART, REMOVE_FROM_CART, RESET_CART} from "../actions/actionTypes";
import {loadState} from "../localStorage";

const initialState = {
    cart: loadState('cart',[])
};


export default function cartReducer(state=initialState,action) {

    switch (action.type) {

        case ADD_TO_CART:
            const {product,count} = action.payload;

            const eObj= (state.cart && state.cart.length>0) ? state.cart.find(item=>item.id==product.id && item.size==action.payload.size) : null;

        return {
            ...state,
            cart:(eObj) ? [ ...((state.cart) ? state.cart.filter(obj=>!(obj.id==eObj.id && obj.size==eObj.size)) : [] ) ,{ ...eObj , count: eObj.count+count} ] :
                [...((state.cart) ? state.cart : [] ),{title:product.title,count:count,size:action.payload.size,price:product.price,id:product.id}]
        };
        case REMOVE_FROM_CART:
            const {id} = action.payload;
            return {
                ...state,
                cart:state.cart.filter(item=>!(item.id==id && item.size==action.payload.size))
            };
        case RESET_CART:
            return {...state,
            cart:[]
            };
        default:
            return state;
    }
}