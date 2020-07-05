import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Preloader from "./Preloader";
import {useDispatch, useSelector} from "react-redux";
import Item from "./Item";
import {topRequest} from "../actions/actionCreators";
import Error from "./Error";

TopSalesWidget.propTypes = {
    
};

function TopSalesWidget(props) {
    const { list, loading, error} = useSelector(state=>state.topsells);

    const dispatch = useDispatch();
    useEffect(()=>{
        requestData();
    },[]);
    const requestData = evt => {
        dispatch(topRequest());
    };
    return (
        <section className="top-sales">
            <h2 className="text-center">Хиты продаж!</h2>
            {loading && <Preloader/>}
            {list && <div className="row">
                {list.map(item=>
                    <Item  key={item.id} {...item} />
                )}
                {error && <Error {...error} actionHandle={requestData}/>}
            </div>}
        </section>
    );
}

export default TopSalesWidget;