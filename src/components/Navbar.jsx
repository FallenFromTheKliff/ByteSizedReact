import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const roundedcube = "inline-block rounded-lg px-4 py-2 duration-300";
  const wowactive = "text-white bg-black";
  const wowhover = "hover:bg-gray-300 hover:text-black";

  return (
    <nav className="flex justify-between px-4 py-4 drop-shadow-lg bg-white">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-black font-bold text-white">
          R
        </div>
        <div className="text-2xl font-bold">
          REACT ACTIVITY PORTAL
        </div>
      </div>
      <div className="flex items-center gap-4">
        <NavLink to="/" className={({ isActive }) => `${roundedcube} ${isActive ? wowactive : wowhover}`}>
          Homelander
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