/* eslint-disable react/no-unknown-property */
const FreeShoping = () => {
  return (
    <div className="container py-[25px] flex flex-col justify-start items-start md:flex-row md:justify-between md:items-center  border-b-2 border-[#e5e7eb] ">
        <div className="flex items-center space-x-2">
            <i className="fa-solid fa-2"></i>
            <p className="text-[#868686]">Two years warranty</p>
        </div>
        <div className="flex items-center space-x-2">
            <i className="fa-solid fa-truck"></i>
            <p className="text-[#868686]">Free shipping</p>
        </div>
        <div className="flex items-center space-x-2">
            <i className="fa-solid fa-arrow-rotate-left"></i>
            <p className="text-[#868686]">Return policy in 30 days</p>
        </div>
    </div>
  )
}

export default FreeShoping