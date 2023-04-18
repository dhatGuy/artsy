"use client";

import { useCallback, useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

import { cn } from "~/lib/utils";

function Upcoming() {
  const sliderRef = useRef<SwiperRef | null>(null);
  const [index, setIndex] = useState(0);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="h-auto md:h-[90vh]">
      <div
        className={cn(
          "flex h-full flex-col bg-gradient-to-r from-[#4693ED] via-[#79C2D2] to-[#C056097D] p-10 md:px-20"
        )}
      >
        <div className="mb-6 hidden w-fit flex-col gap-3 md:flex">
          <h1 className="text-[40px] text-white">
            See Upcoming Auctions and Exhibitions
          </h1>
          <svg
            width="668"
            height="6"
            viewBox="0 0 668 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="self-center"
          >
            <path
              d="M667.283 3.28284C667.439 3.12663 667.439 2.87337 667.283 2.71716L664.737 0.171573C664.581 0.0153632 664.328 0.0153632 664.172 0.171573C664.015 0.327783 664.015 0.581048 664.172 0.737258L666.434 3L664.172 5.26274C664.015 5.41895 664.015 5.67222 664.172 5.82843C664.328 5.98464 664.581 5.98464 664.737 5.82843L667.283 3.28284ZM0 3.4H667V2.6H0V3.4Z"
              fill="white"
            />
          </svg>
        </div>

        <Swiper
          slidesPerView={1}
          onRealIndexChange={(swiper) => setIndex(swiper.realIndex)}
          centeredSlides={true}
          autoplay={false}
          loop={true}
          ref={sliderRef}
          className="h-full w-full"
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <SwiperSlide
              key={i}
              className={cn(
                "flex h-full flex-col flex-wrap items-start justify-between md:flex-row",
                "px-2 py-8 text-white md:px-6",
                { "bg-auctionBg1": i === 0 },
                { "bg-auctionBg2": i === 1 },
                { "bg-auctionBg3": i === 2 }
              )}
            >
              <div className="mt-auto grid w-full max-w-sm grid-cols-[minmax(30px,_40px),1fr] gap-x-4">
                <div className="h-4 w-4 rounded-full bg-[#F5F5F5]" />
                <div>
                  <h2 className="max-w-[300px] font-serif text-xl text-white">
                    MONALISA REDEFINED IN STYLE.
                  </h2>
                </div>
                <h2 className="font-serif text-[40px] text-[#E1E1E1]">
                  0{i + 1}
                </h2>
                <span className="self-center text-xs uppercase text-white">
                  Start on : 08:00 GTS . Monday{" "}
                </span>

                <div className="col-start-2 col-end-3 space-y-5">
                  <p className="text-[10px] font-medium">
                    GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
                    INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR
                    HIGHEST AND LOWEST BIDS.
                  </p>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-end gap-10 self-end">
                <a href="#" className="text-sm underline">
                  See more
                </a>

                <button className="rounded-lg border border-white p-2 text-sm">
                  Set a reminder
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="hidden items-center justify-between md:flex">
          {/* progress bar */}
          <div
            className={cn(
              "relative h-[10px] w-[300px] rounded-full bg-[#AEAEAE]",
              "after:absolute after:left-0 after:top-0 after:h-[10px] after:rounded-full after:bg-white",
              "after:transition-[width] after:duration-500 after:ease-in-out",
              {
                "after:w-1/3": index === 0,
                "after:w-2/3": index === 1,
                "after:w-full": index === 2,
              }
            )}
          />

          {/* navigation buttons */}
          <div className="mt-5 flex items-center justify-center gap-4">
            <button
              onClick={handlePrev}
              className={cn(
                "flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#FFFFFF33] outline-none",
                "shadow-[8px_8px_11.6px_0px_#00000026]",
                "backdrop-blur-[8px]"
              )}
            >
              <svg
                width="7"
                height="11"
                viewBox="0 0 7 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.94469 5.85521L6.79102 2.00888L5.69229 0.910156L0.747236 5.85521L5.69229 10.8003L6.79102 9.70153L2.94469 5.85521Z"
                  fill="white"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className={cn(
                "flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#FFFFFF33]",
                "shadow-[8px_8px_11px_0px_#00000026]",
                "backdrop-blur-[8px]"
              )}
            >
              <svg
                width="7"
                height="11"
                viewBox="0 0 7 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.91505 5.85521L0.0687256 2.00888L1.16745 0.910156L6.11251 5.85521L1.16745 10.8003L0.0687256 9.70153L3.91505 5.85521Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upcoming;
