import { Link } from 'react-router-dom'
import { CategoryType } from '../../types/category'
import { ProductType } from '../../types/product'
import Category from '../conponents/Category'
import SlideShow from '../conponents/SlideShow'

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