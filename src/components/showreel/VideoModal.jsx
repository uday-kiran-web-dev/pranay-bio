import React, { useEffect, useRef } from 'react';
import { X, Play, Pause, Volume2, VolumeX } from 'lucide-react';

export default function VideoModal({ isOpen, onClose, videoSrc, title = 'SHOWREEL 2026' }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [isMuted, setIsMuted] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6">
      <div className="relative w-full max-w-4xl aspect-video bg-[#101010] rounded-lg overflow-hidden border border-white/10 shadow-2xl flex flex-col justify-between">

        {/* Top bar */}
        <div className="p-4 flex items-center justify-between text-white z-10 bg-gradient-to-b from-black/80 to-transparent">
          <div className="flex items-center space-x-2 text-xs font-mono tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#D90B15]" />
            <span>{title}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-white/10 text-white cursor-pointer"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Video / Placeholder */}
        <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
          {videoSrc ? (
            <video
              ref={videoRef}
              src={videoSrc}
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <div>
              <div className="w-16 h-16 rounded-full bg-[#D90B15] text-white flex items-center justify-center mx-auto mb-4">
                <Play size={24} fill="currentColor" className="ml-1" />
              </div>
              <h4 className="text-xl font-display text-white uppercase mb-2">
                Showreel Video Placeholder
              </h4>
              <p className="text-xs font-mono text-white/60 max-w-sm mx-auto">
                Official showreel video file can be placed in /public/videos/showreel.mp4
              </p>
            </div>
          )}
        </div>

        {/* Bottom bar */}
        <div className="p-4 text-xs font-mono text-white/60 flex items-center justify-between border-t border-white/10">
          <span>24 FPS • 4K UHD MASTER</span>
          <span>PRESS ESC TO CLOSE</span>
        </div>
      </div>
    </div>
  );
}
