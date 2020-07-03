import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";
import NavbarLink from "./NavbarLink";
import '../css/style.css';
Navbar.propTypes = {
    
};

function Navbar(props) {
    const menu = [{title: 'Главная',link:'/'},{title: 'Каталог',link:'/catalog.html'},{title: 'О магазине',link:'/about.html'},{title: 'Контакты',link:'/contacts.html'}];
    return (
        <div className="collapase navbar-collapse" id="navbarMain">
            <ul className="navbar-nav mr-auto">
                {menu.map(menu_item=>
                <NavbarLink {...props} key={menu_item.link} link={menu_item.link} title={menu_item.title}  />
                )}
            </ul>
        </div>
    );
}

export default Navbar;