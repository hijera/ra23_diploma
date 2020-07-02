import React from 'react';
import PropTypes from 'prop-types';
import Header from "./Header";
import Footer from "./Footer";
import {Route} from "react-router-dom";
import '../css/style.css';
import BodyWrapper from "./BodyWrapper";
import Banner from "./Banner";
import TopSalesWidget from "./TopSalesWidget";
import CatalogWidget from "./CatalogWidget";
MainPage.propTypes = {
    
};

function MainPage(props) {
    return (
            <BodyWrapper>
                <Banner />
                <TopSalesWidget/>
                <CatalogWidget {...props} />
            </BodyWrapper>
    );
}

export default MainPage;