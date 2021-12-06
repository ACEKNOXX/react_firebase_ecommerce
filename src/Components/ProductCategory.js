import React, { useEffect } from 'react'
import { Navbar } from './Navbar';
import { useHistory } from 'react-router-dom'
import { auth } from '../Config/Config'
import CaterogoryBody from './widget/CaterogoryBody';


export const ProductCategory = ({user}) => {
    const history = useHistory();
    
    useEffect(() => {
        // forcing user to signup
        // auth.onAuthStateChanged(user => {
        //     if (!user) {
        //         history.push('/lon');
        //     }
        // })
    })

    return (
        <div className='wrapper'>
            <Navbar user={user} />
            <section id="product" className="product-area pt-50">
                <div className="container">
                    <div className="row">
                        
                    </div>
                </div>
            </section>
        
            <CaterogoryBody />
        </div>
    )
}

