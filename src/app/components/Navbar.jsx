"use client";
import Link from "next/link"
import NavLink from "./NavLink"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useContext, useState } from "react";
import MenuOverlay from "./MenuOverlay";
import { ScrollContext } from "../context/ScrollContext";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Image from "next/image";

const navLinks = [
    {
        title: "About",
        href: "#about"
    },
    {
        title: "Projects",
        href: "#projects"
    },
    {
        title: "Contact",
        href: "#contact"
    }
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {homeRef, aboutRef, projectRef, experienceRef, contactRef} = useContext(ScrollContext);

  const handleClick = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212]">
        <div className="flex flex-wrap items-center justify-between mx-auto py-4 px-10">
            <Link href={"/"} className="text-2xl md:text-3xl text-white font-semibold">Raj<span className="text-purple-500 font-extrabold ml-1">.</span></Link>

            {/* mobile menu */}
            {/* <div className="mobile-menu block md:hidden">
                {isOpen ? <button onClick={() => {setIsOpen(!isOpen)}} className="flex items-center px-3 py-2 rounded text-slate-200 hover:text-white hover:border-white">
                    <XMarkIcon className="h-7 w-7" />
                </button> : 
                <button onClick={() => {setIsOpen(!isOpen)}} className="flex items-center px-3 py-2 rounded text-slate-200 hover:text-white hover:border-white">
                    <Bars3Icon className="h-7 w-7" />
                </button>}
            </div> */}

            {/* {isOpen && <MenuOverlay links={navLinks} />} */}
            <Link className="mobile-menu block md:hidden" href="https://www.linkedin.com/in/raj-kubal-910056149/" target="_blank">
                <Image width={40} height={40} src={LinkedinIcon} alt="LinkedIn icon" />
            </Link>

            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                    <NavLink onClick={() => {handleClick(aboutRef)}} title="About" />
                    <NavLink onClick={() => {handleClick(projectRef)}} title="Projects" />
                    <NavLink onClick={() => {handleClick(experienceRef)}} title="Experience" />
                    <NavLink onClick={() => {handleClick(contactRef)}} title="Contact" />
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar