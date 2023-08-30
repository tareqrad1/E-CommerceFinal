/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux"
import { BreadcrumbsWithIcon } from "../components/BreadCrumb"
import ShopBy from "../components/ShopBy"
import { addToCart } from "../featchers/actionSlice";

const Products = () => {
    const view = useSelector((state) => state.view);
    const dispatch = useDispatch();
  return (
    <>
        <ShopBy />
        <div className="container">
            <BreadcrumbsWithIcon page='Product' />
            <div className="flex flex-col lg:flex-row gap-3 bg-[#efefef]">
                <img src={view.image} alt="image" />
                <div className="space-y-5 p-4">
                    <h1 className="font-extrabold text-3xl">{view.name}</h1>
                    <h3 className="font-extrabold text-xl">{view.price}$</h3>
                    <p className="lg:w-[800px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt libero nulla pariatur exercitationem esse in, tenetur deleniti magni. Similique, facere doloribus laboriosam rerum repellat dignissimos neque! Esse autem eius facere?</p>
                    <p className="font-light text-gray-800">Be the first to leave a review.</p>
                    <p>colors: {view.color}</p>
                    <button onClick={() => dispatch(addToCart(view))} className="lg:w-full px-9 md:px-64 py-3 hover:bg-black text-white bg-[#000000d6]">Add to Cart Now</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Products