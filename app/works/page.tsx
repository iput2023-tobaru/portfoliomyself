"use client";

import { useState } from "react";
// アイコンを追加：チェックマーク(FaCheckCircle) と 工具(FaTools)
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCheckCircle, FaTools } from "react-icons/fa";

// ▼▼▼ データに status を追加しました ▼▼▼
const projects = [
  {
    id: 1,
    title: "6×6オセロ評価値システム",
    category: "Game / AI",
    status: "In Progress", // ← ここで状態を指定（Completed または In Progress）
    tech: ["Python", "JavaScript", "Flask", "HTML/CSS"],
    description: "まだ、企画段階。Pythonを用いて、6×6オセロの評価値を割り出すシステムの開発に取り組む予定",
    imageColor: "bg-green-600",
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "データ蓄積・分析・可視化システム for スマート農業",
    category: "IoT / Azure",
    status: "Completed", // ← 実装途中
    tech: ["Raspberry Pi", "Microsoft Azure", "Python", "Sensors", "InfluxDB", "Tailscale"],
    description: "農業の課題解決を目指したIoTシステム。Raspberry Piで温度・湿度・照度データを取得し、Microsoft Azureへ送信。データの蓄積及びそれらを用いて、可視化、分析するためのシステムクラウドサービスを用いずにRaspberry PiとWindowsPC環境のみを用いたVPNを活用した安価のモデルも開発",
    imageColor: "bg-blue-600",
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "My Portfolio",
    category: "Web Site",
    status: "In Progress",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    description: "Next.js, TypeScript, Tailwind CSS, Vercelを用いて作成。初めて触れる技術もあったためGeminiを多く活用しながらなんとか完成できた。TypeScriptは初めて触れたがJSに似ていたので、思ったよりは理解するのに時間はかからなかった",
    imageColor: "bg-purple-600",
    link: "/",
    github: "#",
  },
  {
    id: 4,
    title: "超音波センサを用いた自立制御ロボット制作",
    category: "Robot",
    status: "In Progress",
    tech: ["Stduino", "Solidworks"],
    description: "元が、電源供給が電池及び制御が有線のコントローラーがついていたロボットをボディを3Dプリンタを用いて造形し、電源供給をモバイルバッテリーで制御部分をStduino基板及び言語を用いて制御する教育用で使用できるようなロボット制作へ取り組んだ。プロトタイプまでは完成した。",
    imageColor: "bg-orange-500",
    link: "#",
    github: "#",
  },
];

export default function Works() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  // ステータスに応じてバッジのデザインを返す関数
  const getStatusBadge = (status: string) => {
    if (status === "Completed") {
      return (
        <span className="flex items-center gap-1 bg-green-500/20 text-green-400 text-xs font-bold px-2 py-1 rounded-full border border-green-500/30">
          <FaCheckCircle size={10} /> Completed
        </span>
      );
    } else {
      return (
        <span className="flex items-center gap-1 bg-yellow-500/20 text-yellow-400 text-xs font-bold px-2 py-1 rounded-full border border-yellow-500/30">
          <FaTools size={10} /> In Progress
        </span>
      );
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">My Works</h1>
          <p className="text-slate-400">これまでに開発したプロジェクトの紹介</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-slate-900 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-5px] transition duration-300 border border-slate-800 hover:border-blue-500 group shadow-lg flex flex-col"
            >
              <div className={`h-48 w-full ${project.imageColor} flex items-center justify-center relative overflow-hidden`}>
                 <span className="text-4xl font-bold text-white/30 group-hover:scale-110 transition duration-500">
                   {project.title.charAt(0)}
                 </span>
                 
                 {/* ▼ 画像の上にステータスバッジを表示 ▼ */}
                 <div className="absolute top-3 right-3">
                   {getStatusBadge(project.status)}
                 </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-blue-400 text-xs font-bold uppercase tracking-wider">
                    {project.category}
                  </p>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition">
                  {project.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && <span className="text-xs text-slate-500">+{project.tech.length - 3}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* モーダル */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-slate-900 w-full max-w-2xl rounded-2xl overflow-hidden border border-slate-700 shadow-2xl relative animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-red-500 text-white p-2 rounded-full transition z-10"
            >
              <FaTimes />
            </button>

            <div className={`h-64 w-full ${selectedProject.imageColor} flex items-center justify-center relative`}>
              <span className="text-6xl font-bold text-white/30">{selectedProject.title}</span>
              {/* モーダル内にもステータス表示 */}
              <div className="absolute bottom-4 right-4 scale-125">
                 {getStatusBadge(selectedProject.status)}
              </div>
            </div>

            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-blue-400 text-sm font-bold uppercase mb-1">{selectedProject.category}</p>
                  <h2 className="text-3xl font-bold">{selectedProject.title}</h2>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <div className="mb-8">
                <h4 className="text-sm text-slate-500 font-bold mb-2">USED TECHNOLOGY</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="text-sm bg-slate-800 border border-slate-700 px-3 py-1 rounded-full text-blue-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4 border-t border-slate-800">
                <a href={selectedProject.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 rounded-lg transition font-medium">
                  <FaGithub /> GitHub
                </a>
                <a href={selectedProject.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg transition font-medium shadow-lg shadow-blue-900/20">
                  <FaExternalLinkAlt /> Open Project
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}