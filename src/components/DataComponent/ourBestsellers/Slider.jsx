import { useSelector } from "react-redux";
import Headings from "../../Headings";
import Swipers from "../../Swiper";
import { SwiperSlide } from "swiper/react";
import Bestsellers from "./Bestsellers";

const Slider = () => {
    const value = useSelector((state) => state.data)
    console.log('asd', value.data);
  return (
    <div className="py-[60px]">
        <Headings heading='All Products'/>
        <Swipers>
        {value.data && !value.error && !value.loading && (
            value.data.map((ele) => {
                return (
                    <SwiperSlide key={ele.id} > <Bestsellers data={ele} /></SwiperSlide>
                )
            })
        )}
        </Swipers>
    </div>
  )
}

export default Slider