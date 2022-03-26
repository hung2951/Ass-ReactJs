import React from 'react'
import { Link } from 'react-router-dom'
import { ProductType } from '../../types/product'

type HomePageProps = {
    products: ProductType[]
}

const HomePage = ({ products }: HomePageProps) => {
    return (
        <div>
            <div className="bg-red">hi</div>
            <div className="row">
                <div className="banner">
                    <img src="https://caodang.fpt.edu.vn/wp-content/uploads/Banner1-1.png" width={1200} />
                </div>
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

export default HomePage