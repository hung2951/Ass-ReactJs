import React from 'react'

type Props = {}

const FormSearch = (props: Props) => {
    return (
        <form className="w-96 pt-4 flex" id="formSearch" action="/search">
            <input type="text" name="value" id="querySearch" className="w-[90%] h-10 pl-2" placeholder="Tìm kiếm sản phẩm..." />
            <input type="submit" id="btnSearch" value="Tìm kiếm" className="border-2 max-h-10 text-white px-3 hover:text-[#39ebd07a]" />
            {/* <button class="h-9"><a class="border-2"><i class="fas fa-search text-white"></i></a></button>  */}
        </form>
    )
}

export default FormSearch