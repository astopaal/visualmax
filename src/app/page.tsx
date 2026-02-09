import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Overview from "@/components/sections/Overview";
import Features from "@/components/sections/Features";
import Security from "@/components/sections/Security";
import Architecture from "@/components/sections/Architecture";
import Statistics from "@/components/sections/Statistics";
// import Roadmap from "@/components/sections/Roadmap";
import CTA from "@/components/sections/CTA";
import Videowall from "@/components/sections/Videowall";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Overview />
        <Features />
        <Videowall />
        <Security />
        <Architecture />
        <Statistics />
        {/* <Roadmap /> */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}
