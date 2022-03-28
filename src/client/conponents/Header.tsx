import React from 'react'
import FormSearch from './FormSearch'
import NavBar from './NavBar'

type Props = {}

const Header = (props: Props) => {
    return (
        <div className="bg-[#5a5a5a] rounded-b-lg flex justify-evenly w-[1200px] m-auto mb-4 h-[90px]">
            <div className='pt-4'>
                <a href="/">
                    <img src="http://static.ybox.vn/2020/2/0/1582473564897-Poly.png" width="120px" />
                </a>
            </div>
            <form className="w-96 pt-4 flex" id="formSearch" action="/search">
                <input type="text" name="value" id="querySearch" className="w-[90%] h-10 pl-2" placeholder="Tìm kiếm sản phẩm..." />
                <input type="submit" id="btnSearch" defaultValue="Tìm kiếm" className="border-2 max-h-10 text-white px-3 hover:text-[#39ebd07a]" />
                {/* <button class="h-9"><a class="border-2"><i class="fas fa-search text-white"></i></a></button>  */}
            </form>
            <div className="phone-sp flex pt-2 border-r-2 px-10 max-h-[60px]">
                <p><i className="fas fa-phone-alt text-white px-3 pt-4 fa-2x" /></p>
                <div className="text-white">
                    <p>Hotline hỗ trợ</p>
                    <p className="text-xl">1900 999 111</p>
                </div>
            </div>
            <div className=" mt-3 text-white">
                <a href="/cart">
                    <p><i className="fas fa-cart-plus fa-2x pt-2 mx-auto" /></p>
                    <p className="text-sm text-center pt-1">Giỏ hàng</p></a><p><a href="/cart">
                    </a>
                </p></div>
            <div className="border-r-2 max-h-[60px] max-w-0 mt-3 mx-0" />
            <div className="pt-3 text-white w-24 relative ">
                <a href="/signin">
                    <p className="text-center"><i className="fas fa-user-circle fa-2x" /></p>
                    <p className="text-center hover:text-[#39ebd07a] duration-300">Đăng nhập</p>
                </a>
            </div>
        </div>

    )
}

export default Header