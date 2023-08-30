import { NavbarSimple } from "./components/Navbar"
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import Contact from './pages/Contact'
import Journal from './pages/Journal'
import NotFound from "./pages/NotFound"
import './app.css'
import Baner from "./components/Baner"
import Fixed from "./components/Fixed"
import SiginIn from "./pages/SiginIn"
import Cart from "./pages/Cart"
import Products from "./pages/Products"
import RequireAuth from "./auth/RequireAuth"
const App = () => {
  return (
    <>
      <Routes>
      <Route path="*" element={<NotFound />} />
        <Route path="/" element={ <Baner />}>
          <Route path="/" element={<NavbarSimple />}>
            <Route path="/" element={<Fixed />}>
              <Route index element={<Home/> } />
              <Route path="/home" element={<Home/> } />
              <Route path='/shop' element={<Shop />} />
              <Route path='/about' element={<About titlePage='About' />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/Journal' element={<Journal titlePage='Journal' />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product" element={<RequireAuth><Products /></RequireAuth> } />
            </Route>
          </Route>
        </Route>
        <Route path="/" element={<SiginIn />}>
          <Route path='/signin' element={<SiginIn />} />
        </Route>
      </Routes>
    </>
  )
}

export default App