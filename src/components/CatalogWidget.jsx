import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Categories from "./Categories";
import Item from "./Item";
import Preloader from "./Preloader";
import {useDispatch, useSelector} from "react-redux";
import {catalogRequest, topRequest} from "../actions/actionCreators";

CatalogWidget.propTypes = {

};

function CatalogWidget(props) {
    const { match } = props;
    const params = new URLSearchParams(props.location.search);
    const q = params.get('q');
    const { list, loading, error, offset, maxlength} = useSelector(state=>state.list);
    const { selectedCategory } = useSelector(state=>state.categories);
    const [query,setQuery] =useState((q && props.searchable) ? q : '');
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(catalogRequest((selectedCategory==0) ? '' : selectedCategory,query,false));
    },[selectedCategory,query]);

    const handleClick = evt => {
        console.log(offset);
      evt.preventDefault();
      dispatch(catalogRequest((selectedCategory==0) ? '' : selectedCategory,query,true));
    };

    const handleChange = evt => {
        const { target } = evt;
      setQuery(target.value);
    };
    return (
        <section className="catalog">
            <h2 className="text-center">Каталог</h2>

            {list && props.searchable && <form className="catalog-search-form form-inline">
                <input className="form-control" placeholder="Поиск" value={query} onChange={handleChange} />
            </form>}

            {list &&
            <Categories />}
            {list &&  <div className="row">{list.map(item=>
                <Item isCatalog={true} key={item.id} {...item} />
                )}
            </div>
            }

            {list && props.more && !loading && !maxlength && <div className="text-center">
                <button className="btn btn-outline-primary" onClick={handleClick}>Загрузить ещё</button>
            </div>}
            {loading && <Preloader/>}
        </section>
    );
}

CatalogWidget.defaultProps = {
    more: false,
    searchable: false,
};

export default CatalogWidget;