import React, { useEffect, useState } from 'react'
import { auth, db } from '../Config/Config'
import { Link, useHistory } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { Navbar } from './Navbar';
import PurchaseHistoryTab from './widget/PurchaseHistoryTab';

export const Profile =  ({ user }) => {
    const history = useHistory();
    const [loading, setloading] = useState(true)
    const [purchasHistory, setpurchasHistory] = useState([])
    const [err, setErr] = useState(null)
    const [id,setId] = useState([])

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            db.collection('Buyer-info ' + user.uid)
            .get().then((item) => {
                const itm = item.docs.map((doc) => doc.data())
                const ids = item.docs.map((doc) => doc.id)
                setId(ids)
                setpurchasHistory(itm)
                console.log("User Purchase history",itm)
                setloading(false)
            }).catch((e) => {
                setErr(e.message)
                setloading(false)
            })
            
        })
    },[])
    return (
        <>
            <div className='wrapper'>
                <Navbar user={user} />
                <div className=" row">
                    <div className="col-sm-12  text-center">
                        <h1>Purchase history</h1>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-sm-12 text-center">
                        {loading &&
                            <div class="spinner-border" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                        }
                       
                        <div className='container'>
                            <div className="row">
                                {purchasHistory &&
                                    purchasHistory
                                    .map((data,i) => <PurchaseHistoryTab data={data}/> )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
