"use client";

import React, { useEffect } from "react";
import { CiPlay1 } from "react-icons/ci";
import { IoPlaySkipBackOutline } from "react-icons/io5";
import { IoPlaySkipForwardOutline } from "react-icons/io5";
import { Pause } from 'lucide-react';
import { useState } from "react";


const Player: React.FC = () => {

    const [isplay, setplay] = useState(false) 

  useEffect(() => {
    if (typeof window === "undefined") return;

    const AUDIO_SOURCE =
      "https://cdn.pixabay.com/audio/2025/03/18/audio_831443b0f4.mp3";

    const visualizerBars = Array.from(
      document.querySelectorAll(".audio-bar")
    ) as HTMLElement[];

    const progressFill = document.querySelector(
      "[data-progress-fill]"
    ) as HTMLElement | null;
    const currentTimeEl = document.querySelector(
      "[data-current-time]"
    ) as HTMLElement | null;
    const totalTimeEl = document.querySelector(
      "[data-total-time]"
    ) as HTMLElement | null;
    const playToggle = document.querySelector(
      '[data-action="toggle"]'
    ) as HTMLElement | null;
    const prevBtn = document.querySelector(
      '[data-action="prev"]'
    ) as HTMLElement | null;
    const nextBtn = document.querySelector(
      '[data-action="next"]'
    ) as HTMLElement | null;

    const audio = new Audio(AUDIO_SOURCE);
    audio.crossOrigin = "anonymous";
    audio.preload = "metadata";

    const audioState = {
      audio,
      audioContext: null as AudioContext | null,
      analyser: null as AnalyserNode | null,
      gainNode: null as GainNode | null,
      animationFrame: 0,
      isPlaying: false,
    };

    function initAudioGraph() {
      if (audioState.audioContext) return;
      const ctx = new AudioContext();
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 256;
      const gain = ctx.createGain();

      const src = ctx.createMediaElementSource(audio);
      src.connect(analyser);
      analyser.connect(gain);
      gain.connect(ctx.destination);

      audioState.audioContext = ctx;
      audioState.analyser = analyser;
      audioState.gainNode = gain;
    }

    function drawVisualizer() {
      if (!audioState.analyser) return;
      const bufferLength = audioState.analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      audioState.analyser.getByteFrequencyData(dataArray);

      visualizerBars.forEach((bar, i) => {
        const value = dataArray[i * 2] / 255;
        const height = Math.max(value * 44, 2);
        bar.style.height = `${height}px`;
      });

      audioState.animationFrame = requestAnimationFrame(drawVisualizer);
    }

    function stopVisualizer() {
      cancelAnimationFrame(audioState.animationFrame);
      visualizerBars.forEach((bar) => (bar.style.height = "2px"));
    }

    async function togglePlayback() {
      initAudioGraph();
      if (audioState.audioContext?.state === "suspended")
        await audioState.audioContext.resume();

      if (audioState.isPlaying) {
        audio.pause();
        audioState.isPlaying = false;
        stopVisualizer();
        playToggle?.classList.remove("is-playing");
      } else {
        await audio.play();
        audioState.isPlaying = true;
        drawVisualizer();
        playToggle?.classList.add("is-playing");
      }
    }

    function skipBy(seconds: number) {
      audio.currentTime = Math.max(0, audio.currentTime + seconds);
    }

    function formatTime(sec: number) {
      const m = Math.floor(sec / 60);
      const s = Math.floor(sec % 60);
      return `${m}:${s.toString().padStart(2, "0")}`;
    }

    function updateProgress() {
      if (!progressFill || !currentTimeEl || !totalTimeEl) return;
      progressFill.style.width = `${(audio.currentTime / audio.duration) * 100}%`;
      currentTimeEl.textContent = formatTime(audio.currentTime);
      totalTimeEl.textContent = formatTime(audio.duration);
    }

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", () => {
      audioState.isPlaying = false;
      stopVisualizer();
      playToggle?.classList.remove("is-playing");
    });

    playToggle?.addEventListener("click", togglePlayback);
    prevBtn?.addEventListener("click", () => skipBy(-10));
    nextBtn?.addEventListener("click", () => skipBy(10));

    return () => {
      audio.pause();
      stopVisualizer();
      cancelAnimationFrame(audioState.animationFrame);
    };
  }, []);

  return (
    <div className="hidden sm:flex fixed top-60 left-32 transform -translate-x-1/2 z-50 flex flex-col justify-around gap-0.5 p-2.5 bg-white/90 dark:bg-black/15 bg-white-900 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-7 border border-gray-50 inset-0 w-50 h-100">
      {/* Album Art */}
      <div className="aspect-square rounded-2xl overflow-hidden flex items-center justify-center shadow-[0_18px_32px_-24px_rgba(15,23,42,0.8)]">
        <img
          src="https://i.scdn.co/image/ab67616d0000b273982320da137d0de34410df61"
          alt="Timeless cover art"
          draggable={false}
          className="w-full h-full object-cover rounded-2xl saturate-105 pointer-events-none"
        />
      </div>

      {/* Info + Visualizer */}
      <section className="flex flex-col w-full gap-2">
        <div className="flex items-center justify-between w-full gap-4">
          <div className="min-w-0 flex-1">
            <h3 className="text-sm font-semibold truncate">Timeless</h3>
            <p className="text-xs text-gray-400 truncate">
              Playboi Carti x The Weeknd Type Beat
            </p>
          </div>

          <div className="flex items-end gap-[2px] h-11">
            {Array.from({ length: 9 }).map((_, i) => (
              <span
                key={i}
                className="audio-bar w-[2px] h-1 bg-white rounded-full origin-bottom transition-all duration-150"
              ></span>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex flex-col gap-2 w-full mt-2">
          <div
            className="relative w-full h-[6px] rounded-full bg-white/20 overflow-hidden cursor-pointer"
            data-progress-track
          >
            <div
              className="absolute inset-0 w-0 bg-amber-50 rounded-full transition-[width] duration-100 ease-linear"
              data-progress-fill
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-400">
            <span data-current-time>0:00</span>
            <span data-total-time>3:45</span>
          </div>
        </div>
      </section>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-3 w-full">
        <button
          type="button"
          className="p-2 hover:text-white"
          data-action="prev"
        >
          <IoPlaySkipBackOutline />
        </button>

        <button
          className="p-3 rounded-full  text-white text-2xl"
          data-action="toggle"
          onClick={()=>setplay(!isplay)}>
          {isplay ? <Pause /> : <CiPlay1 />}
        </button>

        <button
          type="button"
          className="p-2 hover:text-white"
          data-action="next"
        >
          <IoPlaySkipForwardOutline />
        </button>
      </div>
    </div>
  );
};

export default Player;
