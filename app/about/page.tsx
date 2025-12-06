import { FaMapMarkerAlt, FaUniversity, FaLaptopCode, FaSeedling, FaPlane, FaBriefcase } from "react-icons/fa";

export default function About() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* 1. タイトルエリア */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Me</span>
          </h1>
          <p className="text-slate-400">私について / ビジョン</p>
        </div>

        {/* 2. メインコンテンツ（2カラムレイアウト） */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* 左側：プロフィールカード */}
          <div className="md:col-span-1">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl sticky top-24 shadow-xl">
              {/* アイコン画像エリア */}
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl shadow-lg">
                🧑‍💻
              </div>
              
              <h2 className="text-2xl font-bold text-center mb-2">Yu Tobaru</h2>
              <p className="text-blue-400 text-sm font-bold text-center mb-6 uppercase tracking-widest">IoT Engineer Student</p>
              
              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg">
                  <FaMapMarkerAlt className="text-blue-500" />
                  <div>
                    <p className="text-xs text-slate-500">Origin</p>
                    <p>沖縄県出身</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg">
                  <FaUniversity className="text-blue-500" />
                  <div>
                    <p className="text-xs text-slate-500">University</p>
                    <p>東京国際工科専門職大学</p>
                    <p className="text-xs">IoTシステムコース 3年</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 右側：詳細情報 & タイムライン */}
          <div className="md:col-span-2 space-y-10">
            
            {/* 自己紹介文章 */}
            <section className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-blue-400"> </span> Introduction
              </h3>
              <p className="leading-relaxed text-slate-300 mb-4">
                こんにちは。現在は東京国際工科専門職大学でIoTシステムコースに進み、
                主に<strong>Raspberry Piを用いたセンシング技術</strong>や、
                データを収集・活用するための<strong>サーバネットワーク</strong>について深く学んでいます。
              </p>
              <p className="leading-relaxed text-slate-300">
                ハードウェアからクラウドまで一気通貫したシステムの理解を目指し、日々開発に取り組んでいます。
              </p>
            </section>

            {/* 興味・関心エリア */}
            <section>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="text-green-400"> </span> Interests & Focus
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl hover:border-green-500 transition group">
                  <FaSeedling className="text-3xl text-green-500 mb-3 group-hover:scale-110 transition" />
                  <h4 className="font-bold mb-2">Smart Agriculture</h4>
                  <p className="text-sm text-slate-400">農業 × IoT。センサーデータに基づいた最適な栽培環境の構築に興味があります。</p>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl hover:border-yellow-500 transition group">
                  <FaBriefcase className="text-3xl text-yellow-500 mb-3 group-hover:scale-110 transition" />
                  <h4 className="font-bold mb-2">BtoB Solutions</h4>
                  <p className="text-sm text-slate-400">金融 × IoTなど、ビジネス課題を技術で解決する分野に関心を持っています。</p>
                </div>
              </div>
            </section>

            {/* タイムライン（経歴） */}
            <section>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="text-purple-400"> </span> Journey
              </h3>
              
              <div className="border-l-2 border-slate-800 ml-3 space-y-8 pl-8 relative">
                
                {/* 項目1 */}
                <div className="relative">
                  <div className="absolute -left-[41px] bg-slate-950 border-2 border-purple-500 w-6 h-6 rounded-full"></div>
                  <span className="text-sm text-purple-400 font-bold">2023.04</span>
                  <h4 className="text-lg font-bold mt-1">東京国際工科専門職大学 入学</h4>
                  <p className="text-slate-400 text-sm mt-1">
                    情報工学科 IoTシステムコースにて、プログラミングとハードウェアの基礎を学び始める。
                  </p>
                </div>

                {/* 項目2 */}
                <div className="relative">
                  <div className="absolute -left-[41px] bg-slate-950 border-2 border-blue-500 w-6 h-6 rounded-full"></div>
                  <span className="text-sm text-blue-400 font-bold">2025.09</span>
                  <h4 className="text-lg font-bold mt-1 flex items-center gap-2">
                    シアトル海外実習 <FaPlane className="text-slate-500" />
                  </h4>
                  <p className="text-slate-400 text-sm mt-1">
                    ITの本場米国での短期研修に参加。グローバルな視点と現地の開発文化に触れる。
                  </p>
                </div>

                {/* 項目3 (現在) */}
                <div className="relative">
                  <div className="absolute -left-[41px] bg-purple-500 w-6 h-6 rounded-full animate-pulse"></div>
                  <span className="text-sm text-purple-400 font-bold">Now</span>
                  <h4 className="text-lg font-bold mt-1">就職活動 & ポートフォリオ制作</h4>
                  <p className="text-slate-400 text-sm mt-1">
                    学んだ技術で地域の課題解決に貢献できるエンジニアを目指し、活動中。
                  </p>
                </div>

              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}