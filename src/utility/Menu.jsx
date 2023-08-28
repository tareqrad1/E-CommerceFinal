import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { NavLink } from 'react-router-dom'
export function MenuCustomAnimation() {
  return (
    <Menu
      animate={{
        mount: { y: 0 },
        unmount: { y: 25 },
      }}
    >
      <MenuHandler>
        <i className="fa-solid fa-user-tie lg:mr-3 text-xl"></i>
      </MenuHandler>
      <MenuList>
        <NavLink to='/signin'><MenuItem>Login</MenuItem></NavLink>
        <NavLink to='/contact'><MenuItem>Sign up</MenuItem></NavLink>
        <NavLink to='/signin'><MenuItem>Profile</MenuItem></NavLink>
        <NavLink to='/*'><MenuItem>404</MenuItem></NavLink>
      </MenuList>
    </Menu>
  );
}
