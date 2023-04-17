import Image from "next/image";
import { cn } from "~/lib/utils";

const imgs = [
  { path: "/images/woman-in-black.jpg", title: "Boolean Egyptian" },
  { path: "/images/egypt.jpg", title: "Are we there yet?" },
  { path: "/images/pharaoh-statue.jpg", title: "Oloibiri 1997" },
];

const CircledArrow = () => (
  <svg
    width="40"
    height="27"
    viewBox="0 0 40 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 13.3736C0 12.9869 0.1505 12.616 0.418392 12.3426C0.686284 12.0692 1.04962 11.9155 1.42848 11.9155H35.1206L26.1298 2.74132C25.8615 2.46753 25.7108 2.0962 25.7108 1.709C25.7108 1.32181 25.8615 0.950472 26.1298 0.676684C26.398 0.402897 26.7618 0.249084 27.1411 0.249084C27.5205 0.249084 27.8843 0.402897 28.1525 0.676684L39.5803 12.3413C39.7134 12.4767 39.8189 12.6376 39.8909 12.8148C39.9629 12.9919 40 13.1818 40 13.3736C40 13.5654 39.9629 13.7553 39.8909 13.9325C39.8189 14.1096 39.7134 14.2705 39.5803 14.4059L28.1525 26.0706C27.8843 26.3443 27.5205 26.4982 27.1411 26.4982C26.7618 26.4982 26.398 26.3443 26.1298 26.0706C25.8615 25.7968 25.7108 25.4254 25.7108 25.0382C25.7108 24.651 25.8615 24.2797 26.1298 24.0059L35.1206 14.8317H1.42848C1.04962 14.8317 0.686284 14.6781 0.418392 14.4046C0.1505 14.1312 0 13.7603 0 13.3736Z"
      fill="white"
    />
  </svg>
);

function FeaturedProducts() {
  return (
    <div className="container mx-auto my-32">
      <div className="space-y-10 px-2 text-gray">
        <h2 className="text-[28px] font-bold">Featured Products</h2>

        <div className="flex flex-col gap-10">
          {imgs.map(({ path, title }, i) => (
            <div key={i}>
              <hr className="my-14 hidden h-[0.5px] border-0 bg-[#333] md:block" />
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

                      <div className="absolute bottom-10 right-12 ml-auto flex h-20 w-20 items-center justify-center rounded-full border border-white">
                        <CircledArrow />
                      </div>
                    </div>

                    <div className="hidden h-full items-center justify-center group-hover:md:flex">
                      <a
                        href="#"
                        className="flex items-center gap-4 text-[40px] text-white"
                      >
                        View Product
                        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white">
                          <CircledArrow />
                        </div>
                      </a>
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

                      <div className="ml-8 hidden h-20 w-20 items-center justify-center self-end rounded-full border border-gray md:flex">
                        <svg
                          width="40"
                          height="27"
                          viewBox="0 0 40 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 13.3736C0 12.9869 0.1505 12.616 0.418392 12.3426C0.686284 12.0692 1.04962 11.9155 1.42848 11.9155H35.1206L26.1298 2.74132C25.8615 2.46753 25.7108 2.0962 25.7108 1.709C25.7108 1.32181 25.8615 0.950472 26.1298 0.676684C26.398 0.402897 26.7618 0.249084 27.1411 0.249084C27.5205 0.249084 27.8843 0.402897 28.1525 0.676684L39.5803 12.3413C39.7134 12.4767 39.8189 12.6376 39.8909 12.8148C39.9629 12.9919 40 13.1818 40 13.3736C40 13.5654 39.9629 13.7553 39.8909 13.9325C39.8189 14.1096 39.7134 14.2705 39.5803 14.4059L28.1525 26.0706C27.8843 26.3443 27.5205 26.4982 27.1411 26.4982C26.7618 26.4982 26.398 26.3443 26.1298 26.0706C25.8615 25.7968 25.7108 25.4254 25.7108 25.0382C25.7108 24.651 25.8615 24.2797 26.1298 24.0059L35.1206 14.8317H1.42848C1.04962 14.8317 0.686284 14.6781 0.418392 14.4046C0.1505 14.1312 0 13.7603 0 13.3736Z"
                            fill="#616161"
                          />
                        </svg>
                      </div>
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
