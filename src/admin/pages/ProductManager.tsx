import React from 'react'
import { Link } from 'react-router-dom';
import { ProductType } from '../../types/product'
import { formatPrice } from '../../ultils/FormatPrice'

type ProductManagerProps = {
    products: ProductType[];
    onRemove: (id: number) => void
}

const ProductManager = ({ products, onRemove }: ProductManagerProps) => {
    return (
        <div>
            <h2 className='text-center'>Danh sách sản phẩm</h2>
            <button type="button" className="inline-flex float-right items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <Link to="/admin/product/add" className='no-underline text-white'>Thêm mới</Link>
            </button>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Sản phẩm</th>
                        <th scope="col">Giá</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {products?.sort((a, b) => a.price > b.price ? 1 : -1).map((item, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td className="flex"> <img src={item.img} alt="" width={100} />{item.name}</td>
                                <td className='text-red-700'>{formatPrice(`${item.price}`)} <u>đ</u></td>
                                <td>
                                    <Link to={`/admin/product/edit/${item._id}`} className='px-3 no-underline text-blue-600 hover:text-blue-900'>Edit</Link>
                                    <button onClick={() => onRemove(item._id)} className='text-red-600 hover:text-red-800'>Remove</button>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>

        </div>
    )
}

export default ProductManager