import React from 'react';
import PropTypes from 'prop-types';

BodyWrapper.propTypes = {

};

function BodyWrapper(props) {
    return (
        <main className="container">
            <div className="row">
                <div className="col">
                    {props.children}
                </div>
            </div>
        </main>
                );
  }

export default BodyWrapper;