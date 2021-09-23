import React, { useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { removeSelectedProduct, selectedProduct } from '../redux/actions/productAction';


function ProductDetail(props) {

    const ProductDetail = useSelector((state) => state.product)
    const { productId } = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        const fetchProductDetail = async () => {
            const result = await axios(`https://fakestoreapi.com/products/${productId}`);

            dispatch(selectedProduct(result.data));
        };
        fetchProductDetail();
        return () => {
            dispatch(removeSelectedProduct())
        }
    }, [productId]);


    return (
        <div>
            <div class="ui grid container">
                {ProductDetail === {} ? (<div>
                    <CircularProgress className="prog-bar" />
                </div>) : (
                    <div className="ui placeholder segment">
                        <div className="ui two column stackable center aligned grid">
                            <div className="ui vertical divider">AND</div>
                            <div className="middle aligned row">
                                <div className="column lp">
                                    <img className="ui fluid image" src={ProductDetail.image} />
                                </div>
                                <div className="column rp">
                                    <h1>{ProductDetail.title}</h1>
                                    <h2>
                                        <a className="ui teal tag label">${ProductDetail.price}</a>
                                    </h2>
                                    <h3 className="ui brown block header">{ProductDetail.category}</h3>
                                    <p>{ProductDetail.description}</p>
                                    <div className="ui vertical animated button" tabIndex="0">
                                        <div className="hidden content">
                                            <i className="shop icon"></i>
                                        </div>
                                        <div className="visible content">Add to Cart</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                )
                }

            </div>

        </div>
    );
}

export default ProductDetail;