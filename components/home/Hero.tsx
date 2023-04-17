"use client";

import Image from "next/image";
import { cn } from "~/lib/utils";
import Carousel from "../ui/Carousel";

function Hero() {
  return (
    <div className="overflow-hidden px-4">
      <div className="flex flex-col items-center space-y-10">
        <h2
          className={cn(
            "max-w-[362px] sm:max-w-full",
            "text-center font-clash-display font-medium md:font-semibold",
            "text-[1.9rem] leading-[48px] text-gray md:text-[80px] md:leading-[125.36px] "
          )}
        >
          Photography is poetry <span className="hidden md:inline">&</span>
          <span className="md:hidden">and</span> beautiful untold stories
        </h2>

        <p className="max-w-xl text-center font-medium">
          Flip through more than 10,000 vintage shots, old photographs, historic
          images and captures seamlessly in one place. Register to get top
          access.
        </p>
      </div>

      <Carousel />

      {/* mobile stacked images */}
      <div
        className={cn(
          "relative mx-auto my-14 grid w-fit place-content-center px-5 md:hidden"
        )}
      >
        <div className="absolute right-0 top-0 h-9 w-9 rounded-full bg-[#006CA2] blur-xl" />
        <div className="absolute bottom-0 left-0 h-9 w-9 rounded-full bg-[#C05609] blur-md" />
        <div className="absolute bottom-0 right-0 h-9 w-9 rounded-full bg-[#F44336] blur-lg" />
        <Image
          src="/images/stack-img3.jpg"
          alt="stack image 3"
          width={400}
          height={300}
          className=" col-span-full row-span-full h-[300px] rotate-[7.75deg] object-cover"
        />
        <Image
          src="/images/stack-img2.jpg"
          alt="stack image 2"
          width={400}
          height={300}
          className=" col-span-full row-span-full h-[300px] rotate-[-9.31deg] object-cover"
        />
        <Image
          src="/images/stack-img1.jpg"
          alt="stack image 1"
          width={400}
          height={300}
          className="col-span-full row-span-full h-[300px] rotate-0 object-cover"
        />
      </div>
      {/* mobile stacked images end */}
    </div>
  );
}

export default Hero;
