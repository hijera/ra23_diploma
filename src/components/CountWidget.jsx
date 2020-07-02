import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";
import {addCount, removeCount} from "../actions/actionCreators";

CountWidget.propTypes = {
    
};

function CountWidget(props) {
    const {  count } = useSelector(state=>state.product);
    const dispatch = useDispatch();
    const handleMinus = (evt) => {
        evt.preventDefault();
      dispatch(removeCount());
    };
    const handlePlus = (evt) => {
        evt.preventDefault();
        dispatch(addCount());
    };
    return (
        <p>Количество: <span className="btn-group btn-group-sm pl-2">
                                        <button className="btn btn-secondary" onClick={handleMinus} >-</button>
                                        <span className="btn btn-outline-primary">{count}</span>
                                        <button className="btn btn-secondary" onClick={handlePlus} >+</button>
                                    </span>
        </p>
    );
}

export default CountWidget;