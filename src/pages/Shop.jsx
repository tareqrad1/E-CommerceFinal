import { BreadcrumbsWithIcon } from "../components/BreadCrumb"
import Footer from "../components/Footer"
import ShopBy from "../components/ShopBy"
import GettingData from "../components/ShopLeftRight/GettingData";
import Left from "../components/ShopLeftRight/Left"
import TopRight from '../components/ShopLeftRight/TopRight';

const Shop = () => {
  return (
    <>
      <ShopBy />
      <div className="container bg-[#ffffff]">
        <h1 className="text-[55px] font-extrabold">Products</h1>
        <BreadcrumbsWithIcon page='Products' />
        <div className="Left-Right lg:flex justify-between gap-2 mt-6">
            <div className="w-[30%] hidden lg:block h-full">
              <Left />
            </div>
            <div className="w-[100%] lg:w-[70%] pb-2 h-full">
              <TopRight />
              <GettingData />
            </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Shop