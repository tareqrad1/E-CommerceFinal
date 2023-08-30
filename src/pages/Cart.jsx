import { BreadcrumbsWithIcon } from "../components/BreadCrumb"
import Footer from "../components/Footer"
import ShopBy from "../components/ShopBy"
import TableCart from "../components/TableCartt"

const Cart = () => {
  return (
    <>
      <ShopBy />
      <div className="container">
        <h1 className="text-4xl font-semibold mb-3">Cart</h1>
        <BreadcrumbsWithIcon page='Cart'/>
        <TableCart />
      </div>
      <Footer />
    </>
  )
}

export default Cart