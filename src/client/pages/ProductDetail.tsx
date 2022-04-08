import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOne } from '../../api/product';
import { ProductType } from '../../types/product';
import { formatPrice } from '../../ultils/FormatPrice'
type Props = {
    onAddToCart: (id: number) => void
}

const ProductDetail = (props: Props) => {
    const { id } = useParams();
    const [product, setProduct] = useState<ProductType[]>([]);
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await getOne(id);
            setProduct(data);
        }
        getProduct();
    }, [])
    return (
        <div className="shadow-xl rounded-md">
            <div className="detail w-[1200px] mx-auto mt-5 bg-white rounded-lg px-5 pt-5 pb-10">
                <div className="border-b pb-3 font-bold text-3xl capitalize">
                    <p>{product.name}</p>
                </div>
                <div className="grid grid-cols-2 gap-5 pt-5">
                    <div>
                        <img className="w-[500px] mx-auto" src={product.img} />
                    </div>
                    <div>
                        <div className="price font-bold text-red-600 text-3xl">
                            {formatPrice(`${product.price}`)} <u>đ</u>
                        </div>
                        <div className="flex pt-4">
                            <label className="w-full text-center bg-[#f8f9fa] rounded-sm shadow-lg border border-white hover:bg-[#edeeef]">
                                <input type="radio" defaultValue="128gb" name="dungLuong" className="w-[15px]" defaultChecked /><span>128GB</span>
                                <p>27.000.000 <u>đ</u></p>
                            </label>
                            <label className="rounded-sm w-full text-center bg-[#f8f9fa] shadow-lg border border-white hover:bg-[#edeeef]">
                                <input type="radio" defaultValue="128gb" name="dungLuong" className="w-[15px]" /> <span>128GB</span>
                                <p>27.000.000 <u>đ</u></p>
                            </label>
                            <label className="rounded-sm w-full text-center bg-[#f8f9fa] shadow-lg border border-white hover:bg-[#edeeef]">
                                <input type="radio" defaultValue="128gb" name="dungLuong" className="w-[15px]" /> <span>128GB</span>
                                <p>27.000.000 <u>đ</u></p>
                            </label>
                        </div>
                        <div className="mt-10 border-b border-[#ccc] pb-4">
                            <h2 className="uppercase text-xl font-bold text-red-600">hỗ trợ thu mua lại máy cũ giá cao lên đời máy mới</h2>
                            <h2 className="uppercase text-xl font-bold text-stone-700">khuyễn mãi:</h2>
                            <div className="leading-8">
                                <p><i className="fas fa-check text-[#008000]" /> <span className="text-red-600 font-bold">Tặng 100.000 <u>đ</u></span> cho sinh viên( Yêu cầu mang thẻ sinh
                                    viên ).</p>
                                <p><i className="fas fa-check text-[#008000]" /> <span className="text-red-600 font-bold">Tặng 200.000 <u>đ</u></span> khi mua 2 sản phẩm trở lên.</p>
                                <p><i className="fas fa-check text-[#008000]" /> <span className="text-red-600 font-bold">Tặng 100.000 <u>đ</u></span> khi là khách hàng đầu tiên.
                                </p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h2 className="uppercase font-bold text-xl text-stone-700">Bảo hành:</h2>
                            <p><span className="text-red-600 font-bold text-xl">*</span> Gói bảo hành mở rộng lên đến 24 tháng, hỗ trợ bảo
                                hành theo chính sách tại trị trường Việt Nam.</p>
                            <p><span className="text-red-600 font-bold text-xl">*</span> Phần mềm: Hỗ trợ trọn đời</p>
                            <p><span className="text-red-600 font-bold text-xl">*</span> Gói bảo hành phần cứng [<span className="text-blue-500">
                                <a >Xem tại đây</a> </span>]</p>
                        </div>
                        <div className="mt-5 grid grid-cols-2 gap-1 text-center">
                            <button onClick={() => props.onAddToCart(product._id)} className="h-14 bg-red-600 hover:bg-red-700 text-white rounded-sm leading-10 uppercase font-bold"><a>Mua ngay</a></button>
                            <button className="h-14 bg-[#f28902] hover:bg-[#f29202f5] text-white rounded-sm leading-10 uppercase font-bold"><a>Mua trả góp 0%</a></button>
                        </div>
                    </div>
                </div>
                <div className="border-t border-[#ccc] mt-5">
                    <div className="font-bold text-xl pt-5">Bình luận về {product.name}</div>
                    <form className="flex relative">
                        <textarea className="border border-[#ccc] rounded-sm w-full mt-4 h-24 pl-2 pr-40" placeholder="Nhập bình luận của bạn..." />
                        <button className="text-white absolute top-10 right-3 bg-red-600 rounded-md h-10 px-3 hover:bg-red-700"><a >Gửi bình luận</a></button>
                    </form>
                    <div className="mt-5 flex">
                        <i className="fas fa-user-circle fa-3x text-[#8f8f8f]" />
                        <div className="pl-3">
                            <p className="font-bold">Nguyễn Văn A</p>
                            <p className="text-sm text-[#929292] pt-1 pb-2">12/2/2022</p>
                            <p>Đây là bình luận</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default ProductDetail