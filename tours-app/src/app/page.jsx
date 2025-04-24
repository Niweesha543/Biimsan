'use client'; 
import { useEffect, useState } from 'react';

const videos = [
  '/bdvideo_1.mp4',
  '/bdvideo_2.mp4',
];

export default function Home() {
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 7000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
    <div className="relative w-full h-screen overflow-hidden">
      {videos.map((video, index) => (
        <video
          key={index}
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentVideo ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        />
      ))}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-20 flex items-center justify-center text-white text-[80px] font-san-serif">
      Journey - Explore - Connect
      </div>
    </div>

    </div>

  );
}
