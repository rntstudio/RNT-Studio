import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { InstagramLogo, TiktokLogo } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { logo01,logo02, logo04,logo05, logo06 } from '../src/assets';
import { tresemeVideo, burger, knor, } from '../src/assets';

const Hero: React.FC = () => {
  // Story-style video carousel (replace/extend these with your real story videos)
  const storyVideos = useMemo(() => [tresemeVideo, knor, burger], []);

  const [activeStory, setActiveStory] = useState(0);
  const [progress, setProgress] = useState(0); // 0..1
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number>(0);

  const STORY_DURATION_MS = 6500; // feel free to tweak

  const goToStory = (nextIndex: number) => {
    const clamped = Math.max(0, Math.min(nextIndex, storyVideos.length - 1));
    setActiveStory(clamped);
    setProgress(0);
    startRef.current = performance.now();
  };

  const nextStory = () => {
    setActiveStory((prev) => {
      const n = prev + 1;
      return n >= storyVideos.length ? 0 : n;
    });
    setProgress(0);
    startRef.current = performance.now();
  };

  const prevStory = () => {
    setActiveStory((prev) => {
      const n = prev - 1;
      return n < 0 ? storyVideos.length - 1 : n;
    });
    setProgress(0);
    startRef.current = performance.now();
  };

  useEffect(() => {
    // Reset timer whenever the story changes
    startRef.current = performance.now();

    const tick = (t: number) => {
      const elapsed = t - startRef.current;
      const p = Math.min(1, elapsed / STORY_DURATION_MS);
      setProgress(p);
      if (p >= 1) {
        nextStory();
        return;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeStory]);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        
        {/* Left Content */}
        <div className="space-y-8 relative z-10">
          <div className="flex gap-4 mb-4">

            <a
              href="https://www.tiktok.com/@rnt.studio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              <TiktokLogo size={20} weight="light" />
            </a>

            <a
              href="https://www.instagram.com/rnt_studios/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              <InstagramLogo size={20} weight="light" />
            </a>

          </div>

          <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter">
            Donde tu marca<br />
            <span className="italic font-serif font-light">cobra sentido</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-md leading-relaxed">
            En RNT Studios potenciamos marcas con estrategia, contenido y gestión que generan resultados. 
            Creamos identidad, construimos comunidad y hacemos que tus redes crezcan de verdad.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">

            <Link
              to="/Contacto"
              onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
              className="group px-8 py-4 bg-black text-white rounded-full font-semibold flex items-center gap-2 hover:bg-gray-800 transition-colors"
            >
              Agendar llamada
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link 
              to="/CDE" 
              onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
              className="px-8 py-4 bg-transparent border border-gray-300 rounded-full font-semibold hover:border-black transition-colors"
            >
              Ver trabajos
            </Link>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative h-[600px] w-full flex justify-center items-center">
            {/* Abstract Background Shapes */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#E6E1D6] to-transparent rounded-full opacity-50 blur-3xl -z-10"></div>

            {/* Instagram Story-style Carousel */}
            <div className="relative w-[320px] md:w-[380px] aspect-[9/16] bg-white rounded-[3rem] shadow-2xl p-4 overflow-hidden border-8 border-white transform rotate-[-2deg] hover:rotate-0 transition-transform duration-700 ease-out">
                {/* Screen */}
                <div className="w-full h-full rounded-[2.5rem] bg-black relative overflow-hidden">
                    {/* Story video */}
                    <video
                        key={activeStory}
                        src={storyVideos[activeStory]}
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        playsInline
                        preload="auto"
                        aria-label="Story video"
                    />

                    {/* Top fade for UI */}
                    <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

                    {/* Progress bars */}
                    <div className="absolute top-3 left-3 right-3 flex gap-1">
                        {storyVideos.map((_, i) => {
                            const isActive = i === activeStory;
                            const isDone = i < activeStory;
                            return (
                                <div key={i} className="h-1 flex-1 rounded-full bg-white/30 overflow-hidden">
                                    <div
                                        className="h-full bg-white"
                                        style={{
                                            width: isDone ? '100%' : isActive ? `${Math.round(progress * 100)}%` : '0%',
                                            transition: isActive ? 'width 80ms linear' : 'none',
                                        }}
                                    />
                                </div>
                            );
                        })}
                    </div>

                    {/* Header (profile) */}
                    <div className="absolute top-7 left-4 right-4 flex items-center justify-between text-white">
                        <div className="flex items-center gap-3 min-w-0">
                            <div className="w-8 h-8 rounded-full bg-white/20 border border-white/30" />
                            <div className="min-w-0">
                                <p className="text-sm font-semibold leading-none truncate">rnt.studio</p>
                                <p className="text-[11px] text-white/70 leading-none">Reel • Ahora</p>
                            </div>
                        </div>
                        <div className="text-white/80 text-sm select-none">⋯</div>
                    </div>

                    {/* Bottom input (story reply) */}
                    <div className="absolute inset-x-4 bottom-4 flex items-center gap-3">
                        <div className="flex-1 rounded-full border border-white/30 bg-black/20 backdrop-blur-md px-4 py-2 text-white/80 text-xs">
                            Enviar mensaje
                        </div>
                        <div className="w-9 h-9 rounded-full bg-black/25 border border-white/25 backdrop-blur-md flex items-center justify-center text-white/90 text-sm">
                            ❤
                        </div>
                    </div>

                    {/* Click zones for navigation */}
                    <button
                        type="button"
                        onClick={prevStory}
                        aria-label="Historia anterior"
                        className="absolute inset-y-0 left-0 w-1/2 cursor-pointer"
                    />
                    <button
                        type="button"
                        onClick={nextStory}
                        aria-label="Siguiente historia"
                        className="absolute inset-y-0 right-0 w-1/2 cursor-pointer"
                    />

                </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-12 left-0 md:left-12 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce-slow">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Interacción</p>
                    <p className="text-lg font-bold">+116%</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;