import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const roundedcube = "inline-block rounded-lg px-4 py-2 font-bold duration-300";
  const wowactive = "text-white bg-gray-800";
  const wowhover = "hover:bg-gray-300 hover:text-black";

  const dontgetlost = ({ isActive }) => `${roundedcube} ${isActive ? wowactive : wowhover}`;

  return (
    <nav className="flex flex-wrap w-full xl:justify-between justify-center px-4 py-4 drop-shadow-lg bg-white">
      <div className="hidden xl:flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800 font-bold text-white">
          R
        </div>
        <div className="text-xl font-bold">
          React Activity Portal
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <NavLink to="/" className={dontgetlost}>
          Home
        </NavLink>
        <NavLink to="/act1-login" className={dontgetlost}>
          Activity 1
        </NavLink>
        <NavLink to="/act2-grade-evaluation" className={dontgetlost}>
          Activity 2
        </NavLink>
        <NavLink to="/act3-password-checker" className={dontgetlost}>
          Activity 3
        </NavLink>
        <NavLink to="/act4-electricity-bill" className={dontgetlost}>
          Activity 4
        </NavLink>
        <NavLink to="/act5-attendance-checker" className={dontgetlost}>
          Activity 5
        </NavLink>
      </div>
    </nav>
  )
}