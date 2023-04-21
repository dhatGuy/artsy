import { cn } from "~/lib/utils";
import { Mail, MapPin } from "./icons";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const mainNav = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Marketplace",
    href: "/marketplace",
  },
  {
    title: "Auctions",
    href: "/auctions",
  },
  {
    title: "Drops",
    href: "/drops",
  },
];

const secondaryNav = [
  {
    title: "Blog",
    href: "#",
  },
  {
    title: "Wallets",
    href: "#",
  },
  {
    title: "Rates",
    href: "#",
  },
  {
    title: "High bids",
    href: "#",
  },
];

function Footer() {
  return (
    <section className="space-y-8 bg-white px-6 pb-6 pt-20 md:space-y-20 md:pt-28">
      <div className="space-y-5 border-black md:mx-4 md:space-y-8 md:border md:py-10 md:text-center">
        <div className="space-y-4 md:space-y-7">
          <h2 className="font-baskervville text-2xl uppercase md:text-3xl">
            newsletter
          </h2>
          <p className="text-xs uppercase md:text-[32px] md:normal-case md:leading-[43px]">
            Subscribe to get daily updates on new drops & exciting deals
          </p>
        </div>

        <div
          className={cn(
            "flex max-w-md flex-col items-start gap-6",
            "md:mx-auto md:flex-row md:items-center"
          )}
        >
          <Input
            type="email"
            placeholder="Enter your email here"
            className={cn(
              "max-w-sm rounded-[1px] border-black md:w-[450px]",
              "placeholder:text-[10px] placeholder:uppercase placeholder:text-black"
            )}
          />
          <Button className="rounded-[1px] border bg-black px-8 text-xs uppercase">
            Subscribe
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-2 m-auto hidden md:block">
          <h2 className="w-fit font-clash-display text-5xl font-semibold">
            ARTSY.
          </h2>
        </div>

        <div className="col-span-2 hidden md:block lg:col-span-1 ">
          <ul className="flex flex-col gap-5">
            {mainNav.map((item) => (
              <li key={item.title} className="text-[26px] font-light">
                {item.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 hidden md:block lg:col-span-1">
          <ul className="flex flex-col gap-5">
            {secondaryNav.map((item) => (
              <li key={item.title} className="text-[26px] font-light">
                {item.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-full flex flex-col gap-y-6 md:hidden lg:col-span-2 lg:flex">
          <div className="text-sm font-light uppercase md:hidden">Reach us</div>
          <div className="flex items-center gap-4">
            <Mail />
            <a
              href="mailto:artsystudios@gmail.com"
              className="text-xs font-light md:text-[26px]"
            >
              artsystudios@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <MapPin />
            <span className="text-xs font-light md:text-[26px]">
              Lagos, Nigeria.
            </span>
          </div>
        </div>

        <div className="col-span-full mt-12 hidden text-center md:block">
          <span className="text-xl font-medium opacity-50">
            Artsystudios &copy; {new Date().getFullYear()}. All Rights Reserved.
          </span>
        </div>
      </div>
    </section>
  );
}

export default Footer;
