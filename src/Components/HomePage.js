import React, { useEffect } from 'react'
import { Navbar } from './Navbar';
import { Products } from './Products'
import { useHistory } from 'react-router-dom'
import { auth } from '../Config/Config'
import Footer from './Footer';
import { HomePageBody } from './HomePageBody';
import Banner from './Banner';

export const HomePage = ({ user }) => {

    const history = useHistory();
    console.log("user dey ==",user)
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
            <HomePageBody />
        </div>
    )
}

