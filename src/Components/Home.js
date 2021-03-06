import React, { useEffect } from 'react'
import { Navbar } from './Navbar';
import { Products } from './Products'
import { useHistory } from 'react-router-dom'
import { auth } from '../Config/Config'
import { HomePageBody } from './HomePageBody';
import Footer from './Footer';

export const Home = ({ user }) => {

    const history = useHistory();

    useEffect(() => {
        // forcing user to signup
        auth.onAuthStateChanged(user => {
            if (!user) {
                history.push('/browse');
            }
        })
    })

    return (
        <div className='wrapper'>
            <Navbar user={user} />
            <HomePageBody />
            {/* <Products /> */}
        </div>
    )
}
