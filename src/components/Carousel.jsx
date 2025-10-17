

    // src/components/Carousel.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Carousel = ({ images, interval = 4000 }) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const timerRef = useRef(null);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    resetTimer();
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    resetTimer();
  };

  const goToSlide = (i) => {
    if (i === current) return;
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
    resetTimer();
  };

  // Reset + restart interval timer
  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, interval);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [interval, images.length]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 150 : -150,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      zIndex: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 150 : -150,
      opacity: 0,
      scale: 0.98,
      zIndex: 0,
    }),
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-lg">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 250, damping: 30 },
            opacity: { duration: 0.4 },
          }}
          className="w-full h-56 sm:h-72 md:h-96 object-cover select-none"
          draggable="false"
        />
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-[#142d25]/70 text-[#eae0d0] p-2 rounded-full hover:bg-[#142d25] transition"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#142d25]/70 text-[#eae0d0] p-2 rounded-full hover:bg-[#142d25] transition"
      >
        ›
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              i === current ? "bg-[#b9985c]" : "bg-[#eae0d0]/50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
