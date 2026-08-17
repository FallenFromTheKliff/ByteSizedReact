import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const roundedcube = "inline-block rounded-lg px-4 py-2 font-bold duration-300";
  const wowactive = "text-white bg-gray-900";
  const wowhover = "hover:bg-gray-300 hover:text-black";

  return (
    <nav className="flex flex-wrap w-full justify-between px-4 py-4 drop-shadow-lg bg-white">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-900 font-bold text-white">
          R
        </div>
        <div className="text-xl font-bold">
          React Activity Portal
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <NavLink to="/" className={({ isActive }) => `${roundedcube} ${isActive ? wowactive : wowhover}`}>
          Home
        </NavLink>
        <NavLink to="/act1-login" className={({ isActive }) => `${roundedcube} ${isActive ? wowactive : wowhover}`}>
          Activity 1
        </NavLink>
        <NavLink to="/act2-grade-evaluation" className={({ isActive }) => `${roundedcube} ${isActive ? wowactive : wowhover}`}>
          Activity 2
        </NavLink>
        <NavLink to="/act3-password-checker" className={({ isActive }) => `${roundedcube} ${isActive ? wowactive : wowhover}`}>
          Activity 3
        </NavLink>
        <NavLink to="/act4-electricity-bill" className={({ isActive }) => `${roundedcube} ${isActive ? wowactive : wowhover}`}>
          Activity 4
        </NavLink>
        <NavLink to="/act5-attendance-checker" className={({ isActive }) => `${roundedcube} ${isActive ? wowactive : wowhover}`}>
          Activity 5
        </NavLink>
      </div>
    </nav>
  )
}