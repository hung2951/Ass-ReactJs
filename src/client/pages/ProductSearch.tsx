import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { formatPrice } from '../../ultils/FormatPrice'
import { ProductType } from '../../types/product'

type Props = {
    products: ProductType[],
    keyword: string,
}

const ProductSearch = (props: Props) => {
    console.log(props.keyword);

    return (
        <div>
            <h2 className='text-center py-3'>Sản phẩm tìm kiếm với từ khóa "{props.keyword}" </h2>
            <div className='grid grid-cols-4 mt-2 gap-4'>
                {props.products.map((product, index) => {
                    return (
                        <div className="group " key={index}>
                            <Link to={`/product/${product._id}`} className="no-underline">
                                <div className="card overflow-hidden" >
                                    <img src={product.img} className="card-img-top mt-3 group-hover:scale-105 duration-300" />
                                    <div className="card-body text-center">
                                        <h5 className="card-title text-lg text-black">{product.name}</h5>
                                        <p className="card-text text-xl text-red-600 font-bold"> {formatPrice(`${product.price}`)} <u>đ</u></p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductSearch