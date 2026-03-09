import Head from "next/head";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <>
      <Head>
        <title>中华历史长河 - 中国历史朝代时间线</title>
        <meta name="description" content="探索中国五千年历史，从夏朝到清朝的完整朝代时间线，包含重要历史事件和文化成就" />
        <meta name="keywords" content="中国历史，朝代，时间线，历史文化，夏商周，秦汉，唐宋，元明清" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph 元数据 */}
        <meta property="og:title" content="中华历史长河 - 中国历史朝代时间线" />
        <meta property="og:description" content="探索中国五千年历史，从夏朝到清朝的完整朝代时间线" />
        <meta property="og:type" content="website" />
      </Head>
      
      <main>
        <Timeline />
      </main>
    </>
  );
}
