import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import BodyWrapper from "./BodyWrapper";
import Banner from "./Banner";
import {useDispatch, useSelector} from "react-redux";
import SizesWidget from "./SizesWidget";
import CountWidget from "./CountWidget";
import {addToCart, catalogRequest, productRequest} from "../actions/actionCreators";
import ProductInfoWidget from "./ProductInfoWidget";
import Preloader from "./Preloader";

ProductPage.propTypes = {

};

function ProductPage(props) {
    const { history } = props;
    const { activeSize,loading,error, count, product} = useSelector(state=>state.product);
    const dispatch = useDispatch();
    const handleClick = evt => {
        evt.preventDefault();
        dispatch(addToCart(product,count,activeSize));
        history.push("/cart.html");
    };

    useEffect(()=>{
        dispatch(productRequest(props.match.params.id));
    },[]);

    return (
        <BodyWrapper>
            <Banner />

            {loading && <Preloader/> }
            {product && <section className="catalog-item">
                <h2 className="text-center">{product.title}</h2>
                <div className="row">
                    <div className="col-5">
                        <img src={(product.images && product.images.length>0) ? product.images[0] : '' }
                             className="img-fluid" alt="" />
                    </div>
                    <div className="col-7">
                        <ProductInfoWidget/>
                        <div className="text-center">
                            <SizesWidget/>
                            <CountWidget/>
                        </div>
                        {product.sizes.filter(size=>size.avalible).length>0 && <button className={"btn btn-danger btn-block btn-lg"} onClick={handleClick} disabled={!activeSize? 'disabled' :''} >В корзину</button>}
                    </div>
                </div>
            </section>}
        </BodyWrapper>
    );
}

export default ProductPage;