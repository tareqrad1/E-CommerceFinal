import image from '../image/clockSection.png'
import { useNavigate } from 'react-router-dom'
const ProductClock = () => {
  const Navigate = useNavigate();
  return (
    <div className='bg-[#efefef] pb-8 relative'>
        <div className='relative'>
            <img className='mix-blend-darken' src={image} alt="img" />
        </div>
        <div className='container absolute right-14 top-16 w-[735px] space-y-4 hidden md:block'>
            <h1 className='font-[900] text-3xl leading-[2.25rem]'>Product of The year</h1>
            <p className='font-[400] leading-[1.5rem] text-[1rem]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat cupiditate modi amet! Facilis, aperiam quaerat.</p>
            <button onClick={() => Navigate('shop')} className='bg-black text-white px-9 py-2 font-bold'>Shop Now</button>
        </div>
    </div>
  )
}

export default ProductClock