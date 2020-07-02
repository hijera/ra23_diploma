import React from 'react';
import PropTypes from 'prop-types';
import Header from "./Header";
import Footer from "./Footer";
import BodyWrapper from "./BodyWrapper";
import Banner from "./Banner";

NotFoundPage.propTypes = {
    
};

function

NotFoundPage(props)
{
    return (
        <BodyWrapper>
            <Banner/>
            <section className="top-sales">
                <h2 className="text-center">Страница не найдена</h2>
                <p>
                    Извините, такая страница не найдена!
                </p>
            </section>
        </BodyWrapper>
    );
}

export default NotFoundPage;