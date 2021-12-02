import React, { useContext } from 'react'
import { ProductsContext } from '../Global/ProductsContext'
import { CartContext } from '../Global/CartContext'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Products = () => {

    const { products } = useContext(ProductsContext);

    const { dispatch } = useContext(CartContext);

    return (
        <>
            <div className=" row">
                <div className="col-sm-12 col-md-6 col-lg-6 ">
                    {products.length !== 0 && <h1>Products</h1>}
                </div>
                
            </div>
            <div className='products-container'>
                {products.length === 0 && <div>slow internet...no products to display</div>}
                {products.map(product => (
                    <div className='product-card' key={product.ProductID}>
                        <div className='product-img'>
                            <img src={product.ProductImg} alt="not found" />
                        </div>
                        <div className='product-name'>
                            {product.ProductName}
                        </div>
                        <div className='product-price'>
                            NGN {product.ProductPrice}.00
                    </div>
                        <button className='addcart-btn' onClick={() =>{ 
                            toast.info('Product added to cart', {
                                position: "top-right",
                                autoClose: 2000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: false,
                                draggable: false,
                                progress: undefined,
                            });
                            dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}
                        }>ADD TO CART</button>
                    </div>
                ))}
            </div>
        </>
    )
}
