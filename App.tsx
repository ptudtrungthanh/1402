import React, { useState, useRef, useEffect } from 'react';
import HeartBackground from './components/HeartBackground';
import GiftSlide from './components/GiftSlide';
import LetterSlide from './components/LetterSlide';
import { AppSlide } from './types';
import { MUSIC_URL } from './constants';
import { ChevronRight, ChevronLeft, Music, Music2 } from 'lucide-react';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<AppSlide>(AppSlide.INTRO);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio object only once
    audioRef.current = new Audio(MUSIC_URL);
    audioRef.current.loop = true;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Audio play failed interaction required", e));
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    // Auto-start music on first interaction (Next click) if not playing
    if (!isPlaying && audioRef.current && currentSlide === AppSlide.INTRO) {
        audioRef.current.play().catch(() => {});
        setIsPlaying(true);
    }

    if (currentSlide < AppSlide.LETTER) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentSlide > AppSlide.INTRO) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden font-sans text-gray-800">
      <HeartBackground />

      {/* Music Toggle */}
      <button 
        onClick={toggleMusic}
        className="absolute top-4 right-4 z-50 p-3 bg-white/50 backdrop-blur-md rounded-full shadow-lg text-rose-600 hover:bg-white transition-all"
        title="Toggle Music"
      >
        {isPlaying ? <Music size={24} className="animate-pulse" /> : <Music2 size={24} />}
      </button>

      {/* Main Content Area */}
      <main className="relative z-10 w-full h-full flex flex-col pb-20">
        
        {/* Slide 1: Intro */}
        {currentSlide === AppSlide.INTRO && (
          <div className="flex-1 flex flex-col items-center justify-center animate-fade-in p-6 text-center">
            <h1 className="text-6xl md:text-8xl font-display text-rose-600 mb-6 drop-shadow-md animate-pulse-fast">
              Happy Valentine
            </h1>
            <p className="text-2xl md:text-3xl font-script text-rose-800 max-w-lg">
              Chào mừng Bonn đến với món quà nhỏ của anh ❤️
            </p>
            <div className="mt-12">
               <span className="text-rose-400 text-sm animate-bounce block">Nhấn Continue đi em</span>
            </div>
          </div>
        )}

        {/* Slide 2: Gift */}
        {currentSlide === AppSlide.GIFT && (
          <div className="flex-1 animate-slide-in-right">
            <GiftSlide />
          </div>
        )}

        {/* Slide 3: Letter */}
        {currentSlide === AppSlide.LETTER && (
          <div className="flex-1 animate-slide-in-right">
             <LetterSlide />
          </div>
        )}
      </main>

      {/* Navigation Controls */}
      <div className="absolute bottom-0 left-0 right-0 z-40 p-6 flex justify-between items-center bg-gradient-to-t from-white/80 to-transparent">
        <button
          onClick={handleBack}
          disabled={currentSlide === AppSlide.INTRO}
          className={`flex items-center px-6 py-3 rounded-full font-bold transition-all ${
            currentSlide === AppSlide.INTRO 
              ? 'opacity-0 cursor-default' 
              : 'bg-white text-rose-500 shadow-md hover:bg-rose-50'
          }`}
        >
          <ChevronLeft className="mr-2" size={20} />
          Back
        </button>

        <div className="flex gap-2">
            {/* Dots indicator */}
            {[0, 1, 2].map(i => (
                <div key={i} className={`w-2 h-2 rounded-full transition-all ${currentSlide === i ? 'bg-rose-600 w-6' : 'bg-rose-300'}`} />
            ))}
        </div>

        <button
          onClick={handleNext}
          disabled={currentSlide === AppSlide.LETTER}
          className={`flex items-center px-6 py-3 rounded-full font-bold shadow-lg transition-all transform hover:scale-105 active:scale-95 ${
            currentSlide === AppSlide.LETTER 
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
              : 'bg-rose-500 text-white hover:bg-rose-600'
          }`}
        >
          Continue
          <ChevronRight className="ml-2" size={20} />
        </button>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.8); }
          70% { transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-up {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-pop-in {
          animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        .animate-slide-in-right {
           animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;