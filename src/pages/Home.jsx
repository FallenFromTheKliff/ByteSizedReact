import HomeCard from '../components/HomeCard';
import { One, Two, Three, Four, Five } from '../data/HomeNav';

export default function Home() {
  return (
    <div className="flex flex-1 flex-col w-full items-center bg-indigo-50">
      <h1 className="text-5xl text-gray-800 font-retro font-bold mt-16">
          REACT ACTIVITY PORTAL
      </h1>
      <h2 className="text-lg text-gray-500 font-retro mt-2">
          Five interactive React activities demonstrating state, events, conditional logic, validation, and calculations!
      </h2>
      <div className="w-3xl h-1 bg-gray-800 mt-4" />
      <div className="hidden xl:flex flex-col items-center gap-8">
        <div className="flex flex-row flex-wrap items-center justify-center gap-8 mt-12">
          <HomeCard 
            id={One.id}
            title={One.title}
            description={One.description}
            path={One.path}
          />
          <HomeCard 
            id={Two.id}
            title={Two.title}
            description={Two.description}
            path={Two.path}
          />
          <HomeCard 
            id={Three.id}
            title={Three.title}
            description={Three.description}
            path={Three.path}
          />
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center gap-8">
          <HomeCard 
            id={Four.id}
            title={Four.title}
            description={Four.description}
            path={Four.path}
          />
          <HomeCard 
            id={Five.id}
            title={Five.title}
            description={Five.description}
            path={Five.path}
          />
        </div>
      </div>
      <div className="flex xl:hidden flex-col items-center gap-8 pb-16">
        <div className="flex flex-row flex-wrap items-center justify-center gap-8 mt-12">
          <HomeCard 
            id={One.id}
            title={One.title}
            description={One.description}
            path={One.path}
          />
          <HomeCard 
            id={Two.id}
            title={Two.title}
            description={Two.description}
            path={Two.path}
          />
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center gap-8">
          <HomeCard 
            id={Three.id}
            title={Three.title}
            description={Three.description}
            path={Three.path}
          />
          <HomeCard 
            id={Four.id}
            title={Four.title}
            description={Four.description}
            path={Four.path}
          />
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center gap-8">
          <HomeCard 
            id={Five.id}
            title={Five.title}
            description={Five.description}
            path={Five.path}
          />
        </div>
      </div>
    </div>
  )
}