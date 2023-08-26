import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className=" px-5 py-3 border-r-2 border-[#00000080]">
        <i className="fa-solid fa-4"></i>
        <i className="fa-solid fa-0"></i>
        <i className="fa-solid fa-4"></i>
      </div>
      <p className="ml-4 text-[#000000a6]">This page could not be found. <Link to='/' className="text-[#222222]">go back</Link> </p>
    </div>
  )
}

export default NotFound