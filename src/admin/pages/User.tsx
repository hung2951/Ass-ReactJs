import React from 'react'
import { UserType } from '../../types/user'

type UserProps = {
    users: UserType[]
}

const User = ({ users }: UserProps) => {
    return (
        <div>
            <h2 className='text-center'>Danh sách tài khoản</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Họ và tên</th>
                        <th scope="col">Email</th>
                        <th scope="col">Vai trò</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.sort((a, b) => a.role! < b.role! ? 1 : -1).map((item, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td className="">{item.name}</td>
                                <td className="">{item.email}</td>
                                <td className="">{item.role == 1 ? "Quản trị" : "Người dùng"}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>

    )
}

export default User