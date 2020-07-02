import React from 'react';
import PropTypes from 'prop-types';

SearchForm.propTypes = {
    
};

function SearchForm(props) {
    return (
        <form data-id="search-form"
              className="header-controls-search-form form-inline invisible">
            <input className="form-control" placeholder="Поиск" />
        </form>
    );
}

export default SearchForm;