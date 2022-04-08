import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { CategoryType } from '../../types/category'
type CategoryProps = {
    onAddCate: (category: CategoryType) => void;
    categories: CategoryType[],
    onRemoveCate: (_id: number) => void
}
type FormInputs = {
    name: string,
}
const Category = (props: CategoryProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        props.onAddCate(data);
        navigate('/admin/category');
    }
    return (
        <div>
            <h2 className='text-center'>Danh mục</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="w-4/6 mx-auto ">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Tên danh mục</label>
                    <input type="text" {...register('name', { required: true })} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    {errors.name && <div id="emailHelp" className="form-text">Không được để trống!</div>}
                </div>
                <button type="submit" className="btn btn-primary">Thêm</button>
            </form>
            <div className='border-b border-black py-2'></div>
            <div>
                <table className="table">
                    <tbody>
                        {props.categories?.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td className="flex">{item.name}</td>
                                    <td>
                                        <button onClick={() => props.onRemoveCate(item._id)} className='hover:underline'>remove</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Category