import React, { useState, useEffect, useContext } from 'react'
import { auth, db } from '../Config/Config'
import { CartContext } from '../Global/CartContext'
import { Navbar } from './Navbar';
import { useHistory } from 'react-router-dom'
import { PaystackButton } from 'react-paystack';
  
export const Cashout = (props) => {

    const history = useHistory();

    const {  totalPrice, totalQty, dispatch } = useContext(CartContext);

    // defining state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cell, setCell] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const config = {
    reference: (new Date()).getTime().toString(),
    email: email,
    amount: totalPrice*100,
    publicKey: 'pk_test_7317e010f981c9020888da3208020c144a69fb7f',
    };
    
    // you can call this function anything
    const handlePaystackSuccessAction = (reference) => {
        // Implementation for whatever you want to do with reference and after success call.
        console.log(reference);
        setLoading(true);
        auth.onAuthStateChanged(user => {
            if (user) {
                const date = new Date();
                const time = date.getTime();
                db.collection('Buyer-info ' + user.uid).doc('_' + time).set({
                    BuyerName: name,
                    BuyerEmail: email,
                    BuyerCell: cell,
                    BuyerAddress: address,
                    BuyerPayment: totalPrice,
                    BuyerQuantity: totalQty,
                    DateCreated: Date.now(),
                    BuyerPayOnDelivery:false,
                    BuyerPaid:true
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
            }
        })
    };
  
    // you can call this function anything
    const handlePaystackCloseAction = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log('closed')
        alert("Modal closed");
      }
  
    const componentProps = {
        ...config,
        text: 'Pay With Paystack',
        onSuccess: (reference) => handlePaystackSuccessAction(reference),
        onClose: handlePaystackCloseAction,
    };
  

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
    

    const cashoutSubmit = (e) => {
        setLoading(true);
        e.preventDefault();
        auth.onAuthStateChanged(user => {
            if (user) {
                const date = new Date();
                const time = date.getTime();
                db.collection('Buyer-info ' + user.uid).doc('_' + time).set({
                    BuyerName: name,
                    BuyerEmail: email,
                    BuyerCell: cell,
                    BuyerAddress: address,
                    BuyerPayment: totalPrice,
                    BuyerQuantity: totalQty,
                    DateCreated: Date.now(),
                    BuyerDriverLincense:"",
                    BuyerPayOnDelivery:true
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
            }
        })
    }

    return (
        <>
            <Navbar user={props.user} />
            <div className='container'>
                <br />
                <h2>Cashout Details</h2>
                <br />
                {successMsg && <div className='success-msg'>{successMsg}</div>}
                <form autoComplete="off" className='form-group' onSubmit={cashoutSubmit}>
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
                    <br />
                    
                    <button type="submit" className='btn btn-success btn-md mybtn'
                    style={{width:"200px"}}
                    >
                        {!loading && 
                            <span>
                                Submit
                            </span>
                        }
                        {loading &&
                            <div class="spinner-border" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                        }
                    </button>
                    {/* paystack */}
                        <div className="PayPaystack mt-2 " style={{width:"200px"}}>
                            <PaystackButton className="btn btn-primary btn-md col-sm-12" {...componentProps} />
                        </div>
                    {/* paystack */}

                </form>
                {error && <span className='error-msg'>{error}</span>}
            </div>
        </>
    )
}
