import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {removeFromCart} from "../actions/actionCreators";

CartWidget.propTypes = {
    
};

const numRegex=/(\d)(?=(\d{3})+$)/g;

function CartWidget(props) {
    const { cart } = useSelector(state=>state.cart);
    const dispatch = useDispatch();
    const handleRemove = (evt,id,size) => {
        evt.preventDefault();
        dispatch(removeFromCart(id,size))
    };
    console.log(cart);
    return (
        <section className="cart">
            <h2 className="text-center">Корзина</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Название</th>
                    <th scope="col">Размер</th>
                    <th scope="col">Кол-во</th>
                    <th scope="col">Стоимость</th>
                    <th scope="col">Итого</th>
                    <th scope="col">Действия</th>
                </tr>
                </thead>
                <tbody>
                {cart.map((item,k)=>
                <tr key={""+item.id+item.size+item.count}>
                    <th scope="row">{k+1}</th>
                    <td><Link to={"/products/"+item.id+".html"}>{item.title}</Link></td>
                    <td>{item.size}</td>
                    <td>{item.count}</td>
                    <td>{item.price.toString().replace(numRegex, '$1 ')} руб.</td>
                    <td>{(item.price*item.count).toString().replace(numRegex, '$1 ')} руб.</td>
                    <td>
                        <button className="btn btn-outline-danger btn-sm" onClick={(evt) => handleRemove(evt,item.id,item.size)}>Удалить</button>
                    </td>
                </tr>
                )}
                <tr>
                    <td colSpan="5" className="text-right">Общая стоимость</td>
                    <td>{cart.length>0 && cart.reduce((sum,item)=>(sum+item.count*item.price),0).toString().replace(numRegex,'$1 ')} руб.</td>
                </tr>

                </tbody>
            </table>
        </section>
    );
}

export default CartWidget;