import { NavLink, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';
const Fixed = () => {
  const value = useSelector((state) => state.products);
  return (
    <>
      <div className="fixed z-50 right-0 top-[50%] -translate-y-[50%] space-y-1">
        <div className="bg-[#fafafa] p-2 md:p-2 shadow-2xl rounded-xl group">
            <NavLink to='signin' className='flex flex-col items-center cursor-pointer space-y-1'>
              <i className="fa-solid fa-address-card text-[14px] md:text-xl text-[#33475b] group-hover:animate-bounce"></i>
              <p className="text-[10px] md:text-[15px] font-[600] text-[#33475b]">Profile</p>
            </NavLink>
        </div>
        <div className="bg-[#fafafa] w-fit p-2 md:p-2 shadow-2xl rounded-xl group relative">
            <NavLink to='cart' className='flex flex-col items-center cursor-pointer space-y-1'>
              <i className="fa-solid fa-cart-flatbed-suitcase text-[14px] md:text-xl text-[#33475b] group-hover:animate-bounce"></i>
              <p className="text-[10px] md:text-[15px] font-[600] text-[#33475b]">Buy Now</p>
              {value.products.length > 0 && (<span className='absolute bg-[#33475b] p-2 text-xs right-[0px] text-white top-0 md:left-[52px] flex justify-center w-[15px] h-[15px] rounded-full items-center'>{value.products.length}</span>)}
            </NavLink>
        </div>
    </div>
    <Outlet />
    </>
  )
}

export default Fixed