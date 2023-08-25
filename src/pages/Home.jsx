import Slider from "../components/DataComponent/newArrival/Slider"
import FreeShoping from "../components/FreeShoping"
import Galary from "../components/Galary"
import { Landing } from "../components/Landing"
import ShopBy from "../components/ShopBy"
const Home = () => {
  return (
    <>
      <ShopBy />
      <Landing  />
      <FreeShoping />
      <Galary />
      <Slider />
    </>
  )
}

export default Home