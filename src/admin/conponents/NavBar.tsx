import React from 'react'
import { Link, NavLink } from 'react-router-dom'

type Props = {}

const NavBar = (props: Props) => {
    return (
        <aside className="z-20 flex-shrink-0 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block">
            <div className="py-4 text-gray-500 dark:text-gray-400">
                <Link to="/">
                    <img className='mx-auto mb-5' src="http://static.ybox.vn/2020/2/0/1582473564897-Poly.png" width="150px" />
                </Link>
                <ul className="pt-10">
                    <li className="relative px-6">
                        <NavLink to="/admin/" className={({ isActive }) => (isActive ? "text-blue-700 no-underline" : "no-underline text-black")}>
                            <div className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                <svg className="w-5 h-5" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                <span className="ml-4">Dashboard</span>
                            </div>

                        </NavLink>
                    </li>
                </ul>
                <ul>
                    <li className="relative px-6 py-3">
                        <NavLink to="/admin/category" className={({ isActive }) => (isActive ? "text-blue-700 no-underline" : "no-underline text-black")}>
                            <div className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" >
                                <svg className="w-5 h-5" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                                <span className="ml-4">Category</span>
                            </div>

                        </NavLink>
                    </li>
                    <li className="relative px-6 py-3">
                        <NavLink to="/admin/product" className={({ isActive }) => (isActive ? "text-blue-700 no-underline" : "no-underline text-black")}>
                            <div className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                <svg className="w-5 h-5" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                                <span className="ml-4">Product</span>
                            </div>

                        </NavLink>
                    </li>
                    <li className="relative px-6 py-3">
                        <NavLink to="/admin/user" className={({ isActive }) => (isActive ? "text-blue-700 no-underline" : "no-underline text-black")}>
                            <div className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                <svg className="w-5 h-5" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                                <span className="ml-4">User</span>
                            </div>
                        </NavLink>
                    </li>
                    <li className="relative px-6 py-3">
                        <NavLink to="/admin/slide-show" className={({ isActive }) => (isActive ? "text-blue-700 no-underline" : "no-underline text-black")}>
                            <div className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                <svg className="w-5 h-5" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                </svg>
                                <span className="ml-4">Slide Show</span>
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </aside>

    )
}

export default NavBar