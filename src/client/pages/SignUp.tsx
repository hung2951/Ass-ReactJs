import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { signup } from '../../api/user'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        console.log(data);

        signup(data)
            .then(res => {
                toast.success("Đăng ký thành công, vui lòng đợi vài giây!");
                setTimeout(function () {
                    navigate('/login')
                }, 2000)

            })
            .catch(res => toast.error("Tài khoản đã tồn tại!"))
    }
    return (
        <div className="bg-[url('https://stockdep.net/files/images/31496568.jpg')]">
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 ">
                {/* Replace with your content */}
                <div className="px-4 pt-6 sm:px-0">
                    <div className="min-h-full grid grid-cols-2 px-4 sm:px-6 lg:px-8">
                        <div>
                            <img src="https://picsum.photos/700/800" />
                        </div>
                        <div className="w-full space-y-8 bg-white bg-opacity-50">
                            <form className="max-w-sm space-y-6 mx-auto pt-10 " onSubmit={handleSubmit(onSubmit)}>
                                <div className="rounded-md shadow-sm -space-y-px">
                                    <div className="text-center text-xl font-bold">
                                        Tạo tài khoản
                                    </div>
                                    <div className="">
                                        <label htmlFor="username" className="pl-1 font-bold text-[#1a1a1a]">Họ tên:</label>
                                        <input {...register('name')} type="text" className="border border-[#ccc] block w-full pl-2 h-10 rounded-sm my-2" placeholder="Họ và tên" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="pl-1  font-bold text-[#1a1a1a]">Địa chỉ email:</label>
                                        <input {...register('email')} type="email" required className="border border-[#ccc] block w-full pl-2 h-10 rounded-sm my-2" placeholder="Địa chỉ email" />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="pl-1  font-bold text-[#1a1a1a]">Mật khẩu:</label>
                                        <input {...register('password')} type="password" required className="border border-[#ccc] block w-full pl-2 h-10 rounded-sm my-2" placeholder="Mật khẩu" />
                                    </div>
                                    <div>
                                        <label htmlFor="rePassword" className="pl-1  font-bold text-[#1a1a1a]">Nhập lại mật khẩu:</label>
                                        <input type="password" className="border border-[#ccc] block w-full pl-2 h-10 rounded-sm my-2" placeholder="Nhập lại mật khẩu" />
                                    </div>
                                </div>
                                <div className="hidden justify-evenly ">
                                    <label><input type="radio"{...register('role')} defaultValue={0} defaultChecked /> Khách hàng</label>
                                    <label> <input type="radio"{...register('role')} defaultValue={1} /> Quản trị</label>
                                </div>
                                <div>
                                    <p id="checkUser" className="text-red-600 mb-5 mt-0" />
                                    <button className="mt-5 bg-[#111b27] text-white w-40 h-10 border-4 bg-opacity-80 border-white">
                                        Đăng ký
                                    </button>
                                    <div className="text-center pt-5">
                                        <p>Bạn đã có tài khoản?<Link to="/login" className="text-[#075549]"> Đăng nhập</Link></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* /End replace */}
                </div>
            </div>
            <ToastContainer />
        </div>


    )
}

export default SignUp