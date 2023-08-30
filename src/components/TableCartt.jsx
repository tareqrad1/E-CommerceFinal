import { Button } from "@material-tailwind/react"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, clearCart, decreaseQuantity, removeFromCart } from '../featchers/actionSlice';

const TableCart = () => {
    const value = useSelector((state) => state.products)
    const dispatch = useDispatch()
    const totalPrice = value.products.reduce((acc, prod) => {
        acc += prod.price * prod.qwt;
        return acc
    },0)
  return (
<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                Image
                </th>
                <th scope="col" className="px-6 py-3">
                Name
                </th>
                <th scope="col" className="px-6 py-3">
                Price
                </th>
                <th scope="col" className="px-6 py-3 pl-[58px]">
                Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                Sub Total
                </th>
            </tr>
        </thead>
        {value.products.map((ele) => {
            return (
                <tbody key={ele.id}>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <div className="flex items-center gap-6">
                                <span className="cursor-pointer text-xl" onClick={() => dispatch(removeFromCart(ele))}>x</span>
                                <img src={ele.image} alt="image" className=" w-[100px] mb-1" />
                            </div>
                        </th>
                        <td className="px-6 py-4">
                            {ele.name}
                        </td>
                        <td className="px-6 py-4">
                            {ele.price}$
                        </td>
                        <td className="px-6 py-4">
                        <div className='px-4 space-x-4 flex items-center'>
                            <Button size="sm" variant="gradient" onClick={() => dispatch(addToCart(ele))} className='px-3 py-1 text-xs'>+</Button>
                                <span className='text-[16px] select-none'>{ele.qwt}</span>
                            <Button size="sm" variant="gradient" onClick={() => dispatch(decreaseQuantity(ele))} className='px-3 py-1 text-xs'>-</Button>
                        </div>
                        </td>
                        <td className="px-6 py-4">
                            {(ele.price * ele.qwt).toFixed(2)}$
                        </td>
                    </tr>
                </tbody>
            )
        })}
    </table>
    <button onClick={() => dispatch(clearCart())} className={`px-7 py-2 text-white capitalize font-extrabold mt-6 ${!value.products.length ? 'bg-[#9d3a3a] cursor-no-drop' :'bg-[#ef4444] hover:bg-[#9d3a3a] cursor-pointer'}`} >clear cart</button>
    <div className='flex justify-between items-center py-4 my-4 px-3 border-[1px]'>
                <div className='flex gap-2'>
                    <input type="text" className='w-[200px] border-[1px] border-[#00000014] border-[#ccc] px-2 outline-none' />
                    <h1 className='cursor-pointer'>Apply Coupon</h1>
                </div>
                <h1 className='cursor-pointer'>Update Cart</h1>
            </div>
    {value.products && !value.products.length && (<h1 className="flex justify-center items-center text-[#333] py-4">Please fill out the cart first !</h1>)}
    {/* table bottom */}
    <div className="w-[300px] my-5 md:ml-auto text-gray-700">
        <h1 className="text-xl font-light text-black">Cart Totals</h1>
        <div className="border-[1px] border-black flex justify-between items-center py-2 px-1">
            <h1>Subtotal</h1>
            <h1>{totalPrice.toFixed(2)}$</h1>
        </div>
        <div className=" border-l-[1px] border-r-[1px] border-black flex justify-between items-center py-2 px-1">
            <h1>Shipping Charge</h1>
            <h1>20$</h1>
        </div>
        <div className="border-[1px] border-black flex justify-between items-center py-2 px-1">
            <h1>Total</h1>
            <h1>{totalPrice === 0 ? totalPrice.toFixed(2) : (totalPrice + 20).toFixed(2)}$</h1>
        </div>
    </div>
</div>
  )
}

export default TableCart