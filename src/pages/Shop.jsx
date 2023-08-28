import { BreadcrumbsWithIcon } from "../components/BreadCrumb"
import Footer from "../components/Footer"
import ShopBy from "../components/ShopBy"
import GettingDataShopping from "../components/ShopLeftRight/Data/GettingDataShopping"
import Left from "../components/ShopLeftRight/Left"
// import Right from "../components/ShopLeftRight/Right"

const Shop = () => {
  return (
    <>
      <ShopBy />
      <div className="container">
        <h1 className="text-[55px] font-extrabold">Products</h1>
        <BreadcrumbsWithIcon page='Products' />
        <div className="Left-Right flex justify-between items-center gap-2 mt-6 ">
            <Left />
            <GettingDataShopping />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Shop