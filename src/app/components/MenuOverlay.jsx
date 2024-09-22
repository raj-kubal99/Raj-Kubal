import { useContext } from "react";
import NavLink from "./NavLink"
import { ScrollContext } from "../context/ScrollContext";

const MenuOverlay = ({ links }) => {
  const {homeRef, aboutRef, projectRef, contactRef} = useContext(ScrollContext);

  return (
    <ul className="flex flex-col py-4 items-center">
        {links.map((link, index) => {
            return <li key={index}><NavLink href={link.href} title={link.title} /></li>
        })}
    </ul>
  )
}

export default MenuOverlay