import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiDjango } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center font-bold text-4xl text-white">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-8">
       
        <div className="rounded-2xl border-4 border-neutral-800 p-6 hover:bg-neutral-700 transition">
          <FaHtml5 className="text-7xl text-orange-500" />
        </div>

        
        <div className="rounded-2xl border-4 border-neutral-800 p-6 hover:bg-neutral-700 transition">
          <FaCss3Alt className="text-7xl text-blue-500" />
        </div>

       
        <div className="rounded-2xl border-4 border-neutral-800 p-6 hover:bg-neutral-700 transition">
          <FaJs className="text-7xl text-yellow-400" />
        </div>

        
        <div className="rounded-2xl border-4 border-neutral-800 p-6 hover:bg-neutral-700 transition">
          <FaBootstrap className="text-7xl text-purple-600" />
        </div>

        
        <div className="rounded-2xl border-4 border-neutral-800 p-6 hover:bg-neutral-700 transition">
          <SiTailwindcss className="text-7xl text-cyan-400" />
        </div>

        
        <div className="rounded-2xl border-4 border-neutral-800 p-6 hover:bg-neutral-700 transition">
          <FaReact className="text-7xl text-cyan-400" />
        </div>

        
        <div className="rounded-2xl border-4 border-neutral-800 p-6 hover:bg-neutral-700 transition">
          <FaPython className="text-7xl text-blue-400" />
        </div>

        
        <div className="rounded-2xl border-4 border-neutral-800 p-6 hover:bg-neutral-700 transition">
          <SiDjango className="text-7xl text-green-600" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
