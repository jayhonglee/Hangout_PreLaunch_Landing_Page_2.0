import { useState, useEffect } from "react";
import mobileScreen from "../assets/MobileScreen.png";
import mobileScreen2 from "../assets/MobileScreen2.png";
import mobileScreen3 from "../assets/MobileScreen3.png";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 0, image: mobileScreen },
    { id: 1, image: mobileScreen3 },
    { id: 2, image: mobileScreen2 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Auto-advance every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    (e.currentTarget as HTMLElement).setAttribute(
      "data-touch-start",
      touch.clientX.toString()
    );
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchStart = parseFloat(
      (e.currentTarget as HTMLElement).getAttribute("data-touch-start") || "0"
    );
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left - next slide
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      } else {
        // Swipe right - previous slide
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      }
    }
  };

  return (
    <div className="w-full">
      <div
        className="relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="min-w-full flex justify-center items-center px-4"
            >
              <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
                <img
                  src={slide.image}
                  alt={`Slide ${slide.id + 1}`}
                  className="w-full h-auto max-h-[70vh] object-contain"
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Radio button indicators */}
        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                currentSlide === index
                  ? "w-3 h-3 bg-white"
                  : "w-3 h-3 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
