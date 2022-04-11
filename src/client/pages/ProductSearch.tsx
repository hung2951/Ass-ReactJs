import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { formatPrice } from '../../ultils/FormatPrice'
import { ProductType } from '../../types/product'
import { search } from '../../api/product';

type Props = {

}

const ProductSearch = (props: Props) => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [products, setProducts] = useState<ProductType[]>([])

    useEffect(() => {
        const searchProduct = async () => {
            const { data } = await search(searchParams.get("q"))
            setProducts(data);

        }
        searchProduct();
    }, [searchParams])
    return (
        <div>
            <h2 className='text-center py-3'>Sản phẩm tìm kiếm với từ khóa "{searchParams.get("q")}"</h2>
            <div className='grid grid-cols-4 mt-2 gap-4'>
                {products.map((product, index) => {
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