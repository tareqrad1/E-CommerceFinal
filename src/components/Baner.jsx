/* eslint-disable react/no-unknown-property */
import { useState } from "react"
const Baner = () => {
    const [hide, setHide] = useState(false)
  return (
    <div className={`banner bg-black text-white text-[15px]  w-full py-3 flex justify-between items-center px-7 ${hide && "hidden"}`}>
        <p className="mx-auto">This banner bar can be used to inform vistors of something important <span className=" mx-1 w-4 h-[1px] mb-1 bg-[#3e3e3c] inline-block"></span> Learn more <i className="fa-solid fa-arrow-right ml-1 animate-bounce " onClick={() => console.log('asd')}></i></p>
        <i className="fa-solid fa-x cursor-pointer text-xs" onClick={() => setHide(true)}></i>
    </div>
  )
}

export default Baner