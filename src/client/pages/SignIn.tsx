import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { getUser, signin } from '../../api/user'
import { addLocalstorage, getLocalstorage } from '../../ultils/localStorage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
type Props = {}
type FormInputs = {
    email: string,
    password: string
}
const SignIn = (props: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormInputs> = async data => {

        try {
            const { data: user } = await signin(data)
            addLocalstorage(user, () => {
                if (getLocalstorage().user.role == 1) {
                    toast.success("Đăng nhập thành công");
                    setTimeout(function () {
                        navigate('/admin')
                    }, 2000)
                }
                else {
                    toast.success("Đăng nhập thành công");
                    setTimeout(function () {
                        navigate('/')
                    }, 2000)
                }
            })
        } catch (error) {
            toast.error("Tài khoản hoặc mật khẩu không chính xác!")

        }

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
                            <form className="max-w-sm space-y-6 mx-auto pt-20 " onSubmit={handleSubmit(onSubmit)}>
                                <div className="rounded-md shadow-sm -space-y-px">
                                    <div className="text-center text-2xl font-bold">
                                        Đăng nhập
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="pl-1 font-bold text-[#1a1a1a]">Địa chỉ email:</label>
                                        <input id="email" {...register('email')} name="email" type="email" className="border border-[#ccc] block w-full pl-2 h-10 rounded-sm my-2" placeholder="Địa chỉ email" />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="pl-1 font-bold text-[#1a1a1a]">Mật khẩu:</label>
                                        <input id="password" {...register('password')} name="password" type="password" className="border border-[#ccc] block w-full pl-2 h-10 rounded-sm my-2" placeholder="Mật khẩu" />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-[#075549] focus:ring-[#075549] border-gray-300 rounded" />
                                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                            Nhớ mật khẩu
                                        </label>
                                    </div>
                                    <div className="text-sm">
                                        <a href="forgotpass" className="font-medium text-[#092521] hover:text-[#075549]">
                                            Quên mật khẩu?
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <p id="checkUser" className="text-red-600 mb-5 mt-0" />
                                    <button className="mt-5 bg-[#111b27] text-white w-40 h-10 border-4 bg-opacity-80 border-white">
                                        Đăng nhập
                                    </button>
                                    <div className="text-center pt-5">
                                        <p>Bạn chưa có tài khoản?<Link to="/signup" className="text-[#075549]"> Đăng ký</Link></p>
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

export default SignIn