import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink, useNavigate } from 'react-router-dom'
import Logo from '../image/logo.png'
function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-10">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink to='/' className="flex items-center  transition-[1s] hover:ml-2 lg:hover:ml-0 ">
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink to='/about' className="flex items-center  transition-[1s] hover:ml-2 lg:hover:ml-0">
          About
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink to='/shop' className="flex items-center  transition-[1s] hover:ml-2 lg:hover:ml-0">
          Shop
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink to='/contact' className="flex items-center hover:text-black transition-[1s] hover:ml-2 lg:hover:ml-0 ">
        Contact
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink to='/journal' className="last flex items-center transition-[1s] hover:ml-2  lg:hover:ml-0">
        Journal
        </NavLink>
      </Typography>
    </ul>
  );
}
 
export function NavbarSimple() {
  const Navigate = useNavigate();
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <Navbar className="px-6 py-3 max-w-full lg:px-[60px] md:py-[20px] lg:rounded-none">
      <div className="flex items-center justify-between text-blue-gray-900">
        <img src={Logo} className="mr-4 cursor-pointer py-1.5" alt="logo" onClick={() => Navigate('/')} />
        <div className="hidden lg:block ">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}