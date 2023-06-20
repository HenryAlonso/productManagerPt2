import React, {useState} from 'react';
import axios from 'axios';
import styles from '../styles.module.css';

const ProductForm = (props) => {
    const {product, setProduct} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                setProduct([...product, res.data])
            })
            .catch(err => console.log(err));
    }

    const handleTitleSubmit = (e) => {
        setTitle(e.target.value);
    }
    const handlePriceSubmit = (e) => {
        setPrice(e.target.value);
    }
    const handleDescriptionSubmit = (e) => {
        setDescription(e.target.value);
    }

    return (
        <div className={styles.content}>
            <h1>Product Manager</h1>
            <form className={styles.form} onSubmit={onSubmitHandler}>
                <span className={styles.inputs}>
                    <label className={styles.label} htmlFor='title'>Title: </label>
                    <input className={styles.half} id='title' type='text' onChange={handleTitleSubmit} />
                </span>
                <span className={styles.inputs}>
                    <label className={styles.label} htmlFor='price'>Price: </label>
                    <input className={styles.half} id='price' type='text' onChange={handlePriceSubmit} />
                </span>
                <span className={styles.inputs}>
                    <label className={styles.label} htmlFor='description'>Description: </label>
                    <input className={styles.half} id='description' type='text' onChange={handleDescriptionSubmit} />
                </span>
                <input className={styles.submit} type='submit' value='Create'/>
            </form>
        </div>
    )
}
export default ProductForm;