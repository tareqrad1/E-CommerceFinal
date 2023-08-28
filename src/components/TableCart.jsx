import { useDispatch, useSelector } from 'react-redux'
import { addToCart, clearCart, decreaseQuantity } from '../featchers/actionSlice';
import { Button } from '@material-tailwind/react';
export function TableCart() {
    const value = useSelector((state) => state.products)
    const dispatch = useDispatch()
    const totalPrice = value.products.reduce((acc, prod) => {
        acc += prod.price * prod.qwt;
        return acc
    },0)
  return (
    <div className='py-7'>
        
        <div className="bg-[#ffffff] p-1">
            <div className="hidden md:flex justify-between items-center py-3 px-1 bg-[#f5f7f7] mb-1">
                <h1>Image</h1>
                <h1>Name</h1>
                <h1>Price</h1>
                <h1>Quantity</h1>
                <h1>Sub Total</h1>
            </div>
        {value.products.map((ele) => {
            console.log(ele.qwt);
                return (
                    <div key={ele.id}>
                        <div className="flex justify-between items-center px-1 border-2">
                            <img src={ele.image} alt="image" className="w-[116px] mb-1" />
                            <h1>{ele.name}</h1>
                            <h1>{ele.price}$</h1>
                            <div className='px-4 space-x-4'>
                                <Button variant="gradient" onClick={() => dispatch(addToCart(ele))} className=''>+</Button>
                                <span className='text-xl'>{ele.qwt}</span>
                                <Button variant="gradient" onClick={() => dispatch(decreaseQuantity(ele))}>-</Button>
                            </div>
                            <h1>{(ele.price * ele.qwt).toFixed(2)}</h1>
                        </div>
                    </div>
                )
            })}
            <button onClick={() => dispatch(clearCart())} className='px-7 py-2 bg-[#ef4444] hover:bg-[#9d3a3a] text-white capitalize font-extrabold mt-1'>clear cart</button>
            <div className='flex justify-between items-center py-4 my-4 px-3 border-[1px]'>
                <div className='flex gap-2'>
                    <input type="text" className='w-[200px] border-[1px] border-[#ccc] px-2 outline-none' />
                    <h1 className='cursor-pointer'>Apply Coupon</h1>
                </div>
                <h1 className='cursor-pointer'>Update Cart</h1>
            </div>
            {/* table bottom */}
            <div className="w-[300px] mt-5">
                <h1 className="text-3xl">Cart totals</h1>
                <div className="border-[1px] border-black flex justify-between items-center py-2 px-1">
                    <h1>Subtotal</h1>
                    <h1>{totalPrice.toFixed(2)}</h1>
                </div>
                <div className=" border-l-[1px] border-r-[1px] border-black flex justify-between items-center py-2 px-1">
                    <h1>Shipping Charge</h1>
                    <h1>$20</h1>
                </div>
                <div className="border-[1px] border-black flex justify-between items-center py-2 px-1">
                    <h1>Total</h1>
                    <h1>{totalPrice === 0 ? totalPrice.toFixed(2) : (totalPrice + 20).toFixed(2)}</h1>
                </div>
            </div>
            
        </div>
        {value.products && !value.products.length && (<h1 className="flex justify-center items-center text-[#33 mt-8">Please fill out the cart first !</h1>)}
    </div>
  );
}
export default TableCart