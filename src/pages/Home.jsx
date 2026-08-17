import HomeCard from '../components/HomeCard';
import { One, Two, Three, Four, Five } from '../data/HomeNav';

export default function Home() {
  return (
    <div className="flex flex-col h-screen max-w-screen items-center bg-indigo-50">
      <h1 className="text-5xl font-bold mt-16">
          React Activity Portal
      </h1>
      <h2 className="text-lg text-gray-400 mt-2">
          Five interactive React activities demonstrating state, events, conditional logic, validation, and calculations!
      </h2>
      <div className="flex flex-row items-center justify-center gap-8 mt-12">
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
      <div className="flex flex-row items-center justify-center gap-8 mt-12">
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
  )
}