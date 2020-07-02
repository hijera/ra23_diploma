import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

Item.propTypes = {
    
};

function Item(props) {
    const {isCatalog} = props;
    const {images} = props;
    const image= (images.length>0) ? images[0] : '';
    return (
        <div className="col-4">
            <div className={"card "+(isCatalog? "catalog-item-card": "")} >
                <img src={image}
                     className="card-img-top img-fluid" alt={props.title} />
                    <div className="card-body">
                        <p className="card-text">{props.title}</p>
                        <p className="card-text">{props.price} руб.</p>
                        <Link to={"/products/"+props.id+'.html'} className="btn btn-outline-primary" >Заказать</Link>
                    </div>
            </div>
        </div>
    );
}

export default Item;