import React, { useContext } from 'react'
import { ProductsContext } from '../Global/ProductsContext'
import { CartContext } from '../Global/CartContext'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

export const Products = () => {

    const { products } = useContext(ProductsContext);

    const { dispatch } = useContext(CartContext);

    const truncate =(str)=>{
        return str.length > 10 ? str.substring(0, 18) + "..." : str;
    }


    return (
        <>
            <div className=" row">
                <div className="col-sm-12 text-center">
                    {products.length !== 0 && <h1>Products</h1>}
                </div>
                
            </div>
            <div className='products-container'>
                
            </div>

            <section id="product" className="product-area pt-100 pb-130">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <div className="collection-menu text-center mt-30">
                                <h4 className="collection-tilte">OUR COLLECTION</h4>
                                <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <Link className="active"  to="/" id="v-pills-decorative-tab" data-toggle="pill" href="#v-pills-decorative" role="tab" aria-controls="v-pills-decorative" aria-selected="false">
                                        All
                                    </Link>
                                    <Link to="/watch" id="v-pills-decorative-tab" data-toggle="pill" href="#v-pills-decorative" role="tab" aria-controls="v-pills-decorative" aria-selected="false">
                                        Watch
                                    </Link><Link to="/tv" id="v-pills-decorative-tab" data-toggle="pill" href="#v-pills-decorative" role="tab" aria-controls="v-pills-decorative" aria-selected="false">
                                       Tv
                                    </Link>
                                    <Link to="/phones" id="v-pills-decorative-tab" data-toggle="pill" href="#v-pills-decorative" role="tab" aria-controls="v-pills-decorative" aria-selected="false">
                                        Phone
                                    </Link>
                                    <Link to="/speaker" id="v-pills-decorative-tab" data-toggle="pill" href="#v-pills-decorative" role="tab" aria-controls="v-pills-decorative" aria-selected="false">
                                        Speaker
                                    </Link>
                                    <Link to="/productCategory" id="v-pills-decorative-tab" data-toggle="pill" href="#v-pills-decorative" role="tab" aria-controls="v-pills-decorative" aria-selected="false">
                                        Others
                                    </Link>
                                    
                                    
                                    
                                </div> 
                                {/* <!-- nav --> */}
                            </div> 
                            {/* <!-- collection menu --> */}
                        </div>
                        <div className="col-lg-9 col-md-8">
                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade show active" id="v-pills-furniture" role="tabpanel" aria-labelledby="v-pills-furniture-tab">
                                    <div className="product-items mt-30">
                                        <div className="row product-items-active">
                                            {/* <div className="col-md-4">
                                                <div className="single-product-items">
                                                    <div className="product-item-image">
                                                        <a href="#"><img src="assets/images/product/p-1.jpg" alt="Product" /></a>
                                                        <div className="product-discount-tag">
                                                            <p>-60%</p>
                                                        </div>
                                                    </div>
                                                    <div className="product-item-content text-center mt-30">
                                                        <h5 className="product-title"><a href="#">Fibre Chair</a></h5>
                                                        <ul clxassName="rating">
                                                            <li><i className="lni-star-filled"></i></li>
                                                            <li><i className="lni-star-filled"></i></li>
                                                            <li><i className="lni-star-filled"></i></li>
                                                            <li><i className="lni-star-filled"></i></li>
                                                        </ul>
                                                        <span className="regular-price">$49.00</span>
                                                        <span className="discount-price">$69.00</span>
                                                    </div>
                                                </div> 
                                            </div> */}
                       

                                            {products.length === 0 && <div>slow internet...no products to display</div>}
                                            {/* {products.map(product => (
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
                                            ))} */}

                                            {products.map(product => (
                                                <div className="col-md-4 mb-3 mt-3">
                                                    <div className="single-product-items">
                                                        <div className="product-item-image">
                                                            <a href="#">
                                                                <img src={product.ProductImg} height="300px" alt="Product" />

                                                            </a>
                                                            {/* <div className="product-discount-tag">
                                                                <p>-20%</p>
                                                            </div> */}
                                                        </div>
                                                        <div className="product-item-content text-center mt-30">
                                                            <h6 className="product-title">{ truncate(product.ProductName)}</h6>
                                                            <ul className="rating">
                                                                <li><i className="lni-star-filled"></i></li>
                                                                <li><i className="lni-star-filled"></i></li>
                                                                <li><i className="lni-star-filled"></i></li>
                                                                <li><i className="lni-star-filled"></i></li>
                                                            </ul>
                                                            <span className="regular-price">
                                                                NGN {product.ProductPrice}.00
                                                            </span>
                                                            <button className="addcart-btn main-btn" href="#" data-animation="fadeInUp" data-delay="1.5s" onClick={() =>{ 
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
                                                            {/* <span className="discount-price">
                                                                NGN {product.ProductPrice}.00
                                                            </span> */}
                                                        </div>
                                                    </div> 
                                                    {/* <!-- single product items --> */}
                                                </div>
                                            ))}

                                            
                                            
                                          
                                        {/* <!-- row --> */}
                                    </div> 
                                    {/* <!-- product items --> */}
                                </div> 
                                {/* <!-- tab pane --> */}


                            </div> 
                            {/* <!-- tab content -->  */}
                        </div>
                    </div> 
                    {/* <!-- row --> */}
                </div> 
                </div>
            </section>
    
        </>
    )
}
