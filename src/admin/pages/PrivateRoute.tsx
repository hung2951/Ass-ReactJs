import React from 'react'
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
    children: JSX.Element;
}

const PrivateRoute = (props: PrivateRouteProps) => {
    const checkAuth = false;
    if (!checkAuth) {
        return <Navigate to='/login' />
    }
    return props.children;
}

export default PrivateRoute