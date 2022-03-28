import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (

        <div className='mt-5'>
            <div className="bg-white rounded-lg flex justify-around mx-auto w-[1200px]">
                <div className="flex my-5">
                    <p className="text-[#0b8d5d] "><i className="fas fa-check-double fa-3x" /></p>
                    <p className="block pl-4 text-sm">Sản phẩm <br /><span className="font-bold text-xl uppercase">chính hãng</span></p>
                </div>
                <div className="flex my-5">
                    <p className="text-[#0b8d5d] "><i className="fas fa-truck fa-3x" /></p>
                    <p className="block pl-4 text-sm">Miễn phí vận chuyển <br /><span className="font-bold text-xl uppercase">toàn quốc</span></p>
                </div>
                <div className="flex my-5">
                    <p className="text-[#0b8d5d] "><i className="fas fa-phone-alt fa-3x" /></p>
                    <p className="block pl-4 text-sm">Hotline hỗ trợ <br /><span className="font-bold text-xl uppercase">1900.999.111</span></p>
                </div>
            </div>
            <footer className="w-full bg-[#5a5a5a]">
                <div className="flex px-10 rounded-lg text-white py-5 mx-auto w-[1200px]">
                    <div className="info-sp flex-1">
                        <h3>Thông tin hỗ trợ</h3>
                        <div id="border" />
                        <p><a >Chính sách bảo hành</a></p>
                        <p><a >Chính sách bảo hành iphone - ipad</a></p>
                        <p><a >Chính sách mua hàng online</a></p>
                        <p><a >Mua hàng trả góp</a></p>
                        <p><a >Chính sách bảo mật thông tin khách hàng</a></p>
                    </div>
                    <div className="info-ht flex-1">
                        <h3>Thông tin liên lạc</h3>
                        <div id="border" />
                        <div>
                            <p><a >Hotline bán hàng:</a></p>
                            <p id="phone"><a >0989 08 9832</a></p>
                            <p id="phone"><a >1900 927 328</a></p>
                        </div>
                        <a >
                            <p>Hotline bảo hành, kỹ thuật:</p>
                        </a><p id="phone"><a /><a >1900 927 928</a></p>
                        <a >
                            <p>Hotline hỗ trợ phần mềm:</p>
                        </a><p id="phone"><a /><a >1900 027 218</a></p>
                        <a >
                            <p>Hotline phản ánh chất lượng dịch vụ:</p>
                        </a><p id="phone" className="text-red-700 font-bold"><a /><a >1900 999 111</a></p>
                    </div>
                    <div className="address flex-1">
                        <h3>Hệ thống cửa hàng</h3>
                        <div id="border" />
                        <p><i className="fas fa-map-marker-alt" /><span> 111 Trịnh Văn Bô, Quận Nam Từ Liêm, Hà Nội</span></p>
                        <p><i className="fas fa-map-marker-alt" /><span> 123 Trần Đăng Ninh, Cầu Giấy, Hà Nội:</span></p>
                    </div>
                    <div className="pay flex-1">
                        <h3>Phương thức thanh toán</h3>
                        <div id="border" />
                        <img src="https://hcm.clickbuy.com.vn/assets/home/image_visa.svg" />
                        <img className="rounded-xl" src="https://hcm.clickbuy.com.vn/assets/home/image_bank.jpg" />
                    </div>
                </div>
            </footer>
        </div>


    )
}

export default Footer