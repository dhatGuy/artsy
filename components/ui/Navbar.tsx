"use client";

import {
  AlignJustify,
  MessageSquare,
  Search,
  ShoppingCart,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "~/lib/utils";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Auctions", href: "#", current: false },
  { name: "Marketplace", href: "#", current: false },
  { name: "Drops", href: "#", current: false },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const body = document.body;

    const customBodyStyle = ["overflow-hidden", "lg:overflow-visible"];

    isOpen
      ? body.classList.add(...customBodyStyle)
      : body.classList.remove(...customBodyStyle);
  }, [isOpen]);

  return (
    <header className={cn("container mx-auto p-4")}>
      <nav className={cn("flex justify-between p-2 md:p-4")}>
        <button onClick={toggle} className="outline-none md:hidden">
          <AlignJustify />
        </button>

        <h1 className="mt-1.5 font-stix-two text-2xl font-bold">ARTSY.</h1>

        <ul className="hidden gap-10 md:flex">
          {navigation.map((item) => (
            <li
              key={item.name}
              className={cn(
                item.current && "font-medium underline",
                "block rounded-md text-2xl"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </li>
          ))}
        </ul>

        <div className={cn("flex gap-4")}>
          <Search />
          <ShoppingCart />
        </div>
      </nav>

      {/* mobile nav */}
      <nav
        className={cn(
          isOpen ? "block" : "hidden",
          "absolute inset-x-0 top-0 z-10 min-h-full bg-white lg:hidden"
        )}
      >
        <div className="relative flex h-full flex-col gap-16 px-8 pt-8">
          <div className="flex items-center justify-between">
            <h2 className="scroll-m-20 font-stix-two text-2xl font-bold uppercase">
              Artsy.
            </h2>

            <button onClick={toggle}>
              <X size={36} strokeWidth={1.5} />
            </button>
          </div>

          <ul className="flex flex-col gap-10">
            {navigation.map((item) => (
              <li
                key={item.name}
                className={cn(
                  item.current && "font-medium underline",
                  "block rounded-md text-2xl"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <button className="absolute bottom-10 right-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#3341C1]">
          <MessageSquare color="#fff" fill="white" size={34} />
        </button>
      </nav>
      {/* mobile nav end */}
    </header>
  );
}

export default Navbar;
