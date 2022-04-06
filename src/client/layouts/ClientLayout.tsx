import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../conponents/Footer';
import Header from '../conponents/Header';

type Props = {
    searchProduct: (keyword: string) => void
}

const Client = (props: Props) => {
    return (
        <div className=''>
            <Header search={props.searchProduct} />
            <main className='w-[1200px] mx-auto'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Client;