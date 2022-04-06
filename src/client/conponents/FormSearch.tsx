import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { search } from '../../api/product'
type Props = {
    onSearch: (keyword: string) => void
}
type FormInputs = {
    q: string
}
const FormSearch = (props: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<FormInputs> = data => {
        props.onSearch(data.q)
        navigate(`/search?q=${data.q}`)
        // navigate('/admin/product');
        // console.log(data);

        // const { data: keyword } = await search(data.q)
        // console.log(keyword);
    }
    return (
        <form className="w-96 pt-4 flex" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("q")} className="w-[90%] h-10 pl-2" placeholder="Tìm kiếm sản phẩm..." />
            <input type="submit" value="Tìm kiếm" className="border-2 max-h-10 text-white px-3 hover:text-[#39ebd07a]" />
            {/* <button>Tìm kiếm</button> */}
        </form>
    )
}

export default FormSearch