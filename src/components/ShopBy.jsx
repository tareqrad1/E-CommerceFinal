import { Link, useNavigate } from "react-router-dom"
import { MenuCustomAnimation } from "../utility/Menu"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from "react"
import { viewDetails } from "../featchers/detailsSlice"

const ShopBy = () => {
    const Navigate = useNavigate();
    const value = useSelector((state) => state.products)
    const dataProduct = useSelector((state) => state.data)
    const dispatch = useDispatch()
    console.log('data is', dataProduct.data);
    const [search, setSearch] = useState([]);

    function handleChange(e) {
        const filter = dataProduct.data.filter((prod) => prod.name.toLowerCase().includes(e.target.value))
        setSearch(filter)
    }
    console.log('search is :', search);
    useEffect(() => {
        setSearch(search)
    },[search])

    function handleGo(ele) {
        Navigate('/product');
        dispatch(viewDetails(ele))
    }
  return (
    <div className="container flex flex-col lg:flex-row items-start lg:items-center justify-between lg:justify-between  py-[40px] space-y-5 md:space-y-0 bg-[#f5f5f3] ">
        <div className="flex justify-between items-center space-x-3">
            <i className="fa-solid fa-filter cursor-pointer"></i>
            <h3 className="text-[1rem]">Shop by Category</h3>
        </div>
        <div className="flex justify-between items-center max-w-full relative">
            <input type="text" placeholder="Search your product here" className="w-[700px] outline-none py-3 px-5 rounded-xl" onChange={ handleChange } />
            <i className="fa-solid fa-magnifying-glass absolute right-4 cursor-pointer text-xl"></i>
            <div className={`bg-[#ffffff] lg:w-[700px] space-y-4  absolute z-[10000] top-[51px] ${search.length === dataProduct.data.length && 'hidden'}`}>
                {search.map((ele) => {
                return (
                    (
                        <div key={ele.id} className="flex gap-8 items-center bg-[#f3f4f6] cursor-pointer" onClick={() => handleGo(ele)}>
                            <img src={ele.image} alt="image" className="w-[80px]" />
                            <div className="space-y-1">
                                <h1 className="font-bold">{ele.name}</h1>
                                <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis</p>
                                <p className="">Price: <span className="text-xs font-bold ">{ele.price}$</span></p>
                            </div>
                        </div>
                    )
                )
            })}
            </div>
            
        </div>
        <div className="flex justify-between items-center space-x-3 w-full lg:w-0">
            <div className="flex justify-between items-center space-x-1 cursor-pointer">
                <MenuCustomAnimation /> 
            </div>
            <Link to='/cart' className="shopping_cart relative cursor-pointer">
                <i className="fa-solid fa-cart-shopping"></i>
                <small className="w-[17px] h-[17px] bg-black rounded-full text-white absolute -bottom-[9px] left-[9px] flex items-center justify-center text-xs select-none">{value.products.length}</small>
            </Link>
        </div>
    </div>
  )
}

export default ShopBy