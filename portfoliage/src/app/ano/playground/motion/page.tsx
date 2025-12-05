"use client"
import { motion } from "motion/react"

export default function MotionAnoPlayground() {
  return (
    <div className="bg-[#FFF9F4] text-black w-full px-20 pb-67 relative overflow-hidden">
        <div className="flex flex-col items-center">
          <h1 className="text-6xl font-bold mt-40 mb-10">Welcome to the Motion.dev Playground! :D</h1>
          <h2 className="text-2xl mb-20">Let's animate some stuff!</h2>
        </div>
        {/* Content */}
        <div className="flex flex-col gap-20 mb-20">
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={box}
          />
        </div>
    </div>
  );
}

const box = {
    width: 100,
    height: 100,
    backgroundColor: "#9911ff",
    borderRadius: 5,
}
