import React from 'react';
import PropTypes from 'prop-types';
import BodyWrapper from "./BodyWrapper";
import Banner from "./Banner";
import CartWidget from "./CartWidget";
import OrderFormWidget from "./OrderFormWidget";

CartPage.propTypes = {
    
};

function CartPage(props) {
    return (
        <BodyWrapper>
            <Banner/>
            <CartWidget/>
            <OrderFormWidget/>
        </BodyWrapper>
    );
}

export default CartPage;