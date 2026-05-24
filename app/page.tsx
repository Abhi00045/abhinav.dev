"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { HomePage } from "@/Components/HomeComponents/homePage";
import Nav from "@/Components/PageComponents/topNav";
import Player from '@/utils/player'

export default function Home() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,      // scroll smoothing duration
      smoothWheel: true,  // smooth mouse wheel // you can enable if needed on touch devices
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <div className="min-h-screen"
       style={{
          backgroundColor: '#f2c4c4',
          backgroundImage: 'radial-gradient(#d98a8a 1px, transparent 1px)',
          backgroundSize: '12px 12px',
          minHeight: '100vh',
        }}
      >
        <Nav />
        {/* <Player/> */}
        <main>
          <HomePage />
        </main>
        {/* //letsgo */}
      </div>
    </>
  );
}
