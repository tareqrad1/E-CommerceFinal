import { useSelector } from "react-redux";
import Headings from "../../Headings";
import Swipers from "../../Swiper";
import { SwiperSlide } from "swiper/react";
import Offers from "./Offers";

const Slider = () => {
    const value = useSelector((state) => state.data)
    
    return (
    <div className="py-[60px]">
        <Headings heading='Special Offers'/>
        <Swipers>
        {value.data && !value.error && !value.loading && (
            value.data.map((ele) => {
                return (
                    ele.price <= 43 && <SwiperSlide key={ele.id} > <Offers data={ele} /></SwiperSlide>
                )
            })
        )}
        </Swipers>
    </div>
  )
}

export default Slider