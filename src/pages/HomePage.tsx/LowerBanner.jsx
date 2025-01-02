import { Button } from "antd";

const LowerBanner = () => {
  return (
    <div className="mt-16">
      <div className="flex flex-col md:flex-row gap-32 ">
     <div className="w-full">
     <div className="bg-blue-400 relative w-4/5 md:w-full lg:w-3/5 h-[650px] ">
<img src="https://shop.lifefitness.com/cdn/shop/files/Symbio-SwitchCycle-Upright-Vertical.jpg?v=1733177600&width=1000" alt="" className=" absolute  h-[550px]  mt-12 ml-16 xl:ml-[200px] lg:ml-[180px] " />
      </div>
     </div>
      <div className="w-full flex justify-center items-center mr-10 ">
      <div className="text-center">
      <h4 className="text-blue-500 text-sm font-semibold uppercase text-center ">
          Just Released
        </h4>
        <h1 className="text-2xl font-bold tracking-wide mb-4">
          SYMBIO <span className="tracking-widest">S W I T C H</span> CYCLE™
        </h1>
        <p className="text-gray-700 text-base leading-relaxed mb-6">
          Bring home the latest in fitness innovation. The first of its kind,
          the 2-in-1 Symbio SwitchCycle™ offers both a traditional upright bike
          experience and the out-of-saddle performance of an indoor cycle.
          Featuring 100 resistance levels, interactive terrains, and on-demand
          content, the Symbio SwitchCycle™ will take your home workouts to the
          next level.
        </p>
        <Button type="primary" className='py-5' danger>
      learn More
    </Button>
  
      </div>
    
     </div>
    </div>
    </div>
  );
};

export default LowerBanner;
