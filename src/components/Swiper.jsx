/* eslint-disable react/prop-types */
import { Swiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Swipers = ({children}) => {
  return (
    <Swiper
        className='mySwiper cursor-pointer'
        modules={[Navigation, Pagination]}
        navigation
        slidesPerView={1}
        breakpoints={{
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: -80,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: -130
            }
        }}
    >
        {children}
    </Swiper>
  )
}

export default Swipers