import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useRef } from "react";
import { FetchApiData } from "../../../api/fetchData.api";
import { useDispatch, useSelector } from "react-redux";
import NewArrival from "../../Card";
import Headings from "../../Headings";
import { DefaultSpinner } from "../../Spiner";
import Swipers from "../../Swiper";

const Slider = () => {
  const value = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const isMount = useRef(false);
  useEffect(() => {
    if (!isMount.current) {
      dispatch(FetchApiData());
      isMount.current = true;
    }
  }, []);
  return (
    <>
      <Headings heading="New Arrivals" />
      <Swipers>
        {value.loading && <DefaultSpinner />}
        {value.data &&
          !value.error &&
          !value.loading &&
          value.data.map((ele) => {
            return (
              ele.new && (
                <SwiperSlide key={ele.id}>
                  <NewArrival data={ele} />
                </SwiperSlide>
              )
            );
          })}
        {value.error && !value.loading && window.alert(value.error)}
      </Swipers>
    </>
  );
};

export default Slider;
