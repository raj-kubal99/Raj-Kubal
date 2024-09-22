import Link from "next/link"

const NavLink = ({ onClick, title }) => {
  return (
    <li onClick={onClick}>
      <p className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-lg md:p-0 hover:text-white cursor-pointer border-b-2 border-b-[#121212] hover:border-b-purple-500">
        {title}
      </p>
    </li>
  )
}

export default NavLink