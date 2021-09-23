import React, { useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from "../redux/actions/productAction"
import { Link } from "react-router-dom"
import axios from 'axios'


function ProductListing(props) {
    const products = useSelector((state) => state.allProducts.products)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchProducts = async () => {
            const result = await axios("https://fakestoreapi.com/products");

            dispatch(setProduct(result.data));
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <div class="ui grid">
                {products.length === 0 ? (<div>
                    <CircularProgress className="prog-bar" />
                </div>) : products.map((item) => {
                    return (
                        <div className="four wide column" key={item.id}>
                            <Link to={`ShoppingCart/product/${item.id}`}>
                                <div className="ui link cards">
                                    <div className="card">
                                        <div className="image">
                                            <img src={item.image} alt="img" />
                                        </div>
                                        <div className="content">
                                            <a className="header">{item.title}</a>
                                            <div className="meta price">
                                                RS {item.price}
                                            </div>
                                            <div className="meta ">
                                                {item.category}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                    )
                })}

            </div>
        </div>

    );
}

export default ProductListing;