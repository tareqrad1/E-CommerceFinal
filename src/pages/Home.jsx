import SliderArrival from "../components/DataComponent/newArrival/Slider"
import SliderBestsellers from '../components/DataComponent/ourBestsellers/Slider'
import SliderOffers from '../components/DataComponent/offers/Slider'
import FreeShoping from "../components/FreeShoping"
import Galary from "../components/Galary"
import { Landing } from "../components/Landing"
import ProductClock from "../components/ProductClock"
import ShopBy from "../components/ShopBy"
import Footer from "../components/Footer"
const Home = () => {
  return (
    <>
      <ShopBy />
      <Landing  />
      <FreeShoping />
      <Galary />
      <SliderArrival />
      <SliderBestsellers />
      <ProductClock />
      <SliderOffers />
      <Footer />
    </>
  )
}

export default Home