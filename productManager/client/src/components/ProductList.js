import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import styles from '../styles.module.css'

const ProductList = (props) => {
    const {product, setProduct} = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
        .then((res) => {
            console.log(res);
            setProduct(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <div className={styles.content}>
            <h1>All Products: </h1>

            {
                product.map((product) => {
                    return (
                        <div key={product._id}>
                            <Link to={`/product/${product._id}`}>{product.title}</Link>
                        </div>
                    )
                })
            }

            {/* This is to display my products as a list of <a> tags */}
            {/* <ul className={styles.simpleList}>
                {product.map((product) => (
                    <li key={product._id}>
                        <a href='#'>{product.title}</a>
                    </li>
                ))}
            </ul> */}

            {/* {
                product.map((product, index) => {
                    // return <p key={index}>{product.title}${product.price}{product.description}</p> //This is to show all product information
                    // return <p key= {index}>{product.title}</p> //This is to show just the product title
                })
            }
             */}
        </div>
    );
};
export default ProductList;