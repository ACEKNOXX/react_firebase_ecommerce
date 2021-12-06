import React,{useEffect, useState,useContext} from 'react'
import { auth } from '../../Config/Config'
import { db } from '../../Config/Config'
import { CartContext } from '../../Global/CartContext'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CategoryThreeBody() {
    const [categoryProduct,setCategoryProduct] = useState([])
    const [loading, setLoading] = useState(true);

    const { dispatch } = useContext(CartContext);

    const truncate =(str)=>{
        return str.length > 10 ? str.substring(0, 18) + "..." : str;
    }

    useEffect(() => {
        const pdt = [];

        db.collection('Products').where("ProductCategory","==","phone").onSnapshot(snapshot => {
            let changes = snapshot.docChanges();
            changes.forEach(change => {
                if (change.type === 'added') {
                    pdt.push({
                        ProductID: change.doc.id,
                        ProductName: change.doc.data().ProductName,
                        ProductPrice: change.doc.data().ProductPrice,
                        ProductImg: change.doc.data().ProductImg
                    })
                }
                
                
            })
            setCategoryProduct(pdt)
            setLoading(false)
        })
    })

    
    return (
        <div >
            <div className="text-center">
                <h1>CATEGORY</h1>
            </div>
            {

            }
            <div className="row">
                <div className="col-sm-12 text-center">
                    {loading &&
                        <div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    }

                </div>
            </div>
            <section id="product" className="product-area pt-50 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            {categoryProduct.length === 0 && <div>slow internet...no products to display</div>}

                        </div>
                        {categoryProduct.map(product => (
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

                    </div>
                </div>
            </section>
        </div>
    )
}
