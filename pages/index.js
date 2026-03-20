import Head from "next/head";
import Timeline from "@/components/Timeline";
import Link from "next/link";
import { useState, useEffect } from "react";

/**
 * 首页组件
 */
export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>朝代纪 - 中国历史朝代时间线</title>
        <meta name="description" content="探索中国五千年历史，从夏朝到中华民国的完整朝代时间线" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-paper">
        {/* 导航栏 */}
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-paper/95 backdrop-blur border-b border-[rgba(0,0,0,0.08)]' : 'bg-paper'
        }`}>
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-ink font-chinese tracking-widest">朝代纪</h1>
            <Link
              href="/quiz"
              className="text-sm font-chinese px-5 py-2 border border-ink rounded text-ink hover:bg-ink hover:text-white transition-colors"
            >
              历史知识测验
            </Link>
          </div>
        </nav>

        {/* 占位 */}
        <div className="h-16"></div>

        <Timeline />

        {/* 页脚 */}
        <footer className="py-12 text-center border-t border-[rgba(0,0,0,0.08)]">
          <p className="text-sm text-gray font-chinese">中华文明 · 源远流长</p>
        </footer>
      </main>
    </>
  );
}
