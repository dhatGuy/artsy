"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "~/lib/utils";
import { MotionImg } from "../ui";

const images = [
  "/images/creator-1.png",
  "/images/creator-2.png",
  "/images/creator-3.png",
];

function TopCreators() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(
        currentImage === images.length - 1 ? 0 : currentImage + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="relative bg-[#E2E2E2] font-clash-display md:p-24">
      <div className="mb-8 flex-row-reverse justify-between overflow-hidden md:flex">
        <div className="flex gap-8">
          <div
            className={cn(
              "relative hidden h-full w-3 rounded-full bg-[#AEAEAE] md:block",
              "after:absolute after:bottom-0 after:h-1/4 after:w-3 after:rounded-full after:bg-black"
            )}
          />
          <ul
            className={cn(
              "relative -right-24 ml-auto flex w-fit justify-end gap-4 text-gray",
              "md:static md:ml-auto md:flex-col"
            )}
          >
            <li className="text-[10px] md:text-[40px]">Editorials</li>
            <li
              className={cn(
                "flex items-center gap-2 text-[10px] md:text-[40px]",
                "before:h-[7px] before:w-[7px] before:rounded-full before:bg-black before:pr-2 before:md:hidden"
              )}
            >
              Fashion
            </li>
            <li
              className={cn(
                "flex items-center gap-2 text-[10px] md:text-[40px]",
                "before:h-[7px] before:w-[7px] before:rounded-full before:bg-black before:pr-2 before:md:hidden"
              )}
            >
              Lifestyle
            </li>
            <li
              className={cn(
                "flex items-center gap-2 text-[10px] md:text-[40px]",
                "before:h-[7px] before:w-[7px] before:rounded-full before:bg-black before:pr-2 before:md:hidden"
              )}
            >
              Blueprint
            </li>
          </ul>
        </div>

        <h1
          className={cn(
            "max-w-[265px] pl-2 text-2xl font-semibold uppercase leading-[37px]",
            "md:max-w-xl md:pl-0 md:text-[55px] md:leading-[86px]"
          )}
        >
          Top creators of the week
        </h1>
      </div>
      <div
        className={cn(
          "relative max-w-6xl py-4 text-center text-[13px] font-extralight",
          "md:text-left md:text-[32px] md:text-[#00000091]"
        )}
      >
        “Everything always looked better in black and white. Everything always
        as if it were the first time; there&apos;s always more people in a black
        and white photograph. It just makes it seem that there were more people
        at a gig, more people at a football match, than with colour photography.
        Everything looks more exciting.”– Jack Lowden
        <div className="absolute right-1 top-[35%] pr-2 text-[32px] font-bold uppercase md:text-5xl md:text-black">
          circa
        </div>
      </div>

      <h2 className="ml-auto w-fit pr-2 text-[64px] font-bold text-[#161616] line-through lg:text-[170px]">
        1985
      </h2>

      <AnimatePresence>
        <MotionImg
          className="absolute -bottom-8 right-10 h-[240px] w-[240px] object-cover md:right-44 md:h-auto md:w-auto"
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          initial={{
            opacity: 0,
          }}
          transition={{
            duration: 3,
            ease: "easeOut",
          }}
          width={800}
          height={800}
          key={currentImage}
          src={images[currentImage]}
          alt="creator"
        />
      </AnimatePresence>
    </div>
  );
}

export default TopCreators;
