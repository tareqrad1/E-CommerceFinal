import img1 from '../image/saleImg.png'
import img2 from '../image/saleImgTwo.ecb733524e878406c281.png'
import img3 from '../image/saleImgThree.png'
import { useNavigate } from 'react-router-dom'

const Galary = () => {
    const Navigate = useNavigate();

  return (
    <div className="container flex flex-col md:flex-row py-[30px] items-center md:gap-[30px]">
        <div className='bg-[#e4e6e7]'>
            <img src={img1} alt="image one" className='cursor-pointer mix-blend-darken' onClick={() => Navigate('shop')} />
        </div>
        <div className='space-y-4'>
            <img src={img2} alt="img2" className='cursor-pointer' onClick={() => Navigate('shop')}/>
            <img src={img3} alt="img3" className='cursor-pointer' onClick={() => Navigate('shop')} />
        </div>
    </div>
  )
}

export default Galary