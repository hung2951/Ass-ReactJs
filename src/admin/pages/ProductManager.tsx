import React from 'react'
import { Link } from 'react-router-dom';
import { ProductType } from '../../types/product'

type ProductManagerProps = {
    products: ProductType[];
    onRemove: (id: number) => void
}

const ProductManager = ({ products, onRemove }: ProductManagerProps) => {
    return (
        <div>
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
                                <td className="flex">{item.name} <img src={item.img} alt="" width={100} /></td>
                                <td>{item.price}</td>
                                <td>
                                    <Link to={`/admin/product/edit/${item.id}`}>Edit</Link>
                                    <button onClick={() => onRemove(item.id)}>Remove</button>
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