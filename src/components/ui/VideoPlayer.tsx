import { useRef, useState, useEffect } from 'react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
}

const VideoPlayer = ({ src, poster, title }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  // Efecto para manejar el evento de keydown para controlar el video con el teclado
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === ' ' || event.key === 'k') {
        togglePlay();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isPlaying]);

  return (
    <div className="video-container relative rounded-lg overflow-hidden shadow-lg">
      {title && (
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
      )}
      <div 
        className="relative cursor-pointer aspect-video bg-black"
        onClick={togglePlay}
      >
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          className="w-full h-full object-cover"
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
        
        {/* Overlay para los controles */}
        <div className="absolute inset-0 flex items-center justify-center">
          {!isPlaying && (
            <button 
              className="bg-primary/80 text-white rounded-full p-4 hover:bg-primary transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" 
                />
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
            </button>
          )}
        </div>
        
        {/* Barra de progreso */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200">
          <div 
            className="h-full bg-primary"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer; 