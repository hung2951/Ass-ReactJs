import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { signup } from '../../api/user'

type Props = {}
type FormInputs = {
    name: string,
    email: string,
    password: string,
    role: number
}
const SignUp = (props: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<FormInputs> = data => {
        signup(data)
            .then(res => {
                window.alert("Đăng ký thành công");
                navigate('/login')
            })
            .catch(res => window.alert("tài khoản đã tồn tại!"))
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className='text-center mt-5 w-40'>Đăng ký</h2>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Họ và Tên</label>
                <input type="text"{...register('name', { required: true })} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                {errors.name && <div id="emailHelp" className="form-text">Không được để trống!</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email"{...register('email', { required: true })} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                {errors.email && <div id="emailHelp" className="form-text">Không được để trống!</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password"{...register('password', { required: true })} className="form-control" id="exampleInputPassword1" />
                {errors.password && <div id="emailHelp" className="form-text">Không được để trống!</div>}
            </div>

            <div hidden>
                <input type="radio" value={0} {...register('role')} checked /> Người dùng
                <input type="radio" value={1}  {...register('role')} />Quản trị
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>

    )
}

export default SignUp