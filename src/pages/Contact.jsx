import { BreadcrumbsWithIcon } from "../components/BreadCrumb"
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"
import ShopBy from "../components/ShopBy"

const Contact = () => {
  return (
    <>
      <ShopBy />
      <div className="container py-14">
        <div className="mb-10">
          <h1 className="text-[3rem] font-black">Contact</h1>
          <BreadcrumbsWithIcon page='Contact' />
        </div>
        <ContactForm />
      </div>
      <Footer />
    </>
  )
}

export default Contact