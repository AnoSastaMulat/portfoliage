import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ZoomOutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'], // Adjust offsets for desired trigger points
  });

  const scale = useTransform(scrollYProgress, [0.5 , 1], [1, 0]); // Zoom out as you scroll down

  return (
    <div ref={ref} style={{ height: '200vh' }}> {/* Example: Make section tall enough to scroll */}
      <motion.div
        style={{ scale }}
        className="fixed flex items-center justify-center bg-blue-500" // Example styling
      >
        <h1>Zooming Content</h1>
      </motion.div>
    </div>
  );
}