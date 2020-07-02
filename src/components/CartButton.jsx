import React from 'react';
import PropTypes from 'prop-types';
import '../css/style.css';
import {useSelector} from "react-redux";
CartButton.propTypes = {
    
};

function CartButton(props) {
    const { cart } = useSelector(state=>state.cart);
    const { history } = props;
    const handleClick = evt => {
        evt.preventDefault();
        history.push("/cart.html");
    };
    return (
        <div className="header-controls-pic header-controls-cart" onClick={handleClick}>
            {cart.length>0 && <div className="header-controls-cart-full">{cart.length}</div>}
            <div className="header-controls-cart-menu"></div>
        </div>

    );
}

export default CartButton;