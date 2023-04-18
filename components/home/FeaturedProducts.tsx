import Image from "next/image";
import { cn } from "~/lib/utils";
import { CircledArrow } from "../ui";

const imgs = [
  { path: "/images/woman-in-black.jpg", title: "Boolean Egyptian" },
  { path: "/images/egypt.jpg", title: "Are we there yet?" },
  { path: "/images/pharaoh-statue.jpg", title: "Oloibiri 1997" },
];

function FeaturedProducts() {
  return (
    <div className="container mx-auto my-32">
      <div className="space-y-6 px-2 text-gray">
        <h2 className="text-[28px] font-bold">Featured Products</h2>

        <div className="flex flex-col gap-10">
          {imgs.map(({ path, title }, i) => (
            <div key={i}>
              <hr className="mb-10 hidden h-[0.5px] border-0 bg-[#333] md:block" />
              <div className={cn("flex flex-col gap-10", "md:flex-row")}>
                <div
                  className={cn("group grid h-[256px] md:w-1/2", {
                    "md:order-2": i === 1,
                  })}
                >
                  <div className="col-span-full row-span-full overflow-hidden">
                    <Image
                      alt="image"
                      src={path}
                      width={400}
                      height={260}
                      className="h-full w-full object-cover transition-all duration-300 ease-out group-hover:md:scale-110"
                    />
                  </div>

                  <div className="col-span-full row-span-full bg-black opacity-60 duration-700 md:opacity-0 md:transition-opacity group-hover:md:opacity-60" />
                  <div className="relative z-10 col-span-full row-span-full">
                    <div className="md:hidden">
                      <h2
                        className={cn(
                          "absolute mx-auto font-clash-display text-3xl font-semibold text-white md:static",
                          {
                            "right-16 top-14": i === 0,
                            "top-16": i === 1 || i === 2,
                            "right-8": i === 1,
                            "left-0 right-0 w-fit mx-auto": i === 2,
                          }
                        )}
                      >
                        {title}
                      </h2>

                      <CircledArrow className="absolute bottom-10 right-12 ml-auto border-white" />
                    </div>

                    <div className="hidden h-full items-center justify-center  gap-4 group-hover:md:flex">
                      <a
                        href="#"
                        className="flex items-center text-[40px] text-white"
                      >
                        View Product
                      </a>
                      <CircledArrow className="border-white" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-4 md:w-1/2 md:gap-2">
                  <h2
                    className={cn(
                      "hidden font-stix-two text-[40px] font-bold md:block"
                    )}
                  >
                    The Boolean Egyptian
                  </h2>
                  <p className="max-w-[343px] text-[15px] text-[#616161] md:max-w-[540px] md:text-2xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus magna
                    fringilla urna, porttitor rhoncus dolor pur
                  </p>

                  <div className="">
                    <div className="flex items-center gap-4">
                      <div className="flex -space-x-3">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <div className="flex" key={i}>
                            <div className="h-[42px] w-[42px] rounded-full border border-[#78A3AD]">
                              <Image
                                alt="image"
                                src={`https://i.pravatar.cc/${Math.floor(
                                  Math.random() * 400
                                )}`}
                                width={40}
                                height={40}
                                className="h-full w-full rounded-full object-cover"
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      <h2 className="font-medium">64 major creators</h2>

                      <CircledArrow
                        fill="#616161"
                        className="ml-8 hidden self-end rounded-full border border-gray md:flex"
                      />
                    </div>
                    <div
                      className={cn(
                        "my-5 border-[0.5px] border-black md:hidden",
                        {
                          "max-w-[320px]": i !== 2,
                          "max-w-[120px]": i === 2,
                        }
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;
