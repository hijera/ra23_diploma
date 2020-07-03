import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from "./SearchForm";
import CartButton from "./CartButton";
import Navbar from "./Navbar";
import {useHistory,useLocation} from 'react-router-dom';
import '../css/style.css';
import {useDispatch, useSelector} from "react-redux";
import {toggleSearchField} from "../actions/actionCreators";
Header.propTypes = {

};

function Header(props) {
    const location = useLocation();
    const {query} = useSelector(state=>state.search);
    const history = useHistory();
    const dispatch =useDispatch();
    const handleClick = evt => {
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
        <header className="container">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-sm navbar-light bg-light">
                        <a className="navbar-brand" href="/">
                            <img src="/img/header-logo.png" alt="Bosa Noga" />
                        </a>

                        <Navbar {...props} history={history} location={location} />
                        <div>
                            <div className="header-controls-pics">
                                <div data-id="search-expander"
                                     className="header-controls-pic header-controls-search" onClick={handleClick}></div>
                                <CartButton history={history} />
                            </div>
                            <SearchForm />
                        </div>

                    </nav>

                </div>
            </div>
        </header>
    );
}

export default Header;