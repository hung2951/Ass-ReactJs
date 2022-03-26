import React from 'react'
import FormSearch from './FormSearch'
import NavBar from './NavBar'

type Props = {}

const Header = (props: Props) => {
    return (
        <header className="mb-1 mt-1">
            <div className="logo text-center mb-1">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/FPT_Polytechnic.png" width={150} alt="" />
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <NavBar />
                        <FormSearch />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header