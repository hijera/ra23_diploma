import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";
import {changeSearchField} from "../actions/actionCreators";

SearchForm.propTypes = {
    
};

function SearchForm(props) {
    const { query, showSearch } = useSelector(state=> state.search);
    const dispatch = useDispatch();
    const handleChange = evt => {
        const { target } = evt;
      dispatch(changeSearchField(target.value));
    };
    return (
        <form data-id="search-form"
              className={"header-controls-search-form form-inline "+((!showSearch) ? "invisible" : "")}>
            <input className="form-control" placeholder="Поиск" value={query} onChange={handleChange} />
        </form>
    );
}

export default SearchForm;