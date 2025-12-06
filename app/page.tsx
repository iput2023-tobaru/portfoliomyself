import Link from "next/link";
// ↓ここを修正：エラーが出るアイコンを消して、代わりに FaCloud と FaMicrochip を追加
import { FaPython, FaRaspberryPi, FaMicrosoft, FaNetworkWired, FaCloud, FaMicrochip, FaLinux, FaJava, FaHtml5, FaCss3} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiC, SiCplusplus, SiJavascript, SiTypescript, SiArduino} from "react-icons/si";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-blue-500 selection:text-white">
      
      {/* 1. ヒーローセクション */}
      <section className="py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -z-10"></div>

        <h2 className="text-blue-400 font-medium tracking-wider mb-4">PORTFOLIO</h2>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          YU <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">TOBARU</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          IoT System Course at IPUT.<br />
          Global Professionalを目指す<br className="md:hidden"/>
        </p>
        
        <div className="flex justify-center gap-4">
          <Link href="/about" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition duration-300 shadow-[0_0_20px_rgba(37,99,235,0.5)]">
            About Me
          </Link>
          <Link href="/works" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition duration-300 shadow-[0_0_20px_rgba(37,99,235,0.5)]">
            View Works
          </Link>
        </div>
      </section>

      {/* 2. Tech Stack */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Tech Stack</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <SkillCard 
            icon={<FaPython size={40} className="text-yellow-300" />} 
            name="Python" 
            desc={<>System Programming / Data Analysis / AI<br/>評価：5.0/5</>}/>

          <SkillCard 
            icon={<FaRaspberryPi size={40} className="text-red-500" />} 
            name="Raspberry Pi" 
            desc={<>IoT Device Control<br/>評価：5.0/5</>} />
          
          <SkillCard 
            icon={<FaCloud size={40} className="text-blue-400" />} 
            name="Microsoft Azure" 
            desc={<>Cloud IoT Hub<br/>評価：4.0/5</>} />
          
          <SkillCard 
            icon={<FaNetworkWired size={40} className="text-green-400" />} 
            name="Network" 
            desc={<>Server / Infrastructur<br/>評価：4.0/5</>} />

          <SkillCard 
            icon={<SiNextdotjs size={40} />} 
            name="Next.js" 
            desc={<>Web Frontend<br/>評価：4.0/5</>} />
          
          <SkillCard
            icon={<FaJava size={40} />}
            name="Java"
            desc={<>System Programming<br/>評価：2.5/5</>}/>
          
          <SkillCard
            icon={<SiJavascript size={40} className="text-yellow-500"/>}
            name="JavaScript"
            desc={<>System Programming<br/>評価：4.0/5</>}/>
          
          <SkillCard
            icon={<SiTypescript size={40} className="text-yellow-500"/>}
            name="TypeScript"
            desc={<>System Programming<br/>評価：3.5/5</>}/>
            
          <SkillCard
            icon={<FaHtml5 size={40} className="text-orange-500" />}
            name="HTML"
            desc={<>Makeup Language<br/>評価：5.0/5</>} />

          <SkillCard
            icon={<FaCss3 size={40} className="text-blue-500" />}
            name="CSS"
            desc={<>Styling<br/>評価：5.0/5</>} />

          <SkillCard 
            icon={<SiTailwindcss size={40} className="text-cyan-400" />} 
            name="Tailwind CSS" 
            desc={<>Styling<br/>評価：4.0/5</>} />
          
          <SkillCard 
            icon={<SiArduino size={40} className="text-teal-400" />} 
            name="Arduino" 
            desc={<>Microcontrol<br/>評価：4.0/5</>} />

          <SkillCard 
            icon={<FaLinux size = {40} className="text-yellow-500" />} 
            name="Linux" 
            desc={<>Power Platform<br/>評価：5.0/5</>} />

          <SkillCard
            icon={<SiC size={40} className="text-blue-500" />}
            name="C"
            desc={<>System Programming<br/>評価：4.0/5</>} />

          <SkillCard
            icon={<SiCplusplus size={40} className="text-blue-500" />}
            name="C++"
            desc={<>System Programming<br/>評価：3.0/5</>} />
        </div>
      </section>

    </main>
  );
}

// スキルカード部品
function SkillCard({ icon, name, desc }: { icon: React.ReactNode, name: string, desc: React.ReactNode }) {
  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col items-center text-center hover:border-blue-500 hover:bg-slate-800/50 transition duration-300 group cursor-default">
      <div className="mb-4 group-hover:scale-110 transition duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-1 text-slate-200">{name}</h3>
      <p className="text-xs text-slate-500">{desc}</p>
    </div>
  );
}
