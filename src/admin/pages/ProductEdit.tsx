import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { getOne } from '../../api/product'
import { CategoryType } from '../../types/category'
import { ProductType } from '../../types/product'

type ProductEditProps = {
    onEdit: (product: ProductType) => void,
    categories: CategoryType[]
}
type FormInputs = {
    name: string,
    price: number,
    img: string,
    category: string
}
const ProductEdit = (props: ProductEditProps) => {
    const { id } = useParams();
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await getOne(id);
            console.log(data);
            reset(data)
        }
        getProduct();
    }, [])
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<FormInputs> = data => {
        props.onEdit(data);
        navigate('/admin/product')
    }
    return (
        <div>
            <h2 className='text-center'>Sửa sản phẩm</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Tên sản phẩm</label>
                    <input type="text" {...register('name', { required: true })} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    {errors.name && <div id="emailHelp" className="form-text">Không được để trống!</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Giá</label>
                    <input type="text" {...register('price', { required: true })} className="form-control" id="exampleInputPassword1" />
                    {errors.price && <div id="emailHelp" className="form-text">Không được để trống!</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Ảnh</label>
                    <input type="text" {...register('img', { required: true })} className="form-control" id="exampleInputPassword1" />
                    {errors.img && <div id="emailHelp" className="form-text">Không được để trống!</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Danh mục</label>
                    <select {...register('category')} className='w-full border border-black rounded-md h-10'>
                        {props.categories?.map(item => <option value={item._id}>{item.name}</option>)}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

    )
}

export default ProductEdit