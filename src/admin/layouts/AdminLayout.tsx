import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const Admin = (props: Props) => {
    return (
        <div>
            <header className='text-center'>
                Admin
            </header>
            <div className="row">
                <div className="col-3">
                    <aside>
                        <a href="/admin/product/add">Thêm sản phẩm</a> <br />
                        <a href="/admin/product">Danh sách sản phẩm</a>
                    </aside>
                </div>
                <div className="col-6">
                    <main>
                        <Outlet />
                    </main>
                </div>

            </div>
        </div>
    )
}

export default Admin