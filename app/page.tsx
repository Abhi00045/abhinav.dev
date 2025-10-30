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
      <div className="min-h-screen p-3.5 bg-[url(https://cdn.wallpapersafari.com/87/23/X3lUA5.jpg)] bg-cover bg-center bg-no-repeat bg-fixed">
        <Nav />
        <Player/>
        <main className="max-w-5xl mx-auto pb-24">
          <HomePage />
        </main>
      </div>
    </>
  );
}
