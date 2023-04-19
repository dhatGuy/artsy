import { Variants, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "~/lib/utils";
import MotionImg from "./MotionImg";

const carouseImages = [
  { path: "/images/ruslan-zaplatin.jpg", h: "h-[332px]" },
  { path: "/images/alexa-portoraro.jpg", h: "h-[428px]" },
  { path: "/images/vladislav-nahorny.jpg", h: "h-[444px]" },
  { path: "/images/andre-lergier.jpg", h: "h-[428px]" },
  { path: "/images/impermanent.jpg", h: "h-[428px]" },
];

const variants: Variants = {
  start: (x) => ({
    x: -1 * x * 358,
  }),
  slide: (x) => ({
    x: -1 * x * 358,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  }),
};

const Slider = ({ startingIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(startingIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        if (prev * 358 === 358 * (carouseImages.length - 1)) return 0;

        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex overflow-hidden">
      <motion.div
        variants={variants}
        initial="start"
        animate="slide"
        custom={activeIndex}
        className={cn("flex w-[358px]")}
      >
        {carouseImages.map((img, i) => (
          <MotionImg
            key={i}
            alt="carousel image"
            animate={{
              marginTop:
                i === 0
                  ? 80
                  : i === 1
                  ? 60
                  : i === 2
                  ? 0
                  : i === 3
                  ? 60
                  : i === 4
                  ? 80
                  : 0,
            }}
            src={img.path}
            width={400}
            height={300}
            className={cn("min-w-full object-cover", img.h)}
          />
        ))}
      </motion.div>
    </div>
  );
};

function Carousel() {
  return (
    <div className="mt-10 hidden h-[500px] min-w-fit gap-4 md:flex">
      {Array.from({ length: 5 }).map((_, i) => (
        <Slider key={i} startingIndex={i} />
      ))}
    </div>
  );
}

export default Carousel;
