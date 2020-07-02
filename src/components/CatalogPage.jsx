import React from 'react';
import PropTypes from 'prop-types';
import Header from "./Header";
import Footer from "./Footer";
import BodyWrapper from "./BodyWrapper";
import Banner from "./Banner";
import CatalogWidget from "./CatalogWidget";

CatalogPage.propTypes = {
    
};

function CatalogPage(props) {
    return (
        <BodyWrapper>
            <Banner/>

            <CatalogWidget {...props} searchable={true} more={true}  />
        </BodyWrapper>
    );
}

export default CatalogPage;