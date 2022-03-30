import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { CategoryType } from '../../types/category'
import { ProductType } from '../../types/product'
type ProductAddProps = {
    onAdd: (product: ProductType) => void,
    categories: CategoryType[],
}
type FormInputs = {
    name: string,
    price: number,
    img: string,
    category: string,
    desc: string
}
const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        props.onAdd(data);
        navigate('/admin/product');

    }

    return (
        <div>
            <h2 className='text-center mb-2'>Thêm sản phẩm</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="w-4/6 mx-auto">
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

                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Mô tả</label>
                    <textarea  {...register('desc', { required: true })} className="form-control" id="exampleInputPassword1" />
                    {errors.desc && <div id="emailHelp" className="form-text">Không được để trống!</div>}
                </div>
                <button type="submit" className="btn btn-primary">Thêm</button>
            </form>
        </div>
    )
}

export default ProductAdd