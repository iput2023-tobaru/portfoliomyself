import { FaMapMarkerAlt, FaUniversity, FaSeedling, FaPlane, FaBriefcase } from "react-icons/fa";

export default function About() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Me</span>
          </h1>
          <p className="text-slate-400">私について / ビジョン</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* 左カラム：プロフィール */}
          <div className="md:col-span-1">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl sticky top-24 shadow-xl">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-5xl shadow-lg border-4 border-slate-900">
                🧑‍💻
              </div>
              <h2 className="text-2xl font-bold text-center mb-2">Yuki Momohara</h2>
              <p className="text-blue-400 text-sm font-bold text-center mb-6 uppercase tracking-widest">IoT Engineer Student</p>
              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg">
                  <FaMapMarkerAlt className="text-blue-500" />
                  <div><p className="text-xs text-slate-500">Origin</p><p>沖縄県出身</p></div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg">
                  <FaUniversity className="text-blue-500" />
                  <div><p className="text-xs text-slate-500">University</p><p>東京国際工科専門職大学</p></div>
                </div>
              </div>
            </div>
          </div>

          {/* 右カラム：詳細 */}
          <div className="md:col-span-2 space-y-10">
            <section className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><span className="text-blue-400"></span> Introduction</h3>
              <p className="leading-relaxed text-slate-300">IoTシステムコースにて、Raspberry Piを用いたセンシング技術やサーバネットワークについて学んでいます。</p>
            </section>
            
            <section>
               <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><span className="text-purple-400"></span> Journey</h3>
               <div className="border-l-2 border-slate-800 ml-3 space-y-8 pl-8 relative">
                 <div className="relative">
                   <div className="absolute -left-[41px] bg-slate-950 border-2 border-blue-500 w-6 h-6 rounded-full"></div>
                   <h4 className="text-lg font-bold mt-1 flex items-center gap-2">シアトル海外実習 <FaPlane className="text-slate-500" /></h4>
                   <p className="text-slate-400 text-sm mt-1">ITの本場米国での短期研修に参加。</p>
                 </div>
               </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}