import React from 'react'

type Props = {}

const NavBar = (props: Props) => {
    return (

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Trang chủ</a>
            </li>
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/product">Sản phẩm</a>
            </li>
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/admin">Admin</a>
            </li>

        </ul>

    )
}

export default NavBar;