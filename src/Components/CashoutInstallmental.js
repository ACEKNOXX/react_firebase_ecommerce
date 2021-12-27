import React, { useState, useEffect, useContext } from 'react'
import { CartContext } from '../Global/CartContext'
import { Navbar } from './Navbar';
import { useHistory } from 'react-router-dom'
import { Icon } from 'react-icons-kit'
import { ic_add } from 'react-icons-kit/md/ic_add'
import { ic_remove } from 'react-icons-kit/md/ic_remove'
import { iosTrashOutline } from 'react-icons-kit/ionicons/iosTrashOutline'

import { auth,storage, db } from '../Config/Config'

export const CashoutInstallmental = (props) => {

    const history = useHistory();
    const { shoppingCart, dispatch, totalPrice, totalQty } = useContext(CartContext);
   

    // defining state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cell, setCell] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [loading, setLoading] = useState(false);
    const [driverLicense, setDriverLicense] = useState(null);


    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                db.collection('SignedUpUsersData').doc(user.uid).onSnapshot(snapshot => {
                    setName(snapshot.data().Name);
                    setEmail(snapshot.data().Email);
                })
            }
            else {
                history.push('/login')
            }
        })
    })
    const types = ['image/png', 'image/jpeg']; // image types

    const driverLicenseHandler = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile && types.includes(selectedFile.type)) {
            setDriverLicense(selectedFile);
            setError('')
        }
        else {
            setDriverLicense(null);
            setError('Please select a valid image type (jpg or png)');
        }
    }

    const addProduct = (e) => {
        setLoading(true);
        e.preventDefault();
        
    }
    const cashoutInstallmentalSubmit = (e) => {
        setLoading(true);
        e.preventDefault();
        auth.onAuthStateChanged(user => {
            if (user) {

                

                const uploadTask = storage.ref(`driver-lincense/${driverLicense.name}`).put(driverLicense);
                uploadTask.on('state_changed', snapshot => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log(progress);

                }, err =>{
                    setLoading(false);
                    setError(err.message)
                }, () => {
                    storage.ref('driver-lincense').child(driverLicense.name).getDownloadURL().then(url => {
                        const date = new Date();
                        const time = date.getTime();
                        db.collection('Buyer-info ' + user.uid).doc('_' + time).set({
                            BuyerName: name,
                            BuyerEmail: email,
                            BuyerCell: cell,
                            BuyerAddress: address,
                            BuyerPayment: totalPrice,
                            BuyerQuantity: totalQty,
                            BuyerInstallmental: true,
                            BuyerShoppingCart:shoppingCart,
                            BuyerDriverLincense:url,
                            DateCreated: Date.now()

                        }).then(() => {
                            setLoading(false);
                            setCell('');
                            setAddress('');
                            dispatch({ type: 'EMPTY' })
                            setSuccessMsg('Your order has been placed successfully. Thanks for visiting us. You will be redirected to home page after 5 seconds');
                            setTimeout(() => {
                                history.push('/')
                            }, 5000)
                        }).catch(err =>{
                            setLoading(false);
                            setError(err.message)
                        })  
                    
                    })
                })
            }
        })
    }

    return (
        <>
            <Navbar user={props.user} />

            <div className='container'>
                <br />
                <h2>Cashout Installmental Payment</h2>
                <br />


                {successMsg && <div className='success-msg'>{successMsg}</div>}
                {/*  */}
                <div className='cart-container'>
                    {shoppingCart && shoppingCart.map(cart => (
                        <div className='cart-card' key={cart.ProductID}>

                            <div className='cart-img'>
                                <img src={cart.driverLicense} alt="not found" />
                            </div>

                            <div className='cart-name'>{cart.ProductName}</div>

                            <div className='cart-price-orignal'>NGN {cart.ProductPrice}.00</div>

                            <div className='inc' onClick={() => dispatch({ type: 'INC', id: cart.ProductID, cart })}>
                                <Icon icon={ic_add} size={24} />
                            </div>

                            <div className='quantity'>{cart.qty}</div>

                            <div className='dec' onClick={() => dispatch({ type: 'DEC', id: cart.ProductID, cart })}>
                                <Icon icon={ic_remove} size={24} />
                            </div>

                            <div className='cart-price'>
                                NGN {cart.TotalProductPrice}.00
                            </div>

                            <button className='delete-btn' onClick={() => dispatch({ type: 'DELETE', id: cart.ProductID, cart })}>
                                <Icon icon={iosTrashOutline} size={24} />
                            </button>
                        </div>
                    ))
                    }
                </div>
                {/*  */}
                <form autoComplete="off" className='form-group' onSubmit={cashoutInstallmentalSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" className='form-control' required
                        value={name} disabled />
                    <br />
                    <label htmlFor="email">Email</label>
                    <input type="email" className='form-control' required
                        value={email} disabled />
                    <br />
                    <label htmlFor="Cell No">Cell No</label>
                    <input type="number" className='form-control' required
                        onChange={(e) => setCell(e.target.value)} value={cell} placeholder='eg 03123456789' />
                    <br />
                    <label htmlFor="Delivery Address">Delivery Address</label>
                    <input type="text" className='form-control' required
                        onChange={(e) => setAddress(e.target.value)} value={address} />
                    <br />
                    <label htmlFor="Price To Pay">Price To Pay</label>
                    <input type="number" className='form-control' required
                        value={totalPrice} disabled />
                    <br />
                    <label htmlFor="Total No of Products">Total No of Products</label>
                    <input type="number" className='form-control' required
                        value={totalQty} disabled />
                    <br/>
                    <label htmlFor="product-img">Upload a valid ID card (e.g, driver license, voter's card( PVC) , National ID( NIN), International passport.)</label>
                    <input type="file" className='form-control' id="file" required
                        onChange={driverLicenseHandler} />
                    <br />
                    <label htmlFor="product-img">Pick Installmental Paymenet duration.</label>
                    <select class="form-select form-control" aria-label="Default select example">
                        <option selected disabled>Open this select menu</option>
                        <option value="1">1 months</option>
                        <option value="2">2 months</option>
                        <option value="3">5 months</option>
                        <option value="6">6 months</option>
                        <option value="12">12 months</option>

                    </select><br/>
                    <button type="submit" className='mt-2 btn btn-success btn-md mybtn'>
                        {!loading && 
                            <span>
                                Make First Payment on delivery
                            </span>
                        }
                        {loading &&
                            <div class="spinner-border" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                        }
                    </button>

                </form>
                
                {error && <span className='error-msg'>{error}</span>}
                <br />
                <br />
                <br />

            </div>
        </>
    )
}
