import NewArrival from "../components/DataComponent/NewArrival"
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
      <NewArrival />
    </>
  )
}

export default Home