import { Link } from 'react-router-dom'
import { ProductType } from '../../types/product'

type HomePageProps = {
    products: ProductType[]
}

const HomePage = ({ products }: HomePageProps) => {
    return (
        <div>
            <div className="banner">
                <img src="https://caodang.fpt.edu.vn/wp-content/uploads/Banner1-1.png" width={1200} />
            </div>
            <div className='flex w-full mt-3'>
                <div className='w-2/3 shadow-2xl rounded-md mr-5 '>
                    <p className='text-center pt-4 font-bold text-xl'>Danh mục</p>
                    <div>
                        <Link to="" className='text-black no-underline'>
                            <label className="border-b w-11/12 ml-3 border-gray-400 py-2 pl-2 hover:bg-gray-600 hover:rounded-md hover:border-0 hover:text-white duration-200">
                                Danh mục 1
                            </label>
                        </Link>


                    </div>

                </div>
                <div className='grid grid-cols-3 mt-2 gap-4'>
                    {products?.map((product, index) => {
                        return (
                            <div className="" key={index}>
                                <Link to={`/product/${product._id}`} className="no-underline">
                                    <div className="card" >
                                        <img src={product.img} className="card-img-top mt-3" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{product.name}</h5>
                                            <p className="card-text">{product.price}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default HomePage