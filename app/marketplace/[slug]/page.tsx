import { Heart } from "lucide-react";
import Image from "next/image";
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

function Page({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const item = itemsData.find((item) => item.slug === params.slug)!;

  const breadcrumbItems = ["Home", "Marketplace", "Editorials", item.name];

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
            <span>{item.price}</span>
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
                {/* at least 0.05 */}
                {Math.random().toFixed(2)}
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
                className="h-10 w-10 text-2xl font-medium leading-10 text-gray-600 transition hover:opacity-75"
              >
                &minus;
              </Button>

              <Input
                type="number"
                id="Quantity"
                defaultValue="1"
                className="h-10 w-10 rounded border-none text-2xl font-medium [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
              />

              <Button
                type="button"
                variant="ghost"
                className="h-10 w-10 text-2xl font-medium leading-10 text-gray-600 transition hover:opacity-75"
              >
                &#43;
              </Button>
            </div>

            <div className="flex items-center gap-6">
              <Button
                type="button"
                className="flex items-center bg-[#3341C1] px-10 py-6 text-lg font-medium"
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
                <AccordionTrigger className="text-2xl font-medium hover:no-underline">
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
                <AccordionTrigger className="text-2xl font-medium hover:no-underline">
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
                <AccordionTrigger className="text-2xl font-medium hover:no-underline">
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
    </main>
  );
}

export async function generateStaticParams() {
  return itemsData.map((item) => ({
    slug: item.slug,
  }));
}
export default Page;
