import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
type Props = {}

const SlideShow = (props: Props) => {
    return (
        <div>
            <Slide easing="ease">
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(http://didongvang.com/files/assets/banner01.jpg)` }}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(https://s8event.vn/wp-content/uploads/2020/02/iphone-cu.jpg)` }}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(https://hoangtusaigon.vn/wp-content/uploads/2021/01/banner-1.jpg)` }}>
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default SlideShow