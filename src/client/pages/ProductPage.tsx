import React from 'react'
import { Link } from 'react-router-dom'
import { ProductType } from '../../types/product'

type ProductPageProps = {
    products: ProductType[]
}

const ProductPage = ({ products }: ProductPageProps) => {
    return (
        <div>
            <div className="bg-red">hi</div>
            <div className="row">
                {products?.map((product, index) => {
                    return (
                        <div className="col-3 mt-2" key={index}>
                            <Link to={`/product/${product.id}`}>
                                <div className="card" >

                                    <img src={product.img} className="card-img-top mt-3" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="card-text">{product.price}</p>
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

export default ProductPage