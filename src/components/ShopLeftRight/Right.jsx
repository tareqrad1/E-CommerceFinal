
/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux'
import { viewDetails } from '../../featchers/detailsSlice';
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../../featchers/actionSlice';
const Right = ({ele}) => {
  const dispatch = useDispatch()
  const Navigate = useNavigate()
  function handleView() {
    dispatch(viewDetails(ele))
    Navigate('/product')
  }
  return (
    <div className="card cursor-pointer transition-[1s] bg-[#f5f5f3] relative">
      <div className="cardImage relative -z-2">
        <img src={ele.image} alt={ele.name} className="-z-1" />
        <div className="btn hidden px-3">
          <div className="flex justify-between transition-colors py-1">
            <button className="text-[#707070]" onClick={handleView}><i className="fa-solid fa-eye"></i> View Details </button>
            <button className="text-[#707070]" onClick={() => dispatch(addToCart(ele))}><i className="fa-solid fa-cart-plus"></i> Add to Cart</button>
          </div>
        </div>
      </div>
      {ele.new && <h1 className="bg-black text-white font-[500] px-4 py-1 w-fit ml-3 absolute left-1 top-4">New</h1>}
      <div className="px-2 py-4 mt-4 border-[1px] border-[#e5e7eb] border-t-0">
        <div className="flex justify-between items-center">
          <h1 className="font-bold">{ele.name}</h1>
          <p className="text-[#767676] text-[14px]">{ele.price}$</p>
        </div>
        <h4 className="text-[#767676] pt-3">{ele.color}</h4>
      </div>
    </div>
  )
}

export default Right