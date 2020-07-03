import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";
import {orderRequest, resetCart} from "../actions/actionCreators";
import Preloader from "./Preloader";
import OrderResult from "./OrderResult";

OrderFormWidget.propTypes = {
    
};

function OrderFormWidget(props) {

    const [form, setForm] = useState({
        phone: '',
        address: '',
        agreement: false,
    });
    const { cart } = useSelector(state=>state.cart);
    const { loading, error, ordered}  = useSelector(state=>state.order);
    const dispatch = useDispatch();
    const handleChange = ({target}) => {
        const name = target.id;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setForm(prevForm => ({...prevForm, [name]: value}));
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        const { target } = evt;
        dispatch(orderRequest(form.phone,form.address,cart));
        dispatch(resetCart());
    };

    return (
        <section className="order">
            <h2 className="text-center">Оформить заказ</h2>
            <div className="card order-form-card" >
                {!loading && !ordered && <form className="card-body" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="phone">Телефон</label>
                        <input className="form-control" id="phone" placeholder="Ваш телефон" onChange={handleChange} value={form.phone} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Адрес доставки</label>
                        <input className="form-control" id="address" placeholder="Адрес доставки" onChange={handleChange} value={form.address} />
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="agreement" onChange={handleChange} value={form.agreement} />
                            <label className="form-check-label" htmlFor="agreement">Согласен с правилами
                                доставки</label>
                    </div>
                    <button type="submit" className="btn btn-outline-secondary" disabled={((!form.agreement || form.phone.trim()=='' || form.address.trim()=='') ? 'disabled' : '')}>Оформить</button>
                </form>}
                {loading && !ordered && <Preloader/>}
                {!loading && ordered && <OrderResult/>}

            </div>
        </section>
    );
}

export default OrderFormWidget;