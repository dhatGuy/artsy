"use client";

import { ChevronDown, Search, SlidersHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { itemsData } from "~/DATA/items";
import { Breadcrumb, CircledArrow } from "~/components/ui";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Input } from "~/components/ui/input";
import { Slider } from "~/components/ui/slider";

const items = ["Home", "Marketplace", "Editorials"];
const categories = [
  "Editorials",
  "Fashion",
  "Optics",
  "Art & Museums",
  "Nature",
];

function Marketplace() {
  const [data, setData] = useState(itemsData.slice(0, 6));

  const handleLoadMore = () => {
    setData(itemsData);
  };

  return (
    <div className="grid grid-cols-1 gap-8 px-4 sm:px-8 md:grid-cols-6 md:px-16">
      <div className="my-auto hidden sm:col-span-2 sm:block lg:col-span-1">
        <div className="relative flex items-center">
          <Search className="absolute mx-4 text-[#999]" />
          <Input
            placeholder="Search"
            className="border-none bg-[#f4f2f2] pl-12 placeholder:text-lg placeholder:font-medium placeholder:text-[#999]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-6 sm:col-span-4 lg:col-span-5">
        <Breadcrumb className="sm:hidden" items={items} />

        <p className="italic text-[#BCB7B7] sm:hidden">
          Showing 1-{data.length} of {itemsData.length} results
        </p>

        <div className="flex h-[60px] items-center justify-between rounded-2xl bg-white px-4 shadow-[4px_4px_64px_0px_rgba(0,0,0,0.1)] sm:max-w-full">
          <div className="flex items-center gap-2 text-[#000] md:hidden">
            <span>Filters</span>
            <ChevronDown strokeWidth={1} />
          </div>

          <p className="hidden md:block">
            See 1-{data.length} of {itemsData.length} results
          </p>
          <div className="flex items-center gap-2">
            <span>Sort by</span>
            <ChevronDown strokeWidth={1} />
          </div>
        </div>
      </div>

      <div className="hidden sm:col-span-2 sm:block lg:col-span-1">
        <div className="sticky top-8 col-span-2">
          <div>
            <div className="flex items-center gap-4">
              <SlidersHorizontal width={35} height={40} />
              <span className="text-2xl font-medium">Filter</span>
            </div>
            <hr className="my-4 h-[6px] rounded-full bg-[#AFB091]" />
          </div>

          <Accordion type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger className="text-2xl font-medium hover:no-underline">
                By category
              </AccordionTrigger>
              <AccordionContent className="pt-5">
                <div className="space-y-3">
                  {categories.map((category, i) => (
                    <div className="flex items-center gap-3" key={category}>
                      <Checkbox
                        className="bg-[#D9D9D9]"
                        defaultChecked={i < 2}
                      />
                      <span className="text-xl">{category}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger className="text-2xl font-medium hover:no-underline">
                By price
              </AccordionTrigger>
              <AccordionContent className="pt-5">
                <div className="space-y-4 text-lg">
                  <span>$100.00 - $150.00</span>

                  <Slider defaultValue={[0, 200]} step={1} />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger className="text-2xl font-medium hover:no-underline">
                By artist
              </AccordionTrigger>
              <AccordionContent className="pt-5">
                <div className="space-y-2">
                  <div className="text-lg underline">All</div>
                  <div className="text-lg">Below $100.00</div>
                  <div className="text-lg">$100.00 - $150.00</div>
                  <div className="text-lg">$150.00 - $200.00</div>
                  <div className="text-lg">Above $200.00</div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className="flex flex-col gap-8 px-4 sm:col-span-4 lg:col-span-5">
        <div className="grid gap-x-4 gap-y-12 sm:grid-cols-2 sm:gap-y-7 md:gap-x-6 lg:grid-cols-3">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-white sm:rounded-xl sm:p-4 sm:drop-shadow-lg md:max-w-[269px]"
            >
              <Link
                href={`/marketplace/${item.slug}`}
                className="group mb-2 block h-[384px] w-auto overflow-hidden object-cover drop-shadow-lg sm:h-[280px] md:rounded-lg lg:mb-3"
              >
                <Image
                  src={item.image}
                  width={357}
                  height={384}
                  loading="lazy"
                  alt={item.name}
                  className="h-full w-full object-cover object-center "
                />
              </Link>

              <div className="flex items-center justify-between gap-6 sm:flex-col sm:items-start">
                <p className="font-medium uppercase md:text-xl md:font-normal">
                  {item.name}
                </p>
                <span className="font-medium md:text-2xl md:font-bold">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {data.length < itemsData.length && (
          <div className="flex justify-end">
            <Button variant="ghost" className="h-auto" onClick={handleLoadMore}>
              Load More{" "}
              <CircledArrow
                className="ml-4 h-[53px] w-[53px] border-black"
                fill="#616161"
              />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Marketplace;
