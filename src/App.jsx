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
const App = () => {
  return (
    <>
      {/* <Fixed /> */}
      <Baner />
      <NavbarSimple />
      <Routes>
      <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Fixed />}>
          <Route index element={<Home/> } />
          <Route path="/home" element={<Home/> } />
          <Route path='/shop' element={<Shop />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/Journal' element={<Journal />} />
        </Route>
      </Routes>
    </>
  )
}

export default App