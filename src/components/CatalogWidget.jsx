import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Categories from "./Categories";
import Item from "./Item";
import Preloader from "./Preloader";
import {useDispatch, useSelector} from "react-redux";
import {catalogRequest, topRequest} from "../actions/actionCreators";
import Error from "./Error";

CatalogWidget.propTypes = {

};

function CatalogWidget(props) {

    const params = new URLSearchParams(props.location.search);
    const q = params.get('q');
    const { list, loading, error, offset, maxlength} = useSelector(state=>state.list);
    const { query } =useSelector(state=>state.search);
    const { selectedCategory } = useSelector(state=>state.categories);
    const [qstr,setQuery] =useState((q && props.searchable) ? q : '');
    const dispatch = useDispatch();
    const requestData = evt => {
        dispatch(catalogRequest((selectedCategory==0) ? '' : selectedCategory,(props.searchable) ? qstr : '',false));
    };
    useEffect(()=>{
        requestData();
    },[selectedCategory,(props.searchable) ? qstr : null]);
    useEffect(()=>{
        setQuery(query);
    },[(props.searchable) ? query : null]);
    const handleClick = evt => {
      evt.preventDefault();
      dispatch(catalogRequest((selectedCategory==0) ? '' : selectedCategory,(props.searchable) ? qstr : '',true));
    };

    const handleChange = evt => {
        const { target } = evt;
      setQuery(target.value);
    };
    return (
        <section className="catalog">
            <h2 className="text-center">Каталог</h2>

            {list && props.searchable && <form className="catalog-search-form form-inline">
                <input className="form-control" placeholder="Поиск" value={qstr} onChange={handleChange} />
            </form>}

            {list &&
            <Categories />}
            {list &&  <div className="row">{list.map(item=>
                <Item isCatalog={true} key={item.id} {...item} />
                )}
            </div>
            }

            {list && props.more && !error && !loading && !maxlength && <div className="text-center">
                <button className="btn btn-outline-primary" onClick={handleClick}>Загрузить ещё</button>
            </div>}
            {loading && <Preloader/>}
            {error && <Error {...error} actionHandle={requestData} />}
        </section>
    );
}

CatalogWidget.defaultProps = {
    more: false,
    searchable: false,
};

export default CatalogWidget;