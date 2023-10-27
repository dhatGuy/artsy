"use client";

import 'swiper/css';

import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import { auctions } from "~/DATA/auctions";
import { Breadcrumb } from "~/components/ui";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

const topBids = [
  {
    id: 6,
    image: "/images/sebastian-svenson.jpg",
    name: "Out of the Box",
    creator: "Jacobs Banks",
    date: "12/12/2021",
    highestBid: "0.57 ETH",
    currentBid: "0.987 ETH",
  },
  {
    id: 5,
    image: "/images/federica.jpg",
    name: "Falling Apart",
    creator: "Dan Murray",
    date: "12/12/2021",
    highestBid: "0.34 ETH",
    currentBid: "0.99 ETH",
  },
];

function Page() {
  const sliderRef = useRef<SwiperRef | null>(null);
  const [index, setIndex] = useState(0);

  const handlePrev = useCallback(() => {
    sliderRef.current?.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    sliderRef.current?.swiper.slideNext();
  }, []);

  return (
    <div className="mb-20 space-y-8 px-2 sm:px-12 md:px-28">
      <Breadcrumb items={["Home", "Auctions"]} className="hidden sm:flex" />
      <h2 className="text-xl font-medium sm:text-3xl">
        Here&apos;s an overview of products actively on auction, explore!
      </h2>

      <div className="space-y-4">
        <Swiper
          ref={sliderRef}
          onRealIndexChange={(swiper) => setIndex(swiper.realIndex)}
          slidesPerView={1.5}
          spaceBetween={50}
          className="relative"
          onSnapGridLengthChange={(swiper) => {
            if (swiper.snapGrid.length < 4) {
              swiper.params.slidesPerView = 1.5;
              swiper.params.spaceBetween = 30;
              swiper.update();
            }
          }}
          breakpoints={{
            640: {
              slidesPerView: 2.2,
              spaceBetween: 50,
            },
          }}
        >
          {auctions.slice(0, 4).map((auction) => (
            <SwiperSlide key={auction.id} className="">
              <div className="relative h-[190px] w-full sm:min-h-[400px]">
                <Link href={`/auctions/live-bid/${auction.id}`}>
                  <Image
                    src={auction.image}
                    width={230}
                    height={190}
                    alt={auction.name}
                    className="h-full w-full rounded-lg object-cover object-center"
                  />

                  <div className="absolute inset-x-0 bottom-3">
                    <div className="mx-auto w-fit rounded-md border border-white bg-[rgba(245,244,244,0.24)] px-5 py-2 backdrop-blur-sm">
                      <span className="text-center font-stix-two text-xl text-white">
                        6hrs: 30mins: 20secs
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
          <Button
            onClick={handlePrev}
            variant="ghost"
            className="bg-[rgba(255,255,255,0.2] absolute inset-y-3 z-10 my-auto h-11 w-11 rounded-full text-white shadow-md backdrop-blur-lg"
          >
            <ChevronLeft />
          </Button>
          <Button
            onClick={handleNext}
            variant="ghost"
            className="bg-[rgba(255,255,255,0.2] absolute inset-y-3 right-0 z-10 my-auto h-11 w-11 rounded-full text-white backdrop-blur-lg"
          >
            <ChevronRight />
          </Button>
        </Swiper>

        {/* slider indicator */}
        <div className="flex justify-center gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              onClick={() => sliderRef.current?.swiper.slideTo(i, 500, false)}
              className={cn("h-2 w-2 rounded-full bg-[#B8BCB5]", {
                "bg-[#4693ED]": i === index,
              })}
            />
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-lg font-medium sm:text-3xl sm:font-bold">
          Top bids from popular creators{" "}
        </h2>
        <div className="grid grid-cols-1 gap-20 sm:grid-cols-2">
          {topBids.map((bid, i) => (
            <div key={bid.id}>
              <div className="space-y-2 rounded-lg bg-white px-4 py-2 drop-shadow-lg sm:px-0">
                <div className="ml-auto w-fit rounded-full border border-black p-1 sm:mr-5">
                  <Heart
                    fill={i === 0 ? "#F44336" : "#DDBAB7"}
                    strokeWidth={0}
                  />
                </div>
                <Image
                  src={bid.image}
                  alt={bid.name}
                  width={230}
                  height={190}
                  className="h-[185px] w-full rounded-md object-cover object-center sm:h-[280px]"
                />
                <div className="flex items-center justify-between sm:pl-5">
                  <h2 className="text-xl font-bold sm:py-6 sm:text-3xl">
                    {bid.name}
                  </h2>
                  <div className="text-xl font-bold sm:hidden">
                    {bid.currentBid}
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-5 px-4 text-lg">
                <div className="font-medium text-gray">
                  Creator:{" "}
                  <span className="font-bold text-[#006CA2]">
                    {" "}
                    {bid.creator}
                  </span>
                </div>
                <div className="font-medium text-gray">
                  Date: <span className="text-lg font-bold">{bid.date}</span>
                </div>
                <div className="hidden font-medium text-gray sm:block">
                  Highest bid:{" "}
                  <span className="text-lg font-bold">{bid.highestBid}</span>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between rounded-lg bg-[#F6F4F4] px-4 py-2">
                <div className="space-y-3 font-bold">
                  <h2 className="text-gray">Current bid</h2>
                  <div className="text-lg">{bid.currentBid}</div>
                </div>

                <Link href={`/auctions/live-bid/${bid.id}`}>
                  <Button className="bg-[#3341C1] px-10">
                    <span className="font-medium">Place bid</span>
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
