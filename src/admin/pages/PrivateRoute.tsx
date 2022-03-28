import { Navigate } from 'react-router-dom';
import { getLocalstorage } from '../../ultils/localStorage'
type PrivateRouteProps = {
    children: JSX.Element;
}

const PrivateRoute = (props: PrivateRouteProps) => {
    if (getLocalstorage()) {
        const { user: { role } } = getLocalstorage();
        if (!role) {
            window.alert("Bạn không có quyền truy cập!")
            return <Navigate to='/' />
        }
    } else {
        window.alert("Bạn không có quyền truy cập!")
        return <Navigate to='/' />
    }
    return props.children;
}

export default PrivateRoute