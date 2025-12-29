import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex justify-center items-center gap-x-10 text-2xl font-semibold">
        <NavLink 
        className={(e) => e.isActive ? "text-red-300":""} to="/">Home
        </NavLink>

        <NavLink 
        className={(e) => e.isActive ? "text-red-300":""} to="/recipes">Recipes
        </NavLink>

        <NavLink 
        className={(e) => e.isActive ? "text-red-300":""} to="/about">About
        </NavLink>

        <NavLink 
        className={`px-4 py-1 bg-gray-900 rounded ${(e) => e.isActive ? "text-red-300":""}`} to="/create">Create
        </NavLink>
    </div>
  )
}

export default Navbar