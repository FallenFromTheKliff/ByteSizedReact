import { NavLink } from 'react-router-dom';

export default function HomeCard(props) {
  return (
    <div className="inline-flex flex-col items-start h-60 w-100 octagonee-16 border border-gray-300 bg-gray-50 duration-300">
      <div className="justify-center items-start space-y-2 px-6 py-4">
        <div className="flex h-9 w-9 items-center justify-center octagonee-6 bg-gray-300 font-retro font-bold">
          {props.id}
        </div>
        <h1 className="font-retro font-bold text-gray-800 text-xl mt-4">
          {props.title}
        </h1>
        <h3 className="text-gray-500 text-sm font-retro mt-2">
          {props.description}
        </h3>
        <div className="items-center justify-center mt-5">
          <NavLink 
            to={props.path} 
            className="inline-block px-8 py-4 w-full octagonee-12 text-center text-white text-xl bg-gray-800 font-retro font-bold hover:bg-black duration-300"
          >
            [ OPEN ACTIVITY ]
          </NavLink>
        </div>
      </div>
    </div>
  )
}