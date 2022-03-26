import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../conponents/Footer';
import Header from '../conponents/Header';

type Props = {}

const Client = (props: Props) => {
    return (
        <div className='container'>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Client;