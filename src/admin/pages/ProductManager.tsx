import React from 'react'
import { Link } from 'react-router-dom';
import { ProductType } from '../../types/product'

type ProductManagerProps = {
    products: ProductType[];
    onRemove: (_id: number) => void
}

const ProductManager = ({ products, onRemove }: ProductManagerProps) => {
    return (
        <div>
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
                    {products?.map((item, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td className="flex"> <img src={item.img} alt="" width={100} />{item.name}</td>
                                <td>{item.price}</td>
                                <td>
                                    <Link to={`/admin/product/edit/${item._id}`}>Edit</Link>
                                    <button onClick={() => onRemove(item._id)}>Remove</button>
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