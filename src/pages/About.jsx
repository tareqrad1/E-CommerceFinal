/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { BreadcrumbsWithIcon } from "../components/BreadCrumb"
import Footer from "../components/Footer"
import ShopBy from "../components/ShopBy"
import Button from "../utility/Button"

const About = ({titlePage}) => {
  return (
    <>
    <ShopBy />
    <div className="container py-16 bg-[#ffffff]">
      <div className="mb-10">
        <h1 className="text-[3rem] font-black">{titlePage}</h1>
        <BreadcrumbsWithIcon page={titlePage} />
      </div>
      <p className="w-[320px] md:w-[700px] text-[#6d6d6d] mb-5"><span  className="font-semibold text-xl text-black">Orebi</span> is one of the world's leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</p>
      <Button title='continue shopping' to='/shop' />
    </div>
    <Footer />
    </>
  )
}

export default About