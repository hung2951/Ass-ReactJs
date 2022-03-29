import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../conponents/Header'
import NavBar from '../conponents/NavBar'

type Props = {}

const Admin = (props: Props) => {
    return (
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900" >
            {/* Desktop sidebar */}
            <NavBar />
            <div className="flex flex-col flex-1 w-full">
                {/* Header*/}
                <Header />
                <main className="h-full overflow-y-auto">
                    <div className="container px-6 mx-auto grid">
                        <div className="my-6 font-semibold text-gray-700 dark:text-gray-200">
                            <Outlet />
                        </div>
                    </div>
                </main>
            </div>
        </div>

    )
}

export default Admin