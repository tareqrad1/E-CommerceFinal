import { SimpleRegistrationForm } from '../components/Forms'
import logo from '../image/logowhite.png'
const SiginIn = () => {
  return (
    <div className="flex h-screen ">
      <div className="hidden md:block  md:w-[30%]	bg-[#262626] text-white px-6 py-12">
        <div className="">
          <img src={logo} alt="logo" className='mb-4 h-8' />
          <h3 className='text-xl w-[300px]'>Stay sign in for more When you sign in, you are with us!</h3>
          <div className='flex items-center gap-3 mt-5'>
            <i className="fa-solid fa-circle-check text-[green]"></i>
            <p className='text-[14px] font-light'> <p className='bg-bold block text-xl'>Get started fast with OREBI</p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis nisi dolor recusandae consectetur!</p>
          </div>
          <div className='flex items-center gap-3 mt-5'>
            <i className="fa-solid fa-circle-check text-[green]"></i>
            <p className='text-[14px] font-light'> <p className='bg-bold block text-xl'>Access all OREBI services</p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis nisi dolor recusandae consectetur!</p>
          </div>
          <div className='flex items-center gap-3 mt-5'>
            <i className="fa-solid fa-circle-check text-[green]"></i>
            <p className='text-[14px] font-light'> <p className='bg-bold block text-xl'>Trusted by online Shoppers</p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis nisi dolor recusandae consectetur!</p>
          </div>
          <div className='flex items-center gap-3 mt-5'>
            <i className="fa-solid fa-circle-check text-[green]"></i>
            <p className='text-[14px] font-light'> <p className='bg-bold block text-xl'>Trusted by you are with us</p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis nisi dolor recusandae consectetur!</p>
          </div>
        </div>
      </div>
      <div className=" w-full md:w-[70%]">
        <SimpleRegistrationForm />
      </div>
    </div>
  )
}

export default SiginIn