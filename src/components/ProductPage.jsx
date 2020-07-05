import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import BodyWrapper from "./BodyWrapper";
import Banner from "./Banner";
import {useDispatch, useSelector} from "react-redux";
import SizesWidget from "./SizesWidget";
import CountWidget from "./CountWidget";
import {addToCart, catalogRequest, productRequest, resetOrder} from "../actions/actionCreators";
import ProductInfoWidget from "./ProductInfoWidget";
import Preloader from "./Preloader";
import Error from "./Error";
import ItemImage from "./ItemImage";

ProductPage.propTypes = {

};

function ProductPage(props) {
    const { history } = props;
    const { activeSize,loading,error, count, product} = useSelector(state=>state.product);
    const { ordered } = useSelector(state=>state.order);
    const { cart } = useSelector(state=>state.cart);
    const dispatch = useDispatch();
    const handleClick = evt => {
        evt.preventDefault();
        dispatch(addToCart(product,count,activeSize));
        if (ordered && cart.length==0)
        {
            //reset order
            dispatch(resetOrder());
        }
        history.push("/cart.html");
    };

    const requestData = evt => {
        dispatch(productRequest(props.match.params.id));
    };

    useEffect(()=>{
        requestData();
    },[]);

    return (
        <BodyWrapper>
            <Banner />

            {loading && <Preloader/> }
            {error && <Error {...error} actionHandle={requestData} />}
            {product && <section className="catalog-item">
                <h2 className="text-center">{product.title}</h2>
                <div className="row">
                    <div className="col-5">
                        <ItemImage history={history} images={product.images}
                             classes={"img-fluid"} alt="Main image" />
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