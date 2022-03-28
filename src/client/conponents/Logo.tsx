import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Logo = (props: Props) => {
    return (
        <div className='pt-4'>
            <Link to="/">
                <img src="http://static.ybox.vn/2020/2/0/1582473564897-Poly.png" width="120px" />
            </Link>
        </div>
    )
}

export default Logo