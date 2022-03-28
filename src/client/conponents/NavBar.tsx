import React from 'react'
import { Link } from 'react-router-dom';

type Props = {}

const NavBar = (props: Props) => {
    return (
        <div className="mb-2 h-24">
            <ul className="leading-3 pt-2 mt-3 border-y border-gray-50 mx-auto flex relative w-[1200px] justify-around items-center rounded-lg text-white">
                <li className="group">
                    <Link to="" className='nav-bar no-underline'>
                        <p><i className="fas fa-mobile-alt" /></p>
                        <p >Điện thoại</p>
                    </Link>
                    <div className="grid grid-cols-2 mt-0 border-2 w-full absolute left-0 rounded-lg bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-3 transition-all decoration-slate-500">
                        <ul className="menu-item">
                            <li className="menu-item-title">Hãng sản xuất</li>
                            <div className="menu-item-info grid grid-cols-5 text-sm leading-8 ">
                                <li>Hi</li>
                            </div>
                        </ul>
                        <div className="py-8">
                            <a >
                                <img className="w-4/6 float-right pr-8" src="https://cdn.tgdd.vn/Files/2021/10/13/1390185/ip13-gbh-2_1280x720-800-resize.jpg" />
                            </a>
                        </div>
                    </div>
                </li>
                <li className="group">
                    <Link to="" className='nav-bar no-underline'>
                        <p><i className="fas fa-laptop" /></p>
                        <p>Laptop</p>
                    </Link>
                    <div className="grid grid-cols-2 mt-0 border-2 w-full absolute left-0 rounded-lg bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-3 transition-all decoration-slate-500">
                        <ul className="menu-item">
                            <li className="menu-item-title">Hãng sản xuất</li>
                            <div className="menu-item-info grid grid-cols-4 text-sm leading-8 ">
                                <li><Link to="">Hi</Link> </li>
                            </div>
                        </ul>
                        <div className="py-8">
                            <a >
                                <img className="w-4/6 float-right pr-8" src="https://macstores.vn/wp-content/uploads/2017/03/banner-macbook-air.jpg" />
                            </a>
                        </div>
                    </div>
                </li>
                <li className="group ">
                    <Link to="" className='nav-bar no-underline'>
                        <p><i className="fas fa-charging-station" /></p>
                        <p>Phụ kiện</p>
                    </Link>
                    <div className="pb-10 mt-0 border-2 w-full absolute left-0 rounded-lg bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-3 transition-all decoration-slate-500">
                        <ul className="menu-item">
                            <div className="menu-item-info grid grid-cols-4 text-sm leading-8 font-bold">
                                <li><Link to="">Hi</Link> </li>
                            </div>
                        </ul>
                    </div>
                </li>
                <li className="group">
                    <Link to="" className='nav-bar no-underline'>
                        <p><i className="fas fa-headphones-alt" /></p>
                        <p>Âm thanh</p>
                    </Link>
                    <div className="pb-10 grid grid-cols-2 mt-0 border-2 w-full absolute left-0 rounded-lg bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-3 transition-all decoration-slate-500">
                        <ul className="menu-item">
                            <div className="menu-item-info grid grid-cols-4 text-sm leading-8 font-bold">
                                <li><Link to="">Hi</Link> </li>
                            </div>
                        </ul>
                    </div>
                </li>
                <li className="group">
                    <Link to="" className='nav-bar no-underline'>
                        <p><i className="fas fa-sim-card" /></p>
                        <p>Sim thẻ</p>
                    </Link>
                </li>
                <li className="group">
                    <Link to="" className='nav-bar no-underline'>
                        <p><i className="fas fa-bolt" /></p>
                        <p>Flash sale</p>
                    </Link>
                    <div className="pb-10 grid grid-cols-2 mt-0 border-2 w-full absolute left-0 rounded-lg bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-3 transition-all decoration-slate-500">
                        <ul className="menu-item">
                            <li className="menu-item-title uppercase"><a >ưu đãi hot</a></li>
                            <div className="menu-item-info text-sm leading-8">
                                <li><Link to="">Hi</Link> </li>
                            </div>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>


    )
}

export default NavBar;