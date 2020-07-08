import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";
import {changeSearchField, toggleSearchField} from "../actions/actionCreators";

SearchForm.propTypes = {
    
};

function SearchForm(props) {
    const { query, showSearch } = useSelector(state=> state.search);
    const dispatch = useDispatch();
    const { history } = props;
    const handleChange = evt => {
        const { target } = evt;
      dispatch(changeSearchField(target.value));
    };
    const handleSubmit = evt => {
      evt.preventDefault();

            if (query.trim() == '')
            {
                dispatch(toggleSearchField());
            }
            else
            {
                history.push({ pathname: "/catalog.html", search: "?q="+query });
            }

    };
    return (
        <form data-id="search-form" onSubmit={handleSubmit}
              className={"header-controls-search-form form-inline "+((!showSearch) ? "invisible" : "")}>
            <input className="form-control" placeholder="Поиск" value={query} onChange={handleChange} />
        </form>
    );
}

export default SearchForm;