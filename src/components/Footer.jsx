import { Input } from "@material-tailwind/react"
import image from '../image/payment.3e00cc601c9e7fc1e7d3.png'
import {Link} from 'react-router-dom'
const Footer = () => {
    const date = new Date().getFullYear();
return (
    <>
        <div className="bg-[#eee] container py-12 md:flex flex-wrap justify-between items-center gap-5 w-full space-y-6 border-b-2 border-[#e5e7eb] ">
            <div className="space-y-2 md:space-y-5  md:text-start">
                <h1 className="text-2xl font-[600]">More about Orebi Shop</h1>
                <p className="max-w-[300px] w-[300px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint ab ullam, numquam nesciunt in.</p>
                <div className=" md:space-x-4">
                    <i className="fa-brands fa-youtube cursor-pointer hover:bg-black p-2 rounded-full hover:text-white transition-colors"></i>
                    <i className="fa-brands fa-github cursor-pointer p-2 hover:bg-black rounded-full hover:text-white transition-colors"></i>
                    <i className="fa-brands fa-facebook cursor-pointer p-2 hover:bg-black rounded-full hover:text-white transition-colors"></i>
                    <i className="fa-brands fa-instagram cursor-pointer p-2 hover:bg-black rounded-full hover:text-white transition-shadow"></i>
                </div>
            </div>
            <div className="space-y-2 md:space-y-6 md:text-start">
                <h3 className="text-2xl font-[600] mb-1">Shop</h3>
                <ul className="md:space-y-1 cursor-pointer">
                    <li className="hover:ml-1 transition-[1s]">Accesories</li>
                    <li className="hover:ml-1 transition-[1s]">Clothes</li>
                    <li className="hover:ml-1 transition-[1s]">Electronics</li>
                    <li className="hover:ml-1 transition-[1s]">Home appliances</li>
                    <li className="hover:ml-1 transition-[1s]">New Arrivals</li>
                </ul>
            </div>
            <div className="md:text-start space-y-2 md:space-y-6 cursor-pointer">
            <h3 className="text-2xl font-[600] mb-1">Your account</h3>
                <ul className="md:space-y-1">
                    <li className="hover:ml-1 transition-[1s]">Profile</li>
                    <li className="hover:ml-1 transition-[1s]">Orders</li>
                    <li className="hover:ml-1 transition-[1s]">Addresses</li>
                    <li className="hover:ml-1 transition-[1s]">Account Details</li>
                    <li className="hover:ml-1 transition-[1s]">Payment Options</li>
                </ul>
            </div>
            <div className="md:text-start md:space-y-3">
                <h3 className="text-2xl font-[600]">Subscribe to our newsletter.</h3>
                <p>A at pellentesque et mattis porta enim elementum.</p>
                <div className="md:flex justify-between items-center gap-4">
                    <Input variant="static" placeholder="Emails" />
                    <button className="bg-black px-5 py-2 mt-2 md:mt-0 text-white hover:bg-white hover:text-black transition-colors">subscribe</button>
                </div>
                <img src={image} className="max-w-full w-[200px]" alt="img" />
            </div>
        </div>
        <div className="container bg-[#eee] py-5 flex justify-center items-center text-sm text-center">
            <p className="text-[#6d6d6d]"><i className="fa-regular fa-copyright mr-1"></i>Copyright {date} | Orebi shopping | All Rights Reserved | Powered by <Link  className="text-[#545454] text-base" to={'https://github.com/tareqrad1'}>Tareq Radi</Link> </p>
        </div>
    </>
)
}

export default Footer