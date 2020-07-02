import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";
import {selectSize} from "../actions/actionCreators";

SizesWidget.propTypes = {

};

function SizesWidget(props) {
    const {  product, activeSize } = useSelector(state=>state.product);
    const dispatch = useDispatch();
    const handleSelect = (evt,size) => {
        evt.preventDefault();
        dispatch(selectSize(size));
    };
    console.log(activeSize);
    return (
        <p>Размеры в наличии:
            {product && product.sizes.map(item=>
              item.avalible && <span key={item.size} onClick={(evt)=>handleSelect(evt,item.size)} className={"catalog-item-size "+(( activeSize==item.size) ? "selected" : "")} >{item.size}</span>
            )}
        </p>
    );
}

export default SizesWidget;