import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { getUser, signin } from '../../api/user'

type Props = {}
type FormInputs = {
    email: string,
    password: string
}
const SignIn = (props: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        signin(data)
            .then(res => {
                const user = getUser(data.email);
                console.log(user);
                // localStorage.setItem('user', JSON.stringify(user));
            })
            .catch(res => {
                window.alert("Tài khoản mật khẩu không chính xác")
            })

    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className='text-center mt-5'>Đăng nhập</h2>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" {...register('email', { required: true })} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                {errors.email && <div id="emailHelp" className="form-text">Vui lòng nhập tài khoản!</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" {...register('password', { required: true })} className="form-control" id="exampleInputPassword1" />
                {errors.password && <div id="emailHelp" className="form-text">Vui lòng nhập mật khẩu!</div>}
            </div>
            <div className='checkUser'></div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>

    )
}

export default SignIn