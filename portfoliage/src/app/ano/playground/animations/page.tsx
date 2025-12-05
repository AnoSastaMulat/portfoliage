"use client"
import { useState } from "react";

export default function AnimationsAnoPlayground() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPosition({ x: e.clientX, y: e.clientY });
    }
  };

  return (
    <div 
      className="relative w-screen h-screen bg-[#FFF9F4] text-black overflow-hidden select-none">
      <div className="flex flex-col items-center">
        <h1 className="text-6xl font-bold mt-40 mb-10">Youkoso...</h1>
        <h2 className="text-2xl mb-20">Watashi no... Soul Society</h2>
      </div>
      {/* Content */}
        <div 
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          style={{
          left: `${position.x}px`,
          top: `${position.y - 100}px`,
          transform: 'translate(-50%, -50%)',
          }}
          onMouseDown={handleMouseDown}
          className="absolute flex items-end justify-end p-2 text-2xl border rounded-2xl bg-[#FFF9F4] w-[300px] h-[300px] origin-top-left transform transition duration-500 hover:scale-110 active:scale-100 cursor-grab active:cursor-grabbing">drag me!</div>
      </div>
  );
}
