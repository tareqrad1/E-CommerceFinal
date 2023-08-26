/* eslint-disable react/no-unknown-property */

import { MenuCustomAnimation } from "../utility/Menu"

const ShopBy = () => {
  return (
    <div className="container flex flex-col lg:flex-row items-start lg:items-center justify-between lg:justify-between  py-[40px] space-y-5 md:space-y-0 bg-[#f5f5f3] ">
        <div className="flex justify-between items-center space-x-3">
            <i className="fa-solid fa-filter cursor-pointer"></i>
            <h3 className="text-[1rem]">Shop by Category</h3>
        </div>
        <div className="flex justify-between items-center max-w-full relative">
            <input type="text" placeholder="Search your product here" className="w-[700px] outline-none py-3 px-5 rounded-xl" />
            <i className="fa-solid fa-magnifying-glass absolute right-4 cursor-pointer text-xl"></i>
        </div>
        <div className="flex justify-between items-center space-x-3 w-full lg:w-0">
            <div className="flex justify-between items-center space-x-1 cursor-pointer">
                <MenuCustomAnimation /> 
            </div>
            <div className="shopping_cart relative cursor-pointer">
                <i className="fa-solid fa-cart-shopping"></i>
                <small className="w-[17px] h-[17px] bg-black rounded-full text-white absolute -bottom-[9px] left-[9px] flex items-center justify-center text-xs select-none">4</small>
            </div>
        </div>
    </div>
  )
}

export default ShopBy