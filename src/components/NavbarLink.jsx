import React from 'react';
import PropTypes from 'prop-types';
import {Link, NavLink} from "react-router-dom";
import { matchPath } from 'react-router';
import '../css/style.css';

NavbarLink.propTypes = {
    
};

function NavbarLink(props) {
    const {link,title} = props;
    const isActive=!!matchPath(props.location.pathname,{
        path: link,
        exact:true,
    }   );
    return (
        <li className={"nav-item "+((isActive) ? " active" : "")} >
            <Link className="nav-link" to={link} >{title}</Link>
        </li>
    );
}

export default NavbarLink;