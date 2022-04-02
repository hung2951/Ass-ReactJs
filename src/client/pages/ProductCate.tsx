import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { cateProduct } from '../../api/category'
import { ProductType } from '../../types/product'
import { formatPrice } from '../../ultils/FormatPrice'
import { CategoryType } from '../../types/category'
import Category from '../conponents/Category'

type ProductCateProps = {
    categories: CategoryType[]
}

const ProductCate = (props: ProductCateProps) => {
    const [product, setProduct] = useState<ProductType[]>([]);
    const { id } = useParams()
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await cateProduct(id)
            setProduct(data.products)

        }
        getProduct();

    }, [])
    return (
        <div className='flex w-full mt-3'>
            {<Category categories={props.categories} />}
            <div></div>
            <div className='grid grid-cols-3 mt-2 gap-4'>
                {product?.map((product, index) => {
                    return (
                        <div className="group " key={index}>
                            <Link to={`/product/${product._id}`} className="no-underline">
                                <div className="card overflow-hidden" >
                                    <img src={product.img} className="card-img-top mt-3 group-hover:scale-105 duration-300" alt="..." />
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

export default ProductCate