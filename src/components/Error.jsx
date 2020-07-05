import React from 'react';
import PropTypes from 'prop-types';
import BodyWrapper from "./BodyWrapper";

Error.propTypes = {
    
};

function Error(props) {
    const { actionHandle } = props;
    const handleClick = evt => {
      evt.preventDefault();
      actionHandle(evt);
    };

    return (
        <BodyWrapper>
            <br />
            <div className="alert alert-danger" role="alert">
                <p>Произошла ошибка: {props.message} ({props.name})</p>
                <button type="button" className="btn btn-dark" onClick={handleClick}>Попробовать снова</button>
            </div>
        </BodyWrapper>
    );
}

export default Error;