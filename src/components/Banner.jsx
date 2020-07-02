import React from 'react';
import PropTypes from 'prop-types';
import img from '../img/banner.jpg';
Banner.propTypes = {
    
};

function Banner(props) {
    const title="К весне готовы!";
    return (
        <>
        {img && <div className="banner">
            <img src={img} className="img-fluid" alt={props.alt} />
                <h2 className="banner-header">{title}</h2>
        </div>}
        </>
    );
}

export default Banner;