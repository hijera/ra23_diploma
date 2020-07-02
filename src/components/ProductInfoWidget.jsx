import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from "react-redux";

ProductInfoWidget.propTypes = {
    
};

function ProductInfoWidget(props) {
    const { product} = useSelector(state=>state.product);
    return (
        <>
        {product &&
        <table className="table table-bordered">
            <tbody>
            <tr>
                <td>Артикул</td>
                <td>{product.sku}</td>
            </tr>
            <tr>
                <td>Производитель</td>
                <td>{product.manufacturer}</td>
            </tr>
            <tr>
                <td>Цвет</td>
                <td>{product.color}</td>
            </tr>
            <tr>
                <td>Материалы</td>
                <td>{product.material}</td>
            </tr>
            <tr>
                <td>Сезон</td>
                <td>{product.season}</td>
            </tr>
            <tr>
                <td>Повод</td>
                <td>{product.reason}</td>
            </tr>
            </tbody>
        </table>
        }
        </>
    );
}

export default ProductInfoWidget;