import { Link } from 'react-router-dom'
import { CategoryType } from '../../types/category'
import { ProductType } from '../../types/product'
import Category from '../conponents/Category'
import SlideShow from '../conponents/SlideShow'
import { formatPrice } from '../../ultils/FormatPrice'
type HomePageProps = {
    products: ProductType[],
    categories: CategoryType[]
}

const HomePage = (props: HomePageProps) => {
    return (
        <div>
            {/* <div className="banner">
                <img src="http://didongvang.com/files/assets/banner01.jpg" width={1200} />
            </div> */}
            {<SlideShow />}
            <div className='flex w-full mt-3'>
                {<Category categories={props.categories} />}
                <div className='grid grid-cols-3 mt-2 gap-4'>
                    {props.products?.map((product, index) => {
                        return (
                            <div className="group " key={index}>
                                <Link to={`/product/${product._id}`} className="no-underline">
                                    <div className="card overflow-hidden" >
                                        <img src={product.img} className="card-img-top mt-3 group-hover:scale-105 duration-300" />
                                        <div className="card-body text-center">
                                            <h5 className="card-title text-lg text-black">{product.name}</h5>
                                            <p className="card-text text-xl text-red-600 font-bold"> {formatPrice(`${product.price}`)} <u>đ</u></p>
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