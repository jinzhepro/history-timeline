import Head from "next/head";
import Timeline from "@/components/Timeline";
import Link from "next/link";
import { useState, useEffect } from "react";

/**
 * 首页组件
 */
export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
      setShowBackToTop(scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * 滚动到页面顶部
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // 服务端渲染和客户端初始渲染使用相同的 className
  const navClassName = mounted && scrolled
    ? "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-red-900/80 backdrop-blur-md shadow-lg text-white"
    : "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-to-r from-red-900 to-red-700 text-white";

  return (
    <>
      <Head>
        <title>朝代纪 - 中国历史朝代时间线</title>
        <meta name="description" content="探索中国五千年历史，从夏朝到中华民国的完整朝代时间线，包含重要历史事件和文化成就" />
        <meta name="keywords" content="中国历史，朝代，时间线，历史文化，夏商周，秦汉，唐宋，元明清，中华民国" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph 元数据 */}
        <meta property="og:title" content="朝代纪 - 中国历史朝代时间线" />
        <meta property="og:description" content="探索中国五千年历史，从夏朝到中华民国的完整朝代时间线" />
        <meta property="og:type" content="website" />
      </Head>

      <main>
        {/* 导航栏 - 粘性定位，滚动时透明 */}
        <nav className={navClassName}>
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'KaiTi, STKaiti, serif' }}>朝代纪</h1>
            <div className="flex gap-4">
              <Link
                href="/quiz"
                className="bg-white text-red-900 hover:bg-red-50 transition-all px-6 py-2 rounded-lg font-bold flex items-center gap-2 shadow-md hover:shadow-lg border-2 border-white"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                历史知识测验
              </Link>
            </div>
          </div>
        </nav>

        {/* 占位元素，防止内容被固定导航栏遮挡 */}
        <div className="h-16"></div>

        <Timeline />

        {/* 回到顶部按钮 */}
        {mounted && showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-red-800 to-red-900 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center border-2 border-white/20"
            aria-label="回到顶部"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        )}
      </main>
    </>
  );
}
