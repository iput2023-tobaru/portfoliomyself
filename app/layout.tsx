import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link"; // これを忘れずに！

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "IoT Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        {/* ▼▼▼ ここからヘッダー（全ページ共通） ▼▼▼ */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
          <nav className="max-w-5xl mx-auto px-6 h-16 flex justify-between items-center">
            {/* ロゴ部分をクリックするとトップに戻る */}
            <Link href="/" className="text-xl font-bold hover:text-blue-600 transition">
              My Portfolio
            </Link>
            
            <ul className="flex gap-6 text-sm font-medium text-gray-600">
              <li>
                <Link href="/" className="hover:text-blue-600 transition">Home</Link>
              </li>
              <li>
                <Link href="/works" className="hover:text-blue-600 transition">Works</Link>
              </li>
            </ul>
          </nav>
        </header>
        {/* ▲▲▲ ここまでヘッダー ▲▲▲ */}

        {children}
      </body>
    </html>
  );
}
