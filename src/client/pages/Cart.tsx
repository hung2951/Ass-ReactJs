import React from 'react'
import { formatPrice } from '../../ultils/FormatPrice'
type Props = {
    onIncrease: (id: number) => void,
    onDecrease: (id: number) => void,
    onRemoveCart: (id: number) => void
}

const Cart = (props: Props) => {
    let cart: any = [];
    cart = JSON.parse(localStorage.getItem('cart') as string);
    let tong = 0;
    return (
        <div>
            <h3 className='text-center py-3'>Giỏ hàng của bạn</h3>
            <table className="table ">
                <thead>
                    <tr className='text-center'>
                        <th scope="col">#</th>
                        <th scope="col">Sản phẩm</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Giá</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {cart?.map((item, index) => {
                        return (
                            <tr key={index + 1}>
                                <th scope="row">{index + 1}</th>
                                <td>
                                    <img src={item.img} width={100} className="inline" />{item.name}
                                </td>
                                <td className='text-center'>
                                    <button onClick={() => props.onDecrease(item._id)} className='text-xl pr-2'>-</button>
                                    {item.quantity}
                                    <button onClick={() => props.onIncrease(item._id)} className='text-xl pl-2'>+</button></td>
                                <td className='text-red-600 font-bold text-center'>{formatPrice(`${item.price * item.quantity}`)} <u>đ</u></td>
                                <td><button className='hover:underline' onClick={() => props.onRemoveCart(item._id)}>xóa</button></td>
                                <td hidden>{tong += item.price * item.quantity}</td>
                            </tr>
                        )
                    })}

                </tbody>
                <tfoot>
                    <tr className='text-center'>
                        <td colSpan={3} className='font-bold'>Tổng:</td>
                        <td className='text-red-600 font-bold text-xl'>{formatPrice(`${tong}`)} <u>đ</u></td>
                    </tr>
                </tfoot>
            </table>

        </div>
    )
}

export default Cart