import React from 'react'
import { Link } from 'react-router-dom'
import { CategoryType } from '../../types/category'

type CategoryProps = {
    categories: CategoryType[]
}

const Category = ({ categories }: CategoryProps) => {
    return (
        <div className='w-2/3 shadow-2xl rounded-md mr-5 '>
            <p className='text-center pt-4 font-bold text-xl'>Danh mục</p>
            <div>
                {categories.map((item, index) => {

                    return (
                        <a href={`/danh-muc/${item._id}`} className='text-black no-underline' key={index}>
                            <label className="border-b w-11/12 ml-3 border-gray-400 py-2 pl-3 hover:text-gray-500 hover:border-b hover:border-black hover:w-10/12 duration-300">
                                {item.name}
                            </label>
                        </a>
                    )
                })}

            </div>
        </div>
    )
}

export default Category