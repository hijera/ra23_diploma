import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";
import {categoriesRequest, selectCat} from "../actions/actionCreators";
import Error from "./Error";

Categories.propTypes = {
    
};

function Categories(props) {
    const { categories, error , loading,selectedCategory } = useSelector(state=>state.categories);
    const dispatch = useDispatch();
    const requestData = evt => {
        dispatch(categoriesRequest());
    };
    useEffect(()=>{
        requestData();
    },[]);
    const handleCatChange = (evt,id) => {
      evt.preventDefault();
      dispatch(selectCat(id));
    };
    return (
        <>
        {error && <Error {...error} actionHandle={requestData} />}
        <ul className="catalog-categories nav justify-content-center">
            {categories && categories.map(cat=>
            <li className="nav-item" key={cat.id}>
                <a className={"nav-link "+((cat.id==selectedCategory)? 'active':'')} href="#" onClick={(evt)=>handleCatChange(evt,cat.id)}>{cat.title}</a>
            </li>
            )}
        </ul>
        </>
    );
}

export default Categories;