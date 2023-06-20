import React, {useState} from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = (props) => {
    const [product, setProduct] = useState([]);

    return (
        <div>
            <ProductForm product = {product} setProduct = {setProduct} />
            <ProductList product = {product} setProduct = {setProduct} />
        </div>
    )
}
export default Main;