import { Link, useNavigate } from 'react-router-dom'
import FormSearch from './FormSearch'
import Logo from './Logo'
import NavBar from './NavBar'
import { getLocalstorage } from '../../ultils/localStorage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
type Props = {}

const Header = (props: Props) => {
    const navigate = useNavigate()
    const logOut = () => {
        localStorage.removeItem('user');
        toast.success("Đã đăng xuất");
        setTimeout(() => {
            navigate('/login')
        }, 1000);
    }
    return (
        <div className="bg-[#5a5a5a]">
            <div className='rounded-b-lg flex justify-evenly w-[1200px] m-auto h-[95px]'>
                {<Logo />}

                {<FormSearch />}

                <div className="phone-sp flex border-r-2 mt-3 px-10 max-h-[60px]">
                    <p><i className="fas fa-phone-alt text-white px-3 pt-3 fa-2x" /></p>
                    <div className="text-white leading-3">
                        <p>Hotline hỗ trợ</p>
                        <p className="text-xl">1900 999 111</p>
                    </div>
                </div>
                <Link to="/cart" className="mt-4 text-white">
                    <p><i className="fas fa-cart-plus fa-2x pt-2 mx-auto" /></p>
                </Link>
                <div className="border-r-2 max-h-[60px] max-w-0 mt-3 mx-0" />
                <div className="pt-3 text-white w-24 relative">
                    {getLocalstorage() ?
                        <div>
                            {getLocalstorage().user.role == 1 ?
                                <div className="dropdown">
                                    <button className="dropbtn"><i className="fas fa-user-circle fa-2x" /><p>{getLocalstorage().user.name}</p></button>
                                    <div className="dropdown-content">
                                        <Link to="/admin">Admin</Link>
                                        <Link to="#" onClick={() => logOut()}>Đăng xuất</Link>
                                    </div>
                                </div>
                                : <div className="dropdown duration-300">
                                    <button className="dropbtn"><i className="fas fa-user-circle fa-2x" /><p>{getLocalstorage().user.name}</p></button>
                                    <div className="dropdown-content">
                                        <Link to="#" onClick={() => logOut()}>Đăng xuất</Link>
                                    </div>
                                </div>

                            }
                        </div>
                        : <Link to="/login" className='text-white no-underline leading-3'>
                            <p className="text-center"><i className="fas fa-user-circle fa-2x" /></p>
                            <p className="text-center hover:text-[#39ebd07a] duration-300">Đăng nhập</p>
                        </Link>
                    }

                </div>
            </div>
            <NavBar />
            <ToastContainer />
        </div >

    )
}

export default Header