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
        <i className="fa-solid fa-user"></i>
      </MenuHandler>
      <MenuList>
        <MenuItem><NavLink to='about'>Login</NavLink></MenuItem>
        <MenuItem><NavLink to='contact'>Sign up</NavLink></MenuItem>
        <MenuItem><NavLink to='shop'>Profile</NavLink></MenuItem>
      </MenuList>
    </Menu>
  );
}
