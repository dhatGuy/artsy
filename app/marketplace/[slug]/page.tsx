"use client";

import "swiper/swiper-bundle.min.css";

import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useMemo, useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { itemsData } from "~/DATA/items";
import { Breadcrumb } from "~/components/ui";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { cn } from "~/lib/utils";
import { Item, addToCart } from "~/state";

function Page({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const sliderRef = useRef<SwiperRef | null>(null);
  const mobileSliderRef = useRef<SwiperRef | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [index, setIndex] = useState(0);

  const handlePrev = useCallback(() => {
    mobileSliderRef.current?.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    mobileSliderRef.current?.swiper.slideNext();
  }, []);

  const item: Item = itemsData.find((item) => item.slug === params.slug)!;

  const breadcrumbItems = ["Home", "Marketplace", "Editorials", item.name];

  const randomPrice = useMemo(() => {
    return Math.random().toFixed(2);
  }, []);

  return (
    <main className="sm:px-20">
      <Breadcrumb
        className="mx-2 mb-5 border-b border-b-black px-2 sm:mx-0 sm:mb-10 sm:border-none sm:px-8"
        items={breadcrumbItems}
      />

      <div className="flex grid-cols-2 flex-col gap-7 px-8 sm:grid sm:gap-0">
        <div className="flex flex-col gap-4 sm:border sm:border-black sm:p-3 sm:py-6">
          <Image
            src={item.image}
            className="mx-auto h-[385px] object-cover sm:h-auto sm:min-h-full"
            alt={item.name}
            width={500}
            height={500}
          />

          <div className="flex justify-between font-medium sm:hidden">
            <span className="uppercase">{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:border sm:border-l-0 sm:border-black">
          <div className="hidden flex-wrap items-center justify-between border border-b-black p-4 sm:flex">
            <span className="text-3xl font-bold">{item.name}</span>
            <div className="flex items-center font-medium text-gray">
              <svg
                width="53"
                height="62"
                viewBox="0 0 53 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42.7025 29.9475L27.5825 10.8396C27.4539 10.6765 27.2896 10.5445 27.102 10.4538C26.9145 10.3631 26.7086 10.3159 26.5 10.3159C26.2914 10.3159 26.0855 10.3631 25.8979 10.4538C25.7104 10.5445 25.5461 10.6765 25.4175 10.8396L10.2975 29.9475C10.105 30.1842 10 30.4792 10 30.7835C10 31.0877 10.105 31.3827 10.2975 31.6194L25.4175 50.7273C25.5461 50.8904 25.7104 51.0224 25.8979 51.1131C26.0855 51.2038 26.2914 51.251 26.5 51.251C26.7086 51.251 26.9145 51.2038 27.102 51.1131C27.2896 51.0224 27.4539 50.8904 27.5825 50.7273L42.7025 31.6194C42.895 31.3827 43 31.0877 43 30.7835C43 30.4792 42.895 30.1842 42.7025 29.9475ZM27.8746 35.4922V15.6166L39.4552 30.2546L27.8746 35.4922ZM25.1254 35.4922L13.5448 30.2546L25.1254 15.6166V35.4922ZM25.1254 38.4949V45.9503L15.9503 34.3491L25.1254 38.4949Z"
                  fill="#333333"
                />
              </svg>
              <span className="font-stix-two text-3xl font-medium">
                {randomPrice}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:p-4">
            <div className="font-medium">
              Creator: <span className="text-[#006CA2]">Ali Dawa</span>
            </div>

            <span className="font-medium text-gray">Made in Italy</span>

            <span className="font-medium text-gray">Total Views: 1.7k</span>

            <div className="flex items-center gap-1">
              <Button
                type="button"
                variant="ghost"
                onClick={() =>
                  setQuantity(() => (quantity > 1 ? quantity - 1 : 1))
                }
                className="h-10 w-10 text-2xl font-medium leading-10 text-gray-600 transition hover:opacity-75"
              >
                &minus;
              </Button>

              <Input
                type="number"
                id="Quantity"
                name="Quantity"
                min={1}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="h-10 w-10 rounded border-none text-2xl font-medium [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
              />

              <Button
                type="button"
                variant="ghost"
                onClick={() => setQuantity(() => quantity + 1)}
                className="h-10 w-10 text-2xl font-medium leading-10 text-gray-600 transition hover:opacity-75"
              >
                &#43;
              </Button>
            </div>

            <div className="flex items-center gap-6">
              <Button
                type="button"
                className="flex items-center bg-[#3341C1] px-10 py-6 text-lg font-medium"
                onClick={() => addToCart(item, quantity)}
              >
                Add to cart{" "}
                <svg
                  width="42"
                  height="34"
                  viewBox="0 0 42 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden sm:block"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 16.7403C10 16.5417 10.079 16.3512 10.2197 16.2108C10.3603 16.0703 10.5511 15.9914 10.75 15.9914H28.4395L23.719 11.2799C23.5782 11.1393 23.4991 10.9486 23.4991 10.7498C23.4991 10.5509 23.5782 10.3602 23.719 10.2196C23.8598 10.079 24.0508 10 24.25 10C24.4492 10 24.6402 10.079 24.781 10.2196L30.781 16.2101C30.8508 16.2797 30.9063 16.3623 30.9441 16.4533C30.9819 16.5442 31.0013 16.6418 31.0013 16.7403C31.0013 16.8388 30.9819 16.9363 30.9441 17.0273C30.9063 17.1182 30.8508 17.2009 30.781 17.2704L24.781 23.2609C24.6402 23.4015 24.4492 23.4805 24.25 23.4805C24.0508 23.4805 23.8598 23.4015 23.719 23.2609C23.5782 23.1203 23.4991 22.9296 23.4991 22.7308C23.4991 22.5319 23.5782 22.3412 23.719 22.2006L28.4395 17.4891H10.75C10.5511 17.4891 10.3603 17.4102 10.2197 17.2697C10.079 17.1293 10 16.9389 10 16.7403Z"
                    fill="#F5F4F4"
                  />
                </svg>
              </Button>

              <Button
                type="button"
                className="border-black py-6"
                variant="outline"
              >
                <Heart />
              </Button>
            </div>
          </div>

          <div>
            <Accordion type="single" collapsible>
              <AccordionItem
                value="item-1"
                className="border-gray px-4 py-2 sm:border-t"
              >
                <AccordionTrigger className="text-lg font-medium hover:no-underline sm:text-2xl">
                  Description
                </AccordionTrigger>
                <AccordionContent className="pt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  quam fuga necessitatibus tempore quas, laboriosam expedita
                  reprehenderit nihil amet illum.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1" className="border-gray px-4 py-2">
                <AccordionTrigger className="text-lg font-medium hover:no-underline sm:text-2xl">
                  Listings
                </AccordionTrigger>
                <AccordionContent className="pt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  quam fuga necessitatibus tempore quas, laboriosam expedita
                  reprehenderit nihil amet illum.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem
                value="item-1"
                className="border-gray px-4 py-2 sm:border-none"
              >
                <AccordionTrigger className="text-lg font-medium hover:no-underline sm:text-2xl">
                  Status
                </AccordionTrigger>
                <AccordionContent className="pt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  quam fuga necessitatibus tempore quas, laboriosam expedita
                  reprehenderit nihil amet illum.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      {/* mobile slider */}
      <div className="mx-4 mt-16 space-y-8 sm:hidden">
        <h2 className="text-xl font-medium">More from this collection</h2>
        <div className="relative">
          <Swiper
            ref={mobileSliderRef}
            onRealIndexChange={(swiper) => setIndex(swiper.realIndex)}
          >
            {itemsData
              .filter((data) => data.slug !== item.slug)
              .slice(2, 6)
              .map((item) => (
                <SwiperSlide key={item.id}>
                  <Link href={`/marketplace/${item.slug}`}>
                    <div className="space-y-2 border border-black px-4 py-2">
                      <Heart className="ml-auto w-fit" />
                      <Image
                        src={item.image}
                        alt={item.name}
                        className="h-[421px] w-full object-cover"
                        width={500}
                        height={500}
                      />
                      <div className="flex justify-between text-lg font-medium">
                        <span className="">{item.name}</span>

                        <div className="flex items-center gap-2">
                          <svg
                            width="21"
                            height="26"
                            viewBox="0 0 21 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20.8107 12.469L11.1888 0.332612C11.107 0.229 11.0025 0.145205 10.8831 0.0875766C10.7638 0.0299487 10.6328 0 10.5 0C10.3672 0 10.2362 0.0299487 10.1169 0.0875766C9.99753 0.145205 9.89298 0.229 9.81116 0.332612L0.189291 12.469C0.0668072 12.6194 0 12.8068 0 13C0 13.1932 0.0668072 13.3806 0.189291 13.531L9.81116 25.6674C9.89298 25.771 9.99753 25.8548 10.1169 25.9124C10.2362 25.9701 10.3672 26 10.5 26C10.6328 26 10.7638 25.9701 10.8831 25.9124C11.0025 25.8548 11.107 25.771 11.1888 25.6674L20.8107 13.531C20.9332 13.3806 21 13.1932 21 13C21 12.8068 20.9332 12.6194 20.8107 12.469ZM11.3747 15.9908V3.36672L18.7442 12.6641L11.3747 15.9908ZM9.62528 15.9908L2.25581 12.6641L9.62528 3.36672V15.9908ZM9.62528 17.8979V22.6333L3.78656 15.2647L9.62528 17.8979Z"
                              fill="#333333"
                            />
                          </svg>

                          <span>{randomPrice}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>

          <Button
            variant="ghost"
            className={cn(
              "absolute left-6 top-[50%] z-10 flex h-[60px] w-[60px]",
              "rotate-180 items-center justify-center rounded-full border border-white"
            )}
            disabled={index === 0}
            onClick={handlePrev}
          >
            <svg
              width="35"
              height="46"
              viewBox="0 0 35 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.004 21.9175L11.8324 10.3018C11.6293 10.1079 11.3595 9.99976 11.0789 9.99976C10.7983 9.99976 10.5285 10.1079 10.3254 10.3018L10.3123 10.315C10.2135 10.409 10.1348 10.5221 10.0811 10.6475C10.0273 10.773 9.99961 10.908 9.99961 11.0445C9.99961 11.181 10.0273 11.316 10.0811 11.4415C10.1348 11.5669 10.2135 11.68 10.3123 11.774L21.7741 22.7115L10.3123 33.6447C10.2135 33.7387 10.1348 33.8518 10.0811 33.9772C10.0273 34.1026 9.99961 34.2377 9.99961 34.3742C9.99961 34.5107 10.0273 34.6457 10.0811 34.7711C10.1348 34.8966 10.2135 35.0097 10.3123 35.1037L10.3254 35.1168C10.5285 35.3108 10.7983 35.4189 11.0789 35.4189C11.3595 35.4189 11.6293 35.3108 11.8324 35.1168L24.004 23.5012C24.1111 23.3991 24.1963 23.2762 24.2545 23.1401C24.3127 23.004 24.3428 22.8574 24.3428 22.7093C24.3428 22.5613 24.3127 22.4147 24.2545 22.2786C24.1963 22.1425 24.1111 22.0196 24.004 21.9175Z"
                fill="white"
              />
            </svg>
          </Button>
          <Button
            variant="ghost"
            className={cn(
              "absolute right-6 top-[50%] z-10 flex",
              "h-[60px] w-[60px] items-center justify-center rounded-full border border-white"
            )}
            disabled={index === 2}
            onClick={handleNext}
          >
            <svg
              width="35"
              height="46"
              viewBox="0 0 35 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.004 21.9175L11.8324 10.3018C11.6293 10.1079 11.3595 9.99976 11.0789 9.99976C10.7983 9.99976 10.5285 10.1079 10.3254 10.3018L10.3123 10.315C10.2135 10.409 10.1348 10.5221 10.0811 10.6475C10.0273 10.773 9.99961 10.908 9.99961 11.0445C9.99961 11.181 10.0273 11.316 10.0811 11.4415C10.1348 11.5669 10.2135 11.68 10.3123 11.774L21.7741 22.7115L10.3123 33.6447C10.2135 33.7387 10.1348 33.8518 10.0811 33.9772C10.0273 34.1026 9.99961 34.2377 9.99961 34.3742C9.99961 34.5107 10.0273 34.6457 10.0811 34.7711C10.1348 34.8966 10.2135 35.0097 10.3123 35.1037L10.3254 35.1168C10.5285 35.3108 10.7983 35.4189 11.0789 35.4189C11.3595 35.4189 11.6293 35.3108 11.8324 35.1168L24.004 23.5012C24.1111 23.3991 24.1963 23.2762 24.2545 23.1401C24.3127 23.004 24.3428 22.8574 24.3428 22.7093C24.3428 22.5613 24.3127 22.4147 24.2545 22.2786C24.1963 22.1425 24.1111 22.0196 24.004 21.9175Z"
                fill="white"
              />
            </svg>
          </Button>
        </div>
      </div>

      {/* large screen slide */}
      <div className="mt-20 hidden flex-col gap-20 sm:flex">
        <div className="flex items-center justify-between rounded-xl p-4 shadow-lg">
          <span className="text-2xl font-medium">
            More from this collection
          </span>

          <div className="flex items-center gap-7">
            <Button
              variant="ghost"
              className={cn(
                "flex h-[50px] w-[50px] rotate-180 items-center justify-center rounded-full border border-gray"
              )}
              onClick={() => sliderRef.current?.swiper.slidePrev()}
            >
              <svg
                width="35"
                height="46"
                viewBox="0 0 35 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.004 21.9175L11.8324 10.3018C11.6293 10.1079 11.3595 9.99976 11.0789 9.99976C10.7983 9.99976 10.5285 10.1079 10.3254 10.3018L10.3123 10.315C10.2135 10.409 10.1348 10.5221 10.0811 10.6475C10.0273 10.773 9.99961 10.908 9.99961 11.0445C9.99961 11.181 10.0273 11.316 10.0811 11.4415C10.1348 11.5669 10.2135 11.68 10.3123 11.774L21.7741 22.7115L10.3123 33.6447C10.2135 33.7387 10.1348 33.8518 10.0811 33.9772C10.0273 34.1026 9.99961 34.2377 9.99961 34.3742C9.99961 34.5107 10.0273 34.6457 10.0811 34.7711C10.1348 34.8966 10.2135 35.0097 10.3123 35.1037L10.3254 35.1168C10.5285 35.3108 10.7983 35.4189 11.0789 35.4189C11.3595 35.4189 11.6293 35.3108 11.8324 35.1168L24.004 23.5012C24.1111 23.3991 24.1963 23.2762 24.2545 23.1401C24.3127 23.004 24.3428 22.8574 24.3428 22.7093C24.3428 22.5613 24.3127 22.4147 24.2545 22.2786C24.1963 22.1425 24.1111 22.0196 24.004 21.9175Z"
                  fill="#616161"
                />
              </svg>
            </Button>
            <Button
              variant="ghost"
              className={cn(
                "flex h-[50px] w-[50px] items-center justify-center rounded-full border border-gray"
              )}
              onClick={() => sliderRef.current?.swiper.slideNext()}
            >
              <svg
                width="35"
                height="46"
                viewBox="0 0 35 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.004 21.9175L11.8324 10.3018C11.6293 10.1079 11.3595 9.99976 11.0789 9.99976C10.7983 9.99976 10.5285 10.1079 10.3254 10.3018L10.3123 10.315C10.2135 10.409 10.1348 10.5221 10.0811 10.6475C10.0273 10.773 9.99961 10.908 9.99961 11.0445C9.99961 11.181 10.0273 11.316 10.0811 11.4415C10.1348 11.5669 10.2135 11.68 10.3123 11.774L21.7741 22.7115L10.3123 33.6447C10.2135 33.7387 10.1348 33.8518 10.0811 33.9772C10.0273 34.1026 9.99961 34.2377 9.99961 34.3742C9.99961 34.5107 10.0273 34.6457 10.0811 34.7711C10.1348 34.8966 10.2135 35.0097 10.3123 35.1037L10.3254 35.1168C10.5285 35.3108 10.7983 35.4189 11.0789 35.4189C11.3595 35.4189 11.6293 35.3108 11.8324 35.1168L24.004 23.5012C24.1111 23.3991 24.1963 23.2762 24.2545 23.1401C24.3127 23.004 24.3428 22.8574 24.3428 22.7093C24.3428 22.5613 24.3127 22.4147 24.2545 22.2786C24.1963 22.1425 24.1111 22.0196 24.004 21.9175Z"
                  fill="#616161"
                />
              </svg>
            </Button>
          </div>
        </div>
        <div>
          <Swiper ref={sliderRef} spaceBetween={50} slidesPerView={2.5}>
            {itemsData
              .filter((data) => data.slug !== item.slug)
              .slice(2, 6)
              .map((item) => (
                <SwiperSlide key={item.id}>
                  <Link href={`/marketplace/${item.slug}`}>
                    <div className="max-w-[500px] space-y-2 border border-black px-4 py-2">
                      <Heart className="ml-auto w-fit" />
                      <Image
                        src={item.image}
                        alt={item.name}
                        className="h-[421px] w-full object-cover"
                        width={500}
                        height={500}
                      />
                      <div className="flex justify-between text-lg font-medium">
                        <span className="">{item.name}</span>

                        <div className="flex items-center gap-2">
                          <svg
                            width="21"
                            height="26"
                            viewBox="0 0 21 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20.8107 12.469L11.1888 0.332612C11.107 0.229 11.0025 0.145205 10.8831 0.0875766C10.7638 0.0299487 10.6328 0 10.5 0C10.3672 0 10.2362 0.0299487 10.1169 0.0875766C9.99753 0.145205 9.89298 0.229 9.81116 0.332612L0.189291 12.469C0.0668072 12.6194 0 12.8068 0 13C0 13.1932 0.0668072 13.3806 0.189291 13.531L9.81116 25.6674C9.89298 25.771 9.99753 25.8548 10.1169 25.9124C10.2362 25.9701 10.3672 26 10.5 26C10.6328 26 10.7638 25.9701 10.8831 25.9124C11.0025 25.8548 11.107 25.771 11.1888 25.6674L20.8107 13.531C20.9332 13.3806 21 13.1932 21 13C21 12.8068 20.9332 12.6194 20.8107 12.469ZM11.3747 15.9908V3.36672L18.7442 12.6641L11.3747 15.9908ZM9.62528 15.9908L2.25581 12.6641L9.62528 3.36672V15.9908ZM9.62528 17.8979V22.6333L3.78656 15.2647L9.62528 17.8979Z"
                              fill="#333333"
                            />
                          </svg>

                          <span>{randomPrice}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        <Button
          className="mx-auto text-2xl font-medium text-gray-500"
          variant="outline"
          size="lg"
        >
          <Link href="/marketplace">Explore all</Link>
        </Button>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return itemsData.map((item) => ({
    slug: item.slug,
  }));
}
export default Page;
