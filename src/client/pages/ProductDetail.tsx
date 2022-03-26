import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOne } from '../../api/product';
import { ProductType } from '../../types/product';

type Props = {}

const ProductDetail = (props: Props) => {
    const { id } = useParams();
    const [product, setProduct] = useState<ProductType[]>([]);
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await getOne(id);
            setProduct(data);
        }
        getProduct();
    }, [])
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={product.img} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail